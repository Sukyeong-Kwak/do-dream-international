import Hero from '../../components/sections/Hero/Hero';
import CoreValues from '../../components/sections/CoreValues/CoreValues';
import ProcessFlow from '../../components/sections/ProcessFlow/ProcessFlow';
import ProgramOverview from '../../components/sections/ProgramOverview/ProgramOverview';
import ValueProposition from '../../components/sections/ValueProposition/ValueProposition';
import TestimonialCarousel from '../../components/sections/TestimonialCarousel/TestimonialCarousel';
import CallToAction from '../../components/sections/CallToAction/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <CoreValues />
      <ProcessFlow />
      <ProgramOverview />
      <ValueProposition />
      <TestimonialCarousel />
      <CallToAction />
    </>
  );
}
