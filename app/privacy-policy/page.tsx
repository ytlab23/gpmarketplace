import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Shield, Eye, Lock, UserCheck, Database, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | GP Marketplace",
  description:
    "Learn how GP Marketplace protects your privacy and handles your personal information. Transparent data practices and user rights.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-violet-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We protect your privacy and are transparent about how we collect and use your information.
          </p>
          <p className="text-gray-400 mt-4">Last updated: December 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Quick Overview */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What You Need to Know</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Eye,
                  title: "What We Collect",
                  description:
                    "Only essential info like email, payment details, and usage data to provide our service.",
                },
                {
                  icon: Lock,
                  title: "How We Protect It",
                  description: "Industry-standard encryption and security measures to keep your data safe.",
                },
                {
                  icon: UserCheck,
                  title: "Your Rights",
                  description: "You can access, update, or delete your data anytime. Just contact us.",
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
            {/* Information We Collect */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="w-6 h-6 text-violet-600 mr-3" />
                Information We Collect
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Information</h3>
                  <p className="text-gray-600 mb-2">When you create an account, we collect:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Email address</li>
                    <li>Name and company details</li>
                    <li>Password (encrypted)</li>
                    <li>Profile preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Information</h3>
                  <p className="text-gray-600 mb-2">For transactions, we collect:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Billing address</li>
                    <li>Payment method details (processed securely by Stripe)</li>
                    <li>Transaction history</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">
                    <strong>Note:</strong> We never store your full credit card details. All payments are processed
                    securely by Stripe.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Data</h3>
                  <p className="text-gray-600 mb-2">To improve our service, we collect:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Pages you visit on our site</li>
                    <li>Features you use</li>
                    <li>Time spent on different sections</li>
                    <li>Device and browser information</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Provide Our Service</h3>
                    <p className="text-gray-600">
                      Process orders, connect you with publishers, handle payments, and provide customer support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Improve Our Platform</h3>
                    <p className="text-gray-600">
                      Analyze usage patterns to make our marketplace better and add new features.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Communication</h3>
                    <p className="text-gray-600">
                      Send order updates, important announcements, and optional marketing emails (you can unsubscribe
                      anytime).
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Legal Compliance</h3>
                    <p className="text-gray-600">Meet legal requirements and protect against fraud or abuse.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">When We Share Your Information</h2>

              <p className="text-gray-600 mb-6">We only share your information in these specific situations:</p>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">With Publishers</h3>
                  <p className="text-gray-600">
                    We share your contact details with publishers only when you place an order, so they can communicate
                    about your guest post.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Service Providers</h3>
                  <p className="text-gray-600">
                    We use trusted third parties like Stripe for payments, email services for communications, and
                    analytics tools to improve our platform.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                  <p className="text-gray-600">If required by law or to protect our rights and users' safety.</p>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                <strong>We never sell your personal information to third parties.</strong>
              </p>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Access Your Data</h3>
                  <p className="text-gray-600">Request a copy of all personal information we have about you.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Update Information</h3>
                  <p className="text-gray-600">Change your account details anytime in your dashboard.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Delete Your Account</h3>
                  <p className="text-gray-600">Request complete deletion of your account and associated data.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Marketing Emails</h3>
                  <p className="text-gray-600">
                    Unsubscribe from promotional emails anytime using the link in any email.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-violet-50 rounded-lg border border-violet-200">
                <p className="text-gray-700">
                  <strong>To exercise any of these rights, contact us at:</strong>
                  <a href="mailto:info@gpmarketplace.com" className="text-violet-600 hover:text-violet-700 ml-1">
                    info@gpmarketplace.com
                  </a>
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="w-6 h-6 text-violet-600 mr-3" />
                How We Protect Your Information
              </h2>

              <div className="space-y-4">
                <p className="text-gray-600">We take security seriously and use industry-standard measures:</p>

                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure servers with regular security updates</li>
                  <li>Limited access to personal data (only authorized staff)</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Secure payment processing through Stripe</li>
                </ul>

                <p className="text-gray-600 mt-4">
                  While we implement strong security measures, no system is 100% secure. We continuously work to improve
                  our security practices.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="w-6 h-6 text-violet-600 mr-3" />
                Contact Us
              </h2>

              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy or how we handle your information, please contact us:
              </p>

              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@gpmarketplace.com" className="text-violet-600 hover:text-violet-700">
                    info@gpmarketplace.com
                  </a>
                </p>
                <p>
                  <strong>Company:</strong> Guest Posts Marketplace
                </p>
                <p>
                  <strong>Address:</strong> 402 West Broadway, San Diego, California, United States
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                We'll respond to your privacy-related questions within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
