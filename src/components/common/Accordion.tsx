import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi2';
import { staggerItem } from '../../lib/motion';

interface AccordionItem {
  trigger: ReactNode;
  content: ReactNode;
  activeTrigger?: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
  activeClass?: string;
  inactiveClass?: string;
  className?: string;
}

export default function Accordion({
  items,
  defaultOpen = 0,
  activeClass = 'border-brand-primary-teal shadow-md bg-white',
  inactiveClass = 'border-gray-100 bg-white hover:border-gray-200',
  className = '',
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={index}
            {...staggerItem(index, 0.08)}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen ? activeClass : inactiveClass
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full p-5 md:p-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                {isOpen && item.activeTrigger ? item.activeTrigger : item.trigger}
              </div>
              <HiChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ml-4 ${
                  isOpen ? 'rotate-180 text-brand-primary-teal' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-gray-100 pt-4">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
