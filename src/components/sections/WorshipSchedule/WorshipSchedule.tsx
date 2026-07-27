import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeader from '../../common/SectionHeader';
import { fadeInUp, staggerItem } from '../../../lib/motion';

interface ServiceRow {
  day: string;
  service: string;
  time: string;
  location: string;
}

interface OikosRole {
  name: string;
  desc: string;
}

function ServiceTable({ title, rows, cols }: { title: string; rows: ServiceRow[]; cols: Record<string, string> }) {
  if (!Array.isArray(rows) || rows.length === 0) return null;

  return (
    <div className="mb-10">
      {title && <h3 className="text-lg font-bold text-brand-primary-blue mb-4">{title}</h3>}

      {/* Desktop table */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-brand-bg/70">
              <th scope="col" className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-muted w-32">{cols.day}</th>
              <th scope="col" className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-muted">{cols.service}</th>
              <th scope="col" className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-muted w-44">{cols.time}</th>
              <th scope="col" className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-muted">{cols.location}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((row, index) => (
              <tr key={index} className={row.day ? 'bg-brand-bg/30' : 'bg-white'}>
                <td className="px-6 py-3.5 text-sm font-bold text-brand-primary-blue align-top whitespace-nowrap">{row.day}</td>
                <td className="px-6 py-3.5 text-sm text-brand-text/85 align-top">{row.service}</td>
                <td className="px-6 py-3.5 text-sm text-brand-muted align-top whitespace-nowrap">{row.time}</td>
                <td className="px-6 py-3.5 text-sm text-brand-text/70 align-top">{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-2.5">
        {rows.map((row, index) => (
          <div key={index} className="rounded-xl border border-gray-100 bg-white p-4">
            {row.day && (
              <span className="inline-flex items-center px-2 py-0.5 mb-2 rounded-md bg-brand-primary-blue/[0.08] text-brand-primary-blue text-[11px] font-bold">
                {row.day}
              </span>
            )}
            <p className="text-sm font-semibold text-brand-text/90">{row.service}</p>
            <p className="mt-1 text-xs text-brand-primary-teal font-semibold">{row.time}</p>
            <p className="mt-0.5 text-xs text-brand-muted">{row.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Church worship/meeting schedule plus the Oikos small-group ministry. */
export default function WorshipSchedule() {
  const { t } = useTranslation('church');
  const cols = t('worship.cols', { returnObjects: true }) as Record<string, string>;
  const rows = t('worship.rows', { returnObjects: true }) as ServiceRow[];
  const dailyRows = t('worship.dailyRows', { returnObjects: true }) as ServiceRow[];
  const roles = t('worship.oikos.roles', { returnObjects: true }) as OikosRole[];

  return (
    <section className="py-16 md:py-24 bg-white" id="worship">
      <div className="container-custom">
        <SectionHeader label={t('worship.label')} title={t('worship.title')} subtitle={t('worship.subtitle')} />

        <div className="max-w-5xl mx-auto">
          <ServiceTable title={t('worship.weeklyTitle')} rows={rows} cols={cols} />
          <ServiceTable title={t('worship.dailyTitle')} rows={dailyRows} cols={cols} />

          {/* Oikos */}
          <motion.div {...fadeInUp} className="mt-6 rounded-3xl border border-gray-100 bg-brand-bg/40 p-6 md:p-9">
            <h3 className="text-2xl font-bold text-brand-primary-blue mb-3">{t('worship.oikos.title')}</h3>
            <p className="text-sm md:text-base text-brand-text/75 leading-relaxed mb-7 max-w-3xl">
              {t('worship.oikos.desc')}
            </p>

            <p className="text-sm font-bold text-brand-primary-teal mb-4">{t('worship.oikos.rolesTitle')}</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {Array.isArray(roles) && roles.map((role, index) => (
                <motion.div
                  key={role.name}
                  {...staggerItem(index, 0.06)}
                  className="rounded-xl bg-white border border-gray-100 px-5 py-4"
                >
                  <p className="text-sm font-bold text-brand-primary-blue mb-1">{role.name}</p>
                  <p className="text-xs text-brand-text/70 leading-relaxed">{role.desc}</p>
                </motion.div>
              ))}
            </div>

            <figure className="overflow-hidden rounded-2xl border border-gray-100">
              <img
                src="/church/oikos-worship.jpg"
                alt={t('worship.oikos.imageAlt')}
                width={2000}
                height={832}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
