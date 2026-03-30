import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp } from '../../lib/motion';
import { APPLY_FORM_URL } from '../../lib/constants';
import BackgroundBlobs from './BackgroundBlobs';

interface CTASectionProps {
  label?: string;
  title: string;
  subtitle: string;
  buttonText: string;
  variant?: 'light' | 'dark';
  children?: ReactNode;
  footer?: ReactNode;
}

export default function CTASection({
  label,
  title,
  subtitle,
  buttonText,
  variant = 'light',
  children,
  footer,
}: CTASectionProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={`py-16 md:py-24 relative overflow-hidden ${
        isDark ? 'bg-brand-primary-blue' : 'bg-white'
      }`}
    >
      {isDark ? (
        <BackgroundBlobs />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-bg/30 to-brand-bg/50" />
      )}

      <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
        {label && (
          <motion.p
            {...fadeIn}
            className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4"
          >
            {label}
          </motion.p>
        )}

        <motion.h2
          {...fadeInUp}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight ${
            isDark ? 'text-white' : 'text-brand-primary-blue'
          }`}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-lg max-w-2xl mx-auto leading-relaxed mb-12 ${
            isDark ? 'text-white/70' : 'text-brand-text/60'
          }`}
        >
          {subtitle}
        </motion.p>

        {children}

        <motion.a
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          href={APPLY_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block rounded-full px-16 py-5 font-bold tracking-wide text-base shadow-xl transition-all duration-300 hover:-translate-y-1 ${
            isDark
              ? 'bg-white text-brand-primary-blue hover:bg-white/90'
              : 'bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 shadow-brand-primary-blue/20'
          }`}
        >
          {buttonText}
        </motion.a>

        {footer}
      </div>
    </section>
  );
}
