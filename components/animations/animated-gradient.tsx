"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"

export function AnimatedGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const opacityRef = useRef(0.15)

  opacityRef.current = resolvedTheme === "dark" ? 0.2 : 0.15

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let frameId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * 1.5
      canvas.height = canvas.offsetHeight * 1.5
    }

    resize()
    window.addEventListener("resize", resize)

    const colors = [
      [22, 101, 52],     // Forest green (green-800)
      [16, 185, 129],    // Emerald (emerald-500)
      [5, 150, 105],     // Emerald green (emerald-600)
      [20, 184, 166],    // Teal (teal-500)
      [134, 239, 172],   // Light green (green-300)
    ]

    const blobs = colors.map((col) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      r: 0.3 + Math.random() * 0.25,
      col,
    }))

    const draw = () => {
      time += 0.003
      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)

      blobs.forEach((blob) => {
        blob.x += blob.vx + Math.sin(time + blob.r * 10) * 0.0005
        blob.y += blob.vy + Math.cos(time + blob.r * 8) * 0.0005

        if (blob.x < -0.2 || blob.x > 1.2) blob.vx *= -1
        if (blob.y < -0.2 || blob.y > 1.2) blob.vy *= -1

        const gradient = ctx.createRadialGradient(
          blob.x * w,
          blob.y * h,
          0,
          blob.x * w,
          blob.y * h,
          blob.r * w
        )

        gradient.addColorStop(
          0,
          `rgba(${blob.col[0]},${blob.col[1]},${blob.col[2]},${opacityRef.current})`
        )
        gradient.addColorStop(1, `rgba(${blob.col[0]},${blob.col[1]},${blob.col[2]},0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, w, h)
      })

      frameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: "blur(60px) saturate(1.5)" }}
    />
  )
}
