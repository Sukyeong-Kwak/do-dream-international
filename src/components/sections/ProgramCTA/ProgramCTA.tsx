import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp } from '../../../lib/motion';
import { APPLY_FORM_URL } from '../../../lib/constants';

export default function ProgramCTA() {
  const { t } = useTranslation('program');

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-bg/30 to-brand-bg/50" />

      <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
        <motion.p {...fadeIn} className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4">
          {t('cta.label')}
        </motion.p>

        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold text-brand-primary-blue mb-6">
          {t('cta.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-brand-text/60 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {t('cta.subtitle')}
        </motion.p>

        <motion.a
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          href={APPLY_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 px-16 py-5 rounded-full font-bold tracking-wide text-base shadow-xl shadow-brand-primary-blue/20 transition-all duration-300 hover:-translate-y-1"
        >
          {t('cta.button')}
        </motion.a>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-brand-muted text-xs tracking-widest uppercase font-semibold mb-6">
            {t('partners.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {['KWMF', 'Y Mission', 'Podonamu Church'].map((name) => (
              <span key={name} className="text-lg font-bold text-gray-400 hover:text-brand-primary-blue transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
