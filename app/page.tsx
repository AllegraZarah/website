import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Database, LineChart, BarChart, Shield, Search, Plane, Shirt, FuelIcon as Oil } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with white background */}
      <section className="w-full bg-white py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-name font-bold tracking-tighter sm:text-5xl md:text-6xl">
              The O<span className="text-[#84894A]">.</span>Soetan
            </h1>
            <p className="mt-4 text-sm text-[#84894A] tracking-widest uppercase">
              Data Engineer | Analytics Engineer | Data Analyst
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/portfolio">
                <Button className="bg-[#84894A] hover:bg-[#84894A]/90 font-heading">View Portfolio</Button>
              </Link>
              <Link href="/articles">
                <Button
                  variant="outline"
                  className="border-[#84894A] text-[#84894A] hover:bg-[#84894A]/10 font-heading"
                >
                  Read Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full bg-[#2D2A24] py-12 md:py-24 lg:py-32 relative">
        <div className="container px-4 md:px:6">
          {/* Circular image at the top center */}
          <div className="absolute left-1/2 -top-16 -translate-x-1/2 z-10">
            <div className="h-32 w-32 rounded-full bg-[#2D2A24] flex items-center justify-center">
              <div className="h-28 w-28 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/line%20image.jpg-mtWgLnIheOr3m5Ntu2W05CdZ3QkqpI.jpeg"
                  alt="Minimalist line art"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-3xl text-center pt-12">
            {/* Full name */}
            <h2 className="text-3xl font-name font-bold mb-4 text-white">Oluwatomisin Soetan</h2>

            {/* Body text */}
            <div className="space-y-4 text-white/80 text-sm">
              <p>
                I am an analytics and data engineering professional with expertise in building data pipelines, creating
                analytics solutions, and deriving insights from complex datasets.
              </p>
              <p>
                My work spans across various industries, helping organizations make data-driven decisions through robust
                data infrastructure and insightful analytics.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/portfolio">
                <Button className="bg-[#84894A] hover:bg-[#84894A]/90 font-heading">View My Work</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-heading font-bold tracking-tighter sm:text-3xl text-[#84894A]">Services</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-12 bg-[#84894A]"></div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full border-2 border-[#84894A] p-4">
                <Database className="h-8 w-8 text-[#84894A]" />
              </div>
              <h3 className="mb-2 text-xl font-heading font-bold">Data Engineering</h3>
              <p className="text-muted-foreground text-sm">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full border-2 border-[#84894A] p-4">
                <BarChart className="h-8 w-8 text-[#84894A]" />
              </div>
              <h3 className="mb-2 text-xl font-heading font-bold">Analytics Engineering</h3>
              <p className="text-muted-foreground text-sm">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full border-2 border-[#84894A] p-4">
                <LineChart className="h-8 w-8 text-[#84894A]" />
              </div>
              <h3 className="mb-2 text-xl font-heading font-bold">Data Analysis</h3>
              <p className="text-muted-foreground text-sm">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-heading font-bold tracking-tighter sm:text-3xl text-[#84894A]">
              What I am Interested In
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-12 bg-[#84894A]"></div>
            </div>
          </div>

          {/* Subtitle */}
          <div className="mb-12 mx-auto max-w-3xl text-center">
            <p className="text-muted-foreground italic text-sm">
              These are the career and business areas that fascinate me. They are not necessarily things I have
              mastered—at least, not yet—but they captivate me. Some, I am eager to learn; others, I simply love to
              explore, discuss, and hear people debate. They amaze me, challenge me, and, ultimately, they are the
              things I want to work on.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {/* Analytics & Data Engineering */}
            <Card className="row-span-1 md:col-span-2 overflow-hidden">
              <div className="relative h-full">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Analytics & Data Engineering"
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <CardContent className="relative z-10 p-6 text-left">
                  <div className="flex items-start">
                    <div className="mr-3 rounded-full bg-[#FFE399]/20 p-3">
                      <Database className="h-5 w-5 text-[#84894A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold">Analytics & Data Engineering</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Creating models that guide intelligence for business and artificial intelligence as for machine
                        learning. Building the foundation for data-driven decision making.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* NoSQL */}
            <Card className="row-span-1 overflow-hidden">
              <div className="relative h-full">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="NoSQL"
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <CardContent className="relative z-10 p-6 text-left">
                  <div className="flex items-start">
                    <div className="mr-3 rounded-full bg-[#FFE399]/20 p-3">
                      <Database className="h-5 w-5 text-[#84894A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold">NoSQL</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        I believe when I get to a point that I can seamlessly apply NoSQL, I would confidently say I
                        know Data and Analytics Engineering.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Cybersecurity */}
            <Card className="row-span-1 overflow-hidden">
              <div className="relative h-full">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Cybersecurity"
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <CardContent className="relative z-10 p-6 text-left">
                  <div className="flex items-start">
                    <div className="mr-3 rounded-full bg-[#FFE399]/20 p-3">
                      <Shield className="h-5 w-5 text-[#84894A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold">Cybersecurity</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Particularly securing data in its rest and moving form, ensuring CIA (Confidentiality,
                        Integrity, Availability) in cybersecurity for data.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Investigative Data Analysis */}
            <Card className="row-span-1 md:col-span-2 overflow-hidden">
              <div className="relative h-full">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Investigative Data Analysis"
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <CardContent className="relative z-10 p-6 text-left">
                  <div className="flex items-start">
                    <div className="mr-3 rounded-full bg-[#FFE399]/20 p-3">
                      <Search className="h-5 w-5 text-[#84894A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold">Investigative Data Analysis</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Playing Sherlock with Data. Detective work, root cause analysis, what went wrong, etc. Finding
                        the hidden stories within complex datasets.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Traveling */}
            <Card className="row-span-1 overflow-hidden">
              <div className="relative h-full">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Traveling"
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <CardContent className="relative z-10 p-6 text-left">
                  <div className="flex items-start">
                    <div className="mr-3 rounded-full bg-[#FFE399]/20 p-3">
                      <Plane className="h-5 w-5 text-[#84894A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold">Traveling</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Exploring the world and seeing how things are done and thoughts are thought similarly or
                        differently, optimizations already employed, etc.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Sustainable Oil and Gas */}
            <Card className="row-span-1 overflow-hidden">
              <div className="relative h-full">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sustainable Oil and Gas"
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <CardContent className="relative z-10 p-6 text-left">
                  <div className="flex items-start">
                    <div className="mr-3 rounded-full bg-[#FFE399]/20 p-3">
                      <Oil className="h-5 w-5 text-[#84894A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold">Sustainable Oil and Gas</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Can we still use oil and gas, but mitigate its negative impact, for example CCUS (Carbon
                        Capture, Utilization, and Storage)? Exploring the balance between energy needs and environmental
                        responsibility.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Sustainable Fashion */}
            <Card className="row-span-1 overflow-hidden">
              <div className="relative h-full">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sustainable Fashion"
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <CardContent className="relative z-10 p-6 text-left">
                  <div className="flex items-start">
                    <div className="mr-3 rounded-full bg-[#FFE399]/20 p-3">
                      <Shirt className="h-5 w-5 text-[#84894A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold">Sustainable Fashion</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        I love fashion, being all dressed up and even do some sketching, pattern making and sewing, but
                        where do all those waste go to, can we create something new with them?
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What I Love To Do */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-heading font-bold tracking-tighter sm:text-3xl text-[#84894A]">
              What I Love To Do
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-12 bg-[#84894A]"></div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 overflow-hidden rounded-full h-24 w-24 bg-gray-200">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Activity icon"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-lg font-heading font-bold">Problem Solving</h3>
              <p className="text-sm text-muted-foreground">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 overflow-hidden rounded-full h-24 w-24 bg-gray-200">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Activity icon"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-lg font-heading font-bold">Data Modeling</h3>
              <p className="text-sm text-muted-foreground">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 overflow-hidden rounded-full h-24 w-24 bg-gray-200">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Activity icon"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-lg font-heading font-bold">Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

