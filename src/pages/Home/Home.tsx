import { useTranslation } from 'react-i18next';
import PageHero from '../../components/common/PageHero';
import CoreValues from '../../components/sections/CoreValues/CoreValues';
import ProcessFlow from '../../components/sections/ProcessFlow/ProcessFlow';
import ProgramOverview from '../../components/sections/ProgramOverview/ProgramOverview';
import ValueProposition from '../../components/sections/ValueProposition/ValueProposition';
import TestimonialCarousel from '../../components/sections/TestimonialCarousel/TestimonialCarousel';
import CallToAction from '../../components/sections/CallToAction/CallToAction';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1974"
        imageAlt="Worship Scene"
        label="Do Dream International"
        titleHtml={t('hero.title')}
        subtitle={t('hero.subtitle')}
        ctaText={t('hero.cta')}
        ctaHref="/program"
        minHeight="min-h-[92vh]"
        imageOpacity="opacity-25"
        titleClassName="text-4xl md:text-5xl lg:text-7xl max-w-4xl"
      />
      <CoreValues />
      <ProcessFlow />
      <ProgramOverview />
      <ValueProposition />
      <TestimonialCarousel />
      <CallToAction />
    </>
  );
}
