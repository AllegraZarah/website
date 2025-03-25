"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import ArticleCarousel from "@/components/article-carousel"
import WaveSeparator from "@/components/wave-separator"

// Sample article data
const articles = [
  {
    id: 1,
    title: "Introduction to dbt for Analytics Engineering",
    excerpt:
      "Learn how to use dbt to transform your raw data into analytics-ready models with best practices and techniques.",
    date: "2023-05-15",
    category: "IWT",
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
    url: "/articles/introduction-to-dbt",
  },
  {
    id: 2,
    title: "Building Robust Data Pipelines with Airflow",
    excerpt: "A comprehensive guide to creating reliable, scalable data pipelines using Apache Airflow.",
    date: "2023-06-22",
    category: "ITTS",
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
    url: "/articles/airflow-data-pipelines",
  },
  {
    id: 3,
    title: "Data Modeling Patterns for Analytics",
    excerpt: "Explore different data modeling patterns and when to use them for optimal analytics performance.",
    date: "2023-07-10",
    category: "IWT",
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
    url: "/articles/data-modeling-patterns",
  },
  {
    id: 4,
    title: "The Modern Data Stack: Components and Architecture",
    excerpt: "An overview of the modern data stack and how different components work together.",
    date: "2023-08-05",
    category: "ITTS",
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
    url: "/articles/modern-data-stack",
  },
  {
    id: 5,
    title: "Implementing Data Quality Checks in Your Pipeline",
    excerpt: "Practical approaches to ensuring data quality throughout your data pipeline.",
    date: "2023-09-12",
    category: "ITTS-HIGID",
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
    url: "/articles/data-quality-checks",
  },
  {
    id: 6,
    title: "SQL Optimization Techniques for Analytics Engineers",
    excerpt: "Tips and tricks to make your SQL queries more efficient and performant.",
    date: "2023-10-18",
    category: "IWT",
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
    url: "/articles/sql-optimization",
  },
  {
    id: 7,
    title: "Dimensional Modeling vs. Data Vault: When to Use Each",
    excerpt: "A comparison of dimensional modeling and data vault methodologies with use cases.",
    date: "2023-11-05",
    category: "ITTS-HIGID",
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
    url: "/articles/dimensional-vs-data-vault",
  },
  {
    id: 8,
    title: "Effective Data Documentation Strategies",
    excerpt: "How to create and maintain documentation that actually gets used.",
    date: "2023-12-10",
    category: "IWT",
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
    url: "/articles/data-documentation",
  },
  {
    id: 9,
    title: "The Analytics Engineer's Guide to dbt Testing",
    excerpt: "Comprehensive testing strategies to ensure data quality in your dbt projects.",
    date: "2024-01-15",
    category: "ITTS",
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
    url: "/articles/dbt-testing-guide",
  },
  {
    id: 10,
    title: "Quotes on Data Quality",
    excerpt: "A collection of insightful quotes about the importance of data quality.",
    date: "2024-02-20",
    category: "IWT Quotes",
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
    url: "/articles/data-quality-quotes",
  },
]

// External articles
const externalArticles = [
  {
    title: "Building a Metrics Layer with dbt and Cube.js",
    publication: "Medium",
    url: "https://medium.com/example",
    date: "2023-08-15",
  },
  {
    title: "Data Mesh Architecture: Principles and Implementation",
    publication: "Towards Data Science",
    url: "https://towardsdatascience.com/example",
    date: "2023-10-22",
  },
  {
    title: "Optimizing Snowflake Costs for Analytics Workloads",
    publication: "Analytics Vidhya",
    url: "https://analyticsvidhya.com/example",
    date: "2024-01-05",
  },
]

// Group articles by category
const groupedArticles = articles.reduce((acc: Record<string, any[]>, article) => {
  if (!acc[article.category]) {
    acc[article.category] = []
  }
  acc[article.category].push(article)
  return acc
}, {})

export default function ArticlesPage() {
  const [activeTab, setActiveTab] = useState("all")

  const featuredArticles = articles.filter((article) => article.featured)

  const filteredArticles = activeTab === "all" ? articles : articles.filter((article) => article.category === activeTab)

  return (
    <div className="flex flex-col">
      <div className="container px-4 py-12 md:px-6">
        <div className="mb-8 space-y-4 text-center">
          <h1 className="text-2xl font-mono font-bold tracking-tighter sm:text-3xl md:text-4xl text-black">
            <span className="text-[#84894A]">.</span>Articles
          </h1>
          <p className="text-gray-500 md:text-base text-xs mx-auto max-w-3xl">
            Insights and guides on data engineering, analytics, and more
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-full max-w-4xl bg-[#2D2A24]"></div>
          </div>
        </div>

        {/* Tabs for filtering - centered */}
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8 flex justify-center">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all" className={activeTab === "all" ? "bg-[#FFE399] text-[#2D2A24]" : ""}>
              All
            </TabsTrigger>
            <TabsTrigger
              value="IWT"
              className={activeTab === "IWT" ? "bg-[#FFE399] text-[#2D2A24]" : ""}
              title="I Was Thinking"
            >
              <span className="group relative">
                IWT
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 bg-black/80 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  I Was Thinking
                </span>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="ITTS"
              className={activeTab === "ITTS" ? "bg-[#FFE399] text-[#2D2A24]" : ""}
              title="I Thought To Share"
            >
              <span className="group relative">
                ITTS
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-36 bg-black/80 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  I Thought To Share
                </span>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="ITTS-HIGID"
              className={activeTab === "ITTS-HIGID" ? "bg-[#FFE399] text-[#2D2A24]" : ""}
              title="I Thought To Share - How I Got It Done"
            >
              <span className="group relative">
                ITTS-HIGID
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 bg-black/80 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  I Thought To Share - How I Got It Done
                </span>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="IWT Quotes"
              className={activeTab === "IWT Quotes" ? "bg-[#FFE399] text-[#2D2A24]" : ""}
              title="Quotes I Thought Up"
            >
              <span className="group relative">
                IWT Quotes
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-36 bg-black/80 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Quotes I Thought Up
                </span>
              </span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Featured Articles Carousel with smaller heading */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-heading font-bold text-[#84894A]">Featured Articles</h2>
          <ArticleCarousel articles={featuredArticles} />
        </section>
      </div>

      {/* Dark background section */}
      <section className="w-full bg-[#2D2A24] py-12 md:py-16">
        <div className="container px-4 md:px-6">
          {/* Articles by category */}
          {activeTab === "all" ? (
            Object.entries(groupedArticles).map(([category, categoryArticles], index) => (
              <section key={category} className="mb-12">
                {/* Only show divider line if not the first section */}
                {index !== 0 && (
                  <div className="mb-2 flex items-center">
                    <div className="h-0.5 w-full bg-[#FFE399]/50 mb-4"></div> {/* Reduced from h-1 to h-0.5 */}
                  </div>
                )}
                <div className="flex items-center mb-1">
                  {" "}
                  {/* Reduced margin from mb-2 to mb-1 */}
                  <div className="w-2 h-6 bg-[#84894A] mr-4"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="group relative">
                        <h2 className="text-2xl font-heading font-bold text-white">{category}</h2>
                        {category === "IWT" && (
                          <span className="absolute -bottom-8 left-0 w-32 bg-black/80 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            I Was Thinking
                          </span>
                        )}
                        {category === "ITTS" && (
                          <span className="absolute -bottom-8 left-0 w-36 bg-black/80 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            I Thought To Share
                          </span>
                        )}
                        {category === "ITTS-HIGID" && (
                          <span className="absolute -bottom-8 left-0 w-64 bg-black/80 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            I Thought To Share - How I Got It Done
                          </span>
                        )}
                        {category === "IWT Quotes" && (
                          <span className="absolute -bottom-8 left-0 w-36 bg-black/80 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            Quotes I Thought Up
                          </span>
                        )}
                      </div>
                      <Link href={`/articles/category/${category.toLowerCase()}`}>
                        <Button variant="link" className="text-[#FFE399]">
                          View All <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <WaveSeparator color="#84894A" width={108} height={12} className="ml-0" />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryArticles.slice(0, 3).map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="container px-4 py-12 md:px-6">
        {/* External Articles */}
        <section className="mt-8">
          <div className="mb-1 flex items-center">
            <div className="w-2 h-6 bg-[#84894A] mr-4"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading font-bold text-[#2D2A24]">External Articles</h2>
              </div>
            </div>
          </div>
          <WaveSeparator color="#84894A" width={108} height={12} className="ml-0" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {externalArticles.map((article, index) => (
              <Card key={index} className="border-[#FFE399]">
                <CardContent className="p-4">
                  <h3 className="font-medium">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#84894A] hover:underline"
                    >
                      {article.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Published in <span className="font-medium">{article.publication}</span> on {article.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

function ArticleCard({ article }: { article: any }) {
  return (
    <Card className="overflow-hidden bg-white h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <Badge className="mb-2 bg-[#FFE399] text-[#84894A]">{article.category}</Badge>
        <h3 className="mb-2 text-xl font-bold">
          <Link href={article.url} className="hover:text-[#84894A]">
            {article.title}
          </Link>
        </h3>
        <p className="mb-4 text-sm text-gray-500">{article.excerpt}</p>
        <p className="text-xs text-gray-400">{article.date}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Link href={article.url}>
          <Button variant="link" className="px-0 text-[#84894A]">
            Read More <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

