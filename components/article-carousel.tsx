"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ArticleCarousel({ articles }: { articles: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length)
  }

  // Handle touch events for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  if (!articles.length) return null

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="absolute left-2 sm:left-4 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
      </div>
      <div className="absolute right-2 sm:right-4 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {articles.map((article, index) => (
          <div key={article.id} className="min-w-full">
            <Card className="border-0 shadow-none">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="flex flex-col justify-center p-4 sm:p-6">
                  <Badge className="mb-2 w-fit bg-[#FFE399] text-[#84894A]">{article.category}</Badge>
                  <h3 className="mb-2 text-xl sm:text-2xl font-bold">
                    <Link href={article.url} className="hover:text-[#84894A]">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mb-4 text-sm text-gray-500">{article.excerpt}</p>
                  <p className="mb-4 sm:mb-6 text-sm text-gray-400">{article.date}</p>
                  <Link href={article.url}>
                    <Button className="w-fit bg-[#84894A] hover:bg-[#84894A]/90">Read Article</Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {articles.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-[#84894A]" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

