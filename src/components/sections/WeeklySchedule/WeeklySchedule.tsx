import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeader from '../../common/SectionHeader';
import { staggerItem } from '../../../lib/motion';

interface ScheduleRow {
  time: string;
  session: string;
  desc: string;
  duration: string;
  accent?: boolean;
  tags?: string[];
}

/** Weekday (Mon–Fri) schedule table from the program guidebook. */
export default function WeeklySchedule() {
  const { t } = useTranslation('program');
  const rows = t('weekly.rows', { returnObjects: true }) as ScheduleRow[];

  if (!Array.isArray(rows) || rows.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-brand-bg/40" id="schedule">
      <div className="container-custom">
        <SectionHeader label={t('weekly.label')} title={t('weekly.title')} subtitle={t('weekly.subtitle')} />

        <div className="max-w-5xl mx-auto">
          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-brand-primary-blue text-white">
                  <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider w-40">{t('weekly.cols.time')}</th>
                  <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider w-56">{t('weekly.cols.session')}</th>
                  <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider">{t('weekly.cols.desc')}</th>
                  <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider w-28 text-right">{t('weekly.cols.duration')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.map((row, index) => (
                  <tr key={index} className={row.accent ? 'bg-brand-primary-teal/[0.06]' : 'bg-white'}>
                    <td className="px-6 py-4 text-sm font-semibold text-brand-muted tabular-nums align-top">{row.time}</td>
                    <td className="px-6 py-4 align-top">
                      <span className={`text-sm font-bold ${row.accent ? 'text-brand-primary-teal' : 'text-brand-primary-blue'}`}>
                        {row.session}
                      </span>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <p className="text-sm text-brand-text/80 leading-relaxed">{row.desc}</p>
                      {Array.isArray(row.tags) && row.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {row.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded-md bg-brand-primary-blue/[0.07] text-brand-primary-blue text-[11px] font-semibold">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-brand-muted text-right align-top whitespace-nowrap">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {rows.map((row, index) => (
              <motion.div
                key={index}
                {...staggerItem(index, 0.05)}
                className={`rounded-2xl border p-5 ${
                  row.accent ? 'border-brand-primary-teal/25 bg-brand-primary-teal/[0.06]' : 'border-gray-100 bg-white'
                }`}
              >
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <span className="text-xs font-bold text-brand-muted tabular-nums">{row.time}</span>
                  <span className="text-xs text-brand-muted whitespace-nowrap">{row.duration}</span>
                </div>
                <h3 className={`text-base font-bold mb-1 ${row.accent ? 'text-brand-primary-teal' : 'text-brand-primary-blue'}`}>
                  {row.session}
                </h3>
                <p className="text-sm text-brand-text/75 leading-relaxed">{row.desc}</p>
                {Array.isArray(row.tags) && row.tags.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {row.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded-md bg-brand-primary-blue/[0.07] text-brand-primary-blue text-[11px] font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-brand-muted">{t('weekly.note')}</p>
        </div>
      </div>
    </section>
  );
}
