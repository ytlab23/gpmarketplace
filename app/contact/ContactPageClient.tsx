"use client"
import { Mail, MessageCircle, Clock, MapPin, Phone, Send, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function ContactPageClient() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-violet-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our marketplace? Need help with your guest post campaign? We're here to help you
            succeed.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email Support",
                description: "Get detailed answers to your questions",
                contact: "info@gpmarketplace.com",
                response: "Response within 24 hours",
                color: "from-violet-500 to-purple-500",
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Quick answers during business hours",
                contact: "Available 9 AM - 6 PM PST",
                response: "Instant response",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Phone,
                title: "Priority Support",
                description: "For reseller partners and urgent issues",
                contact: "Available for partners",
                response: "Same-day response",
                color: "from-emerald-500 to-teal-500",
              },
            ].map((option, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${option.color} p-0.5 mb-4`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <option.icon className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">{option.contact}</p>
                    <p className="text-sm text-violet-600">{option.response}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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

                <div>
                  <Label htmlFor="company" className="text-gray-700 font-medium">
                    Company (Optional)
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    className="mt-2 h-12 border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gray-700 font-medium">
                    Subject *
                  </Label>
                  <select
                    id="subject"
                    required
                    className="mt-2 w-full h-12 px-3 border border-gray-300 rounded-md focus:border-violet-500 focus:ring-violet-500 bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Question</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="publisher">Publisher Application</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="refund">Refund Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    className="mt-2 border-gray-300 focus:border-violet-500 focus:ring-violet-500 resize-none"
                    placeholder="Please describe your question or issue in detail..."
                  />
                </div>

                {/* Math Captcha */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="w-5 h-5 text-violet-600" />
                    <span className="text-gray-700 font-medium">Security Verification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700">What is 7 + 3?</span>
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

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-xl border-0"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We'll respond to your message within 24 hours during business days.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Whether you're a buyer looking for quality publishers or a website owner wanting to join our
                  marketplace, we're here to help you succeed.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600">info@gpmarketplace.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">402 West Broadway</p>
                    <p className="text-gray-600">San Diego, California</p>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p className="text-gray-600">Saturday - Sunday: Email support only</p>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-violet-50 rounded-xl p-6 border border-violet-200">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Answers</h3>
                <p className="text-gray-600 mb-4">
                  Looking for immediate answers? Check our FAQ section for common questions about our marketplace.
                </p>
                <Button
                  variant="outline"
                  className="border-violet-300 text-violet-700 hover:bg-violet-100 bg-transparent"
                  onClick={() => (window.location.href = "/#faq")}
                >
                  View FAQ Section
                </Button>
              </div>

              {/* Response Time */}
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <h3 className="font-semibold text-gray-900 mb-3">Response Times</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">General Questions:</span>
                    <span className="font-medium text-emerald-700">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Technical Issues:</span>
                    <span className="font-medium text-emerald-700">12 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Urgent/Partner Issues:</span>
                    <span className="font-medium text-emerald-700">4 hours</span>
                  </div>
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
