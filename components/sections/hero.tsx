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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.08] mb-5"
            style={{ color: tokens.text }}
          >
            <TextReveal text="One platform to run" delay={80} />
            <br />
            <TextReveal text="every community." delay={280} />
          </h1>

          {/* Description */}
          <Reveal delay={480}>
            <p
              className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4"
              style={{ color: tokens.text, opacity: 0.65 }}
            >
              Tulin replaces fragmented tools with a single intelligent platform
              for{' '}
              <TypeWriter
                words={[
                  'gated communities.',
                  'apartment complexes.',
                  'property managers.',
                  'real estate developers.',
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
              Resident onboarding, maintenance billing, vendor management, and
              real-time analytics — all unified in one platform. Built for
              scale, priced for growth.
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal delay={680}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
              <div className="relative flex-1 w-full">
                <input
                  type="email"
                  placeholder="Enter your work email"
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
                Get a Demo
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
          <Reveal delay={820}>
            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              {['No Setup Fees', '14-Day Free Trial', 'Cancel Anytime'].map(
                (text, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-sm"
                    style={{
                      color: tokens.textFaint,
                      background:
                        resolvedTheme === 'dark'
                          ? 'rgba(255,255,255,0.04)'
                          : 'rgba(255,255,255,0.6)',
                      border: `1px solid ${tokens.border}`,
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {text}
                  </span>
                ),
              )}
            </div>
          </Reveal>
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
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">
                          T
                        </span>
                      </div>
                      <div>
                        <div
                          className="text-xs font-semibold"
                          style={{ color: tokens.text }}
                        >
                          Tulin Homes
                        </div>
                        <div
                          className="text-[10px]"
                          style={{ color: tokens.textFaint }}
                        >
                          Dashboard
                        </div>
                      </div>
                    </div>
                    <div className="bg-indigo-500/10 text-indigo-400 text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Demo Mode
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-3 mb-5">
                    {[
                      { label: 'Residents', icon: '👥', desc: 'Manage' },
                      { label: 'Billing', icon: '💳', desc: 'Automate' },
                      { label: 'Tickets', icon: '🔧', desc: 'Track' },
                      { label: 'Reports', icon: '📊', desc: 'Analyze' },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-xl p-3 sm:p-3.5 transition-colors cursor-pointer"
                        style={{ background: tokens.bgSurface }}
                      >
                        <div className="text-sm mb-1.5">{item.icon}</div>
                        <div
                          className="text-xs sm:text-sm font-bold"
                          style={{ color: tokens.text, opacity: 0.7 }}
                        >
                          {item.label}
                        </div>
                        <div
                          className="text-[10px] mt-0.5"
                          style={{ color: tokens.textFaint }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-5 gap-4">
                    <div
                      className="sm:col-span-3 rounded-xl p-4"
                      style={{ background: tokens.bgSurface }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wider"
                          style={{ color: tokens.textMuted }}
                        >
                          How It Works
                        </span>
                      </div>
                      <div className="space-y-3">
                        {[
                          {
                            step: '1',
                            title: 'Onboard your community',
                            desc: 'Add units, residents & staff in minutes',
                          },
                          {
                            step: '2',
                            title: 'Automate operations',
                            desc: 'Billing, ticketing & vendor management',
                          },
                          {
                            step: '3',
                            title: 'Track everything',
                            desc: 'Real-time dashboards & smart reports',
                          },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                              <span className="text-white text-[9px] font-bold">
                                {item.step}
                              </span>
                            </div>
                            <div>
                              <div
                                className="text-[11px] font-semibold"
                                style={{ color: tokens.textMuted }}
                              >
                                {item.title}
                              </div>
                              <div
                                className="text-[10px]"
                                style={{ color: tokens.textFaint }}
                              >
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="sm:col-span-2 rounded-xl p-4"
                      style={{ background: tokens.bgSurface }}
                    >
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wider block mb-3"
                        style={{ color: tokens.textMuted }}
                      >
                        Why Tulin
                      </span>
                      <div className="space-y-3">
                        {[
                          { icon: '⚡', text: 'Go live in under a week' },
                          { icon: '🔒', text: 'Bank-grade security' },
                          { icon: '📱', text: 'Works on any device' },
                          { icon: '🔗', text: 'API-first architecture' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2.5">
                            <span className="text-[11px]">{item.icon}</span>
                            <span
                              className="text-[11px]"
                              style={{ color: tokens.textMuted }}
                            >
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
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
