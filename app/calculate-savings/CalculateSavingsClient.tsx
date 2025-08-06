"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Calculator, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function CalculateSavingsClient() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-8 h-8 text-violet-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Calculate Your Savings</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how much you can save by switching to GP Marketplace. Compare your current costs with our direct
            publisher access.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Current Link Building</h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="currentMethod" className="text-gray-700 font-medium">
                    Current Method *
                  </Label>
                  <select
                    id="currentMethod"
                    required
                    className="mt-2 w-full h-12 px-3 border border-gray-300 rounded-md focus:border-violet-500 focus:ring-violet-500 bg-white"
                  >
                    <option value="">Select your current method</option>
                    <option value="agency">SEO Agency</option>
                    <option value="freelancer">Freelancers</option>
                    <option value="manual">Manual Outreach</option>
                    <option value="other-marketplace">Other Marketplace</option>
                    <option value="inhouse">In-house Team</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="monthlyBudget" className="text-gray-700 font-medium">
                    Monthly Budget (USD) *
                  </Label>
                  <Input
                    id="monthlyBudget"
                    type="number"
                    required
                    min="100"
                    className="mt-2 h-12 border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                    placeholder="e.g. 2500"
                  />
                </div>

                <div>
                  <Label htmlFor="linksPerMonth" className="text-gray-700 font-medium">
                    Links Per Month *
                  </Label>
                  <Input
                    id="linksPerMonth"
                    type="number"
                    required
                    min="1"
                    className="mt-2 h-12 border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                    placeholder="e.g. 10"
                  />
                </div>

                <div>
                  <Label htmlFor="averageDR" className="text-gray-700 font-medium">
                    Average Domain Rating *
                  </Label>
                  <select
                    id="averageDR"
                    required
                    className="mt-2 w-full h-12 px-3 border border-gray-300 rounded-md focus:border-violet-500 focus:ring-violet-500 bg-white"
                  >
                    <option value="">Select average DR</option>
                    <option value="20-40">20-40 DR</option>
                    <option value="40-60">40-60 DR</option>
                    <option value="60-80">60-80 DR</option>
                    <option value="80+">80+ DR</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="siteTraffic" className="text-gray-700 font-medium">
                    Average Site Traffic *
                  </Label>
                  <select
                    id="siteTraffic"
                    required
                    className="mt-2 w-full h-12 px-3 border border-gray-300 rounded-md focus:border-violet-500 focus:ring-violet-500 bg-white"
                  >
                    <option value="">Select traffic range</option>
                    <option value="1k-10k">1K - 10K monthly</option>
                    <option value="10k-50k">10K - 50K monthly</option>
                    <option value="50k-100k">50K - 100K monthly</option>
                    <option value="100k+">100K+ monthly</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-xl border-0"
                >
                  Calculate My Savings
                  <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Results Preview */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Potential Savings</h2>
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-200">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-violet-600 mb-2">$1,250</div>
                    <div className="text-lg text-gray-700">Monthly Savings</div>
                    <div className="text-sm text-gray-500">Based on average inputs</div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">67%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">$15,000</div>
                      <div className="text-sm text-gray-600">Annual Savings</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-gray-600">Your Current Cost</span>
                      <span className="font-bold text-red-600">$2,500/month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-gray-600">GP Marketplace Cost</span>
                      <span className="font-bold text-emerald-600">$1,250/month</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Why You Save More</h3>
                <div className="space-y-3">
                  {[
                    "Direct publisher access - no agency markup",
                    "Transparent pricing with no hidden fees",
                    "Only 10% platform fee vs 50-80% agency markup",
                    "Pay only when posts go live",
                    "Volume discounts for bulk orders",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-violet-50 rounded-xl p-6 border border-violet-200">
                <h3 className="font-semibold text-gray-900 mb-3">Ready to Start Saving?</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Join thousands of businesses who've switched to GP Marketplace and saved on their link building costs.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0"
                  onClick={() => window.open("https://app.gpmarketplace.com", "_blank")}
                >
                  Browse Publishers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Cost Comparison by Method</h2>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Method</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Avg Cost/Link</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Success Rate</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Delivery Time</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Quality Control</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">Manual Outreach</div>
                        <div className="text-sm text-gray-500">DIY approach</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-red-600 font-bold">$150-300</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge variant="destructive" className="bg-red-100 text-red-800">
                          5-15%
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">2-4 weeks</td>
                      <td className="px-6 py-4 text-center text-gray-600">Variable</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">Freelancers</div>
                        <div className="text-sm text-gray-500">Individual contractors</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-orange-600 font-bold">$80-200</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                          20-40%
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">1-3 weeks</td>
                      <td className="px-6 py-4 text-center text-gray-600">Limited</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">SEO Agencies</div>
                        <div className="text-sm text-gray-500">Full-service providers</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-red-600 font-bold">$200-500</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          60-80%
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">2-6 weeks</td>
                      <td className="px-6 py-4 text-center text-gray-600">Good</td>
                    </tr>
                    <tr className="bg-violet-50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-violet-900 flex items-center">
                          GP Marketplace
                          <Badge className="ml-2 bg-violet-600 text-white">Recommended</Badge>
                        </div>
                        <div className="text-sm text-violet-600">Direct publisher access</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-violet-600 font-bold text-lg">$15-150</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="bg-emerald-100 text-emerald-800">95%+</Badge>
                      </td>
                      <td className="px-6 py-4 text-center text-violet-600 font-medium">3-7 days</td>
                      <td className="px-6 py-4 text-center text-violet-600 font-medium">Verified</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Real Customer Savings</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  company: "SaaS Startup",
                  industry: "Technology",
                  previousCost: "$3,500",
                  newCost: "$1,200",
                  savings: "$2,300",
                  percentage: "66%",
                  links: "15 links/month",
                },
                {
                  company: "E-commerce Store",
                  industry: "Retail",
                  previousCost: "$2,800",
                  newCost: "$950",
                  savings: "$1,850",
                  percentage: "66%",
                  links: "12 links/month",
                },
                {
                  company: "Digital Agency",
                  industry: "Marketing",
                  previousCost: "$8,000",
                  newCost: "$2,400",
                  savings: "$5,600",
                  percentage: "70%",
                  links: "40 links/month",
                },
              ].map((study, index) => (
                <Card key={index} className="bg-white border-gray-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{study.company}</CardTitle>
                        <p className="text-sm text-gray-500">{study.industry}</p>
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-800">{study.percentage} saved</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Previous Cost:</span>
                        <span className="font-medium text-red-600">{study.previousCost}/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">GP Marketplace:</span>
                        <span className="font-medium text-emerald-600">{study.newCost}/month</span>
                      </div>
                      <div className="flex justify-between border-t pt-3">
                        <span className="font-semibold text-gray-900">Monthly Savings:</span>
                        <span className="font-bold text-emerald-600">{study.savings}</span>
                      </div>
                      <div className="text-sm text-gray-500 text-center">{study.links}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-12 text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Start Saving Today</h2>
                <p className="text-xl text-violet-100 mb-8">
                  Join thousands of businesses who've cut their link building costs by up to 70% with GP Marketplace.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-violet-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl border-0"
                    onClick={() => window.open("https://app.gpmarketplace.com", "_blank")}
                  >
                    Browse Publishers
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl bg-transparent"
                    onClick={() => (window.location.href = "/testimonials")}
                  >
                    View Success Stories
                  </Button>
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
