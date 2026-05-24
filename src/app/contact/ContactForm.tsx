'use client';

import { useState, useCallback } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    // Placeholder — connect to Resend/EmailJS when ready
    await new Promise((res) => setTimeout(res, 1500));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  }, []);

  if (status === 'success') {
    return (
      <div
        className="contact-form"
        style={{ textAlign: 'center', padding: '4rem 2rem' }}
        role="alert"
        aria-live="assertive"
      >
        <div
          style={{
            width: '4rem',
            height: '4rem',
            borderRadius: '50%',
            background: 'hsl(142 72% 50% / 0.1)',
            border: '1px solid hsl(142 72% 50% / 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            fontSize: '1.75rem',
          }}
          aria-hidden="true"
        >
          ✓
        </div>
        <h3 className="heading-sm" style={{ color: 'var(--color-success)', marginBottom: '0.5rem' }}>
          Message sent!
        </h3>
        <p className="body-md" style={{ marginBottom: '1.5rem' }}>
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <button
          className="btn btn-soft btn-md"
          onClick={() => setStatus('idle')}
          type="button"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 14rem), 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
        <div className="form-field">
          <label htmlFor="contact-name" className="form-label">Full name</label>
          <input id="contact-name" name="name" type="text" className="input" placeholder="John Doe" value={form.name} onChange={handleChange} required autoComplete="name" />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email" className="form-label">Email address</label>
          <input id="contact-email" name="email" type="email" className="input" placeholder="john@example.com" value={form.email} onChange={handleChange} required autoComplete="email" />
        </div>
      </div>

      <div className="form-field" style={{ marginBottom: '1.25rem' }}>
        <label htmlFor="contact-subject" className="form-label">Subject</label>
        <input id="contact-subject" name="subject" type="text" className="input" placeholder="Project inquiry, freelance, full-time..." value={form.subject} onChange={handleChange} required />
      </div>

      <div className="form-field" style={{ marginBottom: '1.75rem' }}>
        <label htmlFor="contact-message" className="form-label">Message</label>
        <textarea id="contact-message" name="message" className="input textarea" placeholder="Tell me about your project, role, or just say hi..." value={form.message} onChange={handleChange} required rows={5} />
      </div>

      <button type="submit" className="btn btn-filled btn-lg" disabled={status === 'submitting'} style={{ width: '100%' }}>
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
              <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" opacity="0.75" />
            </svg>
            Sending…
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
