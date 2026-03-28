import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiBookOpen, HiGlobeAsiaAustralia, HiUserGroup } from 'react-icons/hi2';
import type { IconType } from 'react-icons';
import { fadeIn, fadeInUpSlow } from '../../../lib/motion';
import { getBrandColor } from '../../../lib/colors';

interface Feature {
  icon: IconType;
  title: string;
  description: string;
  highlight: string;
}

export default function ProgramOverview() {
  const { t } = useTranslation('home');

  const features: Feature[] = [
    { icon: HiBookOpen, title: t('program.f1_title'), description: t('program.f1_desc'), highlight: t('program.f1_highlight') },
    { icon: HiGlobeAsiaAustralia, title: t('program.f2_title'), description: t('program.f2_desc'), highlight: t('program.f2_highlight') },
    { icon: HiUserGroup, title: t('program.f3_title'), description: t('program.f3_desc'), highlight: t('program.f3_highlight') },
  ];

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden" id="program">
      <div className="container-custom relative z-10">
        <div className="text-center mb-10">
          <motion.p {...fadeIn} className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4">
            Program
          </motion.p>
          <motion.h2
            {...fadeInUpSlow}
            className="text-3xl md:text-4xl font-bold text-brand-primary-blue mb-6"
            dangerouslySetInnerHTML={{ __html: t('program.title') }}
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-brand-text/70 max-w-2xl mx-auto leading-relaxed"
          >
            {t('program.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const color = getBrandColor(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative rounded-2xl p-8 md:p-10 ${color.bg} flex flex-col`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${color.icon}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <p className={`text-3xl md:text-4xl font-bold leading-tight tracking-tighter mb-6 ${color.highlight}`}>
                  {feature.highlight}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary-blue mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-text/70 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
