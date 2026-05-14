import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi2';
import { fadeIn } from '../../../lib/motion';
import Accordion from '../../common/Accordion';

interface CurriculumLesson {
  no: number;
  title: string;
}

interface CurriculumVolume {
  title: string;
  subtitle?: string;
  lessons: CurriculumLesson[];
}

interface CurriculumSubject {
  title: string;
  lectures: number;
  time_per_lecture: number;
  total_hours: number;
  description: string;
  volumes?: CurriculumVolume[];
}

function CurriculumContent({ item }: { item: CurriculumSubject }) {
  const { t } = useTranslation('program');
  const [open, setOpen] = useState(false);
  const volumes = Array.isArray(item.volumes) ? item.volumes : [];
  const hasVolumes = volumes.length > 0;
  const totalLessons = volumes.reduce((acc, v) => acc + v.lessons.length, 0);

  const paragraphs = item.description.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <>
      <div className="space-y-4 mb-6">
        {paragraphs.map((para, i) => (
          <p key={i} className="text-brand-text/80 leading-relaxed">
            {para}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 text-sm mb-6">
        <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-brand-muted">
          <span className="font-semibold text-brand-primary-blue">{item.lectures}</span> {t('curriculum.lecture')}
        </span>
        <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-brand-muted">
          <span className="font-semibold text-brand-primary-blue">{item.time_per_lecture}</span> {t('curriculum.minute')}
        </span>
        <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-brand-muted">
          <span className="font-semibold text-brand-primary-blue">{item.total_hours}</span> {t('curriculum.hour')}
        </span>
      </div>

      {hasVolumes && (
        <div className="mt-2 pt-6 border-t border-gray-100">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-brand-bg/60 hover:bg-brand-bg text-brand-primary-blue font-semibold text-sm transition-colors"
          >
            <span>
              {open
                ? t('curriculum.hideToc')
                : `${t('curriculum.viewToc')} (${t('curriculum.totalLectures', { count: totalLessons })})`}
            </span>
            <HiChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>

          {open && (
            <div className="mt-6 space-y-8">
              {volumes.map((vol) => (
                <div key={vol.title}>
                  <div className="flex items-baseline gap-3 mb-4">
                    <h4 className="text-base font-bold text-brand-primary-blue tracking-tight">{vol.title}</h4>
                    {vol.subtitle && (
                      <span className="text-xs text-brand-muted font-medium">{vol.subtitle}</span>
                    )}
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {vol.lessons.map((lesson) => (
                      <li key={lesson.no} className="flex items-start gap-3 text-sm">
                        <span className="flex-shrink-0 inline-flex items-center justify-center min-w-[2rem] h-6 px-1.5 rounded-md bg-brand-primary-blue/10 text-brand-primary-blue text-xs font-bold">
                          {lesson.no}
                        </span>
                        <span className="text-brand-text/80 leading-6">{lesson.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default function ProgramCurriculum() {
  const { t } = useTranslation('program');
  const allSubjects = t('curriculum.subjects', { returnObjects: true }) as CurriculumSubject[];

  if (!Array.isArray(allSubjects)) return null;

  // 임시 숨김: "십자가의 복음" / "The Gospel of the Cross"만 노출 (나머지는 추후 복구)
  const subjects = allSubjects.filter(
    (s) => s.title === '십자가의 복음' || s.title === 'The Gospel of the Cross'
  );

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
    content: <CurriculumContent item={item} />,
  }));

  return (
    <section className="py-16 md:py-24 bg-white" id="curriculum">
      <div className="container-custom">
        <div className="text-center mb-14">
          <motion.p {...fadeIn} className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4">
            {t('curriculum.label')}
          </motion.p>

          {/* 임시 숨김: 총 강의 수/시간 통계 (추후 복구) */}
          {/* <motion.div {...fadeInUp} className="flex items-center justify-center gap-12 mb-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-primary-blue">120</div>
              <div className="text-sm text-brand-muted uppercase tracking-wider font-semibold mt-1">{t('curriculum.lecture')}</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-primary-teal">206.3</div>
              <div className="text-sm text-brand-muted uppercase tracking-wider font-semibold mt-1">{t('curriculum.hour')}</div>
            </div>
          </motion.div> */}
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
