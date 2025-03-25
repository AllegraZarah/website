"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample project data
const projects = [
  {
    id: 1,
    title: "End-to-End Projects",
    description: "Complete data solutions from ingestion to visualization",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["DE", "AE", "DA"],
    items: [
      { name: "Retail Analytics Platform", url: "#", tags: ["DE", "AE"] },
      { name: "Customer 360 Dashboard", url: "#", tags: ["AE", "DA"] },
      { name: "IoT Data Pipeline", url: "#", tags: ["DE"] },
    ],
    content:
      "These projects showcase my ability to build complete data solutions from data ingestion to visualization. Each project involves multiple stages of the data lifecycle, including data collection, processing, storage, and visualization. I've worked with various technologies and frameworks to deliver end-to-end solutions that provide actionable insights and drive business value.",
  },
  {
    id: 2,
    title: "Data Modeling",
    description: "Efficient data models for analytics and reporting",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["AE", "DE"],
    items: [
      { name: "Dimensional Modeling for Retail", url: "#", tags: ["AE"] },
      { name: "Data Vault Implementation", url: "#", tags: ["DE", "AE"] },
      { name: "Star Schema Optimization", url: "#", tags: ["AE"] },
    ],
    content:
      "Data modeling is a critical aspect of analytics engineering. These projects demonstrate my expertise in designing efficient data models that support analytics and reporting needs. I've implemented various modeling techniques, including dimensional modeling, data vault, and star schema, to create structures that balance performance, flexibility, and maintainability.",
  },
  {
    id: 3,
    title: "ETL Codebases",
    description: "Robust ETL solutions for data transformation",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["DE", "AE"],
    items: [
      { name: "Python ETL Framework", url: "#", tags: ["DE"] },
      { name: "dbt Transformation Models", url: "#", tags: ["AE"] },
      { name: "Airflow DAGs", url: "#", tags: ["DE"] },
    ],
    content:
      "Extract, Transform, Load (ETL) processes are the backbone of data engineering. These projects showcase my ability to develop robust ETL solutions that efficiently transform raw data into valuable insights. I've worked with various technologies, including Python, dbt, and Airflow, to create scalable and maintainable ETL pipelines.",
  },
  {
    id: 4,
    title: "Commodity Exchange Monitor",
    description: "Real-time monitoring of commodity exchanges",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["DA", "AE"],
    items: [
      { name: "Price Trend Analysis", url: "#", tags: ["DA"] },
      { name: "Market Volatility Dashboard", url: "#", tags: ["DA", "AE"] },
      { name: "Trading Volume Metrics", url: "#", tags: ["DA"] },
    ],
    content:
      "This project involves real-time monitoring and analysis of commodity exchanges. I developed a system that tracks price trends, market volatility, and trading volumes across various commodities. The solution provides traders and analysts with actionable insights to make informed decisions in a fast-paced market environment.",
  },
  {
    id: 5,
    title: "Machine Learning",
    description: "ML models and applications",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["AE", "DA"],
    items: [
      { name: "Customer Segmentation", url: "#", tags: ["DA"] },
      { name: "Predictive Maintenance", url: "#", tags: ["AE", "DA"] },
      { name: "Anomaly Detection", url: "#", tags: ["AE"] },
    ],
    content:
      "Machine Learning (ML) is transforming how organizations derive insights from data. These projects demonstrate my experience in developing ML models and applications. I've worked on customer segmentation, predictive maintenance, and anomaly detection, using various ML techniques to solve real-world business problems.",
  },
  {
    id: 6,
    title: "Shell Scripting",
    description: "Automation scripts for data processing",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["DE"],
    items: [
      { name: "Log Processing Scripts", url: "#", tags: ["DE"] },
      { name: "Data Migration Utilities", url: "#", tags: ["DE"] },
      { name: "Backup Automation", url: "#", tags: ["DE"] },
    ],
    content:
      "Shell scripting is a powerful tool for automation in data engineering. These projects showcase my ability to develop shell scripts that automate various data processing tasks. I've created scripts for log processing, data migration, and backup automation, improving efficiency and reducing manual effort in data operations.",
  },
  {
    id: 8,
    title: "ESG Reporting",
    description: "Environmental, Social, and Governance reporting solutions",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["DA", "AE"],
    items: [
      { name: "Carbon Footprint Dashboard", url: "#", tags: ["DA"] },
      { name: "Sustainability Metrics", url: "#", tags: ["DA", "AE"] },
      { name: "ESG Compliance Tracker", url: "#", tags: ["AE"] },
    ],
    content:
      "Environmental, Social, and Governance (ESG) reporting is increasingly important for organizations. These projects demonstrate my ability to develop solutions that track and report on ESG metrics. I've created dashboards and tools that help organizations monitor their carbon footprint, sustainability initiatives, and compliance with ESG standards.",
  },
]

// Languages and tools with icons and categories
const tools = [
  {
    name: "Python",
    category: "DE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    width: "w-32",
  },
  {
    name: "SQL",
    category: "AE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    width: "w-28",
  },
  {
    name: "dbt",
    category: "AE",
    icon: "https://seeklogo.com/images/D/dbt-logo-500AB0BAA7-seeklogo.com.png",
    width: "w-24",
  },
  {
    name: "Airflow",
    category: "DE",
    icon: "https://static-00.iconduck.com/assets.00/airflow-icon-512x512-tpr318yf.png",
    width: "w-36",
  },
  {
    name: "Shell",
    category: "DE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    width: "w-32",
  },
  {
    name: "OpenMetadata",
    category: "AE",
    icon: "https://openmetadata.org/images/logos/open-metadata.svg",
    width: "w-40",
  },
  {
    name: "Tableau",
    category: "DA",
    icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
    width: "w-24",
  },
  {
    name: "Power BI",
    category: "DA",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    width: "w-40",
  },
  {
    name: "Excel",
    category: "DA",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
    width: "w-28",
  },
  {
    name: "Git",
    category: "DE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    width: "w-20",
  },
  {
    name: "Docker",
    category: "DE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    width: "w-28",
  },
  {
    name: "Spark",
    category: "DE",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
    width: "w-32",
  },
  {
    name: "AWS",
    category: "DE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    width: "w-24",
  },
]

// Certifications
const certifications = [
  { name: "AWS Certified Data Engineer Associate", issuer: "Amazon Web Services", status: "IN VIEW" },
  { name: "Zach Wilson's Data Engineering Bootcamp", issuer: "Zach Wilson" },
  { name: "Analytics Engineering Cub", issuer: "Introduction to Analytics Engineering" },
]

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((project) => project.tags.includes(activeTab))

  const tagMap: Record<string, string> = {
    DE: "Data Engineering",
    AE: "Analytics Engineering",
    DA: "Data Analysis",
  }

  // Function to get background color for tool based on category
  const getToolBgColor = (category: string) => {
    switch (category) {
      case "DE":
        return "bg-[#2D2A24] text-white"
      case "AE":
        return "bg-[#84894A] text-white"
      case "DA":
        return "bg-[#FFE399] text-[#2D2A24]"
      default:
        return "bg-gray-200"
    }
  }

  return (
    <div className="flex flex-col">
      <div className="container px-4 py-12 md:px-6">
        <div className="mb-6 space-y-4 text-center">
          <h1 className="text-2xl font-mono font-bold tracking-tighter sm:text-3xl md:text-4xl text-black">
            <span className="text-[#84894A]">.</span>Portfolio
          </h1>
          <p className="text-gray-500 md:text-base mx-auto max-w-3xl text-xs">
            A collection of my work in data engineering, analytics engineering, and data analysis
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-full max-w-4xl bg-[#2D2A24]"></div>
          </div>
        </div>

        <div className="flex flex-col items-center mb-4 space-y-3">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mx-auto">
            <TabsList>
              <TabsTrigger value="all" className={activeTab === "all" ? "bg-[#FFE399] text-[#2D2A24]" : ""}>
                All
              </TabsTrigger>
              <TabsTrigger value="DE" className={activeTab === "DE" ? "bg-[#FFE399] text-[#2D2A24]" : ""}>
                Data Engineering
              </TabsTrigger>
              <TabsTrigger value="AE" className={activeTab === "AE" ? "bg-[#FFE399] text-[#2D2A24]" : ""}>
                Analytics Engineering
              </TabsTrigger>
              <TabsTrigger value="DA" className={activeTab === "DA" ? "bg-[#FFE399] text-[#2D2A24]" : ""}>
                Data Analysis
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Link href="/resume" className="text-black text-xl font-mono font-bold hover:underline underline">
            <span className="text-[#84894A]">.</span>Resume
          </Link>
        </div>
      </div>

      {/* Dark background section */}
      <section className="w-full bg-[#2D2A24] py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 gap-6">
            {filteredProjects.map((project, index) => {
              // Determine grid span based on index for varied sizes
              const colSpan =
                index % 5 === 0
                  ? "col-span-1 sm:col-span-6 md:col-span-8"
                  : index % 3 === 0
                    ? "col-span-1 sm:col-span-6 md:col-span-6"
                    : "col-span-1 sm:col-span-3 md:col-span-4"

              return (
                <div key={project.id} className={colSpan}>
                  <Card
                    className="group cursor-pointer overflow-hidden transition-all hover:border-[#84894A] h-full"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="relative h-full">
                      {/* Background Image */}
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover opacity-70"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                      </div>

                      {/* Content */}
                      <CardContent className="relative z-10 p-6 h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-nunito font-bold text-white mb-2">{project.title}</h3>
                          <p className="text-white/80 text-sm mb-4">{project.description}</p>
                        </div>

                        {/* Tags - Only visible on hover */}
                        <div className="flex flex-wrap gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="bg-[#FFE399]/20 text-white border-[#FFE399]">
                              {tagMap[tag]}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="container px-4 py-12 md:px-6">
        {/* Languages and Tools Section with Icons */}
        <section className="mt-8">
          <h2 className="mb-6 text-2xl font-heading font-bold text-[#84894A] text-center">Languages & Tools</h2>
          <div className="flex flex-wrap gap-4 justify-start">
            {tools.map((tool) => {
              return (
                <div
                  key={tool.name}
                  className={`${getToolBgColor(tool.category)} ${tool.width} rounded-md px-3 py-2 flex items-center justify-start`}
                >
                  <div className="h-4 w-4 mr-2 relative flex-shrink-0">
                    <Image
                      src={tool.icon || "/placeholder.svg"}
                      alt={tool.name}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm">{tool.name}</span>
                </div>
              )
            })}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-heading font-bold text-[#84894A] text-center">Certifications</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <Card key={cert.name} className="border-[#FFE399]">
                <CardContent className="p-4">
                  <h3 className="font-medium">{cert.name}</h3>
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                  {cert.status && <p className="text-xs text-[#84894A] mt-1">{cert.status}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedProject && (
          <DialogContent className="sm:max-w-[700px]">
            <div className="relative">
              {/* Background Image */}
              <div className="absolute inset-0 z-0 rounded-t-lg overflow-hidden">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              <DialogHeader className="relative z-10 p-4">
                <DialogTitle className="text-2xl font-nunito text-white">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-white/80">{selectedProject.description}</DialogDescription>
              </DialogHeader>
            </div>

            <div className="mt-4 p-4">
              <div className="mb-6">
                <p className="text-gray-700 text-sm">{selectedProject.content}</p>
              </div>

              <h4 className="mb-2 font-semibold">Projects in this category:</h4>
              <ul className="space-y-2">
                {selectedProject.items.map((item: any, idx: number) => (
                  <li key={idx} className="flex items-center justify-between">
                    <a href={item.url} className="text-[#84894A] hover:underline">
                      {item.name}
                    </a>
                    <div className="flex gap-1">
                      {item.tags.map((tag: string) => (
                        <Badge key={tag} variant="outline" className="bg-[#FFE399]/20 text-[#84894A] border-[#FFE399]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

