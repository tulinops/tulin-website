"use client"

import { useState, useRef, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"
import { Sun, Moon, Monitor } from "lucide-react"

export function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme, tokens } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const options = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ] as const

  const ActiveIcon = options.find((o) => o.value === theme)?.icon || Sun

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
        style={{
          color: tokens.textMuted,
          background: open ? tokens.bgSurface : "transparent",
        }}
      >
        <ActiveIcon size={14} />
      </button>

      {open && (
        <div
          className="absolute top-full right-0 mt-2 rounded-xl p-1 min-w-[140px] border shadow-xl backdrop-blur-xl z-50"
          style={{
            background: tokens.bgCard,
            borderColor: tokens.border,
          }}
        >
          {options.map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.value}
                onClick={() => {
                  setTheme(option.value)
                  setOpen(false)
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors duration-200"
                style={{
                  color: theme === option.value ? tokens.text : tokens.textMuted,
                  background: theme === option.value ? tokens.bgSurface : "transparent",
                }}
              >
                <Icon size={14} />
                <span className="text-xs font-medium">{option.label}</span>
                {theme === option.value && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-auto"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
