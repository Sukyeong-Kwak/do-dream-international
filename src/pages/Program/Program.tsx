import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiChevronDown, HiChevronUp, HiOutlineClock } from 'react-icons/hi';
import { HiGlobeAsiaAustralia, HiAcademicCap, HiHeart } from 'react-icons/hi2';
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
  const { t: tProgram } = useTranslation('program');
  const { t: tAbout } = useTranslation('about');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const curriculum = tProgram('curriculum.subjects', { returnObjects: true }) as CurriculumSubject[];
  const schedule = tProgram('schedule.items', { returnObjects: true }) as ScheduleItem[];

  return (
    <div className="bg-brand-bg/30">
      {/* Program Hero */}
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
            {tProgram('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            {tProgram('hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* About: Overview & Purpose */}
      <section className="section-padding bg-white border-b border-gray-100">
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
                <h2 className="text-3xl font-extrabold text-brand-primary-blue mb-6 flex items-center tracking-tighter">
                  <span className="w-10 h-1 bg-brand-primary-teal rounded-full mr-4 inline-block"></span>
                  {tAbout('overview.title')}
                </h2>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4 text-brand-text">
                  <p className="font-semibold text-lg text-brand-primary-blue pb-4 border-b border-gray-200">
                    {tAbout('overview.name')}
                  </p>
                  <p>{tAbout('overview.organizer')}</p>
                  <p>{tAbout('overview.type')}</p>
                  <p>{tAbout('overview.location')}</p>
                  <p>{tAbout('overview.target')}</p>
                  <p>{tAbout('overview.duration')}</p>
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
                <h2 className="text-3xl font-extrabold text-brand-primary-blue mb-6 flex items-center tracking-tighter">
                  <span className="w-10 h-1 bg-brand-primary-teal rounded-full mr-4 inline-block"></span>
                  {tAbout('purpose.title')}
                </h2>
                <div className="bg-brand-primary-blue/5 rounded-2xl p-8 border border-brand-primary-blue/10">
                  <p className="text-xl text-brand-primary-blue leading-relaxed font-medium italic">
                    "{tAbout('purpose.description')}"
                  </p>
                </div>
              </div>

              {/* Organization */}
              <div className="pt-6">
                <h3 className="text-2xl font-extrabold text-brand-primary-blue mb-4 tracking-tight">{tAbout('organization.title')}</h3>
                <div className="flex flex-col space-y-2 text-brand-text bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                  <p className="font-semibold">{tAbout('organization.director')}</p>
                  <p className="text-brand-muted">{tAbout('organization.dept')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About: Vision & Core Values */}
      <section className="section-padding bg-brand-bg/50 border-y border-gray-200">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary-blue mb-4 tracking-tighter">
              {tAbout('vision.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision Card */}
            <div className="bg-white p-10 rounded-2xl border-t-4 border-brand-primary-blue shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-primary-blue/10 rounded-full flex items-center justify-center mb-8">
                <HiGlobeAsiaAustralia className="w-8 h-8 text-brand-primary-blue" />
              </div>
              <h3 className="text-3xl font-extrabold text-brand-primary-blue mb-6 tracking-tighter">{tAbout('vision.v_title')}</h3>
              <ul className="space-y-4">
                {(tAbout('vision.v_items', { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start text-lg text-brand-text font-medium">
                    <span className="w-6 h-6 rounded-full bg-brand-primary-blue text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Values Card */}
            <div className="bg-white p-10 rounded-2xl border-t-4 border-brand-primary-teal shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-primary-teal/10 rounded-full flex items-center justify-center mb-8">
                <HiHeart className="w-8 h-8 text-brand-primary-teal" />
              </div>
              <h3 className="text-3xl font-extrabold text-brand-primary-teal mb-6 tracking-tighter">{tAbout('vision.c_title')}</h3>
              <ul className="space-y-4">
                {(tAbout('vision.c_items', { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start text-lg text-brand-text font-medium">
                    <span className="w-6 h-6 rounded-full bg-brand-primary-teal text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program: Overview */}
      <section className="section-padding bg-brand-bg/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-brand-primary-blue mb-6 tracking-tighter">{tProgram('overview.title')}</h2>
            <p className="text-lg text-brand-text leading-relaxed mb-10">
              {tProgram('overview.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-8 rounded-2xl border border-brand-primary-teal/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-brand-primary-teal mb-2">{tProgram('overview.duration_value')}</div>
                <div className="text-brand-muted text-sm uppercase tracking-wide font-semibold">{tProgram('overview.duration_label')}</div>
              </Card>
              <Card className="text-center p-8 rounded-2xl border border-brand-primary-teal/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-brand-primary-blue mb-2">{tProgram('overview.target_value')}</div>
                <div className="text-brand-muted text-sm uppercase tracking-wide font-semibold">{tProgram('overview.target_label')}</div>
              </Card>
              <Card className="text-center p-8 rounded-2xl border border-brand-primary-teal/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-brand-accent-pink mb-2">{tProgram('overview.community_value')}</div>
                <div className="text-brand-muted text-sm uppercase tracking-wide font-semibold">{tProgram('overview.community_label')}</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program: Curriculum */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-primary-blue mb-4 tracking-tighter">{tProgram('curriculum.title')}</h2>
            <div className="flex items-center justify-center space-x-4 text-brand-primary-teal font-medium">
              <span className="bg-brand-primary-teal/10 px-4 py-1 rounded-full">{tProgram('curriculum.total_lectures')}</span>
              <span className="bg-brand-primary-blue/10 text-brand-primary-blue px-4 py-1 rounded-full">{tProgram('curriculum.total_time')}</span>
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
                        <h3 className={`text-xl font-extrabold tracking-tighter ${openAccordion === index ? 'text-brand-primary-teal' : 'text-brand-primary-blue'}`}>
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
                                <span>{tProgram('curriculum.lecture')}</span>
                              </div>
                              <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg text-brand-muted">
                                <span className="font-semibold text-brand-primary-blue">{item.time_per_lecture}</span>
                                <span>mins / {tProgram('curriculum.lecture')}</span>
                              </div>
                              <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg text-brand-muted">
                                <span className="font-semibold text-brand-primary-blue">{item.total_hours}</span>
                                <span>{tProgram('curriculum.hour')}</span>
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

      {/* Program: Calendar */}
      <Calendar />

      {/* Program: Daily Schedule */}
      <section className="section-padding bg-brand-bg/30 border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-primary-blue mb-4 tracking-tighter">{tProgram('schedule.title')}</h2>
            <p className="text-lg text-brand-text">{tProgram('schedule.monday')}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-brand-primary-teal/30 pl-8 ml-4 md:ml-0 space-y-8">
              {Array.isArray(schedule) && schedule.map((item, index) => {
                let dotColor = "bg-brand-primary-teal border-white";
                if (index < 2 || index > 14) dotColor = "bg-brand-primary-blue border-white";
                if (index === 6 || index === 15) dotColor = "bg-brand-accent-pink border-white"; 

                return (
                  <div key={index} className="relative group">
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
              {tProgram('schedule.weekend_note')}
            </p>
          </div>
        </div>
      </section>

      {/* About: Activities & Effects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Activities */}
            <div>
              <h2 className="text-3xl font-extrabold text-brand-primary-blue mb-8 flex items-center tracking-tighter">
                <HiAcademicCap className="w-8 h-8 mr-3 text-brand-primary-teal" />
                {tAbout('activities.title')}
              </h2>
              <div className="space-y-6">
                {(tAbout('activities.items', { returnObjects: true }) as any[]).map((item, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-brand-primary-teal/30 transition-colors">
                    <h3 className="text-xl font-bold text-brand-primary-blue mb-3">{item.title}</h3>
                    <p className="text-brand-text leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Effects */}
            <div>
              <h2 className="text-3xl font-extrabold text-brand-primary-blue mb-8 flex items-center tracking-tighter">
                <span className="w-8 h-8 bg-brand-accent-pink/20 text-brand-accent-pink rounded-full flex items-center justify-center mr-3 font-bold">!</span>
                {tAbout('effects.title')}
              </h2>
              <div className="bg-white border-2 border-brand-primary-blue/10 p-8 rounded-2xl shadow-sm h-full max-h-min">
                <ul className="space-y-6">
                  {(tAbout('effects.items', { returnObjects: true }) as string[]).map((item, idx) => (
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

      {/* About: Partners */}
      <section className="py-16 bg-brand-bg md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-brand-primary-blue mb-10 uppercase tracking-widest text-sm">
            {tAbout('partners.title')}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-2xl font-extrabold text-gray-500 hover:text-brand-primary-blue transition-colors cursor-pointer tracking-tight">
              KWMF
            </div>
            <div className="text-2xl font-extrabold text-gray-500 hover:text-brand-primary-blue transition-colors cursor-pointer tracking-tight">
              Y Mission
            </div>
            <div className="text-2xl font-extrabold text-gray-500 hover:text-brand-primary-blue transition-colors cursor-pointer tracking-tight">
              Podonamu Church
            </div>
          </div>
        </div>
      </section>

      {/* Program: CTA */}
      <section className="section-padding bg-brand-primary-blue text-white text-center py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-extrabold mb-4 tracking-tighter">{tProgram('cta.title')}</h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            {tProgram('cta.subtitle')}
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScwgPF5kPO--Yw41STnVkPKYTDJuCNmGZa7r_I2r5JTQOhdBg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-brand-primary-teal text-white hover:opacity-90 px-12 py-4 rounded-xl shadow-lg border-none transition-all duration-300 hover:-translate-y-1">
              {tProgram('cta.button')}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
