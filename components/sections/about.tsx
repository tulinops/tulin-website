"use client"

import { useTheme } from "@/contexts/theme-context"
import { Reveal } from "@/components/shared/reveal"
import { TiltCard } from "@/components/shared/tilt-card"
import { Orb } from "@/components/shared/orb"
import { Eye, Target } from "lucide-react"

const cards = [
  {
    title: "Vision",
    icon: <Eye size={18} className="text-indigo-400" strokeWidth={1.5} />,
    desc: "To build scalable, technology-driven platforms that modernize community management, infrastructure operations, and energy ecosystems.",
  },
  {
    title: "Mission",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-amber-500"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    desc: "To deliver secure, modular, and reliable SaaS platforms that simplify real-world operations while maintaining strong architecture and long-term scalability.",
  },
]

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
        <Reveal>
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
            style={{ color: tokens.textFaint }}
          >
            About
          </p>
        </Reveal>

        <Reveal delay={60}>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-[1.1]"
            style={{ color: tokens.text }}
          >
            Built for scale.
            <br />
            Designed for clarity.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p
            className="text-lg max-w-lg mb-20 leading-relaxed"
            style={{ color: tokens.textFaint }}
          >
            Tulin is a SaaS-first technology company digitizing community management, infrastructure
            operations, and energy ecosystems.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Vision & Mission */}
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 80}>
              <TiltCard className="h-full">
                <div
                  className="rounded-[28px] p-8 sm:p-10 h-full transition-colors duration-700"
                  style={{
                    background: tokens.bgCard,
                    border: `1px solid ${tokens.border}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center mb-7"
                    style={{ background: tokens.bgSurface }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    className="text-xl font-bold tracking-tight mb-3"
                    style={{ color: tokens.text }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: tokens.textFaint }}>
                    {card.desc}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}

          {/* Revenue Model */}
          <Reveal delay={160}>
            <TiltCard className="h-full">
              <div
                className="rounded-[28px] p-8 sm:p-10 h-full transition-colors duration-700"
                style={{
                  background: tokens.bgCard,
                  border: `1px solid ${tokens.border}`,
                }}
              >
                <h3
                  className="text-xl font-bold tracking-tight mb-7"
                  style={{ color: tokens.text }}
                >
                  Revenue Model
                </h3>
                <div
                  className="flex rounded-full overflow-hidden h-2.5 mb-4"
                  style={{ background: tokens.bgSurface }}
                >
                  <div className="rounded-full" style={{ width: "70%", background: tokens.btnBg }} />
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-xs font-medium" style={{ color: tokens.textMuted }}>
                    SaaS Products — 70%
                  </span>
                  <span className="text-xs font-medium" style={{ color: tokens.textFaint }}>
                    IT Services — 30%
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: tokens.textFaint }}>
                  Strategic revenue structure ensuring long-term recurring revenue with stable
                  operational cash flow.
                </p>
              </div>
            </TiltCard>
          </Reveal>

          {/* 3-5 Year Objectives */}
          <Reveal delay={240}>
            <TiltCard className="h-full">
              <div
                className="rounded-[28px] p-8 sm:p-10 h-full transition-colors duration-700"
                style={{
                  background: tokens.bgCard,
                  border: `1px solid ${tokens.border}`,
                }}
              >
                <h3
                  className="text-xl font-bold tracking-tight mb-7"
                  style={{ color: tokens.text }}
                >
                  3–5 Year Objectives
                </h3>
                <div className="space-y-5">
                  {[
                    "100+ paying SaaS customers",
                    "Strong recurring revenue base",
                    "Recognized infra-tech brand",
                    "Reduced IT services dependency",
                  ].map((goal, j) => (
                    <div key={j} className="flex items-center gap-4">
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 tabular-nums"
                        style={{ background: tokens.bgSurface, color: tokens.textFaint }}
                      >
                        0{j + 1}
                      </span>
                      <span className="text-sm" style={{ color: tokens.textMuted }}>
                        {goal}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
