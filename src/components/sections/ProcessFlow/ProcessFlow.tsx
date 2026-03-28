import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiGlobeAsiaAustralia, HiAcademicCap, HiRocketLaunch } from 'react-icons/hi2';
import type { IconType } from 'react-icons';
import { fadeIn, fadeInUpSlow } from '../../../lib/motion';

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
      title: t('process.s1_title'), desc: t('process.s1_desc'),
      icon: HiGlobeAsiaAustralia, textColor: 'text-brand-primary-blue',
      borderColor: 'border-brand-primary-blue', iconColor: 'text-brand-primary-blue',
    },
    {
      title: t('process.s2_title'), desc: t('process.s2_desc'),
      icon: HiAcademicCap, textColor: 'text-brand-primary-teal',
      borderColor: 'border-brand-primary-teal', iconColor: 'text-brand-primary-teal',
    },
    {
      title: t('process.s3_title'), desc: t('process.s3_desc'),
      icon: HiRocketLaunch, textColor: 'text-brand-accent-pink',
      borderColor: 'border-brand-accent-pink', iconColor: 'text-brand-accent-pink',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-brand-bg/60 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-10">
          <motion.p {...fadeIn} className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4">
            {t('process.title')}
          </motion.p>
          <motion.h2 {...fadeInUpSlow} className="text-3xl md:text-4xl font-bold text-brand-primary-blue mb-6">
            {t('process.subtitle')}
          </motion.h2>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden relative max-w-4xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary-blue via-brand-primary-teal to-brand-accent-pink" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex items-start gap-8 mb-10 last:mb-0"
              >
                <div className={`relative z-10 shrink-0 w-12 h-12 rounded-full bg-white shadow-lg border-2 ${step.borderColor} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${step.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${step.textColor} mb-2`}>{step.title}</h3>
                  <p className="text-brand-text/70 leading-relaxed text-sm">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: Horizontal 3-column layout */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-8 relative">
            <div className="absolute top-8 left-[16.67%] right-[16.67%] h-0.5 -translate-y-px bg-gradient-to-r from-brand-primary-blue via-brand-primary-teal to-brand-accent-pink" />
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative text-center flex flex-col items-center"
                >
                  <div className={`relative z-10 w-16 h-16 rounded-full bg-white shadow-lg border-2 ${step.borderColor} flex items-center justify-center mb-5`}>
                    <Icon className={`w-7 h-7 ${step.iconColor}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${step.textColor} mb-3`}>{step.title}</h3>
                  <p className="text-brand-text/70 leading-relaxed text-sm max-w-xs">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
