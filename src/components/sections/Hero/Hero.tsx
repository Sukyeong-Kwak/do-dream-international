import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation('home');

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-brand-primary-blue">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1974"
          alt="Worship Scene"
          className="w-full h-full object-cover opacity-25"
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary-blue/60 via-brand-primary-blue/40 to-brand-primary-blue/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-6 mb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-primary-teal font-semibold text-sm md:text-base tracking-widest uppercase mb-6"
        >
          Do Dream International
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter max-w-4xl mx-auto mb-8"
          dangerouslySetInnerHTML={{ __html: t('hero.title') }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            to="/program"
            className="inline-block bg-white text-brand-primary-blue hover:bg-white/90 transition-all duration-300 rounded-full px-12 py-4 text-base font-bold tracking-wide shadow-xl"
          >
            {t('hero.cta')}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
