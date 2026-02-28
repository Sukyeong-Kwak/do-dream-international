// Removed framer-motion import
import { useTranslation } from 'react-i18next';
import { HiBookOpen, HiGlobeAsiaAustralia, HiUserGroup } from 'react-icons/hi2';

export default function ProgramOverview() {
  const { t } = useTranslation('home');

  const features = [
    {
      icon: HiBookOpen,
      title: t('program.f1_title'),
      description: t('program.f1_desc'),
    },
    {
      icon: HiGlobeAsiaAustralia,
      title: t('program.f2_title'),
      description: t('program.f2_desc'),
    },
    {
      icon: HiUserGroup,
      title: t('program.f3_title'),
      description: t('program.f3_desc'),
    }
  ];

  return (
    <section className="section-padding bg-brand-bg/40 relative overflow-hidden" id="program">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-6"
            dangerouslySetInnerHTML={{ __html: t('program.title') }}
          />
          <p className="text-lg text-brand-text max-w-2xl mx-auto leading-relaxed">
            {t('program.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded p-8 lg:p-10 border border-t-4 border-t-brand-primary border-gray-200"
            >
              <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center mb-6 text-brand-primary">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-4 font-serif">{feature.title}</h3>
              <p className="text-brand-text leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
