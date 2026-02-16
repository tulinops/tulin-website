import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/contexts/theme-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tulin - One platform to run every community",
  description:
    "Tulin replaces fragmented tools with a single intelligent platform for gated communities, apartment complexes, and property managers.",
  keywords: [
    "community management",
    "property management",
    "gated communities",
    "SaaS platform",
    "IoT",
    "solar energy",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
