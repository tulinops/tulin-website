import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/contexts/theme-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const title =
  "Tulin — SaaS platforms and digital services for communities, energy, and infrastructure"
const description =
  "Tulin builds SaaS products for community management, solar operations, and smart infrastructure — plus websites, applications, and digital marketing through Tulin Studio."

export const metadata: Metadata = {
  metadataBase: new URL("https://tulin.in"),
  title,
  description,
  keywords: [
    "community management",
    "property management",
    "gated communities",
    "SaaS platform",
    "IoT",
    "solar energy",
    "digital marketing",
    "web development",
    "application development",
  ],
  openGraph: {
    title,
    description,
    url: "https://tulin.in",
    siteName: "Tulin",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
