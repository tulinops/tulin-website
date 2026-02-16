"use client"

import { useTheme } from "@/contexts/theme-context"
import { Marquee } from "@/components/shared/marquee"

export function MarqueeStrip() {
  const { tokens } = useTheme()

  return (
    <div
      className="py-8 overflow-hidden"
      style={{
        background: tokens.bgAlt,
        borderTop: `1px solid ${tokens.border}`,
        borderBottom: `1px solid ${tokens.border}`,
      }}
    >
      <Marquee
        items={[
          "Community Management",
          "Gated Communities",
          "Property Tech",
          "IoT Infrastructure",
          "Solar Energy",
          "SaaS Platform",
          "Smart Buildings",
          "Resident Experience",
          "Maintenance Automation",
        ]}
      />
    </div>
  )
}
