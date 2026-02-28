import Hero from '../../components/sections/Hero/Hero';
import ProcessFlow from '../../components/sections/ProcessFlow/ProcessFlow';
import ValueProposition from '../../components/sections/ValueProposition/ValueProposition';
import ProgramOverview from '../../components/sections/ProgramOverview/ProgramOverview';
import TestimonialCarousel from '../../components/sections/TestimonialCarousel/TestimonialCarousel';
import CallToAction from '../../components/sections/CallToAction/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <ProcessFlow />
      <ValueProposition />
      <ProgramOverview />
      <TestimonialCarousel />
      <CallToAction />
    </>
  );
}
