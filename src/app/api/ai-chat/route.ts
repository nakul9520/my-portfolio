import { getGeminiModel } from '@/lib/gemini';
import { AI_SYSTEM_PROMPT } from '@/data/ai-context';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history = [] } = body;

    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid message' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const model = getGeminiModel(AI_SYSTEM_PROMPT);

    // Build chat history in Gemini format
    const chatHistory = history
      .filter((m: { role: string; content: string }) => m.content.trim())
      .map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'model',
        parts: [{ text: m.content }],
      }));

    const chat = model.startChat({
      history: chatHistory,
    });

    const streamResult = await chat.sendMessageStream(message);

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of streamResult.stream) {
            const text = chunk.text();
            if (text) {
              const data = `data: ${JSON.stringify({ text })}\n\n`;
              controller.enqueue(encoder.encode(data));
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (err) {
          const errorData = `data: ${JSON.stringify({ error: 'Stream error' })}\n\n`;
          controller.enqueue(encoder.encode(errorData));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        'X-Accel-Buffering': 'no',
      },
    });
  } catch (error) {
    console.error('[AI Chat] Error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
