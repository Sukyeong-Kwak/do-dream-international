import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface TimeBlock {
  time: string;
  title: string;
  desc: string;
}

export default function DayInProgram() {
  const { t } = useTranslation('program');
  const blocks = t('dayInProgram.blocks', { returnObjects: true }) as TimeBlock[];

  const blockColors = [
    { bg: 'bg-brand-primary-blue/5', time: 'text-brand-primary-blue', border: 'border-brand-primary-blue/20' },
    { bg: 'bg-brand-primary-teal/5', time: 'text-brand-primary-teal', border: 'border-brand-primary-teal/20' },
    { bg: 'bg-brand-accent-pink/5', time: 'text-brand-accent-pink', border: 'border-brand-accent-pink/20' },
    { bg: 'bg-brand-primary-blue/5', time: 'text-brand-primary-blue', border: 'border-brand-primary-blue/20' },
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-bg/40">
      <div className="container-custom">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4"
          >
            {t('dayInProgram.label')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-primary-blue mb-4"
          >
            {t('dayInProgram.title')}
          </motion.h2>
          <p className="text-brand-muted">{t('dayInProgram.weekday')}</p>
        </div>

        {/* Time blocks */}
        <div className="max-w-4xl mx-auto space-y-4">
          {Array.isArray(blocks) && blocks.map((block, index) => {
            const color = blockColors[index % blockColors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${color.bg} border ${color.border} rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8`}
              >
                <div className={`${color.time} font-bold text-sm md:text-base tracking-wider shrink-0 md:w-40`}>
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

        {/* Weekend note */}
        <p className="mt-8 text-center text-sm text-brand-muted max-w-4xl mx-auto">
          {t('dayInProgram.weekend_note')}
        </p>
      </div>
    </section>
  );
}
