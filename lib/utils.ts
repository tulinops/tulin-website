import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

type ThemeMode = "light" | "dark"

export const getThemeTokens = (mode: ThemeMode) => {
  const isDark = mode === "dark"

  return {
    bg: isDark ? "#0a0a0b" : "#fafafa",
    bgAlt: isDark ? "#111113" : "#ffffff",
    bgCard: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,1)",
    bgCardHover: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,1)",
    bgSurface: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.015)",
    bgNav: isDark ? "rgba(10,10,11,0.7)" : "rgba(255,255,255,0.7)",
    border: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
    borderHover: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
    text: isDark ? "#f0f0f0" : "#000000",
    textMuted: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.55)",
    textFaint: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)",
    textGhost: isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)",
    btnBg: isDark ? "#ffffff" : "#000000",
    btnText: isDark ? "#000000" : "#ffffff",
    btnBgHover: isDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.8)",
    inputBg: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.8)",
    dot: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
    gradientOpacity: isDark ? 0.2 : 0.15,
    footerBorder: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
    selection: isDark ? "rgba(99,102,241,0.3)" : "rgba(99,102,241,0.15)",
  }
}
