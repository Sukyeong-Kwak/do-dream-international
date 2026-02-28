
import { useTranslation } from 'react-i18next';
import Button from '../../common/Button/Button';

export default function CallToAction() {
  const { t } = useTranslation('home');

  const steps = [
    { num: '01', title: t('cta.s1_title'), desc: t('cta.s1_desc') },
    { num: '02', title: t('cta.s2_title'), desc: t('cta.s2_desc') },
    { num: '03', title: t('cta.s3_title'), desc: t('cta.s3_desc') }
  ];

  return (
    <section className="section-padding bg-brand-primary-blue text-white text-center py-20">
      <div className="container-custom max-w-4xl mx-auto">

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-brand-primary-teal text-3xl font-bold mb-4">{step.num}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScwgPF5kPO--Yw41STnVkPKYTDJuCNmGZa7r_I2r5JTQOhdBg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-brand-primary-teal text-white hover:opacity-90 px-12 py-4 rounded-xl font-bold tracking-wider uppercase text-sm border-none shadow-lg transition-all duration-300 hover:-translate-y-1">
              {t('cta.button')}
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
}


