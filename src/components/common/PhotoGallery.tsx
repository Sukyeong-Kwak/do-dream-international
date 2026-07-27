import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineZoomIn } from 'react-icons/hi';
import Lightbox, { type LightboxImage } from './Lightbox';
import { staggerItem } from '../../lib/motion';

interface PhotoGalleryProps {
  images: LightboxImage[];
  /** Tailwind grid-cols utilities for the gallery grid */
  columns?: string;
  /** Tailwind aspect-ratio utility for each tile */
  aspect?: string;
  /** Render the caption underneath each tile */
  showCaptions?: boolean;
  className?: string;
}

/** Responsive photo grid sharing a single lightbox. */
export default function PhotoGallery({
  images,
  columns = 'grid-cols-2 md:grid-cols-3',
  aspect = 'aspect-[4/3]',
  showCaptions = false,
  className = '',
}: PhotoGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div className={`grid ${columns} gap-3 md:gap-4 ${className}`}>
        {images.map((image, index) => (
          <motion.button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setOpenIndex(index)}
            {...staggerItem(index, 0.06)}
            className="group text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-teal focus-visible:ring-offset-2"
            aria-label={image.caption ?? image.alt}
          >
            <div className={`relative ${aspect} overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm`}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/30 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <HiOutlineZoomIn className="w-4 h-4" />
              </span>
            </div>
            {showCaptions && image.caption && (
              <p className="mt-2 text-xs md:text-sm text-brand-muted font-medium">{image.caption}</p>
            )}
          </motion.button>
        ))}
      </div>

      <Lightbox images={images} index={openIndex} onIndexChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </>
  );
}
