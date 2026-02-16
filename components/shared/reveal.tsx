"use client"

import { useReveal } from "@/lib/hooks/use-reveal"
import { cn } from "@/lib/utils"
import { TRANSITIONS } from "@/lib/constants"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className = "", delay = 0, y = 50 }: RevealProps) {
  const [ref, isVisible] = useReveal(0.08)

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${TRANSITIONS.durations.reveal}ms ${TRANSITIONS.smooth} ${delay}ms, transform ${TRANSITIONS.durations.revealTransform}ms ${TRANSITIONS.smooth} ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
