import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineBuildingLibrary, HiOutlineSparkles, HiOutlineSun, HiOutlineHandRaised, HiChevronDown } from 'react-icons/hi2';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { fadeIn, staggerItem } from '../../../lib/motion';
import SectionHeader from '../../common/SectionHeader';

interface Trip {
  week: string;
  distance: 'short' | 'long';
  location: string;
}

interface MonthSchedule {
  month: string;
  trips: Trip[];
}

interface Spot {
  name: string;
  price: string;
}

interface Category {
  title: string;
  icon: string;
  spots: Spot[];
}

const categoryIcons: Record<string, React.ElementType> = {
  history: HiOutlineBuildingLibrary,
  entertainment: HiOutlineSparkles,
  relaxation: HiOutlineSun,
  experience: HiOutlineHandRaised,
};

const categoryColors = [
  { bg: 'bg-brand-primary-blue/5', icon: 'bg-brand-primary-blue/10 text-brand-primary-blue', border: 'border-brand-primary-blue/20', badge: 'bg-brand-primary-blue/10 text-brand-primary-blue' },
  { bg: 'bg-brand-accent-pink/5', icon: 'bg-brand-accent-pink/10 text-brand-accent-pink', border: 'border-brand-accent-pink/20', badge: 'bg-brand-accent-pink/10 text-brand-accent-pink' },
  { bg: 'bg-brand-primary-teal/5', icon: 'bg-brand-primary-teal/10 text-brand-primary-teal', border: 'border-brand-primary-teal/20', badge: 'bg-brand-primary-teal/10 text-brand-primary-teal' },
  { bg: 'bg-amber-50', icon: 'bg-amber-100 text-amber-600', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700' },
];

export default function KLifeProgram() {
  const { t } = useTranslation('program');
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  const months = t('klife.months', { returnObjects: true }) as MonthSchedule[];
  const categories = t('klife.categories', { returnObjects: true }) as Category[];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <SectionHeader
          label={t('klife.label')}
          title={t('klife.title')}
          subtitle={t('klife.subtitle')}
        />

        {/* Monthly Schedule */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.h3 {...fadeIn} className="text-xl font-bold text-brand-primary-blue mb-6 text-center">
            {t('klife.scheduleTitle')}
          </motion.h3>

          <div className="grid gap-4 md:gap-6">
            {Array.isArray(months) && months.map((month, mIdx) => (
              <motion.div
                key={mIdx}
                {...staggerItem(mIdx)}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
              >
                <div className="bg-brand-primary-blue px-6 py-3">
                  <h4 className="text-white font-bold text-lg">{month.month}</h4>
                </div>
                <div className="divide-y divide-gray-100">
                  {month.trips.map((trip, tIdx) => (
                    <div key={tIdx} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-sm font-semibold text-brand-muted w-16">{trip.week}</span>
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                          trip.distance === 'short'
                            ? 'bg-brand-primary-teal/10 text-brand-primary-teal'
                            : 'bg-brand-accent-pink/10 text-brand-accent-pink'
                        }`}>
                          {trip.distance === 'short' ? t('klife.short') : t('klife.long')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <HiOutlineLocationMarker className="w-4 h-4 text-brand-primary-teal shrink-0" />
                        <span className="text-brand-text font-medium text-sm leading-relaxed">{trip.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Details */}
        <div className="max-w-4xl mx-auto">
          <motion.h3 {...fadeIn} className="text-xl font-bold text-brand-primary-blue mb-6 text-center">
            {t('klife.detailsTitle')}
          </motion.h3>

          <div className="space-y-3">
            {Array.isArray(categories) && categories.map((category, cIdx) => {
              const color = categoryColors[cIdx % categoryColors.length];
              const Icon = categoryIcons[category.icon] || HiOutlineSparkles;

              return (
                <motion.div
                  key={cIdx}
                  {...staggerItem(cIdx, 0.08)}
                  className={`rounded-2xl border transition-all duration-300 ${
                    openCategory === cIdx
                      ? `${color.border} shadow-md bg-white`
                      : 'border-gray-100 bg-white hover:border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenCategory(openCategory === cIdx ? null : cIdx)}
                    className="w-full p-5 md:p-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color.icon}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className={`text-lg font-bold ${
                        openCategory === cIdx ? 'text-brand-primary-blue' : 'text-brand-primary-blue/80'
                      }`}>
                        {category.title}
                      </h4>
                    </div>
                    <HiChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      openCategory === cIdx ? 'rotate-180 text-brand-primary-teal' : ''
                    }`} />
                  </button>

                  <AnimatePresence>
                    {openCategory === cIdx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-gray-100 pt-4">
                          <div className="grid gap-2">
                            {category.spots.map((spot, sIdx) => (
                              <div
                                key={sIdx}
                                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 px-4 py-3 rounded-xl ${color.bg}`}
                              >
                                <span className="font-medium text-brand-text text-sm">{spot.name}</span>
                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg whitespace-nowrap ${color.badge}`}>
                                  {spot.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
