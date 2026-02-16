"use client"

import { useTheme } from "@/contexts/theme-context"
import { Reveal } from "@/components/shared/reveal"

const phases = [
  {
    num: "01",
    title: "Launch & Validate",
    desc: "Launch Tulin Homes MVP and acquire initial paying customers in target communities.",
    status: "In Progress",
    active: true,
  },
  {
    num: "02",
    title: "Expand into Energy",
    desc: "Launch Tulin Solar platform and scale subscription-based energy management.",
    status: "Upcoming",
    active: false,
  },
  {
    num: "03",
    title: "IoT Ecosystem",
    desc: "Develop IoT platform to complete the smart community infrastructure stack.",
    status: "Planned",
    active: false,
  },
]

export function Roadmap() {
  const { resolvedTheme, tokens } = useTheme()

  return (
    <section id="roadmap" className="py-28 sm:py-36" style={{ background: tokens.bgAlt }}>
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-5 text-center"
            style={{ color: tokens.textFaint }}
          >
            Roadmap
          </p>
        </Reveal>

        <Reveal delay={60}>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-20 leading-[1.1]"
            style={{ color: tokens.text }}
          >
            A phased approach
            <br />
            to growth.
          </h2>
        </Reveal>

        <div className="max-w-2xl mx-auto">
          {phases.map((phase, i) => (
            <Reveal key={i} delay={i * 140}>
              <div className="flex gap-8 sm:gap-12 group">
                <div className="flex flex-col items-center pt-1">
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0 border-2 transition-all duration-500"
                    style={{
                      background: phase.active ? tokens.btnBg : "transparent",
                      borderColor: phase.active ? tokens.btnBg : tokens.border,
                      boxShadow: phase.active
                        ? `0 0 12px ${
                            resolvedTheme === "dark"
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(0,0,0,0.15)"
                          }`
                        : "none",
                    }}
                  />
                  {i < phases.length - 1 && (
                    <div
                      className="w-px flex-1 my-3"
                      style={{
                        background: `linear-gradient(to bottom, ${tokens.border}, transparent)`,
                      }}
                    />
                  )}
                </div>
                <div className="pb-16">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-[10px] font-bold tracking-[0.15em]"
                      style={{ color: tokens.textGhost }}
                    >
                      PHASE {phase.num}
                    </span>
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
                      style={{
                        background: phase.active ? tokens.btnBg : tokens.bgSurface,
                        color: phase.active ? tokens.btnText : tokens.textFaint,
                      }}
                    >
                      {phase.status}
                    </span>
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold tracking-tight mb-2"
                    style={{ color: tokens.text }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed max-w-md"
                    style={{ color: tokens.textFaint }}
                  >
                    {phase.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
