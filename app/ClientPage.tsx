"use client"

import {
  ArrowRight,
  CheckCircle,
  Globe,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Clock,
  Target,
  BarChart3,
  Sparkles,
  ChevronRight,
  Search,
  Filter,
  SlidersHorizontal,
  MapPin,
  DollarSign,
  Calendar,
  Star,
  Eye,
  TrendingDown,
  Languages,
  Tag,
  Crown,
  Percent,
  Building2,
  Handshake,
  FileText,
  Link,
  Package,
  HelpCircle,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function ClientPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - DARK */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-violet-400" />
            <span className="text-violet-300 text-sm font-medium">Trusted by 10,000+ growth hackers</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Premium Guest Posts
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Retail Prices
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Skip the agencies. Connect directly with{" "}
            <span className="text-violet-400 font-semibold">15,000+ verified publishers</span> and get high-authority
            backlinks that actually move rankings. No markup, no BS.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white text-lg px-10 py-4 rounded-xl shadow-2xl shadow-purple-500/25 border-0 group"
              onClick={() => window.open("https://app.gpmarketplace.com", "_blank")}
            >
              Browse Publishers
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-4 rounded-xl bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            >
              How It Works
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <Clock className="w-5 h-5 text-blue-400" />
              <span>3-7 Day Delivery</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <Target className="w-5 h-5 text-pink-400" />
              <span>Every Niche</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - LIGHT GRAY */}
      <section className="py-20 relative bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "15,000+", label: "Active Publishers", icon: Users, color: "from-violet-500 to-purple-500" },
              { number: "500K+", label: "Posts Delivered", icon: BarChart3, color: "from-blue-500 to-cyan-500" },
              { number: "98%", label: "Success Rate", icon: Target, color: "from-emerald-500 to-teal-500" },
              { number: "$47", label: "Avg. Savings", icon: TrendingUp, color: "from-pink-500 to-rose-500" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${stat.color} p-0.5`}>
                    <div className="w-full h-full bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors">
                      <stat.icon className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - DARK */}
      <section
        id="how-it-works"
        className="py-32 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-300">
              <Zap className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Three Steps to
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Link Building Success
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've eliminated the complexity. No agencies, no negotiations, no waiting weeks for responses.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-24">
            {/* Step 1 - Sign Up */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    01
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Sign Up</h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Create your account in 30 seconds. No credit card required, no lengthy onboarding process. Just your
                  email and you're ready to start building links.
                </p>
                <div className="flex items-center text-emerald-400">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-lg">Free account setup</span>
                </div>
              </div>
              <div className="lg:order-first">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="bg-white rounded-xl p-6 shadow-2xl">
                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Join GP Marketplace</h4>
                      <p className="text-gray-600">Start building quality backlinks today</p>
                    </div>
                    <div className="space-y-4">
                      <Input placeholder="Enter your email" className="h-12" />
                      <Input placeholder="Choose a password" type="password" className="h-12" />
                      <Button className="w-full h-12 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                        Create Account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Choose Publisher */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    02
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Choose Publisher</h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Browse our verified marketplace with advanced filters. See real metrics from Ahrefs, traffic data, and
                  transparent pricing. No hidden fees or inflated numbers.
                </p>
                <div className="flex items-center text-emerald-400">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-lg">15,000+ verified publishers</span>
                </div>
              </div>
              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="bg-white rounded-xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">TechCrunch.com</h4>
                      <Badge className="bg-emerald-100 text-emerald-800">Verified</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-gray-500">DA</div>
                        <div className="font-bold text-gray-900">94</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Traffic</div>
                        <div className="font-bold text-gray-900">2.1M</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Price</div>
                        <div className="font-bold text-gray-900">$850</div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                      Select Publisher
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Submit Guest Post */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    03
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Submit Guest Post</h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Upload your content, make secure payment (held in escrow), and track progress in real-time. Get
                  notified the moment your post goes live with full reporting.
                </p>
                <div className="flex items-center text-emerald-400">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-lg">Average 5-day delivery</span>
                </div>
              </div>
              <div className="lg:order-first">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="bg-white rounded-xl p-6 shadow-2xl">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Guest Post Submitted</h4>
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">Status</span>
                          <Badge className="bg-blue-100 text-blue-800">In Review</Badge>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">Publisher</span>
                          <span className="text-sm font-medium text-gray-900">TechCrunch.com</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Expected Live Date</span>
                          <span className="text-sm font-medium text-gray-900">Dec 28, 2024</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-violet-600 to-purple-600 h-2 rounded-full w-2/3"></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Step 2 of 3: Content Review</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - DARK GRAY */}
      <section id="features" className="py-32 relative bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why We Are The #1
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Guest Posts Marketplace
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built by SEOs, for SEOs. Every feature designed to scale your link building without the headaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Verified Publishers Only",
                description:
                  "Every site manually vetted for traffic, authority, and legitimacy. Zero spam, zero PBNs, zero exceptions.",
              },
              {
                icon: Users,
                title: "Direct Access",
                description: "Connect straight with site owners. No agency markup, no middlemen taking their cut.",
              },
              {
                icon: Zap,
                title: "Lightning Delivery",
                description: "Most posts live within 3-7 days. Track progress in real-time with instant notifications.",
              },
              {
                icon: Target,
                title: "Every Niche Covered",
                description: "From SaaS to local services, we have quality publishers in every industry and geo.",
              },
              {
                icon: Languages,
                title: "Multiple Languages",
                description:
                  "Publishers in 25+ languages including English, Spanish, French, German, and Portuguese. Expand globally with native content.",
              },
              {
                icon: DollarSign,
                title: "Cheapest Rates",
                description:
                  "Save up to 70% compared to agencies with direct publisher access. No markup, no hidden fees, just wholesale prices.",
              },
              {
                icon: Building2,
                title: "Made for Resellers",
                description:
                  "White-label solution with additional 5% discount for agencies. Custom branding, bulk pricing, and dedicated support.",
              },
              {
                icon: BarChart3,
                title: "Real Metrics",
                description:
                  "Verified traffic and authority data from Ahrefs, SEMrush, and SimilarWeb. No fake numbers.",
              },
              {
                icon: CheckCircle,
                title: "Money-Back Guarantee",
                description: "Not satisfied? Full refund, no questions asked. We stand behind every placement.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-800 transition-all duration-500 group overflow-hidden relative backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center mb-6 group-hover:border-violet-500/50 transition-colors">
                    <feature.icon className="w-7 h-7 text-violet-400" />
                  </div>
                  <CardTitle className="text-xl text-white mb-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-400 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section - LIGHT GRAY */}
      <section className="py-32 relative bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-violet-500/20 text-violet-700">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Advanced Filtering
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Powerful Dashboard with
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Smart Filters
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect publishers in seconds with our advanced filtering system. No more endless scrolling
              through irrelevant sites.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Dashboard Preview */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Publisher Dashboard</h3>
                    <Badge className="bg-white/20 text-white border-white/30">15,247 Results</Badge>
                  </div>
                  <div className="mt-4 flex items-center space-x-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4" />
                      <Input
                        placeholder="Search publishers..."
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 h-10"
                      />
                    </div>
                    <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </div>
                </div>

                {/* Filter Bar */}
                <div className="p-4 bg-gray-50 border-b border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-violet-100 text-violet-800">
                      DA: 50-100
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Tech
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      $100-500
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      English
                    </Badge>
                  </div>
                </div>

                {/* Sample Publisher Cards */}
                <div className="p-6 space-y-4">
                  {[
                    {
                      name: "TechCrunch.com",
                      da: 94,
                      traffic: "2.1M",
                      price: "$850",
                      niche: "Technology",
                      verified: true,
                    },
                    {
                      name: "Entrepreneur.com",
                      da: 91,
                      traffic: "1.8M",
                      price: "$720",
                      niche: "Business",
                      verified: true,
                    },
                    { name: "Forbes.com", da: 96, traffic: "3.2M", price: "$1,200", niche: "Finance", verified: true },
                  ].map((publisher, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Globe className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-gray-900">{publisher.name}</h4>
                            {publisher.verified && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                          </div>
                          <p className="text-sm text-gray-600">{publisher.niche}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <div className="font-bold text-gray-900">{publisher.da}</div>
                          <div className="text-gray-500">DA</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-900">{publisher.traffic}</div>
                          <div className="text-gray-500">Traffic</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-violet-600">{publisher.price}</div>
                          <div className="text-gray-500">Price</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Filter Categories */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Filter by Any Criteria</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: BarChart3,
                    title: "Authority Metrics",
                    description: "Domain Authority, Page Authority, Trust Flow, Citation Flow",
                    filters: ["DA 0-100", "PA 0-100", "TF 0-100", "CF 0-100"],
                  },
                  {
                    icon: Eye,
                    title: "Traffic & Engagement",
                    description: "Monthly visitors, bounce rate, session duration",
                    filters: ["Traffic Volume", "Bounce Rate", "Session Time", "Pages/Session"],
                  },
                  {
                    icon: DollarSign,
                    title: "Pricing Range",
                    description: "Set your budget and find publishers within range",
                    filters: ["$0-100", "$100-500", "$500-1000", "$1000+"],
                  },
                  {
                    icon: Tag,
                    title: "Niche & Category",
                    description: "500+ categories from tech to lifestyle",
                    filters: ["Technology", "Business", "Health", "Finance", "Travel"],
                  },
                  {
                    icon: MapPin,
                    title: "Geographic Location",
                    description: "Target specific countries and regions",
                    filters: ["United States", "United Kingdom", "Canada", "Australia"],
                  },
                  {
                    icon: Languages,
                    title: "Language & Content",
                    description: "Content language and writing requirements",
                    filters: ["English", "Spanish", "French", "German", "Portuguese"],
                  },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-violet-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-6 h-6 text-violet-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{category.title}</h4>
                      <p className="text-gray-600 mb-3 text-sm">{category.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.filters.map((filter, filterIndex) => (
                          <Badge
                            key={filterIndex}
                            variant="outline"
                            className="text-xs border-violet-200 text-violet-700"
                          >
                            {filter}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-violet-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">Quality Scoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Our proprietary algorithm scores each publisher based on 50+ quality factors including spam score,
                  content quality, and engagement metrics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-violet-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">Delivery Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Filter by expected delivery time. See average turnaround times and choose publishers who meet your
                  deadlines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown className="w-6 h-6 text-violet-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">Spam Score Filter</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Automatically exclude low-quality sites with our integrated spam detection. Only see publishers that
                  meet Google's quality guidelines.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reseller Section - DARK GRAY */}
      <section id="resellers" className="py-32 relative bg-gray-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-300">
              <Crown className="w-4 h-4 mr-2" />
              Partner Program
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Join as a
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Reseller Partner
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Scale your agency with white-label access to our marketplace. Get the cheapest rates plus an additional 5%
              discount on every order.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Reseller Benefits</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Building2,
                    title: "Complete White Label Solution",
                    description:
                      "Your brand, your clients, your pricing. We handle fulfillment while you focus on growing your business.",
                  },
                  {
                    icon: Percent,
                    title: "Additional 5% Discount",
                    description:
                      "On top of our already industry-lowest rates, get an extra 5% off every single order. More margin for you.",
                  },
                  {
                    icon: Crown,
                    title: "Priority Support & Account Manager",
                    description:
                      "Dedicated account manager, priority queue, and direct line to our team for any urgent requests.",
                  },
                  {
                    icon: Handshake,
                    title: "Flexible Payment Terms",
                    description:
                      "Net 30 payment terms, bulk order discounts, and custom invoicing to match your business needs.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Comparison */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Pricing Comparison</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                  <div>
                    <div className="text-white font-medium">Regular Customer</div>
                    <div className="text-gray-400 text-sm">Standard marketplace rates</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">$500</div>
                    <div className="text-gray-400 text-sm">per post</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-lg border border-violet-500/30">
                  <div>
                    <div className="text-white font-medium flex items-center">
                      Reseller Partner
                      <Crown className="w-4 h-4 ml-2 text-violet-400" />
                    </div>
                    <div className="text-gray-400 text-sm">5% additional discount</div>
                  </div>
                  <div className="text-right">
                    <div className="text-violet-400 font-bold text-xl">$475</div>
                    <div className="text-gray-400 text-sm">per post</div>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <div className="text-violet-400 font-bold text-lg">Save $25 per post</div>
                  <div className="text-gray-400 text-sm">+ White label branding included</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Partner With Us?</h3>
              <p className="text-gray-400 mb-6">
                Join 500+ agencies already scaling their link building services with our white-label solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl border-0"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Apply for Partnership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center justify-center mt-6 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 mr-2 text-emerald-400" />
                <span>No setup fees • Quick approval process • Start earning immediately</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options Section - LIGHT GRAY */}
      <section className="py-32 relative bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Link Building Method
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From DIY guest posts to fully managed campaigns, we have the perfect solution for every budget and
              timeline.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Guest Posts */}
            <Card className="bg-white border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-violet-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Guest Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  You provide the content, we handle placement on verified publishers. Perfect for businesses with
                  content ready and want full editorial control over their campaigns.
                </CardDescription>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    Choose from 15,000+ verified publishers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    3-7 day average delivery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    Full editorial control over content
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    Starting from $9 per placement
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Link Insertions */}
            <Card className="bg-white border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Link className="w-6 h-6 text-violet-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Link Insertions (Niche Edits)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  Fast and cost-effective way to get high-authority backlinks by inserting your link into existing
                  content. No content creation needed on your end.
                </CardDescription>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    Links added to existing articles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    Faster delivery (1-3 days)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    No content creation required
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    Starting from $7 per link insertion
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Managed Packages */}
            <Card className="bg-white border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-violet-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Managed Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  Completely hands-off solution where our team handles everything from content creation to strategic
                  publisher selection and placement.
                </CardDescription>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    Full content creation included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    Strategic publisher selection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    Campaign packages from $250
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Building Quality Backlinks?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses who trust GP Marketplace for their link building needs. Get started today and
              see the difference quality publishers make.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 px-8 py-3"
              onClick={() => window.open("https://app.gpmarketplace.com", "_blank")}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - DARK */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Scale Your
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Link Building?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the growth teams who've ditched expensive agencies for direct publisher access. Start building
            authority that actually moves the needle.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 max-w-lg mx-auto">
            <Input
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm h-14 text-lg rounded-xl"
            />
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-xl shadow-2xl shadow-purple-500/25 border-0 whitespace-nowrap"
              onClick={() => window.open("https://app.gpmarketplace.com", "_blank")}
            >
              Start Building
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
              Free to browse publishers
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
              No setup fees or commitments
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section - LIGHT GRAY */}
      <section className="py-32 relative bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              #1 Marketplace with
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                15,000+ Verified Publishers
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The world's largest and most trusted network of verified website owners, all in one place.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Visual Representation */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Main Network Visualization */}
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50"></div>

                  {/* Central Hub */}
                  <div className="relative z-10 flex items-center justify-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <Globe className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Publisher Network Grid */}
                  <div className="relative z-10 grid grid-cols-4 gap-4 mb-6">
                    {[
                      { name: "TechCrunch", da: "94", verified: true },
                      { name: "Forbes", da: "96", verified: true },
                      { name: "Entrepreneur", da: "91", verified: true },
                      { name: "Mashable", da: "92", verified: true },
                      { name: "Inc.com", da: "93", verified: true },
                      { name: "Fast Company", da: "90", verified: true },
                      { name: "VentureBeat", da: "89", verified: true },
                      { name: "TechRadar", da: "88", verified: true },
                    ].map((publisher, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-3 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-violet-500 to-purple-500 rounded flex items-center justify-center">
                            <Globe className="w-3 h-3 text-white" />
                          </div>
                          {publisher.verified && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                        </div>
                        <div className="text-xs font-semibold text-gray-900 mb-1 truncate">{publisher.name}</div>
                        <div className="text-xs text-gray-500">DA {publisher.da}</div>
                      </div>
                    ))}
                  </div>

                  {/* Stats Bar */}
                  <div className="relative z-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg p-4 text-white">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold">15,247</div>
                        <div className="text-xs opacity-90">Publishers</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">98%</div>
                        <div className="text-xs opacity-90">Verified</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">+47</div>
                        <div className="text-xs opacity-90">Daily</div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full opacity-20">
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                      {/* Animated connecting lines */}
                      <line
                        x1="50%"
                        y1="25%"
                        x2="25%"
                        y2="45%"
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                      <line
                        x1="50%"
                        y1="25%"
                        x2="75%"
                        y2="45%"
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        className="animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <line
                        x1="50%"
                        y1="25%"
                        x2="50%"
                        y2="60%"
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        className="animate-pulse"
                        style={{ animationDelay: "1s" }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                {[
                  {
                    icon: Shield,
                    title: "Verified Publishers",
                    description:
                      "Every website owner manually vetted for authenticity, traffic, and authority. No fake sites, no PBNs, no exceptions.",
                    highlight: "100% Real Website Owners",
                  },
                  {
                    icon: Users,
                    title: "Direct Guest Posting",
                    description:
                      "Connect straight with site owners. No middlemen, no agency markup, no communication delays.",
                    highlight: "Zero Middlemen",
                  },
                  {
                    icon: BarChart3,
                    title: "Publisher Stats",
                    description:
                      "Complete transparency with real metrics from Ahrefs, traffic data, response times, and reliability scores.",
                    highlight: "Full Transparency",
                  },
                  {
                    icon: Zap,
                    title: "Regular Updates",
                    description:
                      "Quality standards maintained through continuous monitoring. New verified publishers join daily.",
                    highlight: "+47 New Publishers Daily",
                  },
                  {
                    icon: SlidersHorizontal,
                    title: "Advanced Filtering",
                    description:
                      "Find the perfect publishers instantly with 20+ filters including DA, traffic, niche, location, and pricing.",
                    highlight: "20+ Smart Filters",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-violet-200">
                      <feature.icon className="w-6 h-6 text-violet-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900 text-lg">{feature.title}</h4>
                        <Badge variant="outline" className="text-xs border-violet-200 text-violet-700 bg-violet-50">
                          {feature.highlight}
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                number: "15,247",
                label: "Verified Publishers",
                description: "Manually vetted website owners",
              },
              {
                icon: CheckCircle,
                number: "98.2%",
                label: "Verification Rate",
                description: "Publishers pass our quality checks",
              },
              {
                icon: TrendingUp,
                number: "+47",
                label: "Daily Additions",
                description: "New publishers join every day",
              },
              {
                icon: Filter,
                number: "20+",
                label: "Filter Options",
                description: "Ways to find your perfect match",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-violet-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <CardTitle className="text-lg text-gray-900">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600">{stat.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cheapest Marketplace Section - DARK GRAY */}
      <section className="py-32 relative bg-gray-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-300">
              <DollarSign className="w-4 h-4 mr-2" />
              Best Value
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Cheapest Guest Post Marketplace
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                In the World
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Save up to 70% compared to agencies and freelancers. No hidden fees, no markup, just direct access to
              publishers at wholesale prices.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Why We're Cheapest */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Why We're the Cheapest</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Direct Publishers",
                    description:
                      "Connect straight with website owners. No agency middlemen taking 50-80% markup on every order.",
                    savings: "Save 50-80%",
                  },
                  {
                    icon: Percent,
                    title: "Minimal Platform Fee",
                    description:
                      "Only 10% platform fee - the lowest among all similar marketplaces. Most competitors charge 20-40%.",
                    savings: "10% vs 20-40%",
                  },
                  {
                    icon: CheckCircle,
                    title: "Pay Only for Published Posts",
                    description:
                      "Money held in escrow until your post goes live. No upfront payments, no risk of losing money.",
                    savings: "Zero Risk",
                  },
                  {
                    icon: Crown,
                    title: "Reseller Additional Discount",
                    description: "Agencies and resellers get an extra 5% discount on top of our already lowest prices.",
                    savings: "Extra 5% Off",
                  },
                ].map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-white">{reason.title}</h4>
                        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">
                          {reason.savings}
                        </Badge>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Comparison Chart */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Price Comparison Per Link</h3>
              <div className="space-y-4">
                {[
                  { method: "Manual Outreach", price: "$150-300", time: "2-4 weeks", success: "5-15%" },
                  { method: "Freelancers", price: "$80-200", time: "1-3 weeks", success: "20-40%" },
                  { method: "Agencies", price: "$200-500", time: "2-6 weeks", success: "60-80%" },
                  { method: "GP Marketplace", price: "$15-150", time: "3-7 days", success: "95%+", highlight: true },
                ].map((option, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      option.highlight
                        ? "bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-violet-500/30"
                        : "bg-gray-700/50 border-gray-600/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div
                          className={`font-medium ${option.highlight ? "text-white" : "text-gray-300"} flex items-center gap-2`}
                        >
                          {option.method}
                          {option.highlight && <Crown className="w-4 h-4 text-violet-400" />}
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                          {option.time} • {option.success} success rate
                        </div>
                      </div>
                      <div className={`text-right ${option.highlight ? "text-violet-400" : "text-gray-300"}`}>
                        <div className="font-bold text-lg">{option.price}</div>
                        <div className="text-xs text-gray-500">per link</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-16">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300">
                <TrendingUp className="w-4 h-4 mr-2" />
                Real Case Study
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-2">SaaS Startup Increases DR from 15 to 42</h3>
              <p className="text-gray-400">How a B2B SaaS company built authority with strategic guest posting</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Case Study Details */}
              <div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <span className="text-gray-300">Campaign Duration</span>
                    <span className="text-white font-semibold">3 months</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <span className="text-gray-300">Guest Posts Purchased</span>
                    <span className="text-white font-semibold">25 posts</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <span className="text-gray-300">Total Budget</span>
                    <span className="text-white font-semibold">$2,850</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <span className="text-gray-300">Average Cost Per Link</span>
                    <span className="text-violet-400 font-semibold">$114</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg border border-emerald-500/30">
                    <span className="text-emerald-300">Domain Rating Increase</span>
                    <span className="text-emerald-300 font-bold text-xl">15 → 42</span>
                  </div>
                </div>
              </div>

              {/* Results Comparison */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Cost Comparison vs Other Methods</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-red-300 font-medium">Agency Route</span>
                      <span className="text-red-300 font-bold">$8,750</span>
                    </div>
                    <div className="text-sm text-red-400">25 links × $350 average</div>
                  </div>

                  <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-orange-300 font-medium">Freelancer Route</span>
                      <span className="text-orange-300 font-bold">$4,250</span>
                    </div>
                    <div className="text-sm text-orange-400">25 links × $170 average</div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-violet-300 font-medium">GP Marketplace</span>
                      <span className="text-violet-300 font-bold">$2,850</span>
                    </div>
                    <div className="text-sm text-violet-400">25 links × $114 average</div>
                  </div>

                  <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-center">
                    <div className="text-emerald-300 font-bold text-lg">Total Savings: $5,900</div>
                    <div className="text-sm text-emerald-400">67% cheaper than agencies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Results */}
            <div className="mt-8 pt-8 border-t border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-6 text-center">Additional Results Achieved</h4>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { metric: "Organic Traffic", value: "+340%", icon: TrendingUp },
                  { metric: "Keyword Rankings", value: "+180", icon: Target },
                  { metric: "Brand Mentions", value: "+250%", icon: Users },
                  { metric: "Lead Generation", value: "+120%", icon: BarChart3 },
                ].map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <result.icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                    <div className="text-sm text-gray-400">{result.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Save 67% on Your Link Building?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses who've switched to GP Marketplace and saved thousands on their SEO campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl border-0"
                onClick={() => (window.location.href = "/calculate-savings")}
              >
                Calculate Your Savings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-xl bg-transparent"
                onClick={() => (window.location.href = "/testimonials")}
              >
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - LIGHT GRAY */}
      <section id="faq" className="py-32 relative bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-violet-500/20 text-violet-700">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Know
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our guest post marketplace and link building services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {[
                {
                  question: "How does GP Marketplace work?",
                  answer:
                    "Simply browse our verified publisher database, select sites that match your niche and budget, submit your content, and we handle the rest. Publishers review your content and publish it within 3-7 days on average.",
                },
                {
                  question: "Are all publishers verified?",
                  answer:
                    "Yes, every publisher goes through our rigorous 15-point verification process. We check traffic authenticity, domain authority, spam scores, and manually review each site to ensure quality standards.",
                },
                {
                  question: "What's your refund policy?",
                  answer:
                    "We offer a 100% money-back guarantee. If your post isn't published within the agreed timeframe or doesn't meet our quality standards, you get a full refund. Your money is held in escrow until the post goes live.",
                },
                {
                  question: "How long does it take to get a guest post published?",
                  answer:
                    "Most posts are published within 3-7 days. Some high-authority sites may take up to 14 days due to their editorial process. You can filter publishers by delivery time to find faster options.",
                },
                {
                  question: "Do you provide content writing services?",
                  answer:
                    "Yes! We offer three options: 1) You provide content (cheapest), 2) Link insertions into existing content (fastest), 3) Full content creation and placement (managed packages starting at $250).",
                },
                {
                  question: "What makes you cheaper than agencies?",
                  answer:
                    "We connect you directly with publishers, eliminating agency markup. Our platform fee is only 10% vs competitors' 20-40%. Plus, you only pay when posts go live, reducing risk.",
                },
                {
                  question: "Can I see metrics before purchasing?",
                  answer:
                    "Every publisher listing shows verified metrics including Domain Authority, traffic data from SimilarWeb, spam scores, and historical performance data.",
                },
                {
                  question: "Do you offer bulk discounts?",
                  answer:
                    "Yes, we offer volume discounts for orders over 10 posts. Reseller partners get an additional 5% discount on all orders. Contact us for custom pricing on large campaigns.",
                },
                {
                  question: "What niches do you cover?",
                  answer:
                    "We have verified publishers in 500+ niches including Technology, Business, Health, Finance, Travel, Lifestyle, and more. Use our advanced filters to find publishers in your specific industry.",
                },
                {
                  question: "How do I track my orders?",
                  answer:
                    "Your dashboard provides real-time updates on all orders. You'll receive notifications when posts are submitted, approved, and published. Each completed post includes a live link and performance report.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="bg-white border-gray-200 hover:border-violet-200 hover:shadow-md transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-violet-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pl-12">
                    <CardDescription className="text-gray-600 leading-relaxed">{faq.answer}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Still Have Questions */}
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Our support team is here to help you succeed. Get personalized answers and expert guidance on your
                  link building strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 px-8 py-3"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Contact Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 bg-transparent"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - DARK */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-violet-400" />
              <span className="text-violet-300 text-sm font-medium">Join 10,000+ successful businesses</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Start Building
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Authority Today
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Stop overpaying agencies. Get direct access to{" "}
              <span className="text-violet-400 font-semibold">15,000+ verified publishers</span> and start building
              backlinks that actually move your rankings.
            </p>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Shield,
                  title: "Risk-Free",
                  description: "Money-back guarantee on every order",
                },
                {
                  icon: Clock,
                  title: "Fast Results",
                  description: "Most posts live within 3-7 days",
                },
                {
                  icon: DollarSign,
                  title: "Best Prices",
                  description: "Save up to 70% vs agencies",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white text-xl px-12 py-5 rounded-xl shadow-2xl shadow-purple-500/25 border-0 group"
                onClick={() => window.open("https://app.gpmarketplace.com", "_blank")}
              >
                Browse Publishers Now
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-5 rounded-xl bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                Watch 2-Min Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                Free account creation
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                24/7 support
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">4.9/5</div>
                  <div className="text-sm text-gray-400">Customer Rating</div>
                  <div className="flex justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <div className="text-2xl font-bold text-white">10,000+</div>
                  <div className="text-sm text-gray-400">Happy Customers</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <div className="text-2xl font-bold text-white">500K+</div>
                  <div className="text-sm text-gray-400">Posts Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
