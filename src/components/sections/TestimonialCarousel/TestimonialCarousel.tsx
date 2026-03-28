import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { fadeIn, fadeInUp } from '../../../lib/motion';
import BackgroundBlobs from '../../common/BackgroundBlobs';

interface Testimonial {
  quote: string;
  name: string;
  region: string;
  cohort: string;
}

export default function TestimonialCarousel() {
  const { t } = useTranslation('home');
  const testimonials = t('stories.items', { returnObjects: true }) as Testimonial[];
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(testimonials) || testimonials.length === 0) return null;

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const item = testimonials[current];
  const cleanName = item.name
    .replace(/인턴선교사/g, '')
    .replace(/Intern Missionary/g, '')
    .trim();

  return (
    <section className="py-16 md:py-24 bg-brand-primary-blue relative overflow-hidden">
      <BackgroundBlobs />

      <div className="container-custom relative z-10">
        <div className="text-center mb-4">
          <motion.p {...fadeIn} className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4">
            {t('stories.title')}
          </motion.p>
          <motion.p {...fadeInUp} className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
            {t('stories.subtitle')}
          </motion.p>
        </div>

        <div className="text-center text-[8rem] md:text-[10rem] text-white/5 font-serif leading-none select-none -mb-16 md:-mb-20">
          "
        </div>

        <div className="max-w-3xl mx-auto text-center relative min-h-[220px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed md:leading-relaxed mb-10 italic">
                "{item.quote}"
              </p>
              <div className="flex flex-col items-center gap-2">
                <p className="text-white font-bold text-lg">{cleanName}</p>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-brand-primary-teal font-medium">{item.region}</span>
                  <span className="text-white/30">|</span>
                  <span className="text-white/50">{t('stories.classOf')} {item.cohort}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all"
            aria-label="Previous testimonial"
          >
            <HiChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'w-8 bg-brand-primary-teal' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all"
            aria-label="Next testimonial"
          >
            <HiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
