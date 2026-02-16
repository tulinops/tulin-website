"use client"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { TRANSITIONS } from "@/lib/constants"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    setStyle({
      transform: `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) scale(1.008)`,
      transition: "transform 0.15s ease-out",
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateY(0) rotateX(0) scale(1)",
      transition: `transform ${TRANSITIONS.durations.medium}ms ${TRANSITIONS.smooth}`,
    })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(className)}
      style={style}
    >
      {children}
    </div>
  )
}
