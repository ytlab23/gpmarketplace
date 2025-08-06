"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Star, Quote, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function TestimonialsClient() {
  const testimonials = [
    {
      name: "Sarah M.",
      position: "SEO Manager",
      company: "TechFlow Solutions",
      rating: 5,
      text: "GP Marketplace completely transformed our link building strategy. We went from spending $4,000/month with agencies to just $1,200 for the same quality links. The direct publisher access is a game-changer.",
      results: "Saved $2,800/month",
      tone: "professional",
    },
    {
      name: "Mike R.",
      position: "Founder",
      company: "GrowthHack Pro",
      rating: 5,
      text: "I was skeptical at first, but the results speak for themselves. Our domain authority jumped from 28 to 45 in just 4 months. The quality of publishers is outstanding, and the prices are unbeatable.",
      results: "DA increased 17 points",
      tone: "enthusiastic",
    },
    {
      name: "Jennifer L.",
      position: "Marketing Director",
      company: "EcoLiving Brand",
      rating: 5,
      text: "As a small business, every dollar counts. GP Marketplace helped us compete with bigger companies by giving us access to high-authority sites we could never afford through agencies. Highly recommend!",
      results: "70% cost reduction",
      tone: "grateful",
    },
    {
      name: "David K.",
      position: "Digital Marketing Consultant",
      company: "Peak Performance Agency",
      rating: 5,
      text: "I've been in SEO for 10 years, and this is the best link building platform I've used. The verification process ensures quality, and the escrow system protects both parties. My clients love the results.",
      results: "95% client satisfaction",
      tone: "expert",
    },
    {
      name: "Lisa T.",
      position: "Content Manager",
      company: "HealthFirst Wellness",
      rating: 5,
      text: "The health niche is notoriously difficult for link building. GP Marketplace connected us with legitimate health websites that actually moved our rankings. The transparency is refreshing compared to other platforms.",
      results: "Rankings improved 40%",
      tone: "relieved",
    },
    {
      name: "Carlos P.",
      position: "E-commerce Owner",
      company: "Urban Style Co.",
      rating: 5,
      text: "Fast, reliable, and cost-effective. We get our guest posts published within a week, and the quality is consistently high. This platform has become essential to our SEO strategy.",
      results: "7-day avg delivery",
      tone: "satisfied",
    },
    {
      name: "Amanda W.",
      position: "SEO Specialist",
      company: "Local Services Hub",
      rating: 5,
      text: "The local business category has amazing publishers. We've built authority in multiple cities using GP Marketplace. The geographic targeting options are perfect for local SEO campaigns.",
      results: "Expanded to 12 cities",
      tone: "strategic",
    },
    {
      name: "Robert H.",
      position: "VP Marketing",
      company: "FinTech Innovations",
      rating: 5,
      text: "Financial services require high-trust backlinks. GP Marketplace delivers exactly that. The verification process gives us confidence that we're getting links from legitimate, authoritative sources.",
      results: "Trust signals improved",
      tone: "cautious",
    },
    {
      name: "Maria S.",
      position: "Startup Founder",
      company: "AI Solutions Inc.",
      rating: 5,
      text: "Being a startup, we needed maximum impact with minimal budget. GP Marketplace gave us access to tech publications that would have cost 3x more through agencies. Our organic traffic doubled!",
      results: "Traffic doubled",
      tone: "excited",
    },
    {
      name: "Tom B.",
      position: "Agency Owner",
      company: "Digital Growth Partners",
      rating: 5,
      text: "As a reseller partner, the 5% additional discount makes a huge difference to our margins. Our clients get better results at lower costs, and we maintain healthy profits. Win-win situation.",
      results: "Improved margins",
      tone: "business-focused",
    },
    {
      name: "Rachel G.",
      position: "Content Strategist",
      company: "Travel Experiences Co.",
      rating: 5,
      text: "The travel niche publishers are fantastic. We've secured placements on major travel blogs and magazines that significantly boosted our brand visibility. The content quality requirements ensure good matches.",
      results: "Brand visibility up 200%",
      tone: "creative",
    },
    {
      name: "Kevin M.",
      position: "SaaS Marketing Lead",
      company: "CloudTech Solutions",
      rating: 5,
      text: "B2B SaaS link building is challenging, but GP Marketplace made it simple. The tech category has exactly the publishers we need, and the pricing is transparent. No more black-box agency pricing.",
      results: "Lead quality improved",
      tone: "analytical",
    },
    {
      name: "Nicole F.",
      position: "Freelance SEO",
      company: "Independent Consultant",
      rating: 5,
      text: "As a freelancer, I need reliable, affordable link building options for my clients. GP Marketplace delivers consistently. The platform is user-friendly, and the support team is always helpful.",
      results: "Client retention up",
      tone: "independent",
    },
    {
      name: "James L.",
      position: "Marketing Manager",
      company: "Real Estate Pro",
      rating: 5,
      text: "Real estate is hyper-competitive for SEO. GP Marketplace helped us secure links from local news sites and real estate publications that actually impact our local rankings. Great ROI.",
      results: "Local rankings #1-3",
      tone: "competitive",
    },
    {
      name: "Sophie R.",
      position: "Brand Manager",
      company: "Fashion Forward",
      rating: 5,
      text: "The lifestyle and fashion publishers on this platform are incredible. We've been featured on sites we only dreamed of before. The brand exposure alone is worth the investment, plus the SEO benefits.",
      results: "Brand mentions up 300%",
      tone: "brand-focused",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Quote className="w-8 h-8 text-violet-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Customer Success Stories</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how businesses like yours are saving money and improving their SEO with GP Marketplace. Real results
            from real customers.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "10,000+", label: "Happy Customers", icon: Users },
              { number: "4.9/5", label: "Average Rating", icon: Star },
              { number: "67%", label: "Average Savings", icon: TrendingUp },
              { number: "95%", label: "Success Rate", icon: CheckCircle },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-violet-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From startups to enterprises, see how GP Marketplace is helping businesses achieve their SEO goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs border-emerald-200 text-emerald-700 bg-emerald-50">
                      {testimonial.results}
                    </Badge>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-sm text-violet-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="w-6 h-6 text-violet-200 absolute -top-2 -left-1" />
                    <p className="text-gray-600 leading-relaxed pl-4">{testimonial.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Across All Industries</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our verified publishers cover every major industry and niche.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { industry: "Technology", customers: "2,500+", avgSavings: "68%" },
              { industry: "Business", customers: "1,800+", avgSavings: "65%" },
              { industry: "Health", customers: "1,200+", avgSavings: "72%" },
              { industry: "Finance", customers: "900+", avgSavings: "70%" },
              { industry: "Travel", customers: "800+", avgSavings: "63%" },
              { industry: "Real Estate", customers: "700+", avgSavings: "69%" },
              { industry: "E-commerce", customers: "1,500+", avgSavings: "66%" },
              { industry: "Education", customers: "600+", avgSavings: "71%" },
            ].map((item, index) => (
              <Card key={index} className="bg-white border-gray-200 text-center">
                <CardHeader>
                  <h3 className="font-semibold text-gray-900 text-lg">{item.industry}</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold text-violet-600">{item.customers}</div>
                      <div className="text-sm text-gray-500">Customers</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-emerald-600">{item.avgSavings}</div>
                      <div className="text-sm text-gray-500">Avg Savings</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-violet-500/20 text-violet-700">
                Featured Case Study
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How TechFlow Solutions Saved $33,600 Annually</h2>
            </div>

            <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      T
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">TechFlow Solutions</h3>
                      <p className="text-gray-600">B2B SaaS Company</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-gray-600">Previous Monthly Cost</span>
                      <span className="font-bold text-red-600">$4,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-gray-600">GP Marketplace Cost</span>
                      <span className="font-bold text-emerald-600">$1,200</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-violet-100 rounded-lg border border-violet-200">
                      <span className="font-semibold text-gray-900">Monthly Savings</span>
                      <span className="font-bold text-violet-600 text-xl">$2,800</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Results Achieved</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Domain Authority</div>
                        <div className="text-sm text-gray-600">Increased from 32 to 51</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Organic Traffic</div>
                        <div className="text-sm text-gray-600">Grew by 180% in 6 months</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-violet-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Keyword Rankings</div>
                        <div className="text-sm text-gray-600">150+ keywords in top 10</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <Quote className="w-6 h-6 text-violet-400 mb-2" />
                    <p className="text-gray-600 italic">
                      "The ROI is incredible. We're getting better results at a fraction of the cost. GP Marketplace has
                      become an essential part of our growth strategy."
                    </p>
                    <p className="text-sm text-gray-500 mt-2">- Sarah M., SEO Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start building quality backlinks today and see why thousands of businesses trust GP Marketplace for their
              SEO success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl border-0"
                onClick={() => window.open("https://app.gpmarketplace.com", "_blank")}
              >
                Browse Publishers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl bg-transparent"
                onClick={() => (window.location.href = "/calculate-savings")}
              >
                Calculate Your Savings
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                Money-back guarantee
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                Start in minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
