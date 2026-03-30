import { useTranslation } from 'react-i18next';
import CTASection from '../../common/CTASection';

export default function ProgramCTA() {
  const { t } = useTranslation('program');

  return (
    <CTASection
      label={t('cta.label')}
      title={t('cta.title')}
      subtitle={t('cta.subtitle')}
      buttonText={t('cta.button')}
      footer={
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-brand-muted text-xs tracking-widest uppercase font-semibold mb-6">
            {t('partners.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {['KWMF', 'Y Mission', 'Podonamu Church'].map((name) => (
              <span key={name} className="text-lg font-bold text-gray-400 hover:text-brand-primary-blue transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      }
    />
  );
}
