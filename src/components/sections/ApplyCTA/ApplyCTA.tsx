import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp } from '../../../lib/motion';
import { APPLY_FORM_URL } from '../../../lib/constants';
import BackgroundBlobs from '../../common/BackgroundBlobs';

export default function ApplyCTA() {
  const { t } = useTranslation('apply');

  return (
    <section className="py-16 md:py-24 bg-brand-primary-blue relative overflow-hidden">
      <BackgroundBlobs />

      <div className="container-custom relative z-10 max-w-3xl mx-auto text-center">
        <motion.p {...fadeIn} className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4">
          {t('cta.label')}
        </motion.p>

        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-6">
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
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          href={APPLY_FORM_URL}
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
