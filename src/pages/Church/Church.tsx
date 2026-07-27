import { useTranslation } from 'react-i18next';
import PageHero from '../../components/common/PageHero';
import ChurchIntro from '../../components/sections/ChurchIntro/ChurchIntro';
import ChurchMinistries from '../../components/sections/ChurchMinistries/ChurchMinistries';
import ByTheNumbers from '../../components/sections/ByTheNumbers/ByTheNumbers';
import WorshipSchedule from '../../components/sections/WorshipSchedule/WorshipSchedule';
import CallToAction from '../../components/sections/CallToAction/CallToAction';

export default function Church() {
  const { t } = useTranslation('church');

  return (
    <>
      <PageHero
        image="/church/oikos-worship.jpg"
        imageAlt={t('hero.title')}
        label={t('hero.label')}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        ctaText={t('hero.cta')}
        ctaHref="#ministries"
        imageOpacity="opacity-40"
        titleClassName="text-3xl md:text-5xl lg:text-6xl max-w-4xl"
      />
      <ChurchIntro />
      <ChurchMinistries />
      <ByTheNumbers />
      <WorshipSchedule />
      <CallToAction />
    </>
  );
}
