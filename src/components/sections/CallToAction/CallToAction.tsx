import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../lib/motion';
import { APPLY_FORM_URL } from '../../../lib/constants';
import Button from '../../common/Button/Button';

export default function CallToAction() {
  const { t } = useTranslation('home');

  const steps = [
    { num: '01', title: t('cta.s1_title'), desc: t('cta.s1_desc') },
    { num: '02', title: t('cta.s2_title'), desc: t('cta.s2_desc') },
    { num: '03', title: t('cta.s3_title'), desc: t('cta.s3_desc') },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-bg/30 to-brand-bg/50" />

      <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          {...fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary-blue mb-6 tracking-tight"
        >
          {t('cta.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-brand-text/60 max-w-2xl mx-auto leading-relaxed mb-16"
        >
          {t('cta.subtitle')}
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-gray-200" />
              )}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand-primary-blue/10 flex items-center justify-center mb-4">
                  <span className="text-brand-primary-blue font-bold text-sm">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-primary-blue mb-2">{step.title}</h3>
                <p className="text-sm text-brand-text/60 leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 px-16 py-5 rounded-full font-bold tracking-wide text-base shadow-xl shadow-brand-primary-blue/20 transition-all duration-300 hover:-translate-y-1 border-none"
            >
              {t('cta.button')}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
