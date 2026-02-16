"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface OrbProps {
  className?: string
  size?: number
  color: string
}

export function Orb({ className, size = 400, color }: OrbProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frameId: number
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000

      if (ref.current) {
        ref.current.style.transform = `translate(${Math.sin(elapsed * 0.3) * 30}px, ${
          Math.cos(elapsed * 0.2) * 25
        }px) scale(${1 + Math.sin(elapsed * 0.15) * 0.08})`
      }

      frameId = requestAnimationFrame(animate)
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div
      ref={ref}
      className={cn("absolute rounded-full blur-3xl pointer-events-none", className)}
      style={{ width: size, height: size, background: color }}
    />
  )
}
