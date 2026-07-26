import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiOutlineZoomIn } from 'react-icons/hi';
import SectionHeader from '../../common/SectionHeader';
import Lightbox from '../../common/Lightbox';
import { staggerItem } from '../../../lib/motion';

/**
 * Ordered so the CSS grid fills without gaps at both 2 and 4 columns:
 * a 2x2 tile leads each block, followed by the 1x1 tiles that wrap around it.
 */
const PHOTOS = [
  { id: 'hallway1', src: '/facility/hallway-1f.jpg', span: 'col-span-2 row-span-2' },
  { id: 'classroom1', src: '/facility/classroom-1.jpg', span: '' },
  { id: 'classroom2', src: '/facility/classroom-2.jpg', span: '' },
  { id: 'classroom3', src: '/facility/classroom-3.jpg', span: '' },
  { id: 'hallway2', src: '/facility/hallway-2f.jpg', span: '' },
  { id: 'dormitory1', src: '/facility/dormitory-1.jpg', span: '' },
  { id: 'dormitory3', src: '/facility/dormitory-3.jpg', span: '' },
  { id: 'dormitory2', src: '/facility/dormitory-2.jpg', span: 'col-span-2 row-span-2' },
  { id: 'shower', src: '/facility/shower-room.jpg', span: '' },
  { id: 'restroom', src: '/facility/restroom.jpg', span: '' },
  { id: 'office', src: '/facility/office.jpg', span: 'col-span-2' },
  { id: 'aerial', src: '/facility/aerial-view.jpg', span: 'col-span-2' },
];

export default function Facility() {
  const { t } = useTranslation('home');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = PHOTOS.map((photo) => ({
    src: photo.src,
    alt: t(`facility.items.${photo.id}`),
    caption: t(`facility.items.${photo.id}`),
  }));

  return (
    <section className="py-16 md:py-24 bg-brand-bg/40">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label={t('facility.label')}
            titleHtml={t('facility.title')}
            subtitle={t('facility.subtitle')}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[130px] md:auto-rows-[180px]">
            {PHOTOS.map((photo, index) => (
              <motion.button
                key={photo.id}
                type="button"
                onClick={() => setOpenIndex(index)}
                {...staggerItem(index, 0.05)}
                className={`group relative overflow-hidden rounded-2xl shadow-sm border border-gray-100 bg-gray-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-teal focus-visible:ring-offset-2 ${photo.span}`}
                aria-label={`${images[index].alt} — ${t('facility.zoomHint')}`}
              >
                <img
                  src={photo.src}
                  alt={images[index].alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute top-3 right-3 p-2 rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <HiOutlineZoomIn className="w-4 h-4 md:w-5 md:h-5" />
                </span>

                <span className="absolute inset-x-0 bottom-0 p-3 md:p-4 text-white text-xs md:text-sm font-medium drop-shadow">
                  {images[index].caption}
                </span>
              </motion.button>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-brand-muted">{t('facility.zoomHint')}</p>
        </div>
      </div>

      <Lightbox
        images={images}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
}
