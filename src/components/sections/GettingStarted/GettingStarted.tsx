import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiPaperAirplane, HiUserGroup, HiMapPin, HiRocketLaunch } from 'react-icons/hi2';
import SectionHeader from '../../common/SectionHeader';
import { staggerItem } from '../../../lib/motion';

interface Step {
  step: string;
  desc: string;
}

interface Card {
  title: string;
  desc: string;
}

const STEP_ICONS = [HiPaperAirplane, HiUserGroup, HiMapPin, HiRocketLaunch];

export default function GettingStarted() {
  const { t } = useTranslation('program');
  const timeline = t('gettingStarted.timeline', { returnObjects: true }) as Step[];
  const cards = t('gettingStarted.cards', { returnObjects: true }) as Card[];

  if (!Array.isArray(timeline) || !Array.isArray(cards)) return null;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <SectionHeader
          label={t('gettingStarted.label')}
          title={t('gettingStarted.title')}
          subtitle={t('gettingStarted.subtitle')}
        />

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-14 md:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-primary-teal to-brand-accent-pink" />
            {timeline.map((item, index) => {
              const Icon = STEP_ICONS[index] ?? HiMapPin;
              return (
                <motion.div
                  key={index}
                  {...staggerItem(index, 0.12)}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-brand-primary-teal flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-brand-primary-teal" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-brand-primary-blue">{item.step}</h3>
                  <p className="mt-1 text-sm text-brand-muted leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              {...staggerItem(index, 0.1)}
              className="bg-brand-bg/50 rounded-2xl border border-gray-100 p-6 md:p-7"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-brand-primary-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-brand-primary-blue">{card.title}</h3>
              </div>
              <p className="text-brand-text/80 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
