import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import { HiDocumentText, HiOutlineCurrencyDollar, HiOutlineCalendar } from 'react-icons/hi2';

export default function Apply() {
  const { t } = useTranslation('apply');

  return (
    <div className="bg-brand-bg/30 min-h-screen pb-24">
      {/* Hero */}
      <section className="relative bg-brand-primary-blue text-white py-24 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full bg-brand-primary-teal blur-3xl mix-blend-screen"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column: Info & Process */}
          <div className="lg:col-span-2 space-y-8">

            {/* Info Cards */}
            <Card className="p-8 border-t-4 border-brand-primary-teal shadow-xl rounded-2xl">
              <h2 className="text-2xl font-bold text-brand-primary-blue mb-8 border-b border-gray-100 pb-4">
                {t('info.title')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-primary-blue/10 flex items-center justify-center text-brand-primary-blue mr-4 flex-shrink-0">
                    <HiOutlineCurrencyDollar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{t('info.cost_label')}</h3>
                    <p className="text-brand-primary-teal font-semibold mt-1">{t('info.cost_value')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-primary-teal/10 flex items-center justify-center text-brand-primary-teal mr-4 flex-shrink-0">
                    <HiOutlineCalendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{t('info.duration_label')}</h3>
                    <p className="text-brand-text mt-1">{t('info.duration_value')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <HiDocumentText className="w-5 h-5 mr-2 text-brand-primary-teal" />
                  {t('info.docs_label')}
                </h3>
                <ul className="space-y-3">
                  {(t('info.docs_items', { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start text-brand-text">
                      <span className="w-6 h-6 rounded-full bg-brand-primary-blue text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Application Process */}
            <Card className="p-8 shadow-md rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-primary-blue mb-8">
                {t('steps.title')}
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-primary-teal before:to-brand-primary-blue before:opacity-30">

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-primary-teal text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    1
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-1">{t('steps.s1_title')}</h3>
                    <p className="text-sm text-brand-text">{t('steps.s1_desc')}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-primary-blue text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    2
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-1">{t('steps.s2_title')}</h3>
                    <p className="text-sm text-brand-text">{t('steps.s2_desc')}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-accent-pink text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    3
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-1">{t('steps.s3_title')}</h3>
                    <p className="text-sm text-brand-text">{t('steps.s3_desc')}</p>
                  </div>
                </div>

              </div>
            </Card>

          </div>

          {/* Right Column: CTA Box */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="p-8 text-center bg-brand-primary-blue text-white border-none shadow-xl rounded-2xl">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiDocumentText className="w-8 h-8 text-brand-primary-teal" />
                </div>
                <h2 className="text-2xl font-bold mb-4">{t('cta.title')}</h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  {t('cta.desc')}
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScwgPF5kPO--Yw41STnVkPKYTDJuCNmGZa7r_I2r5JTQOhdBg/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button size="lg" className="w-full bg-brand-primary-teal text-white hover:opacity-90 py-4 rounded-xl shadow-lg border-none transition-all duration-300 hover:-translate-y-1 font-bold tracking-wide">
                    {t('cta.button')}
                  </Button>
                </a>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
