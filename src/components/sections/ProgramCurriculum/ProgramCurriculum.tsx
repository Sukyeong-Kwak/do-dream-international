import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi2';
import { fadeIn, fadeInUp, staggerItem } from '../../../lib/motion';

interface CurriculumSubject {
  title: string;
  lectures: number;
  time_per_lecture: number;
  total_hours: number;
  description: string;
}

export default function ProgramCurriculum() {
  const { t } = useTranslation('program');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const subjects = t('curriculum.subjects', { returnObjects: true }) as CurriculumSubject[];

  return (
    <section className="py-16 md:py-24 bg-white" id="curriculum">
      <div className="container-custom">
        <div className="text-center mb-14">
          <motion.p {...fadeIn} className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4">
            {t('curriculum.label')}
          </motion.p>

          <motion.div {...fadeInUp} className="flex items-center justify-center gap-12 mb-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-primary-blue">120</div>
              <div className="text-sm text-brand-muted uppercase tracking-wider font-semibold mt-1">{t('curriculum.lecture')}</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-primary-teal">206.3</div>
              <div className="text-sm text-brand-muted uppercase tracking-wider font-semibold mt-1">{t('curriculum.hour')}</div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {Array.isArray(subjects) && subjects.map((item, index) => (
            <motion.div
              key={index}
              {...staggerItem(index, 0.08)}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? 'border-brand-primary-teal shadow-md bg-white'
                  : 'border-gray-100 bg-white hover:border-brand-primary-teal/30'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    openIndex === index ? 'bg-brand-primary-teal text-white' : 'bg-brand-bg text-brand-primary-blue'
                  }`}>
                    {index + 1}
                  </div>
                  <h3 className={`text-lg font-bold ${openIndex === index ? 'text-brand-primary-teal' : 'text-brand-primary-blue'}`}>
                    {item.title}
                  </h3>
                </div>
                <HiChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 text-brand-primary-teal' : ''
                }`} />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                      <p className="text-brand-text/80 leading-relaxed mb-5">{item.description}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-brand-muted">
                          <span className="font-semibold text-brand-primary-blue">{item.lectures}</span> {t('curriculum.lecture')}
                        </span>
                        <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-brand-muted">
                          <span className="font-semibold text-brand-primary-blue">{item.time_per_lecture}</span> min
                        </span>
                        <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-brand-muted">
                          <span className="font-semibold text-brand-primary-blue">{item.total_hours}</span> {t('curriculum.hour')}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
