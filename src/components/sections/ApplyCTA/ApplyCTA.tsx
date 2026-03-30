import { useTranslation } from 'react-i18next';
import CTASection from '../../common/CTASection';

export default function ApplyCTA() {
  const { t } = useTranslation('apply');

  return (
    <CTASection
      label={t('cta.label')}
      title={t('cta.title')}
      subtitle={t('cta.desc')}
      buttonText={t('cta.button')}
      variant="dark"
    />
  );
}
