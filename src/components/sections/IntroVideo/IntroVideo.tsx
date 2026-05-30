import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUpSlow } from '../../../lib/motion';

interface IntroVideoProps {
  youtubeId: string;
}

export default function IntroVideo({ youtubeId }: IntroVideoProps) {
  const { t } = useTranslation('home');
  const embedSrc = `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`;

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-10">
          <motion.p
            {...fadeIn}
            className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4"
          >
            {t('intro.section.label')}
          </motion.p>
          <motion.h2
            {...fadeInUpSlow}
            className="text-3xl md:text-4xl font-bold text-brand-primary-blue mb-6"
            dangerouslySetInnerHTML={{ __html: t('intro.section.title') }}
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-brand-text/70 max-w-2xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('intro.section.subtitle') }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-black">
            <iframe
              src={embedSrc}
              title={t('intro.section.iframeTitle')}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
