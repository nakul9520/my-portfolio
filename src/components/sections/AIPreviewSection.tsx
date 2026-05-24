'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SUGGESTED_PROMPTS } from '@/data/ai-context';

const demoMessages = [
  { role: 'user', text: "What projects has Nakul worked on?" },
  { role: 'bot', text: "Nakul has built **Round Smarter** (Healthcare SaaS with AI SOAP notes), **Texas Hub** (multi-currency e-commerce), **MMF Infotech AI** (B2B website with full SEO), and **30 Minutes Fix** (repair booking platform). Each is production-deployed! 🚀" },
];

export function AIPreviewSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (!inView) return;

    let timeout: ReturnType<typeof setTimeout>;

    const sequence = () => {
      // Show user message after 0.5s
      timeout = setTimeout(() => {
        setVisibleMessages(1);
        setShowTyping(true);
        // Show typing for 1.5s, then show bot message
        timeout = setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages(2);
        }, 1800);
      }, 600);
    };

    sequence();
    return () => clearTimeout(timeout);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="section-padding"
      id="ai-assistant"
      aria-label="AI assistant preview"
    >
      <div className="container-site">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))', gap: '3rem', alignItems: 'center' }}>
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-eyebrow" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              AI Assistant
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
              Ask me anything about{' '}
              <span className="text-gradient">Nakul</span>
            </h2>
            <p className="body-lg" style={{ marginBottom: '1.75rem' }}>
              My AI assistant knows everything about my experience, projects, and skills.
              Get instant answers — no scrolling required.
            </p>

            {/* Suggested prompts */}
            <div style={{ marginBottom: '1.75rem' }}>
              <p className="label-sm" style={{ marginBottom: '0.75rem' }}>Try asking:</p>
              <div className="suggested-prompts">
                {SUGGESTED_PROMPTS.slice(0, 4).map((prompt) => (
                  <button key={prompt} className="suggested-prompt-btn" type="button">
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
              🔒 Powered by Gemini AI · Responses are about Nakul only
            </p>
          </motion.div>

          {/* Right — chat preview */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="ai-preview-card glow-subtle">
              {/* Header */}
              <div className="ai-preview-header">
                <div className="ai-avatar" aria-hidden="true">✦</div>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    Nakul&apos;s AI
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span style={{ width: '0.4rem', height: '0.4rem', borderRadius: '50%', backgroundColor: 'var(--color-success)', display: 'inline-block' }} />
                    Online
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="ai-preview-messages" aria-live="polite">
                {visibleMessages >= 1 && (
                  <motion.div
                    className="ai-msg-user"
                    initial={{ opacity: 0, scale: 0.9, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {demoMessages[0].text}
                  </motion.div>
                )}

                {showTyping && (
                  <motion.div
                    className="ai-typing-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <span className="ai-typing-dot" aria-hidden="true" />
                    <span className="ai-typing-dot" aria-hidden="true" />
                    <span className="ai-typing-dot" aria-hidden="true" />
                  </motion.div>
                )}

                {visibleMessages >= 2 && (
                  <motion.div
                    className="ai-msg-bot"
                    initial={{ opacity: 0, scale: 0.95, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {demoMessages[1].text}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
