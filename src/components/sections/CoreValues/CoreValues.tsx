import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUpSlow } from '../../../lib/motion';

export default function CoreValues() {
  const { t } = useTranslation('home');

  const values = [
    { num: '01', title: t('coreValues.v1_title'), desc: t('coreValues.v1_desc') },
    { num: '02', title: t('coreValues.v2_title'), desc: t('coreValues.v2_desc') },
    { num: '03', title: t('coreValues.v3_title'), desc: t('coreValues.v3_desc') },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-bg/50 to-transparent" />

      <div className="container-custom relative z-10">
        <motion.p {...fadeIn} className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4">
          {t('coreValues.label')}
        </motion.p>

        <motion.h2
          {...fadeInUpSlow}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary-blue leading-tight mb-12 max-w-3xl"
          dangerouslySetInnerHTML={{ __html: t('coreValues.title') }}
        />

        <div className="space-y-0">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-t border-gray-200 py-10 md:py-14"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
                <span className="text-brand-primary-teal/40 font-bold text-5xl md:text-6xl leading-none shrink-0 md:w-28">
                  {value.num}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary-blue leading-snug md:flex-1 group-hover:text-brand-primary-teal transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-brand-text/70 text-base md:text-lg leading-relaxed md:flex-1 max-w-lg">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
}
