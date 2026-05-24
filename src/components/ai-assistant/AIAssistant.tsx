'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import type { ChatMessage } from '@/types/ai';
import { useAIChat } from '@/hooks/useAIChat';
import { SUGGESTED_PROMPTS } from '@/data/ai-context';

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" fill="currentColor" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MaximizeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeWidth="2" />
    </svg>
  );
}

function MinimizeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7" strokeWidth="2" />
    </svg>
  );
}

export function AIAssistant() {
  const {
    messages,
    isLoading,
    isOpen,
    openChat,
    closeChat,
    sendMessage,
  } = useAIChat();

  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Reset expansion when chat is closed
  useEffect(() => {
    if (!isOpen) {
      setIsExpanded(false);
    }
  }, [isOpen]);

  const handleSend = useCallback(() => {
    const val = inputValue.trim();
    if (!val || isLoading) return;
    sendMessage(val);
    setInputValue('');
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  }, [inputValue, isLoading, sendMessage]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    // Auto-resize textarea
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 96)}px`;
  };

  const handleSuggestedPrompt = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className="ai-fab focus-ring"
        onClick={isOpen ? closeChat : openChat}
        whileTap={{ scale: 0.92 }}
        aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'}
        aria-expanded={isOpen}
        aria-controls="ai-chat-panel"
      >
        <span className="ai-fab-ring" aria-hidden="true" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <CloseIcon />
            </motion.span>
          ) : (
            <motion.span
              key="sparkle"
              initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}
            >
              <SparkleIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chat-panel"
            className={`chat-panel${isExpanded ? ' chat-panel-expanded' : ''}`}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="AI assistant chat"
            layout
          >
            {/* Header */}
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="chat-avatar" aria-hidden="true">✦</div>
                <div>
                  <div className="chat-title">Nakul&apos;s AI</div>
                  <div className="chat-subtitle">Ask me anything about Nakul</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <button
                  className="chat-close-btn focus-ring"
                  onClick={() => setIsExpanded((prev) => !prev)}
                  aria-label={isExpanded ? 'Minimize chat' : 'Expand chat'}
                  type="button"
                >
                  {isExpanded ? <MinimizeIcon /> : <MaximizeIcon />}
                </button>
                <button
                  className="chat-close-btn focus-ring"
                  onClick={closeChat}
                  aria-label="Close chat"
                  type="button"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="chat-messages" data-lenis-prevent role="log" aria-live="polite" aria-label="Conversation">
              {messages.length === 0 ? (
                <div className="chat-welcome">
                  <div className="chat-welcome-icon" aria-hidden="true">✦</div>
                  <p style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                    Hi! I&apos;m Nakul&apos;s AI
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                    Ask me anything about Nakul&apos;s experience, projects, or skills.
                  </p>
                  <div className="suggested-prompts" style={{ justifyContent: 'center' }}>
                    {SUGGESTED_PROMPTS.slice(0, 3).map((prompt) => (
                      <button
                        key={prompt}
                        className="suggested-prompt-btn"
                        type="button"
                        onClick={() => handleSuggestedPrompt(prompt)}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((msg) => <ChatMessageBubble key={msg.id} message={msg} />)
              )}

              {/* Loading indicator */}
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <div className="chat-message-ai">
                  <div className="chat-avatar" style={{ width: '1.75rem', height: '1.75rem', fontSize: '0.75rem', flexShrink: 0 }} aria-hidden="true">✦</div>
                  <div className="chat-bubble-ai">
                    <div className="ai-typing-indicator" style={{ background: 'none', border: 'none', padding: 0 }}>
                      <span className="ai-typing-dot" aria-hidden="true" />
                      <span className="ai-typing-dot" aria-hidden="true" />
                      <span className="ai-typing-dot" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} aria-hidden="true" />
            </div>

            {/* Input area */}
            <div className="chat-input-area">
              <div className="chat-input-row">
                <textarea
                  ref={textareaRef}
                  className="chat-textarea"
                  placeholder="Ask about Nakul..."
                  value={inputValue}
                  onChange={handleTextareaChange}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  rows={1}
                  aria-label="Type your message"
                />
                <button
                  className="chat-send-btn focus-ring"
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  aria-label="Send message"
                >
                  <SendIcon />
                </button>
              </div>
              {messages.length === 0 && (
                <div className="suggested-prompts" style={{ marginTop: '0.625rem' }}>
                  {SUGGESTED_PROMPTS.slice(3).map((prompt) => (
                    <button
                      key={prompt}
                      className="suggested-prompt-btn"
                      type="button"
                      onClick={() => handleSuggestedPrompt(prompt)}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ChatMessageBubble({ message }: { message: ChatMessage }) {
  if (message.role === 'user') {
    return (
      <div className="chat-message-user">
        <div className="chat-bubble-user">{message.content}</div>
      </div>
    );
  }

  return (
    <div className="chat-message-ai">
      <div
        className="chat-avatar"
        style={{ width: '1.75rem', height: '1.75rem', fontSize: '0.75rem', flexShrink: 0, marginTop: '0.125rem' }}
        aria-hidden="true"
      >
        ✦
      </div>
      <div className="chat-bubble-ai">
        {message.content ? (
          <div className="prose-chat">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        ) : (
          <div className="ai-typing-indicator" style={{ background: 'none', border: 'none', padding: 0 }}>
            <span className="ai-typing-dot" aria-hidden="true" />
            <span className="ai-typing-dot" aria-hidden="true" />
            <span className="ai-typing-dot" aria-hidden="true" />
          </div>
        )}
        {message.streaming && message.content && (
          <span className="animate-blink" style={{ color: 'var(--color-accent-400)', marginLeft: '1px' }} aria-hidden="true">|</span>
        )}
      </div>
    </div>
  );
}
