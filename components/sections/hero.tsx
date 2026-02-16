'use client'

import { useTheme } from '@/contexts/theme-context'
import { scrollTo } from '@/lib/utils'
import { useMouse } from '@/lib/hooks/use-mouse'
import { Reveal } from '@/components/shared/reveal'
import { TextReveal } from '@/components/shared/text-reveal'
import { MagBtn } from '@/components/shared/mag-btn'
import { TypeWriter } from '@/components/shared/typewriter'
import { AnimatedGradient } from '@/components/animations/animated-gradient'
import { TRANSITIONS } from '@/lib/constants'

export function Hero() {
  const { resolvedTheme, tokens } = useTheme()
  const mouse = useMouse()

  const width = typeof window !== 'undefined' ? window.innerWidth : 1
  const height = typeof window !== 'undefined' ? window.innerHeight : 1
  const parallaxX = (mouse.x / width - 0.5) * 12
  const parallaxY = (mouse.y / height - 0.5) * 12

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: tokens.bg }}
    >
      <AnimatedGradient />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${tokens.dot} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-8 w-full">
        <div className="text-center mb-12">
          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem]  lg:leading-[1.3] font-bold tracking-tight leading-[1.3] mb-5"
            style={{ color: tokens.text }}
          >
            <TextReveal text="Community management" delay={80} />
            <br />
            <TextReveal text="that actually works." delay={280} />
          </h1>

          {/* Description */}
          <Reveal delay={480}>
            <p
              className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4"
              style={{ color: tokens.text, opacity: 0.65 }}
            >
              Tulin handles everything for{' '}
              <TypeWriter
                words={[
                  'gated communities.',
                  'apartment complexes.',
                  'property managers.',
                  'HOA boards.',
                ]}
                style={{ color: tokens.text, fontWeight: 600, opacity: 1 }}
              />
            </p>
          </Reveal>

          <Reveal delay={580}>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed mb-8"
              style={{ color: tokens.text, opacity: 0.45 }}
            >
              One place for residents, billing, maintenance tickets, and vendor
              tracking. No spreadsheets, no integration headaches, no learning
              curve.
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal delay={680}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
              <div className="relative flex-1 w-full">
                <input
                  type="email"
                  placeholder="Where should we reach you?"
                  className="w-full backdrop-blur-sm rounded-full px-5 py-2.5 text-sm outline-none transition-all"
                  style={{
                    background: tokens.inputBg,
                    border: `1px solid ${tokens.border}`,
                    color: tokens.text,
                  }}
                />
              </div>
              <MagBtn
                onClick={() => scrollTo('contact')}
                strength={0.15}
                className="group text-[13px] font-medium px-5 py-2.5 rounded-full inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0"
                style={{ background: tokens.btnBg, color: tokens.btnText }}
              >
                Show me how it works
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-0.5 transition-transform duration-300"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </MagBtn>
            </div>
          </Reveal>

          {/* Trust Badges */}
          {/* <Reveal delay={820}>
            <div className="mt-8">
              <p
                className="text-xs text-center"
                style={{ color: tokens.textFaint }}
              >
                No credit card. No pressure. Just a real conversation about what you need.
              </p>
            </div>
          </Reveal> */}
        </div>

        {/* Dashboard Preview */}
        <Reveal delay={500}>
          <div
            style={{
              transform: `translate(${parallaxX * 0.4}px, ${parallaxY * 0.4}px)`,
              transition: `transform ${TRANSITIONS.durations.slow}ms ${TRANSITIONS.smooth}`,
            }}
          >
            <div className="relative max-w-3xl mx-auto">
              <div
                className="absolute -inset-8 rounded-[32px] blur-2xl"
                style={{
                  background: `linear-gradient(to bottom, rgba(99,102,241,${
                    resolvedTheme === 'dark' ? '0.12' : '0.08'
                  }), rgba(139,92,246,${
                    resolvedTheme === 'dark' ? '0.06' : '0.03'
                  }), transparent)`,
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden backdrop-blur-xl"
                style={{
                  background:
                    resolvedTheme === 'dark'
                      ? 'rgba(255,255,255,0.05)'
                      : 'rgba(255,255,255,0.9)',
                  border: `1px solid ${tokens.borderHover}`,
                  boxShadow:
                    resolvedTheme === 'dark'
                      ? '0 24px 80px -12px rgba(0,0,0,0.5)'
                      : '0 24px 80px -12px rgba(0,0,0,0.12)',
                }}
              >
                {/* Browser Bar */}
                <div
                  className="flex items-center gap-2 px-4 py-2.5 border-b"
                  style={{
                    borderColor: tokens.border,
                    background:
                      resolvedTheme === 'dark'
                        ? 'rgba(255,255,255,0.02)'
                        : 'rgba(255,255,255,0.6)',
                  }}
                >
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: tokens.border }}
                      />
                    ))}
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div
                      className="rounded-md px-12 py-1"
                      style={{ background: tokens.bgSurface }}
                    >
                      <span
                        className="text-[10px] font-medium"
                        style={{ color: tokens.textFaint }}
                      >
                        app.tulin.io/dashboard
                      </span>
                    </div>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Dashboard Content */}
                <div className="p-4 sm:p-5">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                        <span className="text-white text-[9px] font-bold">
                          T
                        </span>
                      </div>
                      <div>
                        <div
                          className="text-[11px] font-semibold"
                          style={{ color: tokens.text }}
                        >
                          Tulin Homes
                        </div>
                        <div
                          className="text-[9px]"
                          style={{ color: tokens.textFaint }}
                        >
                          Dashboard
                        </div>
                      </div>
                    </div>
                    <div className="bg-indigo-500/10 text-indigo-400 text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Live Demo
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[
                      { label: 'Units', value: '156', icon: '🏠' },
                      { label: 'Active', value: '142', icon: '👥' },
                      { label: 'Tickets', value: '8', icon: '🔧' },
                      { label: 'Revenue', value: '$24K', icon: '💰' },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="rounded-lg p-2.5 sm:p-3"
                        style={{ background: tokens.bgSurface }}
                      >
                        <div
                          className="text-[10px] mb-1"
                          style={{ color: tokens.textFaint }}
                        >
                          {stat.label}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span
                            className="text-xs sm:text-sm font-bold"
                            style={{ color: tokens.text }}
                          >
                            {stat.value}
                          </span>
                          <span className="text-[10px]">{stat.icon}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div
                    className="rounded-lg p-3 sm:p-4"
                    style={{ background: tokens.bgSurface }}
                  >
                    <div
                      className="text-[9px] font-semibold uppercase tracking-wider mb-3"
                      style={{ color: tokens.textMuted }}
                    >
                      Recent Activity
                    </div>
                    <div className="space-y-2.5">
                      {[
                        {
                          action: 'Payment received',
                          user: 'Unit 204',
                          time: '2m ago',
                          status: 'success',
                        },
                        {
                          action: 'Maintenance ticket',
                          user: 'Unit 156',
                          time: '15m ago',
                          status: 'pending',
                        },
                        {
                          action: 'New resident added',
                          user: 'Unit 89',
                          time: '1h ago',
                          status: 'info',
                        },
                      ].map((activity, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{
                                background:
                                  activity.status === 'success'
                                    ? '#10b981'
                                    : activity.status === 'pending'
                                      ? '#f59e0b'
                                      : '#6366f1',
                              }}
                            />
                            <div>
                              <div
                                className="text-[10px] font-medium"
                                style={{ color: tokens.text }}
                              >
                                {activity.action}
                              </div>
                              <div
                                className="text-[9px]"
                                style={{ color: tokens.textFaint }}
                              >
                                {activity.user}
                              </div>
                            </div>
                          </div>
                          <div
                            className="text-[9px]"
                            style={{ color: tokens.textFaint }}
                          >
                            {activity.time}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <Reveal
        delay={1300}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span
            className="text-[8px] uppercase tracking-[0.25em] font-medium"
            style={{ color: tokens.textGhost }}
          >
            Scroll
          </span>
          <div
            className="w-px h-6 overflow-hidden"
            style={{
              background: `linear-gradient(to bottom, ${tokens.textGhost}, transparent)`,
            }}
          >
            <div
              className="w-full h-2 animate-scroll-hint"
              style={{ background: tokens.textFaint }}
            />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
