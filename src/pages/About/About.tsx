import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Card from '../../components/common/Card/Card';
import { HiCheckCircle, HiGlobeAsiaAustralia, HiAcademicCap, HiHeart } from 'react-icons/hi2';

export default function About() {
  const { t } = useTranslation('about');

  return (
    <div className="bg-brand-bg/30">
      {/* Hero */}
      <section className="relative bg-brand-primary-blue text-white py-24 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-96 h-96 rounded-full bg-brand-primary-teal blur-3xl mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 rounded-full bg-brand-accent-pink blur-3xl mix-blend-screen"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 flex justify-center"
          >
            <div className="bg-white/10 p-6 rounded-full backdrop-blur-sm border border-white/20">
              <img src="/logo-white.png" alt="Do Dream International Logo" className="h-16 w-auto" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Overview & Purpose */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

            {/* Left: Overview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-brand-primary-blue mb-6 flex items-center">
                  <span className="w-10 h-1 bg-brand-primary-teal rounded-full mr-4 inline-block"></span>
                  {t('overview.title')}
                </h2>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4 text-brand-text">
                  <p className="font-semibold text-lg text-brand-primary-blue pb-4 border-b border-gray-200">
                    {t('overview.name')}
                  </p>
                  <p>{t('overview.organizer')}</p>
                  <p>{t('overview.type')}</p>
                  <p>{t('overview.location')}</p>
                  <p>{t('overview.target')}</p>
                  <p>{t('overview.duration')}</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Purpose */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-brand-primary-blue mb-6 flex items-center">
                  <span className="w-10 h-1 bg-brand-primary-teal rounded-full mr-4 inline-block"></span>
                  {t('purpose.title')}
                </h2>
                <div className="bg-brand-primary-blue/5 rounded-2xl p-8 border border-brand-primary-blue/10">
                  <p className="text-xl text-brand-primary-blue leading-relaxed font-medium italic">
                    "{t('purpose.description')}"
                  </p>
                </div>
              </div>

              {/* Organization */}
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-brand-primary-blue mb-4">{t('organization.title')}</h3>
                <div className="flex flex-col space-y-2 text-brand-text bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                  <p className="font-semibold">{t('organization.director')}</p>
                  <p className="text-brand-muted">{t('organization.dept')}</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Vision & Core Values */}
      <section className="section-padding bg-brand-bg/50 border-y border-gray-200">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-blue mb-4">
              {t('vision.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision Card */}
            <Card className="bg-brand-primary-blue text-white p-10 border-none shadow-xl">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-8">
                <HiGlobeAsiaAustralia className="w-8 h-8 text-brand-primary-teal" />
              </div>
              <h3 className="text-3xl font-bold mb-6">{t('vision.v_title')}</h3>
              <ul className="space-y-4">
                {(t('vision.v_items', { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start text-lg opacity-90">
                    <HiCheckCircle className="w-6 h-6 text-brand-accent-pink mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Core Values Card */}
            <Card className="bg-white p-10 border-2 border-brand-primary-teal/20 shadow-xl">
              <div className="w-16 h-16 bg-brand-primary-teal/10 rounded-full flex items-center justify-center mb-8">
                <HiHeart className="w-8 h-8 text-brand-primary-teal" />
              </div>
              <h3 className="text-3xl font-bold text-brand-primary-blue mb-6">{t('vision.c_title')}</h3>
              <ul className="space-y-4">
                {(t('vision.c_items', { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start text-lg text-brand-text font-medium">
                    <HiCheckCircle className="w-6 h-6 text-brand-primary-teal mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities & Effects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

            {/* Activities */}
            <div>
              <h2 className="text-3xl font-bold text-brand-primary-blue mb-8 flex items-center">
                <HiAcademicCap className="w-8 h-8 mr-3 text-brand-primary-teal" />
                {t('activities.title')}
              </h2>
              <div className="space-y-6">
                {(t('activities.items', { returnObjects: true }) as any[]).map((item, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-brand-primary-teal/30 transition-colors">
                    <h3 className="text-xl font-bold text-brand-primary-blue mb-3">{item.title}</h3>
                    <p className="text-brand-text leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Effects */}
            <div>
              <h2 className="text-3xl font-bold text-brand-primary-blue mb-8 flex items-center">
                <span className="w-8 h-8 bg-brand-accent-pink/20 text-brand-accent-pink rounded-full flex items-center justify-center mr-3 font-bold">!</span>
                {t('effects.title')}
              </h2>
              <div className="bg-white border-2 border-brand-primary-blue/10 p-8 rounded-2xl shadow-sm h-full max-h-min">
                <ul className="space-y-6">
                  {(t('effects.items', { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-brand-primary-blue/10 text-brand-primary-blue flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-brand-text text-lg pt-1">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-brand-bg md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-brand-primary-blue mb-10 uppercase tracking-widest text-sm">
            {t('partners.title')}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-2xl font-serif font-bold text-gray-500 hover:text-brand-primary-blue transition-colors cursor-pointer">
              KWMF
            </div>
            <div className="text-2xl font-serif font-bold text-gray-500 hover:text-brand-primary-blue transition-colors cursor-pointer">
              Y Mission
            </div>
            <div className="text-2xl font-serif font-bold text-gray-500 hover:text-brand-primary-blue transition-colors cursor-pointer">
              Podonamu Church
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
