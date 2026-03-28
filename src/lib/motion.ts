export const fadeIn = {
  initial: { opacity: 0 } as const,
  whileInView: { opacity: 1 } as const,
  viewport: { once: true } as const,
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
};

export const fadeInUpSlow = {
  ...fadeInUp,
  transition: { duration: 0.6 } as const,
};

export const staggerItem = (index: number, baseDelay = 0.1) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { delay: index * baseDelay },
});

export const heroEntry = (delay: number) => ({
  initial: { opacity: 0, y: delay > 0.3 ? 30 : 20 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.8, delay },
});
