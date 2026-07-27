import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiOutlineZoomIn } from 'react-icons/hi';
import SectionHeader from '../../common/SectionHeader';
import Lightbox from '../../common/Lightbox';
import LocationCard from '../../common/LocationCard';
import { staggerItem } from '../../../lib/motion';
import { PRAYER_HOUSE_PLACE } from '../../../lib/mapLinks';

interface Building {
  ko: string;
  en: string;
  desc: string;
}

/** Aerial campus map with a building legend. Uses the localized map artwork. */
export default function CampusMap() {
  const { t, i18n } = useTranslation('program');
  const buildings = t('map.buildings', { returnObjects: true }) as Building[];
  const [open, setOpen] = useState<number | null>(null);

  const isKorean = i18n.language === 'ko';
  const mapSrc = t('map.image');
  const mapAlt = t('map.imageAlt');

  return (
    <section className="py-16 md:py-24 bg-brand-bg/40" id="campus-map">
      <div className="container-custom">
        <SectionHeader label={t('map.label')} title={t('map.title')} subtitle={t('map.subtitle')} />

        <div className="max-w-5xl mx-auto">
          <button
            type="button"
            onClick={() => setOpen(0)}
            aria-label={mapAlt}
            className="group block w-full rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-teal focus-visible:ring-offset-2"
          >
            <span className="relative block overflow-hidden rounded-3xl border border-gray-100 shadow-sm bg-gray-50">
              <img
                src={mapSrc}
                alt={mapAlt}
                width={2000}
                height={1500}
                loading="lazy"
                className="w-full h-auto object-contain"
              />
              <span className="absolute top-3 right-3 p-2 rounded-full bg-black/35 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <HiOutlineZoomIn className="w-5 h-5" />
              </span>
            </span>
          </button>
          <p className="mt-3 text-center text-xs text-brand-muted">{t('map.zoomHint')}</p>

          <LocationCard
            label={t('map.venue.label')}
            address={t('map.venue.address')}
            note={t('map.venue.note')}
            place={PRAYER_HOUSE_PLACE}
            className="mt-8"
          />

          {Array.isArray(buildings) && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {buildings.map((building, index) => (
                <motion.div
                  key={building.en}
                  {...staggerItem(index, 0.07)}
                  className="rounded-2xl border border-gray-100 bg-brand-bg/40 p-5"
                >
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-base font-bold text-brand-primary-blue">
                      {isKorean ? building.ko : building.en}
                    </h3>
                    <span className="text-xs text-brand-muted">{isKorean ? building.en : building.ko}</span>
                  </div>
                  <p className="text-sm text-brand-text/70 leading-relaxed">{building.desc}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Lightbox
        images={[{ src: mapSrc, alt: mapAlt, caption: t('map.title') }]}
        index={open}
        onIndexChange={setOpen}
        onClose={() => setOpen(null)}
      />
    </section>
  );
}
