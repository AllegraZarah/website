import type React from "react"
import type { Metadata } from "next"
import { PT_Mono, Montserrat, Quicksand, Nunito_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const ptMono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pt-mono",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
})

export const metadata: Metadata = {
  title: "O.Soetan - Analytics & Data Engineering Portfolio",
  description: "Portfolio and blog of an analytics engineer and data engineer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${ptMono.variable} ${montserrat.variable} ${quicksand.variable} ${nunitoSans.variable} font-sans text-sm`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'