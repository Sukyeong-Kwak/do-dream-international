import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../lib/motion';
import CTASection from '../../common/CTASection';

export default function CallToAction() {
  const { t } = useTranslation('common');

  const steps = [
    { num: '01', title: t('cta.s1_title'), desc: t('cta.s1_desc') },
    { num: '02', title: t('cta.s2_title'), desc: t('cta.s2_desc') },
    { num: '03', title: t('cta.s3_title'), desc: t('cta.s3_desc') },
  ];

  const partnerItems = t('cta.partners.items', { returnObjects: true }) as { name: string; logo: string; url: string }[];

  return (
    <CTASection
      title={t('cta.title')}
      subtitle={t('cta.subtitle')}
      buttonText={t('cta.button')}
      footer={
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-brand-muted text-xs tracking-widest uppercase font-semibold mb-6 text-center">
            {t('cta.partners.subtitle')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl mx-auto">
            {Array.isArray(partnerItems) &&
              partnerItems.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center gap-2"
                >
                  <div className="h-20 md:h-24 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-20 md:max-h-24 w-auto object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-base font-semibold text-brand-text group-hover:text-brand-primary-blue transition-colors">
                    {partner.name}
                  </span>
                </a>
              ))}
          </div>
        </div>
      }
    >
      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-gray-200" />
            )}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-primary-blue/10 flex items-center justify-center mb-4">
                <span className="text-brand-primary-blue font-bold text-sm">{step.num}</span>
              </div>
              <h3 className="text-lg font-bold text-brand-primary-blue mb-2">{step.title}</h3>
              <p className="text-sm text-brand-text/60 leading-relaxed max-w-sm" dangerouslySetInnerHTML={{ __html: step.desc }} />
            </div>
          </div>
        ))}
      </motion.div>
    </CTASection>
  );
}
