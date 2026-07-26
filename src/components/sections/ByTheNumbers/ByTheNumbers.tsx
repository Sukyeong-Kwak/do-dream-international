import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeader from '../../common/SectionHeader';
import { staggerItem } from '../../../lib/motion';

interface Stat {
  value: string;
  label: string;
  note: string;
}

export default function ByTheNumbers() {
  const { t } = useTranslation('program');
  const stats = t('byNumbers.stats', { returnObjects: true }) as Stat[];

  if (!Array.isArray(stats)) return null;

  return (
    <section className="py-16 md:py-24 bg-brand-bg/40 border-y border-gray-100">
      <div className="container-custom">
        <SectionHeader
          label={t('byNumbers.label')}
          title={t('byNumbers.title')}
          subtitle={t('byNumbers.subtitle')}
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              {...staggerItem(index, 0.08)}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-primary-blue tracking-tight">
                {stat.value}
              </div>
              <div className="mt-3 text-sm md:text-base font-semibold text-brand-text">
                {stat.label}
              </div>
              <div className="mt-1 text-xs md:text-sm text-brand-muted leading-relaxed">
                {stat.note}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
