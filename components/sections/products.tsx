"use client"

import { useTheme } from "@/contexts/theme-context"
import { scrollTo, cn } from "@/lib/utils"
import { Reveal } from "@/components/shared/reveal"
import { TiltCard } from "@/components/shared/tilt-card"
import { MagBtn } from "@/components/shared/mag-btn"
import { PRODUCT_GRADIENTS } from "@/lib/constants"

const products = [
  {
    name: "Tulin Homes",
    badge: "Flagship",
    flagship: true,
    headline: "Community management, reimagined.",
    desc: "The operating system for gated communities and apartment complexes. Manage residents, automate billing, resolve maintenance tickets, and track vendor performance — all from a single dashboard.",
    features: [
      "Resident & unit management",
      "Maintenance billing & payments",
      "Ticketing system",
      "Vendor & staff management",
      "Analytics dashboard",
    ],
    ...PRODUCT_GRADIENTS.homes,
  },
  {
    name: "Tulin Solar",
    badge: "Coming Soon",
    flagship: false,
    headline: "Energy ecosystems, simplified.",
    desc: "Manage solar installations, energy billing, and performance monitoring at scale with a subscription-based model.",
    features: [
      "Solar asset management",
      "Energy billing automation",
      "Performance monitoring",
      "Grid analytics",
      "Scalable subscriptions",
    ],
    ...PRODUCT_GRADIENTS.solar,
  },
  {
    name: "Tulin IoT",
    badge: "Coming Soon",
    flagship: false,
    headline: "Infrastructure, intelligently connected.",
    desc: "Smart monitoring, device management, and automation for modern community infrastructure.",
    features: [
      "Device lifecycle management",
      "Real-time monitoring",
      "Automation engine",
      "Data analytics",
      "Open API integrations",
    ],
    ...PRODUCT_GRADIENTS.iot,
  },
]

export function Products() {
  const { resolvedTheme, tokens } = useTheme()

  return (
    <section id="products" className="py-28 sm:py-36" style={{ background: tokens.bgAlt }}>
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-5 text-center"
            style={{ color: tokens.textFaint }}
          >
            Products
          </p>
        </Reveal>

        <Reveal delay={60}>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-5 leading-[1.1]"
            style={{ color: tokens.text }}
          >
            Platforms built for
            <br />
            real-world operations.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p
            className="text-lg text-center max-w-md mx-auto mb-20 leading-relaxed"
            style={{ color: tokens.textFaint }}
          >
            Secure, modular, and designed to scale with your community.
          </p>
        </Reveal>

        <div className="space-y-5">
          {products.map((product, i) => (
            <Reveal key={i} delay={i * 100}>
              <TiltCard className="h-full">
                <div
                  className="relative rounded-[28px] p-8 sm:p-10 overflow-hidden group transition-colors duration-700"
                  style={{
                    background: tokens.bgCard,
                    border: `1px solid ${tokens.border}`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                    style={{
                      background: `radial-gradient(ellipse at 30% 50%, rgba(${product.accent},${
                        resolvedTheme === "dark" ? "0.06" : "0.04"
                      }) 0%, transparent 70%)`,
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-10">
                      <div
                        className={cn(
                          "w-11 h-11 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                          product.gradient
                        )}
                      >
                        <span className="text-white text-sm font-bold">{product.letter}</span>
                      </div>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: tokens.text, opacity: 0.8 }}
                      >
                        {product.name}
                      </span>
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full ml-auto"
                        style={{
                          background: product.flagship ? tokens.btnBg : tokens.bgSurface,
                          color: product.flagship ? tokens.btnText : tokens.textFaint,
                        }}
                      >
                        {product.badge}
                      </span>
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight mb-4"
                      style={{ color: tokens.text }}
                    >
                      {product.headline}
                    </h3>
                    <p
                      className="text-base leading-relaxed mb-8 max-w-lg"
                      style={{ color: tokens.textFaint }}
                    >
                      {product.desc}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
                      {product.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ border: `1px solid ${tokens.border}` }}
                          >
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ color: tokens.textFaint }}
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="text-sm" style={{ color: tokens.textMuted }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* IT Services Card */}
        <Reveal delay={100}>
          <TiltCard className="mt-5">
            <div
              className="rounded-[28px] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-colors duration-700"
              style={{
                background: tokens.bgSurface,
                border: `1px solid ${tokens.border}`,
              }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ background: tokens.bgSurface }}
                  >
                    <span
                      className="text-xs font-mono font-bold"
                      style={{ color: tokens.textFaint }}
                    >
                      {"`</>`"}
                    </span>
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: tokens.text, opacity: 0.7 }}
                  >
                    IT Services
                  </span>
                </div>
                <p className="text-sm leading-relaxed max-w-lg" style={{ color: tokens.textFaint }}>
                  Custom software development, system integrations, and technology consulting to
                  power your digital transformation.
                </p>
              </div>
              <MagBtn
                onClick={() => scrollTo("contact")}
                strength={0.15}
                className="text-xs font-semibold px-6 py-2.5 rounded-full flex-shrink-0"
                style={{ color: tokens.textMuted, border: `1px solid ${tokens.border}` }}
              >
                Learn More
              </MagBtn>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}
