"use client"

import { FileText, CheckCircle, DollarSign, Users, Shield, ArrowRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function ApplyPublisherClient() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-violet-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Apply as Publisher</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join 15,000+ verified publishers earning with GP Marketplace. Set your own prices and keep 90% of every
            sale.
          </p>
        </div>
      </section>

      {/* Quick Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: DollarSign,
                title: "90% Revenue Share",
                description: "Keep 90% of every sale with transparent pricing",
              },
              {
                icon: Users,
                title: "Quality Buyers",
                description: "Connect with serious businesses and agencies",
              },
              {
                icon: Shield,
                title: "Secure Payments",
                description: "Protected escrow system ensures you get paid",
              },
            ].map((benefit, index) => (
              <Card key={index} className="bg-white border-gray-200 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-violet-600" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Application Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Publisher Application</h2>
              <form className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700 font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        className="mt-2 h-12 border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700 font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        className="mt-2 h-12 border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="mt-2 h-12 border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Website Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Website Information</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="websiteUrl" className="text-gray-700 font-medium">
                        Website URL *
                      </Label>
                      <Input
                        id="websiteUrl"
                        type="url"
                        required
                        className="mt-2 h-12 border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="domainAuthority" className="text-gray-700 font-medium">
                          Domain Authority (DA) *
                        </Label>
                        <Input
                          id="domainAuthority"
                          type="number"
                          required
                          min="20"
                          max="100"
                          className="mt-2 h-12 border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                          placeholder="e.g. 45"
                        />
                      </div>
                      <div>
                        <Label htmlFor="monthlyTraffic" className="text-gray-700 font-medium">
                          Monthly Traffic *
                        </Label>
                        <Input
                          id="monthlyTraffic"
                          type="number"
                          required
                          min="1000"
                          className="mt-2 h-12 border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                          placeholder="e.g. 50000"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="niche" className="text-gray-700 font-medium">
                        Primary Niche/Category *
                      </Label>
                      <select
                        id="niche"
                        required
                        className="mt-2 w-full h-12 px-3 border border-gray-300 rounded-md focus:border-violet-500 focus:ring-violet-500 bg-white"
                      >
                        <option value="">Select your niche</option>
                        <option value="technology">Technology</option>
                        <option value="business">Business</option>
                        <option value="health">Health & Wellness</option>
                        <option value="finance">Finance</option>
                        <option value="travel">Travel</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="education">Education</option>
                        <option value="marketing">Marketing</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="guestPostPrice" className="text-gray-700 font-medium">
                        Desired Guest Post Price (USD) *
                      </Label>
                      <Input
                        id="guestPostPrice"
                        type="number"
                        required
                        min="50"
                        className="mt-2 h-12 border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                        placeholder="e.g. 250"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <Label htmlFor="additionalInfo" className="text-gray-700 font-medium">
                    Additional Information
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    rows={4}
                    className="mt-2 border-gray-300 focus:border-violet-500 focus:ring-violet-500 resize-none"
                    placeholder="Tell us about your website, content quality, editorial process, or any special requirements..."
                  />
                </div>

                {/* Math Captcha */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="w-5 h-5 text-violet-600" />
                    <span className="text-gray-700 font-medium">Security Verification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700">What is 12 + 8?</span>
                    <Input
                      type="number"
                      required
                      className="w-20 h-10 border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                      placeholder="?"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Please solve this simple math problem to verify you're human
                  </p>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 w-4 h-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500"
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="/terms-of-service" className="text-violet-600 hover:text-violet-700 underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/publisher-guidelines" className="text-violet-600 hover:text-violet-700 underline">
                      Publisher Guidelines
                    </a>
                    . I confirm that I own or have authorization to publish guest posts on the submitted website.
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-xl border-0"
                >
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We'll review your application within 2-3 business days and send you an email with the decision.
                </p>
              </form>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Application Review",
                      description:
                        "Our team reviews your website for quality, traffic, and compliance with our standards.",
                      time: "2-3 days",
                    },
                    {
                      step: "2",
                      title: "Verification Process",
                      description:
                        "We verify your domain authority, traffic data, and content quality through automated and manual checks.",
                      time: "1-2 days",
                    },
                    {
                      step: "3",
                      title: "Account Setup",
                      description:
                        "Once approved, you'll receive login credentials and can start setting up your publisher profile.",
                      time: "Same day",
                    },
                    {
                      step: "4",
                      title: "Start Earning",
                      description:
                        "Begin receiving guest post orders from our network of verified buyers and agencies.",
                      time: "Immediate",
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{step.title}</h3>
                          <Badge variant="outline" className="text-xs border-violet-200 text-violet-700">
                            {step.time}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-violet-50 rounded-xl p-6 border border-violet-200">
                <h3 className="font-semibold text-gray-900 mb-4">Minimum Requirements</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    Domain Authority 20+
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    1,000+ monthly visitors
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    Website active 6+ months
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    High-quality content
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    SSL certificate
                  </li>
                </ul>
              </div>

              {/* Earnings Calculator */}
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <h3 className="font-semibold text-gray-900 mb-4">Potential Earnings</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">5 posts/month at $200</span>
                    <span className="font-bold text-emerald-700">$900</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">10 posts/month at $300</span>
                    <span className="font-bold text-emerald-700">$2,700</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">20 posts/month at $400</span>
                    <span className="font-bold text-emerald-700">$7,200</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  * Earnings shown after 10% platform fee. Actual earnings depend on your pricing and demand.
                </p>
              </div>

              {/* Support */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Have questions about the application process or requirements? Our team is here to help.
                </p>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-violet-300 text-violet-700 hover:bg-violet-100 bg-transparent"
                    onClick={() => (window.location.href = "/publisher-guidelines")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Publisher Guidelines
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Contact Support
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
