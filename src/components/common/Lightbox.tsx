import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  /** Index of the image to show, or null when closed */
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export default function Lightbox({ images, index, onIndexChange, onClose }: LightboxProps) {
  const { t } = useTranslation('common');
  const isOpen = index !== null;
  const hasMultiple = images.length > 1;

  const move = useCallback(
    (step: number) => {
      if (index === null) return;
      onIndexChange((index + step + images.length) % images.length);
    },
    [index, images.length, onIndexChange]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!hasMultiple) return;
      if (e.key === 'ArrowLeft') move(-1);
      if (e.key === 'ArrowRight') move(1);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, hasMultiple, move, onClose]);

  const current = index === null ? null : images[index];

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={current.caption ?? current.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={t('lightbox.close')}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <HiX className="w-6 h-6" />
          </button>

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  move(-1);
                }}
                aria-label={t('lightbox.prev')}
                className="absolute left-2 md:left-6 z-10 p-2.5 md:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <HiChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  move(1);
                }}
                aria-label={t('lightbox.next')}
                className="absolute right-2 md:right-6 z-10 p-2.5 md:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <HiChevronRight className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            </>
          )}

          <motion.figure
            key={current.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-4 max-w-6xl w-full"
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
            {(current.caption || hasMultiple) && (
              <figcaption className="flex items-center gap-3 text-white/80 text-sm md:text-base text-center">
                {current.caption && <span className="font-medium">{current.caption}</span>}
                {hasMultiple && (
                  <span className="text-white/50 tabular-nums">
                    {(index ?? 0) + 1} / {images.length}
                  </span>
                )}
              </figcaption>
            )}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
