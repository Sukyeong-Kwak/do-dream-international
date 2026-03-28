import { motion } from 'framer-motion';
import { fadeIn, fadeInUp } from '../../lib/motion';

interface SectionHeaderProps {
  label: string;
  title?: string;
  titleHtml?: string;
  subtitle?: string;
  dark?: boolean;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  titleHtml,
  subtitle,
  dark = false,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const titleColor = dark ? 'text-white' : 'text-brand-primary-blue';

  return (
    <div className={`${alignClass} mb-14 ${className}`}>
      <motion.p
        {...fadeIn}
        className="text-brand-primary-teal font-semibold text-sm tracking-widest uppercase mb-4"
      >
        {label}
      </motion.p>
      {titleHtml ? (
        <motion.h2
          {...fadeInUp}
          className={`text-3xl md:text-4xl font-bold ${titleColor}`}
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />
      ) : (
        <motion.h2
          {...fadeInUp}
          className={`text-3xl md:text-4xl font-bold ${titleColor}`}
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          {...fadeInUp}
          className={`mt-4 max-w-2xl leading-relaxed ${
            dark ? 'text-white/70' : 'text-brand-text/70'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
