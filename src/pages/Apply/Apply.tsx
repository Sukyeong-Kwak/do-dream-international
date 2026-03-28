import { useTranslation } from 'react-i18next';
import PageHero from '../../components/common/PageHero';
import ApplyProcess from '../../components/sections/ApplyProcess/ApplyProcess';
import ApplyInfo from '../../components/sections/ApplyInfo/ApplyInfo';
import ApplyCTA from '../../components/sections/ApplyCTA/ApplyCTA';
import ContactForm from '../../components/sections/ContactForm/ContactForm';
import ContactInfo from '../../components/sections/ContactInfo/ContactInfo';
import { APPLY_FORM_URL } from '../../lib/constants';

export default function Apply() {
  const { t } = useTranslation('apply');

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1974"
        imageAlt="Community"
        label={t('hero.label')}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        ctaText={t('hero.cta')}
        ctaHref={APPLY_FORM_URL}
        ctaExternal
        minHeight="min-h-[60vh]"
        titleClassName="text-4xl md:text-5xl lg:text-6xl max-w-3xl"
      />
      <ApplyProcess />
      <ApplyInfo />
      <ApplyCTA />
      <ContactForm />
      <ContactInfo />
    </>
  );
}
