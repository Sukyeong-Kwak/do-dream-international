import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function ApplyHero() {
  const { t } = useTranslation('apply');

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-brand-primary-blue">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1974"
          alt="Community"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary-blue/60 via-brand-primary-blue/40 to-brand-primary-blue/90" />
      </div>

      <div className="relative z-10 container-custom text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-primary-teal font-semibold text-sm md:text-base tracking-widest uppercase mb-6"
        >
          {t('hero.label')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tighter max-w-3xl mx-auto mb-6"
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          href="https://docs.google.com/forms/d/e/1FAIpQLScwgPF5kPO--Yw41STnVkPKYTDJuCNmGZa7r_I2r5JTQOhdBg/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-brand-primary-blue hover:bg-white/90 transition-all duration-300 rounded-full px-12 py-4 text-base font-bold tracking-wide shadow-xl"
        >
          {t('hero.cta')}
        </motion.a>
      </div>
    </section>
  );
}
