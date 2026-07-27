import { useTranslation } from 'react-i18next';
import PageHero from '../../components/common/PageHero';
import ProgramIdentity from '../../components/sections/ProgramIdentity/ProgramIdentity';
import ProgramVision from '../../components/sections/ProgramVision/ProgramVision';
import ProgramCurriculum from '../../components/sections/ProgramCurriculum/ProgramCurriculum';
import DayInProgram from '../../components/sections/DayInProgram/DayInProgram';
import KLifeProgram from '../../components/sections/KLifeProgram/KLifeProgram';
import WeeklySchedule from '../../components/sections/WeeklySchedule/WeeklySchedule';
import ExperienceKorea from '../../components/sections/ExperienceKorea/ExperienceKorea';
import TrainingJourney from '../../components/sections/TrainingJourney/TrainingJourney';
import CampusLife from '../../components/sections/CampusLife/CampusLife';
import GettingStarted from '../../components/sections/GettingStarted/GettingStarted';
import CampusMap from '../../components/sections/CampusMap/CampusMap';
import Instructors from '../../components/sections/Instructors/Instructors';
import CallToAction from '../../components/sections/CallToAction/CallToAction';

/** 임시 숨김 (추후 복구): 하루 일정표 · 월별 문화체험 일정 + 카테고리별 프로그램 상세 */
const SHOW_SCHEDULE_SECTIONS = false;

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
      {SHOW_SCHEDULE_SECTIONS && <DayInProgram />}
      {SHOW_SCHEDULE_SECTIONS && <KLifeProgram />}
      <WeeklySchedule />
      <ExperienceKorea />
      <TrainingJourney />
      <CampusLife />
      <CampusMap />
      <GettingStarted />
      <Instructors />
      <CallToAction />
    </>
  );
}
