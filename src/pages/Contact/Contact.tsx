import { useTranslation } from 'react-i18next';
import PageHero from '../../components/common/PageHero';
import ContactForm from '../../components/sections/ContactForm/ContactForm';
import ContactInfo from '../../components/sections/ContactInfo/ContactInfo';

export default function Contact() {
  const { t } = useTranslation('contact');

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1974"
        imageAlt="Contact"
        label={t('hero.label', { defaultValue: 'Contact Us' })}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        ctaText={t('hero.cta', { defaultValue: 'Send Message' })}
        ctaHref="#contact-form"
        minHeight="min-h-[60vh]"
      />
      <ContactForm />
      <ContactInfo />
    </>
  );
}
