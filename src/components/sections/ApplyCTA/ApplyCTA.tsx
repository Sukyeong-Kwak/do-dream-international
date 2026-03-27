import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function ApplyCTA() {
  const { t } = useTranslation('apply');

  return (
    <section className="py-16 md:py-24 bg-brand-primary-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-brand-primary-teal blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-brand-accent-pink blur-3xl" />
      </div>

      <div className="container-custom relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4"
        >
          {t('cta.label')}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          {t('cta.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/70 text-lg leading-relaxed mb-10"
        >
          {t('cta.desc')}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          href="https://docs.google.com/forms/d/e/1FAIpQLScwgPF5kPO--Yw41STnVkPKYTDJuCNmGZa7r_I2r5JTQOhdBg/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-brand-primary-blue hover:bg-white/90 rounded-full px-16 py-5 font-bold tracking-wide text-base shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          {t('cta.button')}
        </motion.a>
      </div>
    </section>
  );
}
