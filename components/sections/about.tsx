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
                in community management.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col justify-end">
              <p
                className="text-lg leading-relaxed"
                style={{ color: tokens.textFaint }}
              >
                Started after watching too many property managers drown in spreadsheets and WhatsApp groups.
                We think software should make their lives easier, not add another subscription to ignore.
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
              desc: "Property managers shouldn't need a computer science degree to run their communities. Good software is invisible — it just works.",
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
              desc: "Software that solves actual problems instead of adding new ones. Starting with communities, expanding to solar and IoT when we get it right.",
            },
          ].map((card, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                className="rounded-[24px] p-8 h-full"
                style={{
                  background: tokens.bgCard,
                  border: `1px solid ${tokens.border}`,
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

        {/* Stats Grid */}
        <Reveal delay={200}>
          <div
            className="rounded-[28px] p-10 sm:p-12"
            style={{
              background: tokens.bgCard,
              border: `1px solid ${tokens.border}`,
            }}
          >
            <div className="grid sm:grid-cols-2 gap-12">
              {/* Revenue Model */}
              <div>
                <h3
                  className="text-sm font-bold tracking-wider uppercase mb-6"
                  style={{ color: tokens.textMuted }}
                >
                  How We Fund This
                </h3>
                <div
                  className="flex rounded-full overflow-hidden h-3 mb-5"
                  style={{ background: tokens.bgSurface }}
                >
                  <div className="rounded-full" style={{ width: "70%", background: tokens.btnBg }} />
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-sm font-semibold" style={{ color: tokens.text }}>
                    SaaS — 70%
                  </span>
                  <span className="text-sm" style={{ color: tokens.textFaint }}>
                    Consulting — 30%
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: tokens.textFaint }}>
                  We do consulting to fund product development. Eventually the products will pay for themselves.
                  That&apos;s the plan, anyway.
                </p>
              </div>

              {/* Goals */}
              <div>
                <h3
                  className="text-sm font-bold tracking-wider uppercase mb-6"
                  style={{ color: tokens.textMuted }}
                >
                  Next 3–5 Years
                </h3>
                <div className="space-y-4">
                  {[
                    "100+ communities running on Tulin",
                    "Recurring revenue we can count on",
                    "Known for solving real problems",
                    "Less consulting, more product work",
                  ].map((goal, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span
                        className="text-xs font-bold mt-0.5"
                        style={{ color: tokens.textFaint }}
                      >
                        {j + 1}.
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: tokens.textMuted }}>
                        {goal}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
