import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiOutlineBuildingLibrary, HiOutlineSparkles, HiOutlineSun, HiOutlineHandRaised } from 'react-icons/hi2';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { fadeIn, staggerItem } from '../../../lib/motion';
import SectionHeader from '../../common/SectionHeader';
import Accordion from '../../common/Accordion';

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
  const months = t('klife.months', { returnObjects: true }) as MonthSchedule[];
  const categories = t('klife.categories', { returnObjects: true }) as Category[];

  const accordionItems = Array.isArray(categories)
    ? categories.map((category, cIdx) => {
        const color = categoryColors[cIdx % categoryColors.length];
        const Icon = categoryIcons[category.icon] || HiOutlineSparkles;

        return {
          trigger: (
            <>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color.icon}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-brand-primary-blue/80">{category.title}</h4>
            </>
          ),
          activeTrigger: (
            <>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color.icon}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-brand-primary-blue">{category.title}</h4>
            </>
          ),
          content: (
            <div className="grid gap-2">
              {category.spots.map((spot, sIdx) => (
                <div key={sIdx} className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 px-4 py-3 rounded-xl ${color.bg}`}>
                  <span className="font-medium text-brand-text text-sm">{spot.name}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg whitespace-nowrap ${color.badge}`}>
                    {spot.price}
                  </span>
                </div>
              ))}
            </div>
          ),
          activeClass: `${color.border} shadow-md bg-white`,
        };
      })
    : [];

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
              <motion.div key={mIdx} {...staggerItem(mIdx)} className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
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

          <Accordion items={accordionItems} />
        </div>
      </div>
    </section>
  );
}
