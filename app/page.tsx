"use client"

import { Nav } from "@/components/layout/nav"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { MarqueeStrip } from "@/components/sections/marquee-strip"
import { Products } from "@/components/sections/products"
import { About } from "@/components/sections/about"
import { Roadmap } from "@/components/sections/roadmap"
import { Contact } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <div className="min-h-screen antialiased">
      <Nav />
      <Hero />
      <MarqueeStrip />
      <Products />
      <About />
      <Roadmap />
      <Contact />
      <Footer />
    </div>
  )
}
