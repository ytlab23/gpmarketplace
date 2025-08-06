"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Target,
  Zap,
  Users,
  TrendingUp,
  FileText,
  Search,
  Brain,
  DollarSign,
  Star,
  ArrowRight,
  Lightbulb,
  Shield,
  Globe,
  Clock,
  Award,
  BookOpen,
  MessageCircle,
  ChevronDown,
  ExternalLink,
  Rocket,
  BarChart3,
  PenTool,
  Link,
} from "lucide-react"
import { useState } from "react"

export function GuestPostGuideClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-4 py-2 text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Complete Master Guide
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-8 leading-tight">
            How to Write the Perfect Guest Post
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Master the complete art of guest posting with our comprehensive guide. From advanced SEO optimization to
            AI-powered writing, learn everything you need to create content that publishers fight to publish and readers
            can't stop sharing.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-12">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="font-medium">25 min comprehensive read</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <Target className="w-4 h-4 text-green-600" />
              <span className="font-medium">Beginner to Expert Level</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              <span className="font-medium">Battle-Tested Strategies</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <Rocket className="w-4 h-4 text-orange-600" />
              <span className="font-medium">Immediate Results</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Learning Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-50 transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://app.gpmarketplace.com/", "_blank")}
            >
              Find Publishers
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Table of Contents */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="content">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You'll Master Today</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This isn't just another guest posting guide. It's your complete roadmap to becoming a guest posting expert
              that publishers actively seek out and readers genuinely love.
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced SEO Optimization</h3>
                      <p className="text-gray-600">
                        Master keyword research, density optimization, and content length strategies that actually rank
                        on Google's first page.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group hover:bg-purple-50 p-4 rounded-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Writing Mastery</h3>
                      <p className="text-gray-600">
                        Leverage ChatGPT, Claude, and premium AI tools with proven prompts that create compelling,
                        human-like content.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group hover:bg-green-50 p-4 rounded-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Freelancer Scaling System</h3>
                      <p className="text-gray-600">
                        Complete SOPs for hiring, managing, and scaling with Fiverr freelancers who deliver consistent
                        quality.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 group hover:bg-orange-50 p-4 rounded-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Authority Building Secrets</h3>
                      <p className="text-gray-600">
                        Create content that positions you as an industry expert and influences both AI algorithms and
                        human readers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group hover:bg-indigo-50 p-4 rounded-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Link className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Link Placement</h3>
                      <p className="text-gray-600">
                        Master anchor text variety, authority link integration, and traffic-driving placement
                        strategies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group hover:bg-yellow-50 p-4 rounded-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Optimization</h3>
                      <p className="text-gray-600">
                        Advanced techniques for maximizing engagement, social shares, and long-term traffic generation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <p className="text-lg text-gray-600 mb-6">
                  <strong>Bonus:</strong> Complete templates, checklists, and real-world examples you can use
                  immediately
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="outline" className="px-3 py-1">
                    ✓ Freelancer SOPs
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    ✓ AI Prompt Library
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    ✓ SEO Checklists
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    ✓ Link Strategy Guide
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Introduction with Transition */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-xl max-w-none">
            <p className="text-2xl text-gray-700 leading-relaxed mb-8 font-light">
              Guest posting remains one of the most effective ways to build authority, drive targeted traffic, and
              improve your search rankings. But here's the brutal truth:{" "}
              <strong>most guest posts are absolutely terrible</strong>.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              They're generic, poorly researched, and provide zero real value to readers. Publishers reject them
              instantly, and the few that get published disappear into the digital void without generating a single
              click.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              This comprehensive guide will completely change that reality for you. You'll learn the exact strategies,
              tools, and systems that top marketers use to create guest posts that publishers actively fight to publish,
              readers eagerly share, and search engines reward with premium rankings.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-8 rounded-r-xl mb-12">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">What Makes This Guide Different</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-blue-800">Real strategies from $10M+ campaigns</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-blue-800">AI tools and prompts that actually work</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-blue-800">Complete freelancer management system</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-blue-800">Advanced link strategies for maximum ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced SEO Optimization Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Search className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">SEO Optimization: Your Foundation for Success</h2>
              <p className="text-xl text-gray-600 mt-2">
                Master the technical foundation that makes everything else possible
              </p>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Before you write a single word, you need to understand exactly what your target audience is searching for
              and how to structure your content to rank. This isn't about keyword stuffing or outdated SEO tricks. It's
              about creating content that genuinely serves search intent while being optimized for discovery.
            </p>
          </div>

          <Card className="mb-12 shadow-xl border-0">
            <CardContent className="p-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                Essential Keyword Research Tools
              </h3>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Ahrefs</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The gold standard for keyword research. Provides comprehensive keyword data, competitor analysis,
                    and content gap identification. Essential for serious marketers.
                  </p>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4">Premium Tool</Badge>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>150+ million keywords</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Competitor content analysis</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>SERP feature tracking</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open("https://ahrefs.com", "_blank")}
                      className="hover:bg-red-50 hover:border-red-300"
                    >
                      Visit Ahrefs <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">KeywordTool.io</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Perfect balance of free features with premium upgrades. Great for long-tail keyword discovery and
                    understanding search intent across multiple platforms.
                  </p>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 mb-4">Freemium</Badge>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>750+ keyword suggestions</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Multiple search engines</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Question-based keywords</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open("https://keywordtool.io", "_blank")}
                      className="hover:bg-yellow-50 hover:border-yellow-300"
                    >
                      Try KeywordTool.io <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">FreeTools.org</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Completely free keyword research tools perfect for budget-conscious marketers and beginners.
                    Surprisingly comprehensive for a free solution.
                  </p>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">100% Free</Badge>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>No registration required</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Multiple free tools</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Basic competitor analysis</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open("https://freetools.org", "_blank")}
                      className="hover:bg-green-50 hover:border-green-300"
                    >
                      Explore FreeTools <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
            <CardContent className="p-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-blue-600" />
                Complete SEO Optimization Checklist
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Search className="w-5 h-5 text-blue-600" />
                      Keyword Strategy
                    </h4>
                    <div className="space-y-3 ml-7">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Target 1-2 primary keywords with 1-3% density (natural placement only)
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Include 3-5 related long-tail keywords throughout content</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Research search intent: informational, commercial, or transactional
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      Content Structure
                    </h4>
                    <div className="space-y-3 ml-7">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Aim for 2,000-4,000 words for comprehensive topic coverage
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Use H2 and H3 headers with keywords where natural</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Include bullet points, numbered lists, and visual breaks</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      Competitive Analysis
                    </h4>
                    <div className="space-y-3 ml-7">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Analyze top 10 ranking pages for your target keywords</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Identify content gaps and unique angles to explore</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Note average word count and content depth of competitors</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-600" />
                      Quality Signals
                    </h4>
                    <div className="space-y-3 ml-7">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Include recent statistics and data (within 12 months)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Add 2-3 authoritative external links to boost credibility</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Ensure perfect grammar and readability (Flesch score 60+)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced AI Writing Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">AI-Powered Content Creation</h2>
              <p className="text-xl text-gray-600 mt-2">
                Leverage artificial intelligence to research, write, and optimize faster than ever
              </p>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              AI has revolutionized content creation, but most people use it wrong. They ask for generic content and get
              generic results. The secret is in the prompts and the strategic combination of different AI tools for
              different tasks.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's exactly how to use AI tools to create guest posts that sound human, provide genuine value, and get
              accepted by even the most selective publishers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Free AI Tools</h3>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">ChatGPT</h4>
                      <Badge className="bg-green-100 text-green-800">Free</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Excellent for research, content outlines, and ideation. The free version is surprisingly capable
                      for most guest posting tasks.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Best for: Research and outlines</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Strength: Creative ideation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Limitation: Knowledge cutoff</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 bg-transparent"
                      onClick={() => window.open("https://chat.openai.com", "_blank")}
                    >
                      Try ChatGPT <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">Claude</h4>
                      <Badge className="bg-blue-100 text-blue-800">Free</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Superior for longer content and nuanced writing. Better at maintaining context across lengthy
                      conversations and complex instructions.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Best for: Long-form content</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Strength: Context retention</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Advantage: More natural writing</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 bg-transparent"
                      onClick={() => window.open("https://claude.ai", "_blank")}
                    >
                      Try Claude <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Premium AI Tools</h3>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">SurferSEO</h4>
                      <Badge className="bg-orange-100 text-orange-800">Premium</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">
                      AI writing with built-in SEO optimization. Analyzes top-ranking pages and suggests content
                      improvements in real-time.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Best for: SEO-optimized content</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Strength: Real-time optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Feature: Competitor analysis</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 bg-transparent"
                      onClick={() => window.open("https://surferseo.com", "_blank")}
                    >
                      Try SurferSEO <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">Writesonic</h4>
                      <Badge className="bg-purple-100 text-purple-800">Premium</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Specialized in marketing and blog content with templates specifically designed for guest posts and
                      thought leadership articles.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Best for: Marketing content</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Strength: Industry templates</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Feature: Brand voice training</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 bg-transparent"
                      onClick={() => window.open("https://writesonic.com", "_blank")}
                    >
                      Try Writesonic <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Need more options?</strong> Explore hundreds of AI writing tools at:
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open("https://ai-database.org/en/category/article-generation", "_blank")}
                    className="w-full"
                  >
                    AI Database - Article Generation Tools <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Prompts Section */}
          <Card className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 border-purple-200 shadow-xl">
            <CardContent className="p-12">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Master AI Prompts for Guest Posts</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  These battle-tested prompts will transform your AI interactions from generic to genius. Copy,
                  customize, and watch your content quality skyrocket.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Search className="w-4 h-4 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">Deep Research Prompt</h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm text-gray-700 mb-4">
                      "Act as an expert researcher in [INDUSTRY]. Research '[YOUR TOPIC]' and provide:
                      <br />• 10 unique angles not covered in top Google results
                      <br />• 5 recent statistics from 2024
                      <br />• 3 controversial viewpoints with evidence
                      <br />• Current industry trends affecting this topic
                      <br />• Expert quotes or case studies if available"
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Best for: Topic exploration
                    </Badge>
                  </div>

                  <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-green-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">Strategic Outline Prompt</h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm text-gray-700 mb-4">
                      "Create a detailed outline for a 3,000-word guest post about '[TOPIC]' for [TARGET AUDIENCE].
                      Include:
                      <br />• Compelling hook for introduction
                      <br />• 7-9 main sections with subheadings
                      <br />• Key points and examples for each section
                      <br />• Natural places to include statistics
                      <br />• Strong conclusion with actionable takeaways"
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Best for: Content structure
                    </Badge>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <PenTool className="w-4 h-4 text-purple-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">Content Enhancement Prompt</h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm text-gray-700 mb-4">
                      "Improve this paragraph to be more engaging and authoritative:
                      <br />
                      [PASTE YOUR PARAGRAPH]
                      <br />
                      <br />
                      Make it:
                      <br />• More conversational and human
                      <br />• Include specific examples or data
                      <br />• Add a compelling hook or transition
                      <br />• Maintain professional credibility"
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Best for: Content refinement
                    </Badge>
                  </div>

                  <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-orange-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">Publisher-Specific Prompt</h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm text-gray-700 mb-4">
                      "Analyze [PUBLISHER WEBSITE] and adapt this guest post outline to match their:
                      <br />• Content style and tone
                      <br />• Average article length
                      <br />• Audience preferences
                      <br />• Common topics and angles
                      <br />• Formatting preferences
                      <br />
                      <br />
                      Then suggest 3 headline variations that would fit their editorial style."
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Best for: Publisher alignment
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                <h4 className="text-lg font-semibold mb-3">Pro AI Writing Tips</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Always provide context about your industry and audience</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Ask for specific examples and data points</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Request multiple variations to choose from</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Use follow-up prompts to refine and improve</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Freelancer Hiring Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Scale with Freelancers: The Complete System</h2>
              <p className="text-xl text-gray-600 mt-2">
                Build a reliable team of writers who deliver consistent quality at scale
              </p>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Once you've mastered the guest posting process yourself, the next step is scaling through freelancers. But
              here's where most people fail: they hire randomly, provide vague instructions, and get disappointing
              results.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This system will help you build a reliable team of writers who understand your standards and consistently
              deliver guest posts that get accepted and drive results.
            </p>
          </div>

          <Card className="shadow-2xl border-0 mb-12">
            <CardContent className="p-12">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Complete Fiverr Hiring SOP</h3>
                <p className="text-lg text-gray-600">
                  Follow this exact process to find, vet, and manage freelance writers who deliver exceptional results
                </p>
              </div>

              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-semibold text-gray-900 mb-4">Advanced Vetting Process</h4>
                      <p className="text-gray-600 mb-6">
                        Don't just look at ratings. Use this comprehensive vetting process to identify writers who can
                        actually deliver.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h5 className="font-semibold text-gray-900">Portfolio Analysis</h5>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">
                                Look for samples in your specific niche or similar industries
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">
                                Check for depth of research and unique insights in samples
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">Verify writing style matches your brand voice</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">Look for proper use of data and statistics</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h5 className="font-semibold text-gray-900">Credibility Checks</h5>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">Minimum 4.8/5 rating with 50+ completed orders</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">
                                Read recent reviews for quality and communication feedback
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">Check response time and availability</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">
                                Verify English proficiency through profile and samples
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                        <h5 className="font-semibold text-blue-900 mb-3">Test Assignment Strategy</h5>
                        <p className="text-blue-800 mb-3">
                          Before committing to a large project, always start with a small test assignment:
                        </p>
                        <div className="text-sm text-blue-700 space-y-2">
                          <div className="flex items-center gap-2">
                            <ArrowRight className="w-4 h-4" />
                            <span>Request a 500-word sample on your specific topic</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ArrowRight className="w-4 h-4" />
                            <span>Provide detailed brief to test instruction-following</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ArrowRight className="w-4 h-4" />
                            <span>Evaluate research quality, writing style, and turnaround time</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-semibold text-gray-900 mb-4">Perfect Project Brief Template</h4>
                      <p className="text-gray-600 mb-6">
                        Use this exact template for every project. Clear instructions lead to better results and fewer
                        revisions.
                      </p>

                      <div className="bg-gray-50 p-8 rounded-xl border">
                        <h5 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-blue-600" />
                          Copy-Paste Project Brief Template
                        </h5>
                        <div className="space-y-4 text-sm text-gray-700">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <div>
                                <strong className="text-gray-900">Project Title:</strong>
                                <p className="text-gray-600 mt-1">[Specific, descriptive title]</p>
                              </div>
                              <div>
                                <strong className="text-gray-900">Target Audience:</strong>
                                <p className="text-gray-600 mt-1">[Detailed audience description with pain points]</p>
                              </div>
                              <div>
                                <strong className="text-gray-900">Word Count:</strong>
                                <p className="text-gray-600 mt-1">
                                  2,500-3,000 words (comprehensive coverage required)
                                </p>
                              </div>
                              <div>
                                <strong className="text-gray-900">Primary Keywords:</strong>
                                <p className="text-gray-600 mt-1">[2-3 main keywords with search volume]</p>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <strong className="text-gray-900">Tone & Style:</strong>
                                <p className="text-gray-600 mt-1">
                                  Professional but conversational, authoritative yet approachable
                                </p>
                              </div>
                              <div>
                                <strong className="text-gray-900">Required Sections:</strong>
                                <p className="text-gray-600 mt-1">
                                  Introduction, 6-8 main sections with subheadings, conclusion
                                </p>
                              </div>
                              <div>
                                <strong className="text-gray-900">Research Requirements:</strong>
                                <p className="text-gray-600 mt-1">
                                  Include 5+ recent statistics, 2-3 expert quotes or case studies
                                </p>
                              </div>
                              <div>
                                <strong className="text-gray-900">Deadline:</strong>
                                <p className="text-gray-600 mt-1">[Realistic timeline with buffer for revisions]</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <strong className="text-gray-900">Additional Requirements:</strong>
                            <ul className="mt-2 space-y-1 text-gray-600">
                              <li>• Plagiarism-free content (will be checked)</li>
                              <li>• Include 2-3 authoritative external links</li>
                              <li>• Use bullet points and numbered lists for readability</li>
                              <li>• Provide compelling introduction hook</li>
                              <li>• End with actionable conclusion</li>
                              <li>• Submit in Google Docs with edit access</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="mt-6 bg-green-600 hover:bg-green-700"
                        onClick={() => window.open("https://fiverr.com", "_blank")}
                      >
                        Find Writers on Fiverr <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-semibold text-gray-900 mb-4">Quality Control & Management</h4>
                      <p className="text-gray-600 mb-6">
                        Implement these quality control measures to ensure every piece meets your standards.
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-4">Content Review Process</h5>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">Run all content through Grammarly or ProWritingAid</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">Check for plagiarism using Copyscape or Quetext</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">
                                Verify all statistics and claims with original sources
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">Ensure keyword density stays between 1-3%</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold text-gray-900 mb-4">Revision Management</h5>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">
                                Always include 2 free revisions in your project scope
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">
                                Provide specific, actionable feedback for improvements
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">Set clear expectations for revision turnaround time</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">Document successful writers for future projects</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-500">
                        <h5 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                          <Lightbulb className="w-5 h-5" />
                          Pro Management Tips
                        </h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-800">
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>Create a writer scorecard to track performance</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>Build relationships with 3-5 reliable writers</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>Provide bonus payments for exceptional work</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>Create style guides for consistent output</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Advanced Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Advanced Guest Post Strategies</h2>
              <p className="text-xl text-gray-600 mt-2">Master-level techniques that separate pros from amateurs</p>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Now that you understand the fundamentals, let's dive into the advanced strategies that top marketers use
              to maximize their guest posting ROI. These techniques will help you build genuine authority, drive
              qualified traffic, and create lasting relationships with publishers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Content Psychology & Authority</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      The Positivity Advantage
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Positive content consistently outperforms negative content in search results, social shares, and
                      reader engagement. This isn't just feel-good advice—it's data-driven strategy.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-medium text-green-900 mb-2">Implementation Tips:</h5>
                      <div className="space-y-2 text-sm text-green-800">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Frame challenges as opportunities for growth</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Focus on solutions rather than just problems</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Include success stories and positive outcomes</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Use empowering language that motivates action</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-500" />
                      Authority Building Techniques
                    </h4>
                    <p className="text-gray-600 mb-4">
                      True authority comes from demonstrating expertise through unique insights, personal experiences,
                      and valuable perspectives that can't be found elsewhere.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium text-gray-900">Share Personal Case Studies</h5>
                          <p className="text-sm text-gray-600">
                            Include specific results, challenges faced, and lessons learned
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium text-gray-900">Provide Unique Data</h5>
                          <p className="text-sm text-gray-600">
                            Original research, surveys, or analysis from your experience
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium text-gray-900">Challenge Conventional Wisdom</h5>
                          <p className="text-sm text-gray-600">Respectfully question common beliefs with evidence</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-purple-500" />
                      Engagement Optimization
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Content that generates comments, shares, and discussions signals quality to both search engines
                      and human readers. Design your content to encourage interaction.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="space-y-2 text-sm text-purple-800">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>End sections with thought-provoking questions</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Include controversial but well-supported viewpoints</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Create actionable takeaways readers can implement</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Invite readers to share their experiences</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Link className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Strategic Link Mastery</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-indigo-500" />
                      Anchor Text Strategy
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Natural anchor text distribution is crucial for avoiding penalties and maximizing link value.
                      Here's the exact formula used by top SEO agencies.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">Branded Anchors</span>
                        <Badge className="bg-blue-100 text-blue-800">70%</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">Partial Match</span>
                        <Badge className="bg-green-100 text-green-800">15%</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">Exact Match</span>
                        <Badge className="bg-yellow-100 text-yellow-800">10%</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">Generic</span>
                        <Badge className="bg-gray-100 text-gray-800">5%</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      <strong>Examples:</strong> "GP Marketplace" (branded), "guest posting platform" (partial), "guest
                      posts marketplace" (exact), "click here" (generic)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-green-500" />
                      Authority Link Integration
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Including links to high-authority sites doesn't just build trust—it can actually improve your
                      content's search rankings through association.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-medium text-green-900 mb-3">Best Practices:</h5>
                      <div className="space-y-2 text-sm text-green-800">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Include 2-3 links to authoritative sources (DR 70+)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Link to recent studies, statistics, or expert opinions</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Use contextually relevant anchor text</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Open external links in new tabs</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-orange-500" />
                      Traffic-Driving Placement
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Where you place your links dramatically affects click-through rates. Strategic placement can
                      increase traffic by 300% or more.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-orange-600 font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">First Third Placement</h5>
                          <p className="text-sm text-gray-600">
                            Place your main link in the first 30% of content for maximum visibility
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-orange-600 font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Contextual Integration</h5>
                          <p className="text-sm text-gray-600">
                            Embed links naturally within valuable content, not as obvious promotions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-orange-600 font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Curiosity Creation</h5>
                          <p className="text-sm text-gray-600">
                            Tease additional resources or tools that complement the current content
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Traffic Generation Masterclass */}
          <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-blue-200 shadow-xl mb-16">
            <CardContent className="p-12">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Traffic Generation Masterclass</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  These advanced techniques will transform your guest posts from simple backlinks into powerful
                  traffic-driving machines that deliver qualified visitors for months.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Hook Mastery</h4>
                  <p className="text-gray-600 mb-6">
                    Start with compelling statistics, surprising facts, or thought-provoking questions that make readers
                    unable to stop reading.
                  </p>
                  <div className="bg-white p-4 rounded-lg text-left">
                    <h5 className="font-medium text-gray-900 mb-2">Proven Hook Formulas:</h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-600" />
                        <span>"X% of businesses fail because..."</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-600" />
                        <span>"What if I told you that..."</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-600" />
                        <span>"The biggest mistake most..."</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Value-First Approach</h4>
                  <p className="text-gray-600 mb-6">
                    Provide genuine value before promoting your link. Readers should benefit significantly even without
                    clicking through to your site.
                  </p>
                  <div className="bg-white p-4 rounded-lg text-left">
                    <h5 className="font-medium text-gray-900 mb-2">Value Delivery Methods:</h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                        <span>Actionable step-by-step guides</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                        <span>Exclusive insights and data</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                        <span>Problem-solving frameworks</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Curiosity Gaps</h4>
                  <p className="text-gray-600 mb-6">
                    Create strategic information gaps that can only be filled by visiting your site. Tease additional
                    resources, tools, or deeper insights.
                  </p>
                  <div className="bg-white p-4 rounded-lg text-left">
                    <h5 className="font-medium text-gray-900 mb-2">Curiosity Techniques:</h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600" />
                        <span>"For the complete checklist..."</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600" />
                        <span>"See our detailed case study..."</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600" />
                        <span>"Download our free template..."</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common guest posting questions from our community
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long should my guest posts be for maximum impact?",
                answer:
                  "The optimal length is 2,500-4,000 words for comprehensive topics. This length allows you to provide genuine value, include sufficient keyword coverage, and demonstrate expertise. However, quality always trumps quantity—a well-researched 2,000-word post will outperform a generic 4,000-word piece every time.",
              },
              {
                question: "What's the ideal keyword density for guest posts?",
                answer:
                  "Aim for 1-3% keyword density, but focus on natural placement rather than hitting exact percentages. Modern search algorithms prioritize semantic relevance and user experience over keyword stuffing. Include your primary keyword in the title, at least one H2 header, and naturally throughout the content.",
              },
              {
                question: "How many backlinks should I include in a guest post?",
                answer:
                  "Generally, 1-2 links to your own site and 2-3 links to authoritative external sources work best. The key is relevance and value—each link should genuinely help the reader. Publishers are more likely to accept posts that include authoritative external links as they add credibility.",
              },
              {
                question: "Should I use AI tools for guest post writing?",
                answer:
                  "AI tools are excellent for research, outlining, and enhancing your writing, but shouldn't replace human creativity and expertise. Use AI for initial research and structure, then add your unique insights, personal experiences, and industry knowledge. Always fact-check AI-generated content and ensure it matches your brand voice. For detailed AI prompts and strategies specifically designed for guest posting, check out our comprehensive writing guide above.",
              },
              {
                question: "How do I find the right publishers for my guest posts?",
                answer:
                  "Start by researching sites in your niche that accept guest posts. Look for sites with good domain authority (40+), engaged audiences, and content that aligns with your expertise. Check their guest posting guidelines, analyze their existing content style, and ensure their audience matches your target market.",
              },
              {
                question: "What's the best way to pitch guest post ideas?",
                answer:
                  "Personalize each pitch by referencing specific articles from their site, propose 3-5 unique topic ideas with brief outlines, demonstrate your expertise with relevant credentials or previous work, and show how your content will benefit their specific audience. Keep pitches concise but compelling.",
              },
              {
                question: "How long does it take to see results from guest posting?",
                answer:
                  "SEO benefits typically appear within 3-6 months, while referral traffic can start immediately. The key is consistency—publishing 2-4 high-quality guest posts per month will compound results over time. Focus on building relationships with publishers for long-term success.",
              },
              {
                question: "Can I repurpose content for multiple guest posts?",
                answer:
                  "Never publish identical content on multiple sites as this creates duplicate content issues. However, you can create multiple unique articles around the same core topic, each with different angles, examples, and insights. Each piece should provide unique value to its specific audience.",
              },
            ].map((faq, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Ready to Dominate Guest Posting?
            </Badge>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Turn Your Knowledge Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Guest Posting Success
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            You now have everything you need to create guest posts that publishers love and readers share. The only
            thing left is to find the right publishers and start building your authority.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("https://app.gpmarketplace.com/", "_blank")}
            >
              Find Perfect Publishers
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent"
              onClick={() => document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })}
            >
              Review the Guide
              <BookOpen className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">15,000+ Publishers</h3>
              <p className="text-blue-100 text-sm">Verified publishers across every niche</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Wholesale Prices</h3>
              <p className="text-blue-100 text-sm">No agency markup, direct publisher rates</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quality Guaranteed</h3>
              <p className="text-blue-100 text-sm">Every publisher manually verified</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
