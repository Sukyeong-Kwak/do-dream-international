import { useTranslation } from 'react-i18next';
import { HiGlobeAsiaAustralia, HiAcademicCap, HiRocketLaunch } from 'react-icons/hi2';
import SectionHeader from '../../common/SectionHeader';
import StepsProcess from '../../common/StepsProcess';

export default function ProcessFlow() {
  const { t } = useTranslation('home');

  const steps = [
    {
      num: '01',
      title: t('process.s1_title'),
      desc: t('process.s1_desc'),
      icon: <HiGlobeAsiaAustralia className="w-5 h-5 md:w-7 md:h-7 text-brand-primary-blue" />,
      textColor: 'text-brand-primary-blue',
      borderColor: 'border-brand-primary-blue',
      iconColor: 'text-brand-primary-blue',
    },
    {
      num: '02',
      title: t('process.s2_title'),
      desc: t('process.s2_desc'),
      icon: <HiAcademicCap className="w-5 h-5 md:w-7 md:h-7 text-brand-primary-teal" />,
      textColor: 'text-brand-primary-teal',
      borderColor: 'border-brand-primary-teal',
      iconColor: 'text-brand-primary-teal',
    },
    {
      num: '03',
      title: t('process.s3_title'),
      desc: t('process.s3_desc'),
      icon: <HiRocketLaunch className="w-5 h-5 md:w-7 md:h-7 text-brand-accent-pink" />,
      textColor: 'text-brand-accent-pink',
      borderColor: 'border-brand-accent-pink',
      iconColor: 'text-brand-accent-pink',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-brand-bg/60 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeader label={t('process.title')} title={t('process.subtitle')} />
        <StepsProcess steps={steps} />
      </div>
    </section>
  );
}
