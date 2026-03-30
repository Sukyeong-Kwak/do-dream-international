import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BackgroundBlobs from '../../common/BackgroundBlobs';
import SectionHeader from '../../common/SectionHeader';

interface Phase {
  num: string;
  title: string;
  timeframe: string;
  desc: string;
}

export default function TrainingJourney() {
  const { t } = useTranslation('program');
  const phases = t('journey.phases', { returnObjects: true }) as Phase[];

  if (!Array.isArray(phases)) return null;

  const phaseAnimation = (index: number, mobile: boolean) => ({
    initial: { opacity: 0, ...(mobile ? { x: -30 } : { y: 30 }) },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: index * (mobile ? 0.15 : 0.2) },
  });

  const PhaseNode = ({ phase }: { phase: Phase }) => (
    <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border-2 border-brand-primary-teal flex items-center justify-center">
      <span className="text-brand-primary-teal font-bold text-sm">{phase.num}</span>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-brand-primary-blue relative overflow-hidden">
      <BackgroundBlobs />

      <div className="container-custom relative z-10">
        <SectionHeader label={t('journey.label')} title={t('journey.title')} dark />

        {/* Mobile */}
        <div className="md:hidden max-w-4xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary-teal via-white/30 to-brand-accent-pink" />
          {phases.map((phase, index) => (
            <motion.div key={index} {...phaseAnimation(index, true)} className="relative flex items-start gap-8 mb-12 last:mb-0">
              <PhaseNode phase={phase} />
              <div className="flex-1">
                <span className="text-brand-primary-teal text-xs font-semibold tracking-wider">{phase.timeframe}</span>
                <h3 className="text-lg font-bold text-white mb-1">{phase.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{phase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-8 relative">
            <div className="absolute top-[calc(1.25rem+0.75rem+1.5rem)] left-[16.67%] right-[16.67%] h-0.5 -translate-y-1/2 bg-gradient-to-r from-brand-primary-teal via-white/30 to-brand-accent-pink" />
            {phases.map((phase, index) => (
              <motion.div key={index} {...phaseAnimation(index, false)} className="relative text-center flex flex-col items-center">
                <span className="text-brand-primary-teal text-sm font-semibold tracking-wider mb-3">{phase.timeframe}</span>
                <div className="mb-5">
                  <PhaseNode phase={phase} />
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
