import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiOutlineUserGroup, HiOutlineGlobeAlt, HiOutlineLifebuoy } from 'react-icons/hi2';
import SectionHeader from '../../common/SectionHeader';
import { staggerItem } from '../../../lib/motion';
import { getBrandColor } from '../../../lib/colors';

interface Person {
  name: string;
  roles: string[];
  desc: string;
}

/** Program leadership, guest instructors, and the program coordinator. */
export default function Instructors() {
  const { t } = useTranslation('program');
  const people = t('instructors.people', { returnObjects: true }) as Person[];

  return (
    <section className="py-16 md:py-24 bg-brand-bg/40" id="instructors">
      <div className="container-custom">
        <SectionHeader
          label={t('instructors.label')}
          title={t('instructors.title')}
          subtitle={t('instructors.subtitle')}
        />

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <HiOutlineUserGroup className="w-5 h-5 text-brand-primary-teal" />
            <h3 className="text-xl font-bold text-brand-primary-blue">{t('instructors.leadershipTitle')}</h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 mb-12">
            {Array.isArray(people) && people.map((person, index) => {
              const color = getBrandColor(index);
              return (
                <motion.div
                  key={person.name}
                  {...staggerItem(index, 0.08)}
                  className={`rounded-2xl border ${color.border} ${color.bg} p-6 md:p-7`}
                >
                  <h4 className="text-lg font-bold text-brand-primary-blue mb-3">{person.name}</h4>
                  <ul className="space-y-1 mb-4">
                    {Array.isArray(person.roles) && person.roles.map((role) => (
                      <li key={role} className={`text-xs font-semibold ${color.text}`}>{role}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-brand-text/75 leading-relaxed italic">{person.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <motion.div {...staggerItem(0, 0.08)} className="rounded-2xl border border-gray-100 bg-white p-6 md:p-7">
              <div className="flex items-center gap-2.5 mb-3">
                <HiOutlineGlobeAlt className="w-5 h-5 text-brand-primary-teal" />
                <h3 className="text-base font-bold text-brand-primary-blue">{t('instructors.guestTitle')}</h3>
              </div>
              <p className="text-sm text-brand-text/75 leading-relaxed">{t('instructors.guestDesc')}</p>
            </motion.div>

            <motion.div {...staggerItem(1, 0.08)} className="rounded-2xl border border-gray-100 bg-white p-6 md:p-7">
              <div className="flex items-center gap-2.5 mb-3">
                <HiOutlineLifebuoy className="w-5 h-5 text-brand-primary-teal" />
                <h3 className="text-base font-bold text-brand-primary-blue">{t('instructors.coordinatorTitle')}</h3>
              </div>
              <p className="text-sm font-semibold text-brand-primary-teal mb-2">{t('instructors.coordinatorName')}</p>
              <p className="text-sm text-brand-text/75 leading-relaxed">{t('instructors.coordinatorDesc')}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
