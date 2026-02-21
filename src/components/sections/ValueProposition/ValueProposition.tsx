import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiGlobeAlt, HiLightBulb, HiUserGroup } from 'react-icons/hi';
import Card from '../../common/Card/Card';

export default function ValueProposition() {
  const { t } = useTranslation('home');

  const values = [
    {
      icon: HiLightBulb,
      title: t('value.unique.title'),
      description: t('value.unique.description'),
      color: 'text-accent-500',
    },
    {
      icon: HiGlobeAlt,
      title: t('value.reverse.title'),
      description: t('value.reverse.description'),
      color: 'text-primary-500',
    },
    {
      icon: HiUserGroup,
      title: t('value.global.title'),
      description: t('value.global.description'),
      color: 'text-teal-500',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          {t('value.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card hoverable className="h-full text-center">
                <value.icon className={`w-16 h-16 ${value.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
