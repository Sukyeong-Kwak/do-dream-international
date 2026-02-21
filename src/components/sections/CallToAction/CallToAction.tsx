import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../../common/Button/Button';

export default function CallToAction() {
  const { t } = useTranslation('home');

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/apply">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 min-w-[200px]">
                {t('cta.button')}
              </Button>
            </Link>
            <Link to="/program">
              <Button size="lg" variant="secondary" className="border-white text-white hover:bg-white/10 min-w-[200px]">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Application Deadline Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg"
          >
            <p className="text-sm font-semibold text-primary-100">
              Application Deadline: May 31, 2026
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
