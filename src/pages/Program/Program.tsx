import ProgramHero from '../../components/sections/ProgramHero/ProgramHero';
import ProgramIdentity from '../../components/sections/ProgramIdentity/ProgramIdentity';
import ProgramVision from '../../components/sections/ProgramVision/ProgramVision';
import ProgramCurriculum from '../../components/sections/ProgramCurriculum/ProgramCurriculum';
import DayInProgram from '../../components/sections/DayInProgram/DayInProgram';
import TrainingJourney from '../../components/sections/TrainingJourney/TrainingJourney';
import ProgramCTA from '../../components/sections/ProgramCTA/ProgramCTA';

export default function Program() {
  return (
    <>
      <ProgramHero />
      <ProgramIdentity />
      <ProgramVision />
      <ProgramCurriculum />
      <DayInProgram />
      <TrainingJourney />
      <ProgramCTA />
    </>
  );
}
