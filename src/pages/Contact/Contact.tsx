import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import Modal from '../../components/common/Modal/Modal';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineGlobeAlt } from 'react-icons/hi';
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const { t } = useTranslation('contact');
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 폼 리로드 방지

    if (!form.current) {
      alert('폼 데이터를 찾을 수 없습니다.');
      return;
    }

    try {
      setStatus('loading');

      // EmailJS로 전송
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
      alert(`[전송 에러] 환경변수(키)가 올바르지 않거나 네트워크 오류입니다.\n상세: ${error?.text || error?.message || JSON.stringify(error)}`);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-brand-bg/30 min-h-screen pb-24">
      {/* Hero */}
      <section className="relative bg-brand-primary-blue text-white py-24 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute bottom-[10%] right-[10%] w-96 h-96 rounded-full bg-brand-accent-pink blur-3xl mix-blend-screen"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tighter"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom -mt-10 relative z-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <Card className="p-8 shadow-xl rounded-2xl border-t-4 border-brand-primary-teal">
            <h2 className="text-2xl font-extrabold text-brand-primary-blue mb-8 tracking-tighter">
              {t('info.title')}
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand-primary-teal/10 flex items-center justify-center text-brand-primary-teal mr-4 flex-shrink-0">
                  <HiOutlinePhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t('info.phone')}</h3>
                  <p className="text-brand-text">{t('info.phone_value')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand-primary-blue/10 flex items-center justify-center text-brand-primary-blue mr-4 flex-shrink-0">
                  <HiOutlineGlobeAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t('info.website')}</h3>
                  <a href={t('info.website_value')} target="_blank" rel="noopener noreferrer" className="text-brand-primary-teal hover:underline break-all">
                    {t('info.website_value')}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand-accent-pink/10 flex items-center justify-center text-brand-accent-pink mr-4 flex-shrink-0">
                  <HiOutlineLocationMarker className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t('info.location')}</h3>
                  <p className="text-brand-text">{t('info.location_value')}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="font-bold text-gray-900 mb-6">{t('social.title')}</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full bg-brand-primary-blue/5 flex items-center justify-center text-brand-primary-blue hover:bg-brand-primary-blue hover:text-white transition-colors" aria-label="Facebook">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-brand-primary-blue/5 flex items-center justify-center text-brand-primary-blue hover:bg-brand-primary-blue hover:text-white transition-colors" aria-label="Instagram">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-brand-primary-blue/5 flex items-center justify-center text-brand-primary-blue hover:bg-brand-primary-blue hover:text-white transition-colors" aria-label="LinkedIn">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-brand-primary-blue/5 flex items-center justify-center text-brand-primary-blue hover:bg-brand-primary-blue hover:text-white transition-colors" aria-label="TikTok">
                  <FaTiktok className="w-6 h-6" />
                </a>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="p-8 shadow-md rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-extrabold text-brand-primary-blue mb-8 tracking-tighter">
              {t('message.title')}
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 font-semibold text-center text-sm shadow-sm">
                  메시지 전송 중 오류가 발생했습니다. (키 오류 확인 필요)<br />
                  <span className="text-sm font-normal text-red-600">Please make sure the EmailJS keys are configured in .env and are correct.</span>
                </motion.div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('message.email')}</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-teal focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder={t('message.email')}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('message.message')}</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-teal focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder={t('message.message')}
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status === 'loading'}
                className="w-full bg-brand-primary-blue hover:opacity-90 rounded-xl py-4 shadow-md mt-4 transition-all hover:-translate-y-1 disabled:opacity-75 disabled:hover:translate-y-0"
              >
                {status === 'loading' ? '전송 중 (Sending)...' : t('message.button')}
              </Button>
            </form>
          </Card>

        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        size="sm"
      >
        <div className="text-center py-4 space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">전송 완료</h3>
          <p className="text-gray-600">
            의견을 보내주셔서 감사합니다.<br />
            확인 후 빠른 시일 내에 답변을 드리겠습니다.
          </p>
          <div className="text-sm text-gray-500 mt-2">
            Message sent successfully! We will get back to you soon.
          </div>
          <div className="pt-4">
            <Button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full"
            >
              확인 (OK)
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
