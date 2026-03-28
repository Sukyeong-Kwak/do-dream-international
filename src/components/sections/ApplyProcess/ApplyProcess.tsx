import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../lib/motion';
import { getBrandColor } from '../../../lib/colors';
import SectionHeader from '../../common/SectionHeader';

export default function ApplyProcess() {
  const { t } = useTranslation('apply');

  const steps = [
    { num: '01', title: t('steps.s1_title'), desc: t('steps.s1_desc') },
    { num: '02', title: t('steps.s2_title'), desc: t('steps.s2_desc') },
    { num: '03', title: t('steps.s3_title'), desc: t('steps.s3_desc') },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom max-w-4xl mx-auto">
        <SectionHeader label={t('steps.label')} title={t('steps.title')} />

        <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const color = getBrandColor(index);
            return (
              <div key={index} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-gray-200" />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color.icon}`}>
                    <span className="font-bold text-sm">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary-blue mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-text/60 leading-relaxed max-w-xs">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
