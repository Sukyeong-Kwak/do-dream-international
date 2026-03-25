import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiGlobeAsiaAustralia, HiAcademicCap, HiRocketLaunch } from 'react-icons/hi2';
import type { IconType } from 'react-icons';

interface Step {
  title: string;
  desc: string;
  icon: IconType;
  textColor: string;
  borderColor: string;
  iconColor: string;
}

export default function ProcessFlow() {
  const { t } = useTranslation('home');

  const steps: Step[] = [
    {
      title: t('process.s1_title'),
      desc: t('process.s1_desc'),
      icon: HiGlobeAsiaAustralia,
      textColor: 'text-brand-primary-blue',
      borderColor: 'border-brand-primary-blue',
      iconColor: 'text-brand-primary-blue',
    },
    {
      title: t('process.s2_title'),
      desc: t('process.s2_desc'),
      icon: HiAcademicCap,
      textColor: 'text-brand-primary-teal',
      borderColor: 'border-brand-primary-teal',
      iconColor: 'text-brand-primary-teal',
    },
    {
      title: t('process.s3_title'),
      desc: t('process.s3_desc'),
      icon: HiRocketLaunch,
      textColor: 'text-brand-accent-pink',
      borderColor: 'border-brand-accent-pink',
      iconColor: 'text-brand-accent-pink',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-brand-bg/60 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4"
          >
            {t('process.title')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-brand-primary-blue mb-6"
          >
            {t('process.subtitle')}
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary-blue via-brand-primary-teal to-brand-accent-pink md:-translate-x-px" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex items-start gap-8 mb-10 last:mb-0 md:items-center"
              >
                {/* Desktop: left side */}
                <div className={`hidden md:block flex-1 ${isEven ? 'text-right pr-12' : 'order-last pl-12'}`}>
                  {isEven && (
                    <>
                      <h3 className={`text-2xl font-bold ${step.textColor} mb-3`}>{step.title}</h3>
                      <p className="text-brand-text/70 leading-relaxed">{step.desc}</p>
                    </>
                  )}
                </div>

                {/* Center dot */}
                <div className={`relative z-10 shrink-0 w-12 h-12 rounded-full bg-white shadow-lg border-2 ${step.borderColor} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${step.iconColor}`} />
                </div>

                {/* Desktop: right side */}
                <div className={`hidden md:block flex-1 ${isEven ? 'order-last pl-12' : 'text-right pr-12'}`}>
                  {!isEven && (
                    <>
                      <h3 className={`text-2xl font-bold ${step.textColor} mb-3`}>{step.title}</h3>
                      <p className="text-brand-text/70 leading-relaxed">{step.desc}</p>
                    </>
                  )}
                </div>

                {/* Mobile: content right of dot */}
                <div className="md:hidden flex-1">
                  <h3 className={`text-xl font-bold ${step.textColor} mb-2`}>{step.title}</h3>
                  <p className="text-brand-text/70 leading-relaxed text-sm">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
