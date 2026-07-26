import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPhone, FaMapMarkerAlt, FaGlobe, FaHome } from 'react-icons/fa';
import Input from '../../components/common/Input/Input';
import Modal from '../../components/common/Modal/Modal';
import { fadeInUp } from '../../lib/motion';

export default function Inquiries() {
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
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactItems = [
    { Icon: FaPhone, label: t('info.phone'), value: t('info.phone_value') },
    { Icon: FaMapMarkerAlt, label: t('info.location'), value: t('info.location_value') },
    { Icon: FaGlobe, label: t('info.website'), value: t('info.website_value'), href: t('info.website_value') },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-10 md:py-16">
      <div className="container-custom max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Left: brand / info panel — desktop only (fills empty space on wide screens) */}
          <motion.div
            {...fadeInUp}
            className="hidden lg:flex bg-brand-primary-blue text-white p-8 md:p-12 flex-col"
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase opacity-80 mb-4">
              {t('message.label')}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              {t('inquiry.intro_title')}
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8">
              {t('inquiry.intro_subtitle')}
            </p>

            <div className="space-y-5 mb-10">
              {contactItems.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/60">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-base font-medium break-words hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm md:text-base font-medium break-words">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Prominent homepage button */}
            <div className="mt-auto">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 w-full bg-white text-brand-primary-blue py-4 rounded-xl font-bold tracking-wide shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <FaHome className="w-4 h-4" />
                {t('inquiry.home_button')}
              </Link>
            </div>
          </motion.div>

          {/* Right: inquiry form */}
          <div className="p-6 sm:p-8 md:p-12">
            {/* Mobile-only home button (left brand panel is hidden on phones) */}
            <Link
              to="/"
              className="lg:hidden flex items-center justify-center gap-2 w-full mb-6 bg-brand-primary-blue text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98] hover:bg-brand-primary-blue/90"
            >
              <FaHome className="w-4 h-4" />
              {t('inquiry.home_button')}
            </Link>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
              {t('message.title')}
            </h2>

            <motion.form ref={form} onSubmit={sendEmail} {...fadeInUp} className="space-y-6">
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 text-center text-sm">
                  <p className="font-semibold">{t('message.error')}</p>
                  <p className="text-red-600 mt-1">{t('message.error_hint')}</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input label={t('message.name')} name="user_name" placeholder={t('message.name')} />
                <Input label={t('message.email')} name="user_email" type="email" required placeholder={t('message.email')} />
              </div>

              <Input label={t('message.subject')} name="subject" placeholder={t('message.subject')} />
              <Input label={t('message.message')} name="message" multiline rows={6} required placeholder={t('message.message')} />

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 py-4 rounded-xl font-bold tracking-wide shadow-md transition-all hover:-translate-y-1 disabled:opacity-75"
              >
                {status === 'loading' ? t('message.sending') : t('message.button')}
              </button>
            </motion.form>
          </div>
        </div>
      </div>

      <Modal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} size="sm">
        <div className="text-center py-4 space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">{t('message.success_title')}</h3>
          <p className="text-gray-600">{t('message.success_body')}</p>
          <div className="pt-4 space-y-3">
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full bg-brand-primary-blue text-white py-3 rounded-xl font-bold hover:bg-brand-primary-blue/90 transition-colors"
            >
              {t('message.ok')}
            </button>
            <Link
              to="/"
              className="flex items-center justify-center gap-2 w-full border-2 border-brand-primary-blue text-brand-primary-blue py-3 rounded-xl font-bold hover:bg-brand-primary-blue/5 transition-colors"
            >
              <FaHome className="w-4 h-4" />
              {t('inquiry.home_button')}
            </Link>
          </div>
        </div>
      </Modal>
    </section>
  );
}
