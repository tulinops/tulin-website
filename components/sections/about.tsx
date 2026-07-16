"use client"

import { useTheme } from "@/contexts/theme-context"
import { Reveal } from "@/components/shared/reveal"
import { Orb } from "@/components/shared/orb"
import { Eye } from "lucide-react"

export function About() {
  const { resolvedTheme, tokens } = useTheme()

  return (
    <section id="about" className="py-28 sm:py-36 relative overflow-hidden" style={{ background: tokens.bg }}>
      <Orb
        className="top-0 right-[-10%]"
        size={500}
        color={`rgba(100,100,200,${resolvedTheme === "dark" ? "0.05" : "0.03"})`}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Two-column header */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Reveal>
            <div>
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
                style={{ color: tokens.textFaint }}
              >
                About
              </p>
              <h2
                className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]"
                style={{ color: tokens.text }}
              >
                We&apos;re fixing what&apos;s broken
                <br />
                in day-to-day operations.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col justify-end">
              <p
                className="text-lg leading-relaxed"
                style={{ color: tokens.textFaint }}
              >
                Started after watching too many teams drown in spreadsheets, WhatsApp groups, and
                tools that don&apos;t talk to each other. We think software should make operations
                easier, not add another subscription to ignore.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Two-column belief cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {[
            {
              title: "What We Believe",
              icon: <Eye size={18} className="text-indigo-400" strokeWidth={1.5} />,
              desc: "Businesses shouldn't need a computer science degree to run their operations. Good software is invisible — it just works.",
            },
            {
              title: "What We Build",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-500">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              ),
              desc: "Software and digital services that solve actual problems instead of adding new ones — community management, solar operations, smart infrastructure, and custom builds.",
            },
          ].map((card, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                className="rounded-[24px] p-8 h-full"
                style={{
                  background: tokens.bgCard,
                  border: `1px solid ${tokens.border}`,
                  boxShadow: tokens.cardShadow,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: tokens.bgSurface }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    className="text-sm font-bold tracking-wider uppercase"
                    style={{ color: tokens.textMuted }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: tokens.textFaint }}
                >
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
