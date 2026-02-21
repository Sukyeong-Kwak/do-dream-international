import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

export default function ProgramOverview() {
  const { t } = useTranslation('home');

  const phases = [
    {
      number: '01',
      title: t('program.phases.orientation'),
      duration: '2 weeks',
      description: 'Korean culture, language basics, community integration',
    },
    {
      number: '02',
      title: t('program.phases.training'),
      duration: '3 months',
      description: 'Theology, missiology, leadership development',
    },
    {
      number: '03',
      title: t('program.phases.ministry'),
      duration: '2 months',
      description: 'Local church service, outreach projects',
    },
    {
      number: '04',
      title: t('program.phases.field'),
      duration: '1 month',
      description: 'Short-term missions in Asia',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('program.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive training through four distinct phases
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-4 gap-4">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Circle */}
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-white shadow-lg">
                  <span className="text-white font-bold text-lg">{phase.number}</span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{phase.title}</h3>
                  <p className="text-sm text-accent-600 font-semibold mb-2">{phase.duration}</p>
                  <p className="text-sm text-gray-600">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">{phase.number}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{phase.title}</h3>
                <p className="text-sm text-accent-600 font-semibold mb-2">{phase.duration}</p>
                <p className="text-sm text-gray-600">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/program">
            <Button variant="secondary">Learn More About the Program</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
