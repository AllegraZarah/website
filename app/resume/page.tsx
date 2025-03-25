import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8 space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#84894A]">Resume</h1>
        <p className="text-gray-500 md:text-xl mx-auto max-w-3xl">
          My professional experience, skills, and qualifications
        </p>
        <div className="flex justify-center">
          <div className="h-1 w-24 bg-[#84894A]"></div>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <Button className="bg-[#84894A] hover:bg-[#84894A]/90">
          <Download className="mr-2 h-4 w-4" /> Download Resume
        </Button>
      </div>

      {/* Resume content would go here */}
      <div className="prose prose-lg max-w-none">
        <p>Resume content placeholder. This page would contain your full resume or CV.</p>
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/portfolio">
          <Button variant="outline" className="border-[#84894A] text-[#84894A]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>
      </div>
    </div>
  )
}

