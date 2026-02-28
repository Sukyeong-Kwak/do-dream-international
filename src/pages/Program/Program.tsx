import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiChevronDown, HiChevronUp, HiOutlineClock } from 'react-icons/hi';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import Calendar from '../../components/sections/Calendar/Calendar';

interface CurriculumSubject {
  title: string;
  lectures: number;
  time_per_lecture: number;
  total_hours: number;
  description: string;
}

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

export default function Program() {
  const { t } = useTranslation('program');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const curriculum = t('curriculum.subjects', { returnObjects: true }) as CurriculumSubject[];
  const schedule = t('schedule.items', { returnObjects: true }) as ScheduleItem[];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-brand-primary-blue text-white py-24 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full bg-brand-primary-teal blur-3xl mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-80 h-80 rounded-full bg-brand-accent-pink blur-3xl mix-blend-screen"></div>
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
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-brand-bg/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-primary-blue mb-6">{t('overview.title')}</h2>
            <p className="text-lg text-brand-text leading-relaxed mb-10">
              {t('overview.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-8 rounded-2xl border border-brand-primary-teal/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-brand-primary-teal mb-2">{t('overview.duration_value')}</div>
                <div className="text-brand-muted text-sm uppercase tracking-wide font-semibold">{t('overview.duration_label')}</div>
              </Card>
              <Card className="text-center p-8 rounded-2xl border border-brand-primary-teal/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-brand-primary-blue mb-2">{t('overview.target_value')}</div>
                <div className="text-brand-muted text-sm uppercase tracking-wide font-semibold">{t('overview.target_label')}</div>
              </Card>
              <Card className="text-center p-8 rounded-2xl border border-brand-primary-teal/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-brand-accent-pink mb-2">{t('overview.community_value')}</div>
                <div className="text-brand-muted text-sm uppercase tracking-wide font-semibold">{t('overview.community_label')}</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-primary-blue mb-4">{t('curriculum.title')}</h2>
            <div className="flex items-center justify-center space-x-4 text-brand-primary-teal font-medium">
              <span className="bg-brand-primary-teal/10 px-4 py-1 rounded-full">{t('curriculum.total_lectures')}</span>
              <span className="bg-brand-primary-blue/10 text-brand-primary-blue px-4 py-1 rounded-full">{t('curriculum.total_time')}</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {Array.isArray(curriculum) && curriculum.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`cursor-pointer transition-all duration-300 rounded-2xl border ${openAccordion === index ? 'border-brand-primary-teal shadow-md' : 'border-gray-100 hover:border-brand-primary-teal/50'}`}
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${openAccordion === index ? 'bg-brand-primary-teal text-white' : 'bg-brand-bg text-brand-primary-blue'}`}>
                          {index + 1}
                        </div>
                        <h3 className={`text-xl font-bold ${openAccordion === index ? 'text-brand-primary-teal' : 'text-brand-primary-blue'}`}>
                          {item.title}
                        </h3>
                      </div>
                      {openAccordion === index ? (
                        <HiChevronUp className="w-6 h-6 text-brand-primary-teal" />
                      ) : (
                        <HiChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>

                    <AnimatePresence>
                      {openAccordion === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-4 border-t border-gray-100">
                            <p className="text-brand-text leading-relaxed text-lg mb-6">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                              <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg text-brand-muted">
                                <span className="font-semibold text-brand-primary-blue">{item.lectures}</span>
                                <span>{t('curriculum.lecture')}</span>
                              </div>
                              <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg text-brand-muted">
                                <span className="font-semibold text-brand-primary-blue">{item.time_per_lecture}</span>
                                <span>mins / {t('curriculum.lecture')}</span>
                              </div>
                              <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg text-brand-muted">
                                <span className="font-semibold text-brand-primary-blue">{item.total_hours}</span>
                                <span>{t('curriculum.hour')}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar */}
      <Calendar />

      {/* Daily Schedule - Vertical Timeline */}
      <section className="section-padding bg-brand-bg/30 border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-primary-blue mb-4">{t('schedule.title')}</h2>
            <p className="text-lg text-brand-text">{t('schedule.monday')}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-brand-primary-teal/30 pl-8 ml-4 md:ml-0 space-y-8">
              {Array.isArray(schedule) && schedule.map((item, index) => {
                // Determine icon color based on time of day for visual hierarchy
                let dotColor = "bg-brand-primary-teal border-white";
                if (index < 2 || index > 14) dotColor = "bg-brand-primary-blue border-white";
                if (index === 6 || index === 15) dotColor = "bg-brand-accent-pink border-white"; // Meals

                return (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 shadow-sm z-10 ${dotColor} group-hover:scale-125 transition-transform duration-300`}></div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group-hover:border-brand-primary-teal/30">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center space-x-2 text-brand-primary-blue font-bold tracking-wider min-w-[140px]">
                          <HiOutlineClock className="w-5 h-5 text-brand-primary-teal" />
                          <span>{item.time}</span>
                        </div>
                        <div className="flex-1 border-t border-gray-100 md:border-none pt-4 md:pt-0">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-brand-text text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-12 text-center text-sm text-brand-muted bg-white px-6 py-4 rounded-xl border border-gray-200 inline-block w-full">
              {t('schedule.weekend_note')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-primary-blue text-white text-center py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScwgPF5kPO--Yw41STnVkPKYTDJuCNmGZa7r_I2r5JTQOhdBg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-brand-primary-teal text-white hover:opacity-90 px-12 py-4 rounded-xl shadow-lg border-none transition-all duration-300 hover:-translate-y-1">
              {t('cta.button')}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
