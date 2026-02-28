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
                src="https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&fit=crop&q=80&w=1974"
                alt="Rev. Yeojubong"
                className="w-full h-full object-cover grayscale opacity-90 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-brand-primary-blue/10 mix-blend-color"></div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
