import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUpSlow } from '../../../lib/motion';
import NumberedList from '../../common/NumberedList';

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

        <NumberedList items={values} />
      </div>
    </section>
  );
}
