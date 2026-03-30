import { motion } from 'framer-motion';

interface NumberedListItem {
  title: string;
  desc: string;
  num?: string;
}

interface NumberedListProps {
  items: NumberedListItem[];
  numSize?: string;
  titleSize?: string;
  padding?: string;
}

export default function NumberedList({
  items,
  numSize = 'text-5xl md:text-6xl',
  titleSize = 'text-2xl md:text-3xl lg:text-4xl',
  padding = 'py-10 md:py-14',
}: NumberedListProps) {
  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`group border-t border-gray-200 ${padding}`}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
            <span className={`text-brand-primary-teal/40 font-bold ${numSize} leading-none shrink-0 md:w-28`}>
              {item.num ?? String(index + 1).padStart(2, '0')}
            </span>
            <h3 className={`${titleSize} font-bold text-brand-primary-blue leading-snug md:flex-1 group-hover:text-brand-primary-teal transition-colors duration-300`}>
              {item.title}
            </h3>
            <p className="text-brand-text/70 text-base md:text-lg leading-relaxed md:flex-1 max-w-lg">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
      <div className="border-t border-gray-200" />
    </div>
  );
}
