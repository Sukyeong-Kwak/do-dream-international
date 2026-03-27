import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiOutlinePhone, HiOutlineGlobeAlt } from 'react-icons/hi';
import { HiMapPin } from 'react-icons/hi2';

export default function ContactInfo() {
  const { t } = useTranslation('contact');

  const items = [
    {
      icon: HiOutlinePhone,
      label: t('info.phone'),
      value: t('info.phone_value'),
      color: 'text-brand-primary-teal bg-brand-primary-teal/10',
    },
    {
      icon: HiOutlineGlobeAlt,
      label: t('info.website'),
      value: t('info.website_value'),
      color: 'text-brand-primary-blue bg-brand-primary-blue/10',
      href: t('info.website_value'),
    },
    {
      icon: HiMapPin,
      label: t('info.location'),
      value: t('info.location_value'),
      color: 'text-brand-accent-pink bg-brand-accent-pink/10',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-brand-bg/60">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900 mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-primary-teal hover:underline text-sm break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-brand-text/70 text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
