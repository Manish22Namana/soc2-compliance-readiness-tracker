import { useSearchParams } from 'react-router-dom';
import ChatPanel from '../components/chat/ChatPanel';

export default function ChatPage() {
  const [searchParams] = useSearchParams();
  const initialMessage = searchParams.get('q') || undefined;

  return (
    <div className="h-full flex flex-col">
      <ChatPanel initialMessage={initialMessage} />
    </div>
  );
}
