import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

export default function ProgramIdentity() {
  const { t } = useTranslation('program');
  const stats = t('identity.stats', { returnObjects: true }) as Stat[];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4"
        >
          {t('identity.label')}
        </motion.p>

        {/* Purpose quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl text-brand-primary-blue font-medium italic leading-relaxed mb-10"
        >
          "{t('identity.purpose')}"
        </motion.p>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {Array.isArray(stats) && stats.map((stat, index) => (
            <span
              key={index}
              className="bg-brand-primary-teal/10 text-brand-primary-teal px-5 py-2 rounded-full font-semibold text-sm"
            >
              {stat.value} · {stat.label}
            </span>
          ))}
        </motion.div>

        {/* Organization byline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border-t border-gray-100 pt-6 space-y-1 text-sm text-brand-muted"
        >
          <p>{t('identity.org')}</p>
          <p>{t('identity.director')}</p>
          <p>{t('identity.dept')}</p>
        </motion.div>
      </div>
    </section>
  );
}
