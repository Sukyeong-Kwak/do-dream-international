import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Phase {
  num: string;
  title: string;
  timeframe: string;
  desc: string;
}

export default function TrainingJourney() {
  const { t } = useTranslation('program');
  const phases = t('journey.phases', { returnObjects: true }) as Phase[];

  return (
    <section className="py-16 md:py-24 bg-brand-primary-blue relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-primary-teal blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-accent-pink blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4"
          >
            {t('journey.label')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            {t('journey.title')}
          </motion.h2>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden max-w-4xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary-teal via-white/30 to-brand-accent-pink" />

          {Array.isArray(phases) && phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex items-start gap-8 mb-12 last:mb-0"
            >
              <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border-2 border-brand-primary-teal flex items-center justify-center">
                <span className="text-brand-primary-teal font-bold text-sm">{phase.num}</span>
              </div>
              <div className="flex-1">
                <span className="text-brand-primary-teal text-xs font-semibold tracking-wider">{phase.timeframe}</span>
                <h3 className="text-lg font-bold text-white mb-1">{phase.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{phase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Horizontal 3-column layout */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-8 relative">
            {/* Horizontal connector line — vertically centered on the phase circles */}
            <div className="absolute top-[calc(1.25rem+0.75rem+1.5rem)] left-[16.67%] right-[16.67%] h-0.5 -translate-y-1/2 bg-gradient-to-r from-brand-primary-teal via-white/30 to-brand-accent-pink" />

            {Array.isArray(phases) && phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center flex flex-col items-center"
              >
                <span className="text-brand-primary-teal text-sm font-semibold tracking-wider mb-3">
                  {phase.timeframe}
                </span>
                <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border-2 border-brand-primary-teal flex items-center justify-center mb-5">
                  <span className="text-brand-primary-teal font-bold text-sm">{phase.num}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm max-w-xs">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
