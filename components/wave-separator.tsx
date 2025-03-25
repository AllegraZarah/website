"use client"

import { useEffect, useRef } from "react"

interface WaveSeparatorProps {
  color?: string
  width?: number
  height?: number
  className?: string
}

export default function WaveSeparator({
  color = "#84894A",
  width = 108, // Reduced to 3/5 of 180px
  height = 12,
  className = "",
}: WaveSeparatorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr

    // Scale the context to ensure correct dimensions
    ctx.scale(dpr, dpr)

    // Set canvas CSS dimensions
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    let offset = 0
    const amplitude = height / 3 // Increased amplitude for more pronounced curves
    const frequency = 0.15 // Increased frequency for extra crest and trough

    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw wave
      ctx.beginPath()
      ctx.moveTo(0, height / 2)

      for (let x = 0; x < width; x++) {
        const y = height / 2 + Math.sin((x + offset) * frequency) * amplitude
        ctx.lineTo(x, y)
      }

      ctx.strokeStyle = color
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Update offset for animation - reduced to 2/3 of current speed
      offset += 0.167
      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      // Cleanup if needed
    }
  }, [color, width, height])

  return (
    <div className={`mt-0.5 mb-4 ${className}`}>
      {" "}
      {/* Reduced top margin, increased bottom margin */}
      <canvas ref={canvasRef} style={{ width: `${width}px`, height: `${height}px` }} className="overflow-hidden" />
    </div>
  )
}

