import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUpSlow } from '../../../lib/motion';
import NumberedList from '../../common/NumberedList';

interface VisionItem {
  title: string;
  desc: string;
}

export default function ProgramVision() {
  const { t } = useTranslation('program');
  const items = t('vision.items', { returnObjects: true }) as VisionItem[];

  if (!Array.isArray(items)) return null;

  return (
    <section className="py-16 md:py-24 bg-brand-bg/60">
      <div className="container-custom">
        <motion.p {...fadeIn} className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4">
          {t('vision.label')}
        </motion.p>

        <motion.h2 {...fadeInUpSlow} className="text-3xl md:text-4xl font-bold text-brand-primary-blue leading-tight mb-12 max-w-2xl">
          {t('vision.title')}
        </motion.h2>

        <NumberedList
          items={items}
          numSize="text-4xl md:text-5xl"
          titleSize="text-xl md:text-2xl"
          padding="py-8 md:py-10"
        />
      </div>
    </section>
  );
}
