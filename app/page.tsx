"use client"

import { useState } from "react"
import { Nav } from "@/components/layout/nav"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { MarqueeStrip } from "@/components/sections/marquee-strip"
import { Products } from "@/components/sections/products"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"

export default function HomePage() {
  const [leadEmail, setLeadEmail] = useState("")

  return (
    <div className="min-h-screen antialiased">
      <Nav />
      <Hero email={leadEmail} onEmailChange={setLeadEmail} />
      <MarqueeStrip />
      <Products />
      <About />
      <Contact initialEmail={leadEmail} />
      <Footer />
    </div>
  )
}
