import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi2';
import { fadeIn, fadeInUpSlow } from '../../../lib/motion';

export default function ValueProposition() {
  const { t } = useTranslation('home');
  const [bioExpanded, setBioExpanded] = useState(false);

  const bioItems = t('value.bio', { returnObjects: true }) as string[];
  const visibleBio = bioExpanded ? bioItems : bioItems.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-brand-bg/40" id="about">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.p {...fadeIn} className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4 text-center">
            {t('value.label')}
          </motion.p>

          <motion.div {...fadeInUpSlow} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative md:col-start-1 md:row-start-1">
                <div className="aspect-[3/4]">
                  <img src="/pastor_photo.jpg" alt="Rev. Yeojubong" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/5" />
                </div>
              </div>

              <div className="md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-2 p-8 md:p-12 lg:p-16">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary-blue mb-8 leading-tight">
                  {t('value.title')}
                </h2>
                <div className="space-y-4 text-brand-text/80 leading-relaxed">
                  <p className="text-base md:text-lg font-medium text-brand-text" dangerouslySetInnerHTML={{ __html: t('value.p1') }} />
                  <p className="text-base md:text-lg" dangerouslySetInnerHTML={{ __html: t('value.p2') }} />
                  <p className="text-base md:text-lg" dangerouslySetInnerHTML={{ __html: t('value.p3') }} />
                  <p className="text-base md:text-lg" dangerouslySetInnerHTML={{ __html: t('value.p4') }} />
                  <p className="text-base md:text-lg" dangerouslySetInnerHTML={{ __html: t('value.p5') }} />
                </div>
              </div>

              <div className="md:col-start-1 md:row-start-2 border-t border-gray-100 p-8 md:p-10 lg:p-12">
                <img src="/pastor_signature.png" alt="Signature" className="h-12 md:h-14 object-contain mb-3" />
                <p className="font-bold text-xl text-brand-primary-blue">{t('value.name')}</p>
                <p className="text-brand-muted text-sm mt-1 font-medium">{t('value.role')}</p>

                <div className="mt-6">
                  <div className="space-y-1">
                    {visibleBio.map((item, index) => (
                      <p key={index} className="text-xs text-brand-muted/70 leading-relaxed">{item}</p>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
