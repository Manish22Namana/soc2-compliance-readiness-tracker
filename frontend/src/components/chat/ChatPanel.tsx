import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Trash2, AlertTriangle } from 'lucide-react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/api';
import type { ChatMessage } from '../../types/soc2';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

interface StreamingMessage {
  id: string;
  role: 'assistant';
  content: string;
  createdAt?: string;
}

export default function ChatPanel({ initialMessage }: { initialMessage?: string }) {
  const [input, setInput] = useState(initialMessage || '');
  const [streaming, setStreaming] = useState(false);
  const [streamingMsg, setStreamingMsg] = useState<StreamingMessage | null>(null);
  const [chatError, setChatError] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const qc = useQueryClient();

  const { data: history = [] } = useQuery<ChatMessage[]>({
    queryKey: ['chat-history'],
    queryFn: () => api.get('/chat/history').then((r) => r.data),
  });

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => { scrollToBottom(); }, [history, streamingMsg, scrollToBottom]);

  const sendMessage = async () => {
    const msg = input.trim();
    if (!msg || streaming) return;
    setInput('');
    setChatError('');
    setStreaming(true);
    setStreamingMsg({ id: 'streaming', role: 'assistant', content: '' });

    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message: msg }),
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({ error: 'Request failed' }));
        setChatError(errJson.error || 'Chat request failed');
        setStreamingMsg(null);
        setStreaming(false);
        return;
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullContent = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n');
          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const data = line.slice(6).trim();
            if (data === '[DONE]') break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.delta) {
                fullContent += parsed.delta;
                setStreamingMsg((prev) => prev ? { ...prev, content: fullContent } : null);
              } else if (parsed.error) {
                const errMsg = parsed.error.includes('apiKey') || parsed.error.includes('authToken')
                  ? 'ANTHROPIC_API_KEY is not configured. Add it to your .env file and restart the backend.'
                  : parsed.error;
                setChatError(errMsg);
              }
            } catch { /* ignore parse errors */ }
          }
        }
      }

      setStreamingMsg(null);
      setStreaming(false);
      qc.invalidateQueries({ queryKey: ['chat-history'] });
    } catch {
      setStreamingMsg(null);
      setStreaming(false);
    }
  };

  const clearHistory = async () => {
    if (!confirm('Clear all chat history?')) return;
    await api.delete('/chat/history');
    qc.invalidateQueries({ queryKey: ['chat-history'] });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const allMessages = [...history];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
        <div>
          <h2 className="font-semibold text-gray-900">AI Consultant</h2>
          <p className="text-xs text-gray-500">SOC2 TSC 2017 expert — ask anything about compliance</p>
        </div>
        {allMessages.length > 0 && (
          <button
            onClick={clearHistory}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Clear history
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {allMessages.length === 0 && !streamingMsg && (
          <div className="text-center py-12">
            <div className="text-4xl mb-3">🛡️</div>
            <p className="text-gray-600 font-medium">Your SOC2 Advisor is ready</p>
            <p className="text-sm text-gray-400 mt-1">Ask about any control, evidence requirements, or remediation steps</p>
            <div className="mt-6 grid grid-cols-1 gap-2 max-w-sm mx-auto">
              {[
                'How do I implement CC6.1?',
                'What evidence is needed for A1.2?',
                'What is a SOC2 Type II audit?',
                'How do I get started with SOC2?',
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => setInput(q)}
                  className="text-sm text-left bg-white border border-gray-200 rounded-lg px-4 py-2 hover:border-blue-300 hover:bg-blue-50 transition-colors text-gray-600"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {allMessages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {streaming && !streamingMsg?.content && <TypingIndicator />}
        {streamingMsg?.content && <MessageBubble message={streamingMsg} />}
        <div ref={bottomRef} />
      </div>

      {/* Error banner */}
      {chatError && (
        <div className="mx-6 mb-2 flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
          <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
          <span>{chatError}</span>
        </div>
      )}

      {/* Input */}
      <div className="px-6 pb-6 pt-3 bg-white border-t border-gray-100">
        <div className="flex gap-3 items-end bg-white border border-gray-300 rounded-2xl px-4 py-3 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition-all">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about a SOC2 control... (Enter to send, Shift+Enter for new line)"
            rows={1}
            className="flex-1 resize-none text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent max-h-32"
            style={{ minHeight: '24px' }}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || streaming}
            className="h-8 w-8 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
