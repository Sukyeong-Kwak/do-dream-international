import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiOutlineZoomIn } from 'react-icons/hi';
import SectionHeader from '../../common/SectionHeader';
import Lightbox from '../../common/Lightbox';
import { staggerItem } from '../../../lib/motion';

const TEAM_PHOTOS = [
  { src: '/team_introduce_3.PNG', alt: 'DO DREAM TWO-GETHER International team portrait' },
  { src: '/team_introduce_2.PNG', alt: 'DO DREAM TWO-GETHER International team at work' },
];

export default function TeamIntroduce() {
  const { t } = useTranslation('home');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
              <motion.button
                key={photo.src}
                type="button"
                onClick={() => setOpenIndex(index)}
                {...staggerItem(index)}
                className="group relative overflow-hidden rounded-3xl shadow-sm border border-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-teal focus-visible:ring-offset-2"
                aria-label={photo.alt}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <HiOutlineZoomIn className="w-5 h-5" />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        images={TEAM_PHOTOS}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
}
