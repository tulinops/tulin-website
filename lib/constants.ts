/**
 * Animation and transition constants
 * Centralized for consistency and maintainability
 */

// Transition easing functions
export const TRANSITIONS = {
  // Premium easing for smooth, natural motion
  smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',

  // Common durations (ms)
  durations: {
    fast: 300,
    medium: 600,
    slow: 800,
    reveal: 1000,
    revealTransform: 1100,
  },
} as const

// Product gradient configurations
export const PRODUCT_GRADIENTS = {
  homes: {
    gradient: 'from-green-500 to-emerald-600',
    accent: '34,197,94', // rgb(34,197,94) = green-500
    letter: 'H',
    icon: '🏠',
  },
  solar: {
    gradient: 'from-amber-400 to-orange-500',
    accent: '245,158,11', // rgb(245,158,11) = amber-500
    letter: 'S',
    icon: '☀️',
  },
  iot: {
    gradient: 'from-cyan-400 to-blue-500',
    accent: '6,182,212', // rgb(6,182,212) = cyan-500
    letter: 'I',
    icon: '📡',
  },
} as const

export type ProductKey = keyof typeof PRODUCT_GRADIENTS
