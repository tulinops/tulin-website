export const revealVariants = {
  // Standard fade up
  fadeUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },

  // Fade in from left
  fadeLeft: {
    initial: { opacity: 0, x: -24 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },

  // Fade in from right
  fadeRight: {
    initial: { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },

  // Scale up with fade
  scaleUp: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },

  // Blur fade in
  blurIn: {
    initial: { opacity: 0, filter: 'blur(8px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },

  // Stagger children (for lists)
  staggerParent: {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  },

  staggerChild: {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
}

export type RevealVariant = keyof typeof revealVariants
