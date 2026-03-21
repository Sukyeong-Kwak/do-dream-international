import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  region: string;
  cohort: string;
}

const cardStyles = [
  {
    wrapper: 'bg-white border border-brand-primary-teal/25',
    avatar: 'bg-brand-primary-teal',
    badge: 'bg-brand-primary-teal/10 text-brand-primary-teal',
    name: 'text-brand-primary-teal',
  },
  {
    wrapper: 'bg-brand-primary-blue/5 border border-brand-primary-blue/20',
    avatar: 'bg-brand-primary-blue',
    badge: 'bg-brand-primary-blue/10 text-brand-primary-blue',
    name: 'text-brand-primary-blue',
  },
];

export default function TestimonialCarousel() {
  const { t } = useTranslation('home');
  const testimonials = t('stories.items', { returnObjects: true }) as Testimonial[];

  return (
    <section className="section-padding bg-brand-bg/40 border-y border-gray-200">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary-blue mb-3 tracking-tighter">
            {t('stories.title')}
          </h2>
          <p className="text-brand-muted text-base max-w-xl mx-auto">
            {t('stories.subtitle')}
          </p>
        </div>

        {/* Big decorative quote */}
        <div className="text-center text-8xl text-brand-primary-teal/15 font-serif leading-none select-none mb-8">
          "
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-6xl mx-auto">
          {Array.isArray(testimonials) && testimonials.map((item, index) => {
            const style = cardStyles[index % cardStyles.length];
            // Extract initials: remove role suffix, take first 2 chars of name
            const cleanName = item.name
              .replace(/인턴선교사/g, '')
              .replace(/Intern Missionary/g, '')
              .trim();
            const initials = cleanName.slice(0, 2);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative pt-8"
              >
                {/* Avatar — overlaps top of card */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full ${style.avatar} text-white flex items-center justify-center text-lg font-bold shadow-md border-4 border-white z-10`}>
                  {initials}
                </div>

                {/* Card body */}
                <div className={`${style.wrapper} rounded-2xl pt-10 pb-8 px-7 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full`}>
                  {/* Quote */}
                  <p className="text-brand-text text-base leading-relaxed italic flex-1 mb-6">
                    "{item.quote}"
                  </p>

                  {/* Footer */}
                  <div className="border-t border-gray-100 pt-4">
                    <p className={`font-bold text-sm mb-2 ${style.name}`}>
                      {item.name}
                    </p>
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${style.badge}`}>
                        {item.region}
                      </span>
                      <span className="text-xs text-brand-muted">
                        {t('stories.classOf')} {item.cohort}
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
