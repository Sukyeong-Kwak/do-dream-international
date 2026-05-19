import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiPlay } from 'react-icons/hi';
import PageHero from '../../components/common/PageHero';
import CoreValues from '../../components/sections/CoreValues/CoreValues';
import ProgramOverview from '../../components/sections/ProgramOverview/ProgramOverview';
import ValueProposition from '../../components/sections/ValueProposition/ValueProposition';
import TestimonialCarousel from '../../components/sections/TestimonialCarousel/TestimonialCarousel';
import CallToAction from '../../components/sections/CallToAction/CallToAction';
import VideoModal from '../../components/common/Modal/VideoModal';

const INTRO_VIDEO_SEEN_KEY = 'dodream:intro-video-seen';
const INTRO_VIDEO_ID = 'YcFAdGuCb4M';

export default function Home() {
  const { t } = useTranslation('home');
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  useEffect(() => {
    const seen = window.localStorage.getItem(INTRO_VIDEO_SEEN_KEY);
    if (!seen) setIsIntroOpen(true);
  }, []);

  const closeIntro = () => {
    setIsIntroOpen(false);
    try {
      window.localStorage.setItem(INTRO_VIDEO_SEEN_KEY, '1');
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  };

  const openIntro = () => setIsIntroOpen(true);

  return (
    <>
      <VideoModal
        isOpen={isIntroOpen}
        onClose={closeIntro}
        youtubeId={INTRO_VIDEO_ID}
        ariaLabel={t('intro.ariaLabel')}
        closeAriaLabel={t('intro.closeAriaLabel')}
        closeHint={t('intro.closeHint')}
        unmuteAriaLabel={t('intro.unmuteAriaLabel')}
        muteAriaLabel={t('intro.muteAriaLabel')}
      />
      <PageHero
        image="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1974"
        imageAlt="Worship Scene"
        label="DO DREAM TWO-GETHER International"
        titleHtml={t('hero.title')}
        subtitle={t('hero.subtitle')}
        ctaText={t('hero.cta')}
        ctaHref="/program"
        minHeight="min-h-[92vh]"
        imageOpacity="opacity-25"
        titleClassName="text-4xl md:text-5xl lg:text-7xl max-w-5xl"
      />
      <CoreValues />
      <ProgramOverview />
      <ValueProposition />
      <TestimonialCarousel />
      <CallToAction />

      {!isIntroOpen && (
        <button
          type="button"
          onClick={openIntro}
          aria-label={t('intro.button')}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-brand-primary-blue text-white px-5 py-3 shadow-2xl ring-2 ring-white hover:bg-brand-primary-blue/90 hover:ring-white/90 transition-colors cursor-pointer"
        >
          <HiPlay className="w-5 h-5" />
          <span className="text-sm font-semibold">{t('intro.button')}</span>
        </button>
      )}
    </>
  );
}
