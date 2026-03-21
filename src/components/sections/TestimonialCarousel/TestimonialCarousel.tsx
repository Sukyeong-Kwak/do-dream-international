import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  region: string;
  cohort: string;
}

// Alternating card accent colors
const cardAccents = [
  { bg: 'bg-white', border: 'border-brand-primary-teal/30', badge: 'bg-brand-primary-teal/10 text-brand-primary-teal', avatar: 'bg-brand-primary-teal' },
  { bg: 'bg-brand-primary-blue/5', border: 'border-brand-primary-blue/20', badge: 'bg-brand-primary-blue/10 text-brand-primary-blue', avatar: 'bg-brand-primary-blue' },
  { bg: 'bg-white', border: 'border-brand-primary-teal/30', badge: 'bg-brand-primary-teal/10 text-brand-primary-teal', avatar: 'bg-brand-primary-teal' },
  { bg: 'bg-brand-primary-blue/5', border: 'border-brand-primary-blue/20', badge: 'bg-brand-primary-blue/10 text-brand-primary-blue', avatar: 'bg-brand-primary-blue' },
  { bg: 'bg-white', border: 'border-brand-primary-teal/30', badge: 'bg-brand-primary-teal/10 text-brand-primary-teal', avatar: 'bg-brand-primary-teal' },
  { bg: 'bg-brand-primary-blue/5', border: 'border-brand-primary-blue/20', badge: 'bg-brand-primary-blue/10 text-brand-primary-blue', avatar: 'bg-brand-primary-blue' },
];

export default function TestimonialCarousel() {
  const { t } = useTranslation('home');
  const testimonials = t('stories.items', { returnObjects: true }) as Testimonial[];

  return (
    <section className="section-padding bg-brand-bg/40 border-y border-gray-200 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary-blue mb-3 tracking-tighter">
            {t('stories.title')}
          </h2>
          <p className="text-brand-muted text-base max-w-xl mx-auto">
            {t('stories.subtitle')}
          </p>
        </div>

        {/* Big quote decoration */}
        <div className="text-center mb-10 text-7xl text-brand-primary-teal/20 font-serif leading-none select-none">
          "
        </div>

        {/* Cards grid — 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Array.isArray(testimonials) && testimonials.map((t_item, index) => {
            const accent = cardAccents[index % cardAccents.length];
            // Initials from name — take first two characters
            const initials = t_item.name.replace(/인턴선교사|Intern Missionary/g, '').trim().slice(0, 2);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Card */}
                <div className={`${accent.bg} border ${accent.border} rounded-2xl p-8 pt-12 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full`}>
                  {/* Circular avatar — overlaps top */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full ${accent.avatar} text-white flex items-center justify-center text-lg font-bold shadow-md border-4 border-white`}>
                    {initials}
                  </div>

                  {/* Quote text */}
                  <p className="text-brand-text text-base leading-relaxed italic flex-1 mb-6">
                    "{t_item.quote}"
                  </p>

                  {/* Divider */}
                  <div className="border-t border-gray-100 pt-5">
                    {/* Name */}
                    <p className={`font-bold text-sm ${accent.avatar === 'bg-brand-primary-teal' ? 'text-brand-primary-teal' : 'text-brand-primary-blue'}`}>
                      {t_item.name}
                    </p>
                    {/* Region & Cohort */}
                    <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${accent.badge}`}>
                        {t_item.region}
                      </span>
                      <span className="text-xs text-brand-muted">
                        {t('stories.classOf')} {t_item.cohort}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
