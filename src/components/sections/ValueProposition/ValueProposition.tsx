// Removed framer-motion import
import { useTranslation } from 'react-i18next';

export default function ValueProposition() {
  const { t } = useTranslation('home');

  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full max-w-md mx-auto md:max-w-none">
            <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl shadow-lg bg-gray-100 overflow-hidden">
              <img
                src="/pastor_photo.jpg"
                alt="Rev. Yeojubong"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl text-brand-primary-blue font-bold mb-8 leading-tight">
              {t('value.title')}
            </h2>
            <div className="space-y-6 text-lg text-brand-text leading-relaxed">
              <p>{t('value.p1')}</p>
              <p>{t('value.p2')}</p>
              <p>{t('value.p3')}</p>
              <div className="pt-6 border-t border-gray-200 mt-8">
                <p className="font-bold text-2xl text-brand-primary-blue">{t('value.name')}</p>
                <p className="text-brand-muted text-sm mt-1 uppercase tracking-wider font-semibold">{t('value.role')}</p>
                
                <div className="mt-4">
                  <img 
                    src="/pastor_signature.png" 
                    alt="Signature" 
                    className="h-12 md:h-14 object-contain" 
                  />
                </div>
                
                <div className="mt-6 space-y-1 text-sm text-brand-muted/80">
                  {(t('value.bio', { returnObjects: true }) as string[]).map((item, index) => (
                    <p key={index} className="leading-tight xl:leading-normal">• {item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
