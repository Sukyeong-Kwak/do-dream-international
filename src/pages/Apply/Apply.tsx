import ApplyHero from '../../components/sections/ApplyHero/ApplyHero';
import ApplyProcess from '../../components/sections/ApplyProcess/ApplyProcess';
import ApplyInfo from '../../components/sections/ApplyInfo/ApplyInfo';
import ApplyCTA from '../../components/sections/ApplyCTA/ApplyCTA';
import ContactForm from '../../components/sections/ContactForm/ContactForm';
import ContactInfo from '../../components/sections/ContactInfo/ContactInfo';

export default function Apply() {
  return (
    <>
      <ApplyHero />
      <ApplyProcess />
      <ApplyInfo />
      <ApplyCTA />
      <ContactForm />
      <ContactInfo />
    </>
  );
}
