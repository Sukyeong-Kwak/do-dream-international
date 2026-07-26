import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiClock, HiBookOpen } from 'react-icons/hi2';
import SectionHeader from '../../common/SectionHeader';
import { fadeInUp, staggerItem } from '../../../lib/motion';

const FACILITY_IMAGES = [
  '/facilities/hallway-1f.jpg',
  '/facilities/hallway-2f.jpg',
  '/facilities/classroom-1.jpg',
  '/facilities/classroom-2.jpg',
  '/facilities/office.jpg',
];

const ACCOM_IMAGES = [
  '/accommodation/dormitory-1.jpg',
  '/accommodation/dormitory-2.jpg',
  '/accommodation/shower.jpg',
  '/accommodation/restroom.jpg',
];

interface AmenityCard {
  title: string;
  desc: string;
}

function PhotoTile({ src, caption, className = '' }: { src: string; caption: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm ${className}`}>
      <img
        src={src}
        alt={caption}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <span className="text-white text-sm font-semibold">{caption}</span>
      </div>
    </div>
  );
}

function BlockHeading({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div {...fadeInUp} className="max-w-2xl mb-8">
      <h3 className="text-2xl font-bold text-brand-primary-blue tracking-tight">{title}</h3>
      <p className="mt-3 text-brand-text/70 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function CampusLife() {
  const { t } = useTranslation('program');
  const facilityCaptions = t('campusLife.facilities.captions', { returnObjects: true }) as string[];
  const accomCaptions = t('campusLife.accommodation.captions', { returnObjects: true }) as string[];
  const amenityCards = t('campusLife.accommodation.cards', { returnObjects: true }) as AmenityCard[];
  const vineHours = t('campusLife.campus.vineHouse.hours', { returnObjects: true }) as string[];
  const libraryHours = t('campusLife.campus.library.hours', { returnObjects: true }) as string[];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <SectionHeader
          label={t('campusLife.label')}
          title={t('campusLife.title')}
          subtitle={t('campusLife.subtitle')}
        />

        {/* Training Facilities */}
        <div className="max-w-5xl mx-auto mb-16 md:mb-24">
          <BlockHeading
            title={t('campusLife.facilities.title')}
            desc={t('campusLife.facilities.desc')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FACILITY_IMAGES.slice(0, 4).map((src, i) => (
              <motion.div key={src} {...staggerItem(i, 0.08)} className="aspect-[16/10]">
                <PhotoTile src={src} caption={facilityCaptions?.[i] ?? ''} className="w-full h-full" />
              </motion.div>
            ))}
            <motion.div {...staggerItem(4, 0.08)} className="sm:col-span-2 aspect-[2/1]">
              <PhotoTile src={FACILITY_IMAGES[4]} caption={facilityCaptions?.[4] ?? ''} className="w-full h-full" />
            </motion.div>
          </div>
        </div>

        {/* Accommodation */}
        <div className="max-w-5xl mx-auto mb-16 md:mb-24">
          <BlockHeading
            title={t('campusLife.accommodation.title')}
            desc={t('campusLife.accommodation.desc')}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {Array.isArray(amenityCards) && amenityCards.map((card, i) => (
              <motion.div
                key={i}
                {...staggerItem(i, 0.08)}
                className="bg-brand-bg/50 rounded-2xl border border-gray-100 p-6"
              >
                <h4 className="text-base font-bold text-brand-primary-blue mb-2">{card.title}</h4>
                <p className="text-sm text-brand-text/70 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ACCOM_IMAGES.map((src, i) => (
              <motion.div key={src} {...staggerItem(i, 0.08)} className="aspect-[4/3]">
                <PhotoTile src={src} caption={accomCaptions?.[i] ?? ''} className="w-full h-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Campus Facilities */}
        <div className="max-w-5xl mx-auto">
          <BlockHeading title={t('campusLife.campus.title')} desc="" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Vine House */}
            <motion.div
              {...staggerItem(0, 0.1)}
              className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/campus/vine-house-grid.jpg"
                  alt={t('campusLife.campus.vineHouse.name')}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-xl font-bold text-brand-primary-blue">{t('campusLife.campus.vineHouse.name')}</h4>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-primary-teal/10 text-brand-primary-teal">
                    {t('campusLife.campus.vineHouse.tag')}
                  </span>
                </div>
                <p className="text-sm text-brand-text/70 leading-relaxed mb-5">{t('campusLife.campus.vineHouse.desc')}</p>
                <div className="mt-auto space-y-3">
                  <div className="flex items-start gap-2.5 text-sm">
                    <HiClock className="w-4 h-4 text-brand-primary-teal mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      {Array.isArray(vineHours) && vineHours.map((h, i) => (
                        <p key={i} className="text-brand-text/80">{h}</p>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-brand-muted italic border-t border-gray-100 pt-3">
                    {t('campusLife.campus.vineHouse.note')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Da'at Library */}
            <motion.div
              {...staggerItem(1, 0.1)}
              className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/campus/daat-library.jpg"
                  alt={t('campusLife.campus.library.name')}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-xl font-bold text-brand-primary-blue">{t('campusLife.campus.library.name')}</h4>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-primary-teal/10 text-brand-primary-teal">
                    {t('campusLife.campus.library.tag')}
                  </span>
                </div>
                <p className="text-sm text-brand-text/70 leading-relaxed mb-5">{t('campusLife.campus.library.desc')}</p>
                <div className="mt-auto space-y-3">
                  <div className="flex items-start gap-2.5 text-sm">
                    <HiClock className="w-4 h-4 text-brand-primary-teal mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      {Array.isArray(libraryHours) && libraryHours.map((h, i) => (
                        <p key={i} className="text-brand-text/80">{h}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm border-t border-gray-100 pt-3">
                    <HiBookOpen className="w-4 h-4 text-brand-primary-teal mt-0.5 flex-shrink-0" />
                    <p className="text-brand-text/80">{t('campusLife.campus.library.borrowing')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
