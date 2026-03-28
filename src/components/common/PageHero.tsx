import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroEntry } from '../../lib/motion';

interface PageHeroProps {
  image: string;
  imageAlt: string;
  label: string;
  title?: string;
  titleHtml?: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  ctaExternal?: boolean;
  minHeight?: string;
  imageOpacity?: string;
  titleClassName?: string;
}

export default function PageHero({
  image,
  imageAlt,
  label,
  title,
  titleHtml,
  subtitle,
  ctaText,
  ctaHref,
  ctaExternal = false,
  minHeight = 'min-h-[70vh]',
  imageOpacity = 'opacity-20',
  titleClassName = 'text-4xl md:text-5xl lg:text-6xl max-w-4xl',
}: PageHeroProps) {
  const ctaClassName =
    'inline-block bg-white text-brand-primary-blue hover:bg-white/90 transition-all duration-300 rounded-full px-12 py-4 text-base font-bold tracking-wide shadow-xl';

  return (
    <section
      className={`relative ${minHeight} flex items-center justify-center overflow-hidden bg-brand-primary-blue`}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className={`w-full h-full object-cover ${imageOpacity}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary-blue/60 via-brand-primary-blue/40 to-brand-primary-blue/90" />
      </div>

      <div className="relative z-10 container-custom text-center px-6">
        <motion.p
          {...heroEntry(0.2)}
          className="text-brand-primary-teal font-semibold text-sm md:text-base tracking-widest uppercase mb-6"
        >
          {label}
        </motion.p>

        {titleHtml ? (
          <motion.h1
            {...heroEntry(0.4)}
            className={`${titleClassName} font-extrabold text-white leading-tight tracking-tighter mx-auto mb-8`}
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />
        ) : (
          <motion.h1
            {...heroEntry(0.4)}
            className={`${titleClassName} font-extrabold text-white leading-tight tracking-tighter mx-auto mb-8`}
          >
            {title}
          </motion.h1>
        )}

        <motion.p
          {...heroEntry(0.6)}
          className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {subtitle}
        </motion.p>

        <motion.div {...heroEntry(0.8)}>
          {ctaExternal ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClassName}
            >
              {ctaText}
            </a>
          ) : ctaHref.startsWith('#') ? (
            <a href={ctaHref} className={ctaClassName}>
              {ctaText}
            </a>
          ) : (
            <Link to={ctaHref} className={ctaClassName}>
              {ctaText}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
