import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import Modal from '../../components/common/Modal/Modal';
import { HiDocumentText, HiOutlineCurrencyDollar, HiOutlineCalendar } from 'react-icons/hi2';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineGlobeAlt } from 'react-icons/hi';
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Apply() {
  const { t: tApply } = useTranslation('apply');
  const { t: tContact } = useTranslation('contact');
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
      alert(`[전송 에러] ${error?.text || error?.message || JSON.stringify(error)}`);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-brand-bg/30 min-h-screen pb-24">
      {/* Hero */}
      <section className="relative bg-brand-primary-blue text-white py-24 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full bg-brand-primary-teal blur-3xl mix-blend-screen"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tighter"
          >
            {tApply('hero.title')} & {tContact('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mt-4"
          >
            {tApply('hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column: Info & Process */}
          <div className="lg:col-span-2 space-y-8">

            {/* Apply: Info Cards */}
            <Card className="p-8 border-t-4 border-brand-primary-teal shadow-xl rounded-2xl">
              <h2 className="text-2xl font-extrabold text-brand-primary-blue mb-8 border-b border-gray-100 pb-4 tracking-tighter">
                {tApply('info.title')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-primary-blue/10 flex items-center justify-center text-brand-primary-blue mr-4 flex-shrink-0">
                    <HiOutlineCurrencyDollar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{tApply('info.cost_label')}</h3>
                    <p className="text-brand-primary-teal font-semibold mt-1">{tApply('info.cost_value')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-primary-teal/10 flex items-center justify-center text-brand-primary-teal mr-4 flex-shrink-0">
                    <HiOutlineCalendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{tApply('info.duration_label')}</h3>
                    <p className="text-brand-text mt-1">{tApply('info.duration_value')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <HiDocumentText className="w-5 h-5 mr-2 text-brand-primary-teal" />
                  {tApply('info.docs_label')}
                </h3>
                <ul className="space-y-3">
                  {(tApply('info.docs_items', { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start text-brand-text">
                      <span className="w-6 h-6 rounded-full bg-brand-primary-blue text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Apply: Process */}
            <Card className="p-8 shadow-md rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-extrabold text-brand-primary-blue mb-8 tracking-tighter">
                {tApply('steps.title')}
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-primary-teal before:to-brand-primary-blue before:opacity-30">

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-primary-teal text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    1
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-1">{tApply('steps.s1_title')}</h3>
                    <p className="text-sm text-brand-text">{tApply('steps.s1_desc')}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-primary-blue text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    2
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-1">{tApply('steps.s2_title')}</h3>
                    <p className="text-sm text-brand-text">{tApply('steps.s2_desc')}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-accent-pink text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    3
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-1">{tApply('steps.s3_title')}</h3>
                    <p className="text-sm text-brand-text">{tApply('steps.s3_desc')}</p>
                  </div>
                </div>

              </div>
            </Card>

            {/* Contact: Form (Merged in from Contact) */}
            <Card className="p-8 shadow-md rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-extrabold text-brand-primary-blue mb-8 tracking-tighter">
                {tContact('message.title')}
              </h2>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 font-semibold text-center text-sm shadow-sm">
                    메시지 전송 중 오류가 발생했습니다.<br />
                    <span className="text-sm font-normal text-red-600">Please make sure the EmailJS keys are configured in .env and are correct.</span>
                  </motion.div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{tContact('message.name')}</label>
                  <input
                      type="text"
                      name="user_name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-teal focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                      placeholder={tContact('message.name')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{tContact('message.email')}</label>
                  <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-teal focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                      placeholder={tContact('message.email')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{tContact('message.subject')}</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-teal focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder={tContact('message.subject')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{tContact('message.message')}</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-teal focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder={tContact('message.message')}
                  ></textarea>
                </div>

                <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full bg-brand-primary-blue hover:opacity-90 rounded-xl py-4 shadow-md mt-4 transition-all hover:-translate-y-1 disabled:opacity-75">
                  {status === 'loading' ? '전송 중 (Sending)...' : tContact('message.button')}
                </Button>
              </form>
            </Card>

          </div>

          {/* Right Column: CTA Box & Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Apply CTA */}
              <Card className="p-8 text-center bg-brand-primary-blue text-white border-none shadow-xl rounded-2xl">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiDocumentText className="w-8 h-8 text-brand-primary-teal" />
                </div>
                <h2 className="text-2xl font-extrabold mb-4 tracking-tighter">{tApply('cta.title')}</h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  {tApply('cta.desc')}
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScwgPF5kPO--Yw41STnVkPKYTDJuCNmGZa7r_I2r5JTQOhdBg/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button size="lg" className="w-full bg-brand-primary-teal text-white hover:opacity-90 py-4 rounded-xl shadow-lg border-none transition-all duration-300 hover:-translate-y-1 font-bold tracking-wide">
                    {tApply('cta.button')}
                  </Button>
                </a>
              </Card>

              {/* Contact Info (Merged in from Contact) */}
              <Card className="p-8 shadow-md rounded-2xl border-t-4 border-brand-accent-pink">
                <h2 className="text-xl font-extrabold text-brand-primary-blue mb-6 tracking-tighter">
                  {tContact('info.title')}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-primary-teal/10 flex items-center justify-center text-brand-primary-teal mr-4 flex-shrink-0">
                      <HiOutlinePhone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{tContact('info.phone')}</h3>
                      <p className="text-brand-text text-sm">{tContact('info.phone_value')}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-primary-blue/10 flex items-center justify-center text-brand-primary-blue mr-4 flex-shrink-0">
                      <HiOutlineGlobeAlt className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{tContact('info.website')}</h3>
                      <a href={tContact('info.website_value')} target="_blank" rel="noopener noreferrer" className="text-brand-primary-teal hover:underline text-sm break-all">
                        {tContact('info.website_value')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-accent-pink/10 flex items-center justify-center text-brand-accent-pink mr-4 flex-shrink-0">
                      <HiOutlineLocationMarker className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{tContact('info.location')}</h3>
                      <p className="text-brand-text text-sm">{tContact('info.location_value')}</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 mb-4">{tContact('social.title')}</h3>
                  <div className="flex space-x-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-brand-primary-blue/5 flex items-center justify-center text-brand-primary-blue hover:bg-brand-primary-blue hover:text-white transition-colors" aria-label="Facebook">
                      <FaFacebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-brand-primary-blue/5 flex items-center justify-center text-brand-primary-blue hover:bg-brand-primary-blue hover:text-white transition-colors" aria-label="Instagram">
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-brand-primary-blue/5 flex items-center justify-center text-brand-primary-blue hover:bg-brand-primary-blue hover:text-white transition-colors" aria-label="LinkedIn">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-brand-primary-blue/5 flex items-center justify-center text-brand-primary-blue hover:bg-brand-primary-blue hover:text-white transition-colors" aria-label="TikTok">
                      <FaTiktok className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>

            </div>
          </div>

        </div>
      </div>

      {/* Success Modal */}
      <Modal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} size="sm">
        <div className="text-center py-4 space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">전송 완료</h3>
          <p className="text-gray-600">
            의견을 보내주셔서 감사합니다.<br />
            확인 후 빠른 시일 내에 답변을 드리겠습니다.
          </p>
          <p className="text-sm text-gray-500">Message sent successfully! We will get back to you soon.</p>
          <div className="pt-4">
            <Button onClick={() => setIsSuccessModalOpen(false)} className="w-full">확인 (OK)</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
