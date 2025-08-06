import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FileText, CheckCircle, AlertTriangle, Shield, Users, Globe, Star, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Publisher Guidelines | GP Marketplace",
  description:
    "Join our verified guest posts marketplace as a publisher. Learn requirements, quality standards, and how to maximize earnings.",
}

export default function PublisherGuidelinesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-violet-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Publisher Guidelines</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our verified network of 15,000+ publishers. Learn our quality standards and how to maximize your
            earnings.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Quick Overview */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Join GP Marketplace?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: DollarSign,
                  title: "Earn More",
                  description: "Set your own prices and keep 90% of every sale. No hidden fees or surprise deductions.",
                },
                {
                  icon: Users,
                  title: "Quality Buyers",
                  description:
                    "Connect with serious businesses and agencies looking for premium guest post placements.",
                },
                {
                  icon: Shield,
                  title: "Protected Payments",
                  description:
                    "Secure escrow system ensures you get paid for every published post. No payment disputes.",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-white border-gray-200">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-violet-600" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12">
            {/* Eligibility Requirements */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                Eligibility Requirements
              </h2>

              <p className="text-gray-600 mb-6">
                To join our marketplace, your website must meet these minimum standards:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Requirements</h3>
                  <ul className="space-y-3">
                    {[
                      "Domain Authority (DA) of 20 or higher",
                      "Minimum 1,000 monthly organic visitors",
                      "Website active for at least 6 months",
                      "SSL certificate installed",
                      "Mobile-responsive design",
                      "Fast loading speed (under 3 seconds)",
                    ].map((req, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Requirements</h3>
                  <ul className="space-y-3">
                    {[
                      "Original, high-quality content",
                      "Regular publishing schedule",
                      "Professional writing and grammar",
                      "Clear niche or topic focus",
                      "No adult, gambling, or illegal content",
                      "Compliance with Google guidelines",
                    ].map((req, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Verification Process */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Verification Process</h2>

              <p className="text-gray-600 mb-8">
                Our 15-point verification ensures only quality publishers join our network:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Application Submission",
                    description:
                      "Submit your website details, traffic stats, and content samples through our application form.",
                    time: "5 minutes",
                  },
                  {
                    step: "2",
                    title: "Automated Checks",
                    description:
                      "Our system verifies domain authority, traffic data, spam scores, and technical requirements.",
                    time: "Instant",
                  },
                  {
                    step: "3",
                    title: "Manual Review",
                    description:
                      "Our team manually reviews your content quality, niche relevance, and overall website professionalism.",
                    time: "2-3 days",
                  },
                  {
                    step: "4",
                    title: "Final Approval",
                    description:
                      "Once approved, you'll receive login credentials and can start setting up your publisher profile.",
                    time: "Same day",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{step.title}</h3>
                        <Badge variant="outline" className="text-xs border-violet-200 text-violet-700">
                          {step.time}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Standards */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-6 h-6 text-violet-600 mr-3" />
                Quality Standards
              </h2>

              <p className="text-gray-600 mb-6">Maintain these standards to stay in our marketplace:</p>

              <div className="space-y-6">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Content Quality
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1 ml-7">
                    <li>• Accept only high-quality, original guest posts</li>
                    <li>• Ensure content matches your website's niche and tone</li>
                    <li>• Review for grammar, spelling, and readability</li>
                    <li>• Maintain editorial standards consistent with your site</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Globe className="w-5 h-5 text-blue-600 mr-2" />
                    Publication Standards
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1 ml-7">
                    <li>• Publish posts within agreed timeframe (usually 7-14 days)</li>
                    <li>• Include all requested backlinks as specified</li>
                    <li>• Use proper anchor text and link placement</li>
                    <li>• Ensure posts remain live for minimum 12 months</li>
                  </ul>
                </div>

                <div className="p-4 bg-violet-50 rounded-lg border border-violet-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="w-5 h-5 text-violet-600 mr-2" />
                    Communication Standards
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1 ml-7">
                    <li>• Respond to buyer messages within 24 hours</li>
                    <li>• Provide clear guidelines and requirements upfront</li>
                    <li>• Communicate any issues or delays promptly</li>
                    <li>• Maintain professional and helpful communication</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pricing Guidelines */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="w-6 h-6 text-violet-600 mr-3" />
                Pricing Guidelines
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing Factors</h3>
                  <p className="text-gray-600 mb-4">Consider these factors when setting your prices:</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Domain Authority and traffic volume</li>
                    <li>• Niche competitiveness and demand</li>
                    <li>• Content creation requirements</li>
                    <li>• Editorial review time and effort</li>
                    <li>• Market rates for similar sites</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing Examples</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">DA 20-40</span>
                      <span className="font-semibold text-gray-900">$50-150</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">DA 40-60</span>
                      <span className="font-semibold text-gray-900">$150-400</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">DA 60-80</span>
                      <span className="font-semibold text-gray-900">$400-800</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">DA 80+</span>
                      <span className="font-semibold text-gray-900">$800+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-violet-600 mr-3" />
                Payment Information
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">How Payments Work</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Buyer Places Order</p>
                        <p className="text-sm text-gray-600">Payment held securely in escrow</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">You Publish Post</p>
                        <p className="text-sm text-gray-600">Submit proof of publication</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Get Paid</p>
                        <p className="text-sm text-gray-600">Receive 90% of order value</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Details</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Your Share</span>
                        <span className="font-bold text-emerald-600">90%</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Platform Fee</span>
                        <span className="font-bold text-gray-900">10%</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2 mt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Payment Time</span>
                          <span className="font-bold text-gray-900">3-5 days</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>• Payments processed via PayPal or bank transfer</p>
                      <p>• Minimum payout threshold: $50</p>
                      <p>• Monthly payment statements provided</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prohibited Practices */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                Prohibited Practices
              </h2>

              <p className="text-gray-600 mb-6">
                These practices will result in immediate removal from our marketplace:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-red-700">Content Violations</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Publishing low-quality or spun content</li>
                    <li>• Accepting posts with excessive keyword stuffing</li>
                    <li>• Publishing content unrelated to your niche</li>
                    <li>• Allowing duplicate content across multiple sites</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-red-700">Platform Abuse</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Removing published posts without permission</li>
                    <li>• Manipulating traffic or authority metrics</li>
                    <li>• Creating fake publisher accounts</li>
                    <li>• Circumventing our payment system</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-800 text-sm">
                  <strong>Warning:</strong> Violations may result in account suspension, payment forfeiture, and
                  permanent ban from our marketplace.
                </p>
              </div>
            </div>

            {/* Getting Started */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-600 mb-6">
                    Join thousands of publishers already earning with GP Marketplace. Our verification process is quick
                    and our support team is here to help you succeed.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-600">Free to join and list your website</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-600">Set your own prices and terms</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-600">Dedicated publisher support team</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200 mb-6">
                    <div className="text-3xl font-bold text-violet-600 mb-2">90%</div>
                    <div className="text-gray-600">Revenue Share</div>
                    <div className="text-sm text-gray-500 mt-1">Keep 90% of every sale</div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl border-0"
                  >
                    Apply as Publisher
                  </Button>

                  <p className="text-sm text-gray-500 mt-4">
                    Questions?{" "}
                    <a href="/contact" className="text-violet-600 hover:text-violet-700">
                      Contact our team
                    </a>
                  </p>
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
