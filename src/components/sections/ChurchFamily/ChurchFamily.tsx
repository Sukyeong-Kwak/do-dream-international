import type { IconType } from 'react-icons';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  HiVideoCamera,
  HiSpeakerWave,
  HiBookOpen,
  HiAcademicCap,
  HiBuildingLibrary,
  HiHandRaised,
  HiMusicalNote,
  HiUserGroup,
} from 'react-icons/hi2';
import { FaCoffee } from 'react-icons/fa';
import SectionHeader from '../../common/SectionHeader';
import { fadeInUp, staggerItem } from '../../../lib/motion';

interface ServingArea {
  icon: string;
  name: string;
  desc?: string;
}

const ICONS: Record<string, IconType> = {
  media: HiVideoCamera,
  sound: HiSpeakerWave,
  cafe: FaCoffee,
  library: HiBookOpen,
  campus: HiAcademicCap,
  school: HiBuildingLibrary,
  worship: HiHandRaised,
  music: HiMusicalNote,
};

/** Church Family — afternoon Ministry & Serving Time areas, from the program guidebook. */
export default function ChurchFamily() {
  const { t } = useTranslation('program');
  const areas = t('churchFamily.areas', { returnObjects: true }) as ServingArea[];

  if (!Array.isArray(areas) || areas.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-brand-bg/40" id="church-family">
      <div className="container-custom">
        <SectionHeader
          label={t('churchFamily.label')}
          title={t('churchFamily.title')}
          subtitle={t('churchFamily.subtitle')}
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {areas.map((area, index) => {
              const Icon = ICONS[area.icon] ?? HiUserGroup;
              return (
                <motion.div
                  key={area.name}
                  {...staggerItem(index, 0.05)}
                  className="flex flex-col items-center text-center rounded-2xl border border-gray-100 bg-white px-4 py-6 md:px-5 md:py-7 hover:border-brand-primary-teal/30 transition-colors"
                >
                  <div className="w-11 h-11 rounded-full bg-brand-primary-teal/10 text-brand-primary-teal flex items-center justify-center mb-3 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-brand-primary-blue leading-snug">
                    {area.name}
                  </h3>
                  {area.desc && (
                    <p className="mt-1 text-xs text-brand-text/60 leading-relaxed">{area.desc}</p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Young adult small groups */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 md:mt-6 flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-brand-primary-blue/15 bg-brand-primary-blue/[0.04] px-6 py-6"
          >
            <div className="w-11 h-11 rounded-full bg-brand-primary-blue/10 text-brand-primary-blue flex items-center justify-center shrink-0">
              <HiUserGroup className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-brand-primary-blue mb-1">
                {t('churchFamily.smallGroup.title')}
              </h3>
              <p className="text-sm text-brand-text/70 leading-relaxed">
                {t('churchFamily.smallGroup.desc')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
