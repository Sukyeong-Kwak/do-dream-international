import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeader from '../../common/SectionHeader';
import PhotoGallery from '../../common/PhotoGallery';
import { fadeInUp, staggerItem } from '../../../lib/motion';
import { getBrandColor } from '../../../lib/colors';

interface Ministry {
  title: string;
  desc: string;
}

const MINISTRY_PHOTOS = [
  '/church/ministry-1.jpg',
  '/church/ministry-2.jpg',
  '/church/ministry-3.jpg',
  '/church/ministry-4.jpg',
  '/church/ministry-5.jpg',
  '/church/ministry-6.jpg',
];

/** "The Piece" — the five connected ministries of Vine Baptist Church. */
export default function ChurchMinistries() {
  const { t } = useTranslation('church');
  const items = t('ministries.items', { returnObjects: true }) as Ministry[];

  const galleryImages = MINISTRY_PHOTOS.map((src, index) => ({
    src,
    alt: `${t('ministries.galleryTitle')} ${index + 1}`,
  }));

  return (
    <section className="py-16 md:py-24 bg-brand-bg/40" id="ministries">
      <div className="container-custom">
        <SectionHeader
          label={t('ministries.label')}
          title={t('ministries.title')}
          subtitle={t('ministries.subtitle')}
        />

        <div className="max-w-5xl mx-auto">
          <motion.figure
            {...fadeInUp}
            className="mb-10 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm p-4 md:p-6"
          >
            <img
              src="/church/the-piece.jpg"
              alt={t('ministries.pieceAlt')}
              width={1130}
              height={608}
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </motion.figure>

          <div className="grid gap-5 md:grid-cols-2 mb-14">
            {Array.isArray(items) && items.map((item, index) => {
              const color = getBrandColor(index);
              return (
                <motion.div
                  key={item.title}
                  {...staggerItem(index, 0.08)}
                  className={`rounded-2xl border ${color.border} bg-white p-6 md:p-7`}
                >
                  <h3 className={`text-lg font-bold mb-3 ${color.text}`}>{item.title}</h3>
                  <p className="text-sm text-brand-text/75 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <h3 className="text-xl font-bold text-brand-primary-blue mb-5 text-center">
            {t('ministries.galleryTitle')}
          </h3>
          <PhotoGallery images={galleryImages} columns="grid-cols-2 md:grid-cols-3" aspect="aspect-[4/3]" />
          <p className="mt-4 text-center text-xs text-brand-muted">{t('ministries.galleryHint')}</p>
        </div>
      </div>
    </section>
  );
}
