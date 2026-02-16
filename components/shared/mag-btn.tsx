"use client"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { TRANSITIONS } from "@/lib/constants"

interface MagBtnProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  strength?: number
  style?: React.CSSProperties
}

export function MagBtn({
  children,
  onClick,
  className = "",
  strength = 0.25,
  style = {},
}: MagBtnProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    setOffset({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    })
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className={cn(className)}
      style={{
        ...style,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: `transform 400ms ${TRANSITIONS.smooth}, background-color ${TRANSITIONS.durations.fast}ms, border-color ${TRANSITIONS.durations.fast}ms, color ${TRANSITIONS.durations.fast}ms`,
      }}
    >
      {children}
    </button>
  )
}
