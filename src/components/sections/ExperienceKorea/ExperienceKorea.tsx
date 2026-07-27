import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiOutlineZoomIn } from 'react-icons/hi';
import { HiOutlineMapPin, HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import SectionHeader from '../../common/SectionHeader';
import Lightbox from '../../common/Lightbox';
import { staggerItem } from '../../../lib/motion';

interface Destination {
  no: number;
  name: string;
  sub?: string;
  duration: string;
  overnight?: boolean;
  image: string;
  desc: string;
}

/** Cultural excursions — "Experience Korea Beyond the Classroom". */
export default function ExperienceKorea() {
  const { t } = useTranslation('program');
  const items = t('korea.items', { returnObjects: true }) as Destination[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!Array.isArray(items) || items.length === 0) return null;

  const images = items.map((item) => ({
    src: item.image,
    alt: item.name,
    caption: item.sub ? `${item.name} — ${item.sub}` : item.name,
  }));

  return (
    <section className="py-16 md:py-24 bg-white" id="experience-korea">
      <div className="container-custom">
        <SectionHeader label={t('korea.label')} title={t('korea.title')} subtitle={t('korea.subtitle')} />

        {/* Summary table */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <h3 className="text-lg font-bold text-brand-primary-blue mb-4 text-center">{t('korea.tableTitle')}</h3>
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-brand-bg/70">
                  <th scope="col" className="px-4 md:px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-muted w-14">{t('korea.cols.no')}</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-muted">{t('korea.cols.destination')}</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-muted text-right whitespace-nowrap">{t('korea.cols.duration')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {items.map((item) => (
                  <tr key={item.no}>
                    <td className="px-4 md:px-6 py-3.5 text-sm font-bold text-brand-primary-teal tabular-nums align-top">{item.no}</td>
                    <td className="px-4 md:px-6 py-3.5 align-top">
                      <span className="text-sm font-semibold text-brand-primary-blue">{item.name}</span>
                      {item.sub && <p className="text-xs text-brand-muted mt-0.5">{item.sub}</p>}
                    </td>
                    <td className="px-4 md:px-6 py-3.5 text-right align-top">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold whitespace-nowrap ${
                        item.overnight
                          ? 'bg-brand-accent-pink/10 text-brand-accent-pink'
                          : 'bg-brand-primary-teal/10 text-brand-primary-teal'
                      }`}>
                        {item.overnight ? <HiOutlineMoon className="w-3 h-3" /> : <HiOutlineSun className="w-3 h-3" />}
                        {item.duration}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Destination detail cards */}
        <div className="max-w-4xl mx-auto space-y-5">
          {items.map((item, index) => (
            <motion.article
              key={item.no}
              {...staggerItem(index, 0.07)}
              className="flex flex-col sm:flex-row gap-5 rounded-2xl border border-gray-100 bg-white shadow-sm p-5 md:p-6"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={images[index].caption}
                className="group relative shrink-0 self-start rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-teal focus-visible:ring-offset-2"
              >
                {/* Source artwork is 197-293px wide; capped display width avoids any upscaling */}
                <span className="block w-full max-w-[200px] sm:w-[200px] aspect-[7/6] overflow-hidden rounded-xl bg-gray-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span className="absolute top-2 right-2 p-1.5 rounded-full bg-black/30 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <HiOutlineZoomIn className="w-4 h-4" />
                </span>
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <HiOutlineMapPin className="w-4 h-4 text-brand-primary-teal shrink-0" />
                  <h3 className="text-lg font-bold text-brand-primary-blue">{item.name}</h3>
                </div>
                {item.sub && <p className="text-sm text-brand-muted italic mb-2">{item.sub}</p>}
                <p className="text-sm md:text-base text-brand-text/75 leading-relaxed">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-brand-muted">{t('korea.aiNote')}</p>
      </div>

      <Lightbox images={images} index={openIndex} onIndexChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </section>
  );
}
