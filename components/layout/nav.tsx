"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"
import { scrollTo } from "@/lib/utils"
import { ThemeSwitcher } from "@/components/shared/theme-switcher"
import { MagBtn } from "@/components/shared/mag-btn"

export function Nav() {
  const { resolvedTheme, tokens } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = ["Products", "About", "Roadmap", "Contact"]

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-700"
      style={{
        background: scrolled ? tokens.bgNav : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? `1px solid ${tokens.border}` : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group"
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
            style={{ background: tokens.btnBg }}
          >
            <span className="text-[11px] font-bold" style={{ color: tokens.btnText }}>
              T
            </span>
          </div>
          <span className="text-sm font-semibold tracking-tight" style={{ color: tokens.text }}>
            Tulin
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="relative text-sm font-medium transition-colors duration-300 group py-1"
              style={{ color: tokens.textMuted }}
            >
              {link}
              <span
                className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-500"
                style={{ background: tokens.textMuted }}
              />
            </button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeSwitcher />
          <MagBtn
            onClick={() => scrollTo("contact")}
            strength={0.2}
            className="text-[11px] font-semibold px-4 py-1.5 rounded-full"
            style={{ background: tokens.btnBg, color: tokens.btnText }}
          >
            Get Started
          </MagBtn>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <button className="p-1" onClick={() => setOpen(!open)}>
            <div className="w-5 flex flex-col gap-1.5 items-end">
              <span
                className="block h-px transition-all duration-500 origin-right"
                style={{
                  background: tokens.text,
                  width: "20px",
                  transform: open ? "rotate(-40deg) translateY(2px)" : "none",
                }}
              />
              <span
                className="block h-px transition-all duration-500 origin-right"
                style={{
                  background: tokens.text,
                  width: open ? "20px" : "14px",
                  transform: open ? "rotate(40deg) translateY(-2px)" : "none",
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-700"
        style={{
          maxHeight: open ? 288 : 0,
          background: tokens.bgNav,
          backdropFilter: "blur(24px)",
          borderBottom: open ? `1px solid ${tokens.border}` : "none",
        }}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => {
                scrollTo(link.toLowerCase())
                setOpen(false)
              }}
              className="text-sm py-3 text-left transition-colors"
              style={{ color: tokens.textMuted }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => {
              scrollTo("contact")
              setOpen(false)
            }}
            className="mt-3 text-sm font-medium px-5 py-3 rounded-full w-full"
            style={{ background: tokens.btnBg, color: tokens.btnText }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
