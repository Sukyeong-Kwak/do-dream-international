import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp } from '../../../lib/motion';
import Accordion from '../../common/Accordion';

interface CurriculumSubject {
  title: string;
  lectures: number;
  time_per_lecture: number;
  total_hours: number;
  description: string;
}

export default function ProgramCurriculum() {
  const { t } = useTranslation('program');
  const subjects = t('curriculum.subjects', { returnObjects: true }) as CurriculumSubject[];

  if (!Array.isArray(subjects)) return null;

  const items = subjects.map((item, index) => ({
    trigger: (
      <>
        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-brand-bg text-brand-primary-blue">
          {index + 1}
        </div>
        <h3 className="text-lg font-bold text-brand-primary-blue">{item.title}</h3>
      </>
    ),
    activeTrigger: (
      <>
        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-brand-primary-teal text-white">
          {index + 1}
        </div>
        <h3 className="text-lg font-bold text-brand-primary-teal">{item.title}</h3>
      </>
    ),
    content: (
      <>
        <p className="text-brand-text/80 leading-relaxed mb-5">{item.description}</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-brand-muted">
            <span className="font-semibold text-brand-primary-blue">{item.lectures}</span> {t('curriculum.lecture')}
          </span>
          <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-brand-muted">
            <span className="font-semibold text-brand-primary-blue">{item.time_per_lecture}</span> min
          </span>
          <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-brand-muted">
            <span className="font-semibold text-brand-primary-blue">{item.total_hours}</span> {t('curriculum.hour')}
          </span>
        </div>
      </>
    ),
  }));

  return (
    <section className="py-16 md:py-24 bg-white" id="curriculum">
      <div className="container-custom">
        <div className="text-center mb-14">
          <motion.p {...fadeIn} className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4">
            {t('curriculum.label')}
          </motion.p>

          <motion.div {...fadeInUp} className="flex items-center justify-center gap-12 mb-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-primary-blue">120</div>
              <div className="text-sm text-brand-muted uppercase tracking-wider font-semibold mt-1">{t('curriculum.lecture')}</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-primary-teal">206.3</div>
              <div className="text-sm text-brand-muted uppercase tracking-wider font-semibold mt-1">{t('curriculum.hour')}</div>
            </div>
          </motion.div>
        </div>

        <Accordion
          items={items}
          className="max-w-3xl mx-auto"
          activeClass="border-brand-primary-teal shadow-md bg-white"
          inactiveClass="border-gray-100 bg-white hover:border-brand-primary-teal/30"
        />
      </div>
    </section>
  );
}
