import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi2';

export default function ValueProposition() {
  const { t } = useTranslation('home');
  const [bioExpanded, setBioExpanded] = useState(false);

  const bioItems = t('value.bio', { returnObjects: true }) as string[];
  const visibleBio = bioExpanded ? bioItems : bioItems.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-brand-bg/40" id="about">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4 text-center"
          >
            {t('value.label')}
          </motion.p>

          {/* Letter card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Photo */}
              <div className="md:w-2/5 relative">
                <div className="aspect-[3/4] md:aspect-auto md:h-full">
                  <img
                    src="/pastor_photo.jpg"
                    alt="Rev. Yeojubong"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/5" />
                </div>
              </div>

              {/* Letter content */}
              <div className="md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary-blue mb-8 leading-tight">
                  {t('value.title')}
                </h2>

                <div className="space-y-5 text-brand-text/80 leading-relaxed mb-8">
                  <p className="text-base md:text-lg first-letter:text-3xl first-letter:font-bold first-letter:text-brand-primary-blue first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                    {t('value.p1')}
                  </p>
                  <p className="text-base md:text-lg">{t('value.p2')}</p>
                  <p className="text-base md:text-lg">{t('value.p3')}</p>
                </div>

                {/* Signature area */}
                <div className="border-t border-gray-100 pt-6">
                  <img
                    src="/pastor_signature.png"
                    alt="Signature"
                    className="h-12 md:h-14 object-contain mb-3"
                  />
                  <p className="font-bold text-xl text-brand-primary-blue">{t('value.name')}</p>
                  <p className="text-brand-muted text-sm mt-1 font-medium">{t('value.role')}</p>

                  {/* Bio - collapsible */}
                  <div className="mt-6">
                    <div className="space-y-1">
                      {visibleBio.map((item, index) => (
                        <p key={index} className="text-xs text-brand-muted/70 leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>

                    {bioItems.length > 6 && (
                      <button
                        onClick={() => setBioExpanded(!bioExpanded)}
                        className="mt-3 flex items-center gap-1 text-xs text-brand-primary-teal hover:text-brand-primary-blue transition-colors font-medium"
                      >
                        {bioExpanded ? t('value.showLess') : t('value.showMore')}
                        <HiChevronDown className={`w-3 h-3 transition-transform duration-300 ${bioExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
