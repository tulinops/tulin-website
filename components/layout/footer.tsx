"use client"

import { useTheme } from "@/contexts/theme-context"

export function Footer() {
  const { tokens } = useTheme()

  return (
    <footer
      className="py-10"
      style={{
        background: tokens.bgAlt,
        borderTop: `1px solid ${tokens.footerBorder}`,
      }}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: tokens.btnBg }}
          >
            <span className="text-[10px] font-bold" style={{ color: tokens.btnText }}>
              T
            </span>
          </div>
          <span className="text-xs font-semibold" style={{ color: tokens.text, opacity: 0.7 }}>
            Tulin
          </span>
        </div>
        <p className="text-[11px]" style={{ color: tokens.textGhost }}>
          &copy; {new Date().getFullYear()} Tulin Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
