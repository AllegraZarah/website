"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest("nav") && !target.closest("button")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-name font-bold">
              O<span className="text-[#84894A]">.</span>Soetan
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Vertical Menu Panel */}
      {isMenuOpen && (
        <div className="fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className={cn(
                "text-base font-heading transition-colors hover:text-[#84894A]",
                pathname === "/" ? "text-[#84894A]" : "text-foreground",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className={cn(
                "text-base font-heading transition-colors hover:text-[#84894A]",
                pathname === "/portfolio" ? "text-[#84894A]" : "text-foreground",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/articles"
              className={cn(
                "text-base font-heading transition-colors hover:text-[#84894A]",
                pathname === "/articles" ? "text-[#84894A]" : "text-foreground",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="#contact"
              className={cn(
                "text-base font-heading transition-colors hover:text-[#84894A]",
                pathname === "/contact" ? "text-[#84894A]" : "text-foreground",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

