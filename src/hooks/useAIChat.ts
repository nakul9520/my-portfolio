'use client';

import { useState, useCallback, useRef } from 'react';
import type { ChatMessage, ChatState } from '@/types/ai';

function generateId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

export function useAIChat() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    isOpen: false,
    error: null,
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  const openChat = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: true }));
  }, []);

  const closeChat = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }));
    // Abort any ongoing stream when closing
    abortControllerRef.current?.abort();
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || state.isLoading) return;

    const userMessage: ChatMessage = {
      id: generateId(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    const aiMessageId = generateId();
    const aiMessage: ChatMessage = {
      id: aiMessageId,
      role: 'model',
      content: '',
      timestamp: new Date(),
      streaming: true,
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage, aiMessage],
      isLoading: true,
      error: null,
    }));

    // Build conversation history for the API
    const history = state.messages.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content.trim(),
          history,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      if (!response.body) {
        throw new Error('No response body');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        // Parse SSE lines
        const lines = chunk.split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                accumulated += parsed.text;
                setState((prev) => ({
                  ...prev,
                  messages: prev.messages.map((m) =>
                    m.id === aiMessageId
                      ? { ...m, content: accumulated }
                      : m
                  ),
                }));
              }
            } catch {
              // Skip malformed JSON chunks
            }
          }
        }
      }

      // Mark streaming as complete
      setState((prev) => ({
        ...prev,
        messages: prev.messages.map((m) =>
          m.id === aiMessageId ? { ...m, streaming: false } : m
        ),
        isLoading: false,
      }));
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        // User closed the chat — not an error
        setState((prev) => ({ ...prev, isLoading: false }));
        return;
      }

      setState((prev) => ({
        ...prev,
        messages: prev.messages.map((m) =>
          m.id === aiMessageId
            ? {
                ...m,
                content: 'Sorry, I ran into an issue. Please try again.',
                streaming: false,
              }
            : m
        ),
        isLoading: false,
        error: 'Failed to get response. Please try again.',
      }));
    }
  }, [state.messages, state.isLoading]);

  const clearMessages = useCallback(() => {
    setState((prev) => ({ ...prev, messages: [], error: null }));
  }, []);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    isOpen: state.isOpen,
    error: state.error,
    openChat,
    closeChat,
    sendMessage,
    clearMessages,
  };
}
