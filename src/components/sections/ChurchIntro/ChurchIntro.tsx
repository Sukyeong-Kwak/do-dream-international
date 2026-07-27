import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiOutlineMapPin } from 'react-icons/hi2';
import SectionHeader from '../../common/SectionHeader';
import LocationCard from '../../common/LocationCard';
import { fadeInUp, staggerItem } from '../../../lib/motion';
import { CHURCH_PLACE } from '../../../lib/mapLinks';

interface LocationGroup {
  title: string;
  items: string[];
}

/** Introduction to Vine Baptist Church: campuses, purpose, and vision. */
export default function ChurchIntro() {
  const { t } = useTranslation('church');
  const locations = t('intro.locations', { returnObjects: true }) as LocationGroup[];
  const vision = t('intro.vision', { returnObjects: true }) as string[];

  return (
    <section className="py-16 md:py-24 bg-white" id="church-intro">
      <div className="container-custom">
        <SectionHeader label={t('intro.label')} titleHtml={t('intro.title')} />

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 items-start mb-14">
            <motion.figure {...fadeInUp} className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
              <img
                src="/church/vine-church.jpg"
                alt={t('intro.imageAlt')}
                width={2000}
                height={1125}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <figcaption className="px-5 py-3 text-xs text-brand-muted bg-brand-bg/40">
                {t('intro.affiliation')}
              </figcaption>
            </motion.figure>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {Array.isArray(locations) && locations.map((group, index) => (
                <motion.div
                  key={group.title}
                  {...staggerItem(index, 0.08)}
                  className="rounded-2xl border border-gray-100 bg-brand-bg/40 p-5"
                >
                  <h3 className="text-sm font-bold text-brand-primary-blue mb-2.5">{group.title}</h3>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-brand-text/75">
                        <HiOutlineMapPin className="w-4 h-4 text-brand-primary-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <LocationCard
            label={t('intro.location.label')}
            address={t('intro.location.address')}
            note={t('intro.location.note')}
            place={CHURCH_PLACE}
            className="mb-12"
          />

          <div className="space-y-4 mb-12 max-w-3xl">
            <p className="text-brand-text/80 leading-relaxed">{t('intro.p1')}</p>
            <p className="text-brand-text/80 leading-relaxed">{t('intro.p2')}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              {...staggerItem(0, 0.1)}
              className="rounded-2xl border-t-4 border-brand-primary-blue bg-white shadow-sm border border-gray-100 p-7 md:p-8"
            >
              <h3 className="text-xl font-bold text-brand-primary-blue mb-4">{t('intro.purposeTitle')}</h3>
              <p className="text-sm md:text-base text-brand-text/75 leading-relaxed">{t('intro.purpose')}</p>
            </motion.div>

            <motion.div
              {...staggerItem(1, 0.1)}
              className="rounded-2xl border-t-4 border-brand-primary-teal bg-white shadow-sm border border-gray-100 p-7 md:p-8"
            >
              <h3 className="text-xl font-bold text-brand-primary-teal mb-4">{t('intro.visionTitle')}</h3>
              <div className="space-y-3">
                {Array.isArray(vision) && vision.map((paragraph, index) => (
                  <p key={index} className="text-sm md:text-base text-brand-text/75 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
