import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineGlobeAlt } from 'react-icons/hi';
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const { t } = useTranslation('contact');

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

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('message.name')}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-teal focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder={t('message.name')}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('message.email')}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-teal focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder={t('message.email')}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('message.subject')}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-teal focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder={t('message.subject')}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('message.message')}</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-teal focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder={t('message.message')}
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full bg-brand-primary-blue hover:opacity-90 rounded-xl py-4 shadow-md mt-4 transition-all hover:-translate-y-1">
                {t('message.button')}
              </Button>
            </form>
          </Card>

        </div>
      </div>
    </div>
  );
}
