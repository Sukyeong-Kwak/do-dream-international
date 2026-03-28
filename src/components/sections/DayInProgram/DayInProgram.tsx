import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { staggerItem } from '../../../lib/motion';
import { getBrandColor } from '../../../lib/colors';
import SectionHeader from '../../common/SectionHeader';

interface TimeBlock {
  time: string;
  title: string;
  desc: string;
}

export default function DayInProgram() {
  const { t } = useTranslation('program');
  const blocks = t('dayInProgram.blocks', { returnObjects: true }) as TimeBlock[];

  return (
    <section className="py-16 md:py-24 bg-brand-bg/40">
      <div className="container-custom">
        <SectionHeader
          label={t('dayInProgram.label')}
          title={t('dayInProgram.title')}
          subtitle={t('dayInProgram.weekday')}
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {Array.isArray(blocks) && blocks.map((block, index) => {
            const color = getBrandColor(index);
            return (
              <motion.div
                key={index}
                {...staggerItem(index)}
                className={`${color.bg} border ${color.border} rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8`}
              >
                <div className={`${color.text} font-bold text-sm md:text-base tracking-wider shrink-0 md:w-40`}>
                  {block.time}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-primary-blue mb-1">{block.title}</h3>
                  <p className="text-brand-text/70 text-sm leading-relaxed">{block.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-brand-muted max-w-4xl mx-auto">
          {t('dayInProgram.weekend_note')}
        </p>
      </div>
    </section>
  );
}
