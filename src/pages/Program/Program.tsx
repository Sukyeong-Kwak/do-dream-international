import { useTranslation } from 'react-i18next';
import PageHero from '../../components/common/PageHero';
import ProgramIdentity from '../../components/sections/ProgramIdentity/ProgramIdentity';
import ProgramVision from '../../components/sections/ProgramVision/ProgramVision';
import ProgramCurriculum from '../../components/sections/ProgramCurriculum/ProgramCurriculum';
import DayInProgram from '../../components/sections/DayInProgram/DayInProgram';
import KLifeProgram from '../../components/sections/KLifeProgram/KLifeProgram';
import TrainingJourney from '../../components/sections/TrainingJourney/TrainingJourney';
import ProgramCTA from '../../components/sections/ProgramCTA/ProgramCTA';

export default function Program() {
  const { t } = useTranslation('program');

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1974"
        imageAlt="Young people in community"
        label={t('hero.label')}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        ctaText={t('hero.cta')}
        ctaHref="#curriculum"
        titleClassName="text-3xl md:text-5xl lg:text-6xl max-w-4xl"
      />
      <ProgramIdentity />
      <ProgramVision />
      <ProgramCurriculum />
      <DayInProgram />
      <KLifeProgram />
      <TrainingJourney />
      <ProgramCTA />
    </>
  );
}
