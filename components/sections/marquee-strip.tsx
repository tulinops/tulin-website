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
          "Resident Onboarding",
          "Maintenance Billing",
          "Vendor Tracking",
          "Gate Access Control",
          "Solar Subscriptions",
          "Leak Detection",
          "HOA Management",
          "Payment Collection",
          "Work Order Routing",
        ]}
      />
    </div>
  )
}
