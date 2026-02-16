"use client"

import { useReveal } from "@/lib/hooks/use-reveal"
import { cn } from "@/lib/utils"
import { TRANSITIONS } from "@/lib/constants"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const [ref, isVisible] = useReveal(0.2)
  const words = text.split(" ")

  return (
    <span ref={ref} className={cn(className)}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden" }}>
          <span
            style={{
              display: "inline-block",
              transform: isVisible ? "translateY(0) rotate(0)" : "translateY(115%) rotate(2deg)",
              opacity: isVisible ? 1 : 0,
              transition: `all ${TRANSITIONS.durations.slow}ms ${TRANSITIONS.smooth} ${delay + i * 55}ms`,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}
