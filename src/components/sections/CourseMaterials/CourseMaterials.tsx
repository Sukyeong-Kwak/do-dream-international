import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiOutlineZoomIn } from 'react-icons/hi';
import Lightbox from '../../common/Lightbox';
import { staggerItem } from '../../../lib/motion';

interface BookItem {
  cover: string;
  korean: string;
  title: string;
  lectures: string;
  desc: string;
}

/**
 * Course textbooks (The Gospel of the Cross, Vol. 1 & 2).
 * Covers render at their intrinsic ratio with object-contain so they are never cropped.
 */
export default function CourseMaterials() {
  const { t } = useTranslation('program');
  const books = t('materials.books', { returnObjects: true }) as BookItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!Array.isArray(books) || books.length === 0) return null;

  const images = books.map((book) => ({
    src: book.cover,
    alt: `${book.title} (${book.korean})`,
    caption: `${book.title} · ${book.korean}`,
  }));

  return (
    <div className="mb-8 rounded-2xl border border-gray-100 bg-brand-bg/40 p-5 md:p-7">
      <h4 className="text-base font-bold text-brand-primary-blue mb-1">{t('materials.title')}</h4>
      <p className="text-sm text-brand-text/70 leading-relaxed mb-6">{t('materials.subtitle')}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        {books.map((book, index) => (
          <motion.div
            key={book.title}
            {...staggerItem(index, 0.08)}
            className="flex gap-4 rounded-xl bg-white border border-gray-100 p-4"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={images[index].caption}
              className="group relative shrink-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-teal focus-visible:ring-offset-2"
            >
              <img
                src={book.cover}
                alt={images[index].alt}
                width={207}
                height={290}
                loading="lazy"
                className="w-[104px] md:w-[118px] h-auto object-contain rounded-md shadow-sm ring-1 ring-gray-200 transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/35 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <HiOutlineZoomIn className="w-3.5 h-3.5" />
              </span>
            </button>

            <div className="min-w-0">
              <p className="text-sm font-bold text-brand-primary-blue leading-snug">{book.title}</p>
              <p className="mt-0.5 text-xs text-brand-muted">{book.korean}</p>
              <span className="mt-2 inline-flex items-center px-2 py-0.5 rounded-full bg-brand-primary-teal/10 text-brand-primary-teal text-[11px] font-bold">
                {book.lectures}
              </span>
              <p className="mt-2.5 text-xs md:text-sm text-brand-text/70 leading-relaxed">{book.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mt-4 text-xs text-brand-muted text-center">{t('materials.zoomHint')}</p>

      <Lightbox images={images} index={openIndex} onIndexChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </div>
  );
}
