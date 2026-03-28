import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi2';
import { fadeInUp } from '../../../lib/motion';
import SectionHeader from '../../common/SectionHeader';

export default function ApplyInfo() {
  const { t } = useTranslation('apply');
  const docs = t('info.docs_items', { returnObjects: true }) as string[];

  return (
    <section className="py-16 md:py-24 bg-brand-bg/40">
      <div className="container-custom">
        <SectionHeader label={t('info.label')} title={t('info.title')} />

        <div className="max-w-4xl mx-auto space-y-10">
          {/* Cost */}
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <div className="bg-brand-primary-teal/5 rounded-2xl p-8 text-center">
                <p className="text-4xl md:text-5xl font-bold text-brand-primary-teal tracking-tighter">
                  {t('info.cost_value')}
                </p>
                <p className="text-sm text-brand-muted mt-2 uppercase tracking-wider font-semibold">
                  {t('info.cost_label')}
                </p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-brand-text/70 text-base leading-relaxed">{t('info.cost_desc')}</p>
            </div>
          </motion.div>

          {/* Duration */}
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <div className="bg-brand-primary-blue/5 rounded-2xl p-8 flex items-center justify-center gap-4">
                {['3', '6', '12'].map((m) => (
                  <span key={m} className="bg-brand-primary-blue/10 text-brand-primary-blue px-5 py-3 rounded-full font-bold text-lg">
                    {m}
                  </span>
                ))}
                <span className="text-brand-muted text-sm font-medium">months</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-brand-primary-blue mb-2">{t('info.duration_label')}</h3>
              <p className="text-brand-text/70 text-base leading-relaxed">{t('info.duration_desc')}</p>
            </div>
          </motion.div>

          {/* Documents */}
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <div className="bg-brand-accent-pink/5 rounded-2xl p-8">
                <ul className="space-y-4">
                  {Array.isArray(docs) && docs.map((doc, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-accent-pink/15 text-brand-accent-pink flex items-center justify-center shrink-0">
                        <HiCheck className="w-4 h-4" />
                      </div>
                      <span className="text-brand-text font-medium">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-brand-primary-blue mb-2">{t('info.docs_label')}</h3>
              <p className="text-brand-text/70 text-base leading-relaxed">{t('info.docs_desc')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
