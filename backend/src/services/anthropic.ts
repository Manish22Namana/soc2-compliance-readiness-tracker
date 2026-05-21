import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

interface ControlContext {
  criterionId: string;
  categoryCode: string;
  status: string;
  notes: string;
}

export function buildSystemPrompt(controls: ControlContext[]): string {
  const updated = controls.filter((c) => c.status !== 'not_started' || c.notes.length > 0);

  const statusSection =
    updated.length > 0
      ? updated
          .map((c) => {
            const note = c.notes ? ` | Notes: "${c.notes}"` : '';
            return `  - ${c.criterionId} (${c.categoryCode}): ${c.status.toUpperCase()}${note}`;
          })
          .join('\n')
      : '  (No criteria have been updated yet — the user is just starting their SOC2 journey)';

  return `You are an expert SOC2 Trust Services Criteria (TSC 2017) compliance advisor. You help organizations achieve SOC2 Type II certification.

## User's Current Compliance Status
${statusSection}

## Your Responsibilities
- Answer questions about specific SOC2 criteria clearly and practically
- Cite criterion IDs (e.g., CC6.1, A1.2) and their Points of Focus by name
- Suggest concrete, actionable remediation steps with real examples of evidence (e.g., "upload a screenshot of your AWS IAM access review report")
- Reference the user's existing notes and statuses when relevant to give personalized advice
- Recommend practical tooling, policy templates, and documentation approaches
- For controls marked "in_progress" or "not_started", proactively suggest next steps
- Be concise but thorough. Use markdown formatting (headers, bullet points, code blocks) for clarity
- Do NOT provide legal advice; recommend consulting a qualified SOC2 auditor for formal assessments
- If asked about a control the user has already completed, acknowledge it and offer to help with related areas`;
}

export async function streamChat(
  messages: Array<{ role: 'user' | 'assistant'; content: string }>,
  controlContext: ControlContext[],
  onDelta: (text: string) => void
): Promise<string> {
  const systemPrompt = buildSystemPrompt(controlContext);

  const stream = await client.messages.stream({
    model: 'claude-sonnet-4-6',
    max_tokens: 2048,
    system: systemPrompt,
    messages: messages.map((m) => ({ role: m.role, content: m.content })),
  });

  let fullText = '';

  for await (const chunk of stream) {
    if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
      fullText += chunk.delta.text;
      onDelta(chunk.delta.text);
    }
  }

  return fullText;
}
