import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/motion';

interface Step {
  num: string;
  title: string;
  desc: string;
  icon?: ReactNode;
  textColor?: string;
  borderColor?: string;
  iconColor?: string;
}

interface StepsProcessProps {
  steps: Step[];
  className?: string;
}

export default function StepsProcess({ steps, className = '' }: StepsProcessProps) {
  const hasIcons = steps.some((s) => s.icon);

  return (
    <div className={className}>
      {/* Mobile: Vertical timeline */}
      {hasIcons && (
        <div className="md:hidden relative max-w-4xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary-blue via-brand-primary-teal to-brand-accent-pink" />
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex items-start gap-8 mb-10 last:mb-0"
            >
              <div className={`relative z-10 shrink-0 w-12 h-12 rounded-full bg-white shadow-lg border-2 ${step.borderColor ?? 'border-brand-primary-blue'} flex items-center justify-center`}>
                {step.icon ?? <span className={`font-bold text-sm ${step.iconColor ?? 'text-brand-primary-blue'}`}>{step.num}</span>}
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold ${step.textColor ?? 'text-brand-primary-blue'} mb-2`}>{step.title}</h3>
                <p className="text-brand-text/70 leading-relaxed text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Desktop / Non-icon layout */}
      <div className={hasIcons ? 'hidden md:block' : ''}>
        <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {hasIcons && (
            <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-0.5 -translate-y-px bg-gradient-to-r from-brand-primary-blue via-brand-primary-teal to-brand-accent-pink" />
          )}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center flex flex-col items-center"
            >
              {!hasIcons && index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-gray-200" />
              )}
              <div className={`relative z-10 ${hasIcons ? 'w-16 h-16' : 'w-12 h-12'} rounded-full ${hasIcons ? 'bg-white shadow-lg' : ''} border-2 ${step.borderColor ?? 'border-brand-primary-blue/10'} flex items-center justify-center ${hasIcons ? 'mb-5' : 'mb-4'} ${!hasIcons ? (step.iconColor ?? 'bg-brand-primary-blue/10') : ''}`}>
                {step.icon ?? <span className={`font-bold text-sm ${step.iconColor ? '' : 'text-brand-primary-blue'}`}>{step.num}</span>}
              </div>
              <h3 className={`text-lg md:text-xl font-bold ${step.textColor ?? 'text-brand-primary-blue'} mb-2 md:mb-3`}>{step.title}</h3>
              <p className="text-brand-text/70 leading-relaxed text-sm max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
