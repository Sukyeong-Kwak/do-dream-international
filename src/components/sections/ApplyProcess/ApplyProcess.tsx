import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4"
          >
            {t('steps.label')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-primary-blue"
          >
            {t('steps.title')}
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-gray-200" />
              )}
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  index === 0 ? 'bg-brand-primary-teal/10 text-brand-primary-teal' :
                  index === 1 ? 'bg-brand-primary-blue/10 text-brand-primary-blue' :
                  'bg-brand-accent-pink/10 text-brand-accent-pink'
                }`}>
                  <span className="font-bold text-sm">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-primary-blue mb-2">{step.title}</h3>
                <p className="text-sm text-brand-text/60 leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
