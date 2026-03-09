"use client"

import { useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { PricingSection } from "@/components/pricing-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const pointer = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.35 }
    const target = { x: pointer.x, y: pointer.y }

    const apply = () => {
      pointer.x += (target.x - pointer.x) * 0.075
      pointer.y += (target.y - pointer.y) * 0.075
      const node = containerRef.current
      if (node) {
        node.style.setProperty("--mouse-x", `${pointer.x}px`)
        node.style.setProperty("--mouse-y", `${pointer.y}px`)
      }
      frame = window.requestAnimationFrame(apply)
    }

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX
      target.y = e.clientY
    }

    const onResize = () => {
      if (!containerRef.current) return
      const x = window.innerWidth * 0.5
      const y = window.innerHeight * 0.35
      target.x = x
      target.y = y
    }

    frame = window.requestAnimationFrame(apply)
    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("resize", onResize)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-main-gradient relative overflow-x-hidden selection:bg-primary selection:text-primary-foreground"
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="ambient-light ambient-light-1" />
        <div className="ambient-light ambient-light-2" />
        <div className="ambient-light ambient-light-3" />
        <div className="ambient-light ambient-light-4" />
        <div className="ambient-light ambient-light-5" />
      </div>
      <div className="interactive-wash" />
      <div className="noise-overlay" />
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ShowcaseSection />
          <PricingSection />
          <DownloadSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
