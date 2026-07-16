"use client"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { TRANSITIONS } from "@/lib/constants"

interface MagBtnProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  type?: "button" | "submit" | "reset"
  className?: string
  strength?: number
  style?: React.CSSProperties
}

export function MagBtn({
  children,
  onClick,
  href,
  type = "button",
  className = "",
  strength = 0.25,
  style = {},
}: MagBtnProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    setOffset({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    })
  }

  const sharedProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: () => setOffset({ x: 0, y: 0 }),
    className: cn(className),
    style: {
      ...style,
      transform: `translate(${offset.x}px, ${offset.y}px)`,
      transition: `transform 400ms ${TRANSITIONS.smooth}, background-color ${TRANSITIONS.durations.fast}ms, border-color ${TRANSITIONS.durations.fast}ms, color ${TRANSITIONS.durations.fast}ms`,
    },
  }

  if (href) {
    return (
      <a ref={ref} href={href} target="_blank" rel="noopener noreferrer" {...sharedProps}>
        {children}
      </a>
    )
  }

  return (
    <button ref={ref} type={type} onClick={onClick} {...sharedProps}>
      {children}
    </button>
  )
}
