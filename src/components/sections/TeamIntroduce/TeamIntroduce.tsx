import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../common/SectionHeader';
import { staggerItem } from '../../../lib/motion';

const TEAM_PHOTOS = [
  { src: '/team_introduce_1.PNG', alt: 'DO DREAM TWO-GETHER International team portrait' },
  { src: '/team_introduce_2.PNG', alt: 'DO DREAM TWO-GETHER International team at work' },
];

export default function TeamIntroduce() {
  const { t } = useTranslation('home');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label={t('team.label')}
            title={t('team.title')}
            subtitle={t('team.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {TEAM_PHOTOS.map((photo, index) => (
              <motion.figure
                key={photo.src}
                {...staggerItem(index)}
                className="group overflow-hidden rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
