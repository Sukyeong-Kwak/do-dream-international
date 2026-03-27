import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Input from '../../common/Input/Input';
import Modal from '../../common/Modal/Modal';

export default function ContactForm() {
  const { t } = useTranslation('contact');
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    try {
      setStatus('loading');
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );
      setStatus('success');
      setIsSuccessModalOpen(true);
      form.current.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4"
          >
            {t('message.label')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-primary-blue"
          >
            {t('message.title')}
          </motion.h2>
        </div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {status === 'error' && (
            <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 text-center text-sm">
              <p className="font-semibold">{t('message.error')}</p>
              <p className="text-red-600 mt-1">{t('message.error_hint')}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label={t('message.name')}
              name="user_name"
              placeholder={t('message.name')}
            />
            <Input
              label={t('message.email')}
              name="user_email"
              type="email"
              required
              placeholder={t('message.email')}
            />
          </div>

          <Input
            label={t('message.subject')}
            name="subject"
            placeholder={t('message.subject')}
          />

          <Input
            label={t('message.message')}
            name="message"
            multiline
            rows={5}
            required
            placeholder={t('message.message')}
          />

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 py-4 rounded-xl font-bold tracking-wide shadow-md transition-all hover:-translate-y-1 disabled:opacity-75"
          >
            {status === 'loading' ? t('message.sending') : t('message.button')}
          </button>
        </motion.form>
      </div>

      {/* Success Modal */}
      <Modal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} size="sm">
        <div className="text-center py-4 space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">{t('message.success_title')}</h3>
          <p className="text-gray-600">{t('message.success_body')}</p>
          <div className="pt-4">
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full bg-brand-primary-blue text-white py-3 rounded-xl font-bold hover:bg-brand-primary-blue/90 transition-colors"
            >
              {t('message.ok')}
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
