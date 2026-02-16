"use client"

import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import { Reveal } from "@/components/shared/reveal"
import { MagBtn } from "@/components/shared/mag-btn"
import { Orb } from "@/components/shared/orb"

export function Contact() {
  const { resolvedTheme, tokens } = useTheme()

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <section id="contact" className="py-28 sm:py-36" style={{ background: tokens.bg }}>
        <div className="max-w-md mx-auto px-6 text-center">
          <Reveal>
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm"
              style={{
                background: tokens.bgCard,
                border: `1px solid ${tokens.border}`,
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ color: tokens.textMuted }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2
              className="text-3xl font-bold tracking-tight mb-3"
              style={{ color: tokens.text }}
            >
              Thank you.
            </h2>
            <p className="text-sm" style={{ color: tokens.textFaint }}>
              We&apos;ll be in touch shortly.
            </p>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section
      id="contact"
      className="py-28 sm:py-36 relative overflow-hidden"
      style={{ background: tokens.bg }}
    >
      <Orb
        className="bottom-[-20%] left-[-10%]"
        size={500}
        color={`rgba(100,100,200,${resolvedTheme === "dark" ? "0.05" : "0.03"})`}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20">
          <Reveal>
            <div>
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
                style={{ color: tokens.textFaint }}
              >
                Contact
              </p>
              <h2
                className="text-4xl sm:text-4xl font-bold tracking-tight mb-5 leading-tight"
                style={{ color: tokens.text }}
              >
                Let&apos;s fix what&apos;s
                <br />
                broken in your workflow.
              </h2>
              <p
                className="text-base leading-relaxed mb-14"
                style={{ color: tokens.textFaint }}
              >
                Tell us what&apos;s broken in your current setup. We&apos;ll show you how Tulin fixes it —
                or be honest if it doesn&apos;t.
              </p>
              <div className="space-y-8">
                {[
                  { label: "Email", value: "hello@tulin.io" },
                  { label: "Focus", value: "Gated Communities · Apartments · IoT · Energy" },
                ].map((item, i) => (
                  <div key={i}>
                    <p
                      className="text-[9px] font-bold tracking-[0.2em] uppercase mb-1.5"
                      style={{ color: tokens.textGhost }}
                    >
                      {item.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: tokens.textMuted }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div
              className="rounded-[28px] p-8 sm:p-10 transition-all duration-500 hover:scale-[1.01]"
              style={{
                background: tokens.bgCard,
                border: `1px solid ${tokens.border}`,
                boxShadow: `0 8px 40px ${
                  resolvedTheme === "dark" ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.03)"
                }`,
              }}
            >
                <div className="space-y-6">
                  {[
                    { key: "name", label: "Name", placeholder: "Your name", type: "text" },
                    {
                      key: "email",
                      label: "Email",
                      placeholder: "you@company.com",
                      type: "email",
                    },
                    {
                      key: "company",
                      label: "Community",
                      placeholder: "Which community are you managing?",
                      type: "text",
                    },
                  ].map((field) => (
                    <div key={field.key}>
                      <label
                        className="block text-[9px] font-bold tracking-[0.2em] uppercase mb-2"
                        style={{ color: tokens.textGhost }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        onFocus={() => setFocused(field.key)}
                        onBlur={() => setFocused(null)}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent text-sm py-3.5 border-b outline-none transition-all duration-500"
                        style={{
                          color: tokens.text,
                          borderColor: focused === field.key ? tokens.text : tokens.border,
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      className="block text-[9px] font-bold tracking-[0.2em] uppercase mb-2"
                      style={{ color: tokens.textGhost }}
                    >
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      rows={3}
                      placeholder="What&apos;s the biggest headache in your day-to-day?"
                      className="w-full bg-transparent text-sm py-3.5 border-b outline-none transition-all duration-500 resize-none"
                      style={{
                        color: tokens.text,
                        borderColor: focused === "message" ? tokens.text : tokens.border,
                      }}
                    />
                  </div>

                  <MagBtn
                    onClick={() => setSubmitted(true)}
                    strength={0.15}
                    className="w-full text-sm font-medium py-3.5 rounded-full mt-2"
                    style={{ background: tokens.btnBg, color: tokens.btnText }}
                  >
                    Let&apos;s talk
                  </MagBtn>
                </div>
              </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
