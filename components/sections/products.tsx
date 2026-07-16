'use client'

import { useTheme } from '@/contexts/theme-context'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/shared/reveal'
import { TiltCard } from '@/components/shared/tilt-card'
import { MagBtn } from '@/components/shared/mag-btn'
import { PRODUCT_GRADIENTS, BRAND_CTA_GRADIENT } from '@/lib/constants'

const products = [
  {
    name: 'Tulin Homes',
    href: 'https://homes.tulin.in',
    badge: 'Available Now',
    flagship: true,
    headline: 'Everything your community needs. One login.',
    desc: 'When a 150-unit community came to us juggling 4 spreadsheets, 3 email threads, and zero time to breathe — we built this. Now they onboard new residents in 5 minutes, bill maintenance automatically, and actually know which vendor fixed what.',
    features: [
      'Resident & unit management',
      'Automatic billing & payments',
      'Maintenance request tracking',
      'Vendor performance history',
      'Real-time analytics dashboard',
    ],
    ...PRODUCT_GRADIENTS.homes,
  },
  {
    name: 'Tulin Solar',
    href: 'https://solar.tulin.in',
    badge: 'In Development',
    flagship: false,
    headline: 'Solar subscriptions without the paperwork chaos.',
    desc: "Because managing 500 solar panel subscriptions across multiple sites shouldn't require a dedicated spreadsheet warrior. Track installations, bill usage, monitor performance — before the panels even hit the roof.",
    features: [
      'Installation lifecycle tracking',
      'Usage-based billing automation',
      'Panel performance monitoring',
      'Energy production analytics',
      'Multi-site management',
    ],
    ...PRODUCT_GRADIENTS.solar,
  },
  {
    name: 'Tulin IoT',
    href: 'https://iot.tulin.in',
    badge: 'In Development',
    flagship: false,
    headline: 'Know when something breaks before someone complains.',
    desc: 'Smart sensors for water leaks, gate malfunctions, and power issues. Get alerts before your residents do. Still building this one — IoT is harder than it looks.',
    features: [
      'Sensor deployment & tracking',
      'Proactive alert system',
      'Device health monitoring',
      'Incident pattern analysis',
      'Integration with Homes platform',
    ],
    ...PRODUCT_GRADIENTS.iot,
  },
]

export function Products() {
  const { resolvedTheme, tokens } = useTheme()

  return (
    <section
      id="products"
      className="py-28 sm:py-36"
      style={{ background: tokens.bgAlt }}
    >
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
            Built for problems
            <br />
            we&apos;ve actually seen.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p
            className="text-lg text-center max-w-md mx-auto mb-20 leading-relaxed"
            style={{ color: tokens.textFaint }}
          >
            Each platform solves a specific headache we&apos;ve watched property
            managers struggle with.
          </p>
        </Reveal>

        {/* Flagship Product - Full Width */}
        <Reveal>
          <div
            className="relative rounded-[32px] p-10 sm:p-14 overflow-hidden group transition-colors duration-700 mb-6"
            style={{
              background: tokens.bgCard,
              border: `1px solid ${tokens.border}`,
              boxShadow: tokens.cardShadow,
            }}
          >
            <div
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                background: `radial-gradient(ellipse at 30% 50%, rgba(${products[0].accent},${
                  resolvedTheme === 'dark' ? '0.08' : '0.05'
                }) 0%, transparent 70%)`,
                opacity: 0.4,
              }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              style={{
                background: `radial-gradient(ellipse at 30% 50%, rgba(${products[0].accent},${
                  resolvedTheme === 'dark' ? '0.08' : '0.05'
                }) 0%, transparent 70%)`,
              }}
            />
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      'w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center',
                      products[0].gradient,
                    )}
                    style={{
                      boxShadow:
                        resolvedTheme === 'dark'
                          ? `0 10px 20px -3px rgba(${products[0].accent},0.5)`
                          : `0 10px 20px -3px rgba(${products[0].accent},0.35), 0 0 0 1px rgba(0, 0, 0, 0.1)`,
                    }}
                  >
                    <span className="text-2xl">{products[0].icon}</span>
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold mb-1"
                      style={{ color: tokens.text }}
                    >
                      {products[0].name}
                    </h3>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
                      style={{
                        background: tokens.btnBg,
                        color: tokens.btnText,
                      }}
                    >
                      {products[0].badge}
                    </span>
                  </div>
                </div>
                <MagBtn
                  href={products[0].href}
                  strength={0.15}
                  className={cn(
                    BRAND_CTA_GRADIENT,
                    'text-white text-sm font-semibold px-6 py-3 rounded-full flex-shrink-0',
                  )}
                >
                  Try it now
                </MagBtn>
              </div>
              <h4
                className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-6"
                style={{ color: tokens.text }}
              >
                {products[0].headline}
              </h4>
              <p
                className="text-lg leading-relaxed mb-10 max-w-3xl"
                style={{ color: tokens.textFaint }}
              >
                {products[0].desc}
              </p>
              <div className="grid sm:grid-cols-3 gap-x-8 gap-y-4">
                {products[0].features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `rgba(${products[0].accent},${
                          resolvedTheme === 'dark' ? '0.16' : '0.12'
                        })`,
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
                        style={{ color: `rgb(${products[0].accent})` }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: tokens.textMuted }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Coming Soon Products - Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {products.slice(1).map((product, i) => (
            <Reveal key={i} delay={(i + 1) * 80}>
              <div
                className="relative rounded-[28px] p-8 overflow-hidden h-full transition-all duration-500 hover:scale-[1.02]"
                style={{
                  background: tokens.bgSurface,
                  border: `1px solid ${tokens.border}`,
                  boxShadow: tokens.cardShadow,
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 30% 0%, rgba(${product.accent},${
                      resolvedTheme === 'dark' ? '0.1' : '0.06'
                    }) 0%, transparent 65%)`,
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={cn(
                        'w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center',
                        product.gradient,
                      )}
                      style={{
                        boxShadow:
                          resolvedTheme === 'dark'
                            ? `0 4px 12px -1px rgba(${product.accent},0.45)`
                            : `0 4px 12px -1px rgba(${product.accent},0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)`,
                      }}
                    >
                      <span className="text-lg">{product.icon}</span>
                    </div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full ml-auto"
                      style={{
                        background: tokens.bgCard,
                        color: tokens.textFaint,
                      }}
                    >
                      {product.badge}
                    </span>
                  </div>
                  <h4
                    className="text-xl font-bold tracking-tight leading-tight mb-3"
                    style={{ color: tokens.text }}
                  >
                    {product.headline}
                  </h4>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: tokens.textFaint }}
                  >
                    {product.desc}
                  </p>
                  <div className="space-y-2.5">
                    {product.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-shrink-0"
                          style={{
                            color:
                              resolvedTheme === 'dark'
                                ? tokens.textFaint
                                : tokens.textMuted,
                          }}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span
                          className="text-xs"
                          style={{ color: tokens.textMuted }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <MagBtn
                    href={product.href}
                    strength={0.15}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold mt-6"
                    style={{ color: tokens.text }}
                  >
                    Learn more
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </MagBtn>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* IT Services Card */}
        <Reveal delay={100}>
          <TiltCard className="mt-5">
            <div
              className="relative rounded-[28px] p-8 sm:p-10 overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-colors duration-700"
              style={{
                background: tokens.bgSurface,
                border: `1px solid ${tokens.border}`,
                boxShadow: tokens.cardShadow,
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 20% 50%, rgba(${PRODUCT_GRADIENTS.studio.accent},${
                    resolvedTheme === 'dark' ? '0.1' : '0.06'
                  }) 0%, transparent 65%)`,
                }}
              />
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={cn(
                      'w-11 h-11 rounded-2xl bg-gradient-to-br flex items-center justify-center',
                      PRODUCT_GRADIENTS.studio.gradient,
                    )}
                    style={{
                      boxShadow:
                        resolvedTheme === 'dark'
                          ? `0 4px 12px -1px rgba(${PRODUCT_GRADIENTS.studio.accent},0.45)`
                          : `0 4px 12px -1px rgba(${PRODUCT_GRADIENTS.studio.accent},0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)`,
                    }}
                  >
                    <span className="text-lg">{PRODUCT_GRADIENTS.studio.icon}</span>
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: tokens.text, opacity: 0.7 }}
                  >
                    Tulin Studio
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed max-w-lg mb-5"
                  style={{ color: tokens.textFaint }}
                >
                  When we needed a client-facing website and a way to
                  actually reach new customers, we built it ourselves. Now we
                  take on that work for others: sites that load fast, apps
                  that solve a real problem, and marketing that doesn&apos;t
                  just burn budget.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {[
                    'Website design & development',
                    'Custom application development',
                    'Digital marketing (SEO, social, ads)',
                  ].map((feature, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0"
                        style={{ color: tokens.textMuted }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-xs" style={{ color: tokens.textMuted }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <MagBtn
                href="https://studio.tulin.in"
                strength={0.15}
                className="text-xs font-semibold px-6 py-2.5 rounded-full flex-shrink-0"
                style={{
                  color: tokens.textMuted,
                  border: `1px solid ${tokens.border}`,
                }}
              >
                Visit Tulin Studio
              </MagBtn>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}
