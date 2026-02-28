import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../../common/Button/Button';

export default function Hero() {
  const { t } = useTranslation('home');

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white pt-12 pb-16 lg:pt-20">

      <div className="container-custom relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Content column */}
          <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight text-brand-primary tracking-tight"
              dangerouslySetInnerHTML={{ __html: t('hero.title') }}
            />

            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 text-brand-text leading-relaxed font-body">
              {t('hero.subtitle')}
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link to="/program">
                <Button
                  size="lg"
                  className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors duration-300 rounded px-10 py-4 text-base font-medium tracking-wide shadow-sm"
                >
                  {t('hero.cta')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image column */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none relative mt-12 lg:mt-0 p-4">
            <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
              {/* Image base */}
              <img
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1974"
                alt="Worship Scene in Korea"
                className="w-full h-full object-cover grayscale opacity-90 transition-opacity duration-500"
              />
              {/* Color overlay to unify tone with brand-primary */}
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-color"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
