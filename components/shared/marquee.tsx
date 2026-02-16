"use client"

import { useTheme } from "@/contexts/theme-context"

interface MarqueeProps {
  items: string[]
  speed?: number
}

export function Marquee({ items, speed = 35 }: MarqueeProps) {
  const { tokens } = useTheme()

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-flex"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-medium uppercase tracking-widest select-none"
            style={{ color: tokens.textGhost }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
