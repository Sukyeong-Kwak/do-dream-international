import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface VisionItem {
  title: string;
  desc: string;
}

export default function ProgramVision() {
  const { t } = useTranslation('program');
  const items = t('vision.items', { returnObjects: true }) as VisionItem[];

  return (
    <section className="py-16 md:py-24 bg-brand-bg/60">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4"
        >
          {t('vision.label')}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-brand-primary-blue leading-tight mb-12 max-w-2xl"
        >
          {t('vision.title')}
        </motion.h2>

        <div className="space-y-0">
          {Array.isArray(items) && items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-t border-gray-200 py-8 md:py-10"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-16">
                <span className="text-brand-primary-teal/40 font-bold text-4xl md:text-5xl leading-none shrink-0 md:w-20">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary-blue leading-snug md:flex-1 group-hover:text-brand-primary-teal transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-brand-text/70 text-base leading-relaxed md:flex-1 max-w-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
}
