import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FileText, Users, CreditCard, Shield, AlertTriangle, Scale } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service | GP Marketplace",
  description:
    "Read our terms of service for using GP Marketplace. Fair terms that protect both buyers and publishers in our platform.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-violet-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple, fair terms that protect both buyers and publishers in our marketplace.
          </p>
          <p className="text-gray-400 mt-4">Last updated: December 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Quick Overview */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Points</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "Fair Marketplace",
                  description:
                    "We connect buyers and publishers fairly. Both parties must follow our quality standards.",
                },
                {
                  icon: CreditCard,
                  title: "Secure Payments",
                  description: "Money is held safely until posts are published. Full refunds if terms aren't met.",
                },
                {
                  icon: Shield,
                  title: "Quality Guaranteed",
                  description: "All publishers are verified. Posts must meet our standards or you get your money back.",
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
            {/* Agreement */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  By using GP Marketplace, you agree to these terms. If you don't agree, please don't use our service.
                </p>
                <p>
                  GP Marketplace (also called "Guest Posts Marketplace", "we", "us", or "our") operates a platform that
                  connects content buyers with website publishers for guest posting services.
                </p>
                <p>These terms apply to all users, including buyers, publishers, and visitors to our website.</p>
              </div>
            </div>

            {/* How Our Service Works */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How Our Service Works</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">For Buyers</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Browse verified publishers in our marketplace</li>
                    <li>Select publishers that match your niche and budget</li>
                    <li>Submit your content or request content creation</li>
                    <li>Make secure payment (held in escrow)</li>
                    <li>Receive your published guest post with live link</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">For Publishers</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Apply to join our verified publisher network</li>
                    <li>Set your pricing and content requirements</li>
                    <li>Receive and review guest post submissions</li>
                    <li>Publish approved content on your website</li>
                    <li>Receive payment after successful publication</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Responsibilities</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">All Users Must:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Provide accurate and truthful information</li>
                    <li>Keep account credentials secure</li>
                    <li>Follow all applicable laws and regulations</li>
                    <li>Respect other users and communicate professionally</li>
                    <li>Not use our platform for illegal or harmful activities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Requirements:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Content must be original and not plagiarized</li>
                    <li>No spam, adult content, or illegal material</li>
                    <li>Content should provide value to readers</li>
                    <li>Follow publisher-specific guidelines</li>
                    <li>Respect copyright and intellectual property rights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 text-violet-600 mr-3" />
                Payment Terms
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Escrow System</h3>
                  <p className="text-gray-600">
                    All payments are held securely until the guest post is successfully published. This protects both
                    buyers and publishers.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Platform Fee</h3>
                  <p className="text-gray-600">
                    We charge a 10% platform fee on all transactions. This fee covers payment processing, platform
                    maintenance, and customer support.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Refunds</h3>
                  <p className="text-gray-600">
                    Full refunds are available if posts aren't published within agreed timeframes or don't meet quality
                    standards. See our Refund Policy for details.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Publisher Payments</h3>
                  <p className="text-gray-600">
                    Publishers receive payment within 3-5 business days after successful post publication and our
                    quality review.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Standards */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quality Standards</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Publisher Verification</h3>
                  <p className="text-gray-600 mb-3">All publishers must pass our verification process:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Real website with genuine traffic</li>
                    <li>Domain Authority and quality metrics verification</li>
                    <li>Manual review of content quality</li>
                    <li>Spam score and penalty checks</li>
                    <li>Ongoing monitoring and quality maintenance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Post Requirements</h3>
                  <p className="text-gray-600 mb-3">Published posts must meet these standards:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Published on the agreed website</li>
                    <li>Include the requested backlink(s)</li>
                    <li>Remain live for at least 12 months</li>
                    <li>Follow the publisher's editorial guidelines</li>
                    <li>Be indexed by search engines</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                Prohibited Activities
              </h2>

              <p className="text-gray-600 mb-4">The following activities are strictly prohibited:</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Content Violations</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    <li>Plagiarized or duplicate content</li>
                    <li>Spam or low-quality content</li>
                    <li>Adult or inappropriate material</li>
                    <li>Illegal or harmful content</li>
                    <li>Misleading or false information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Platform Abuse</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    <li>Creating fake accounts</li>
                    <li>Manipulating reviews or ratings</li>
                    <li>Circumventing our payment system</li>
                    <li>Harassing other users</li>
                    <li>Attempting to hack or disrupt our service</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-800 text-sm">
                  <strong>Violation Consequences:</strong> Users who violate these terms may have their accounts
                  suspended or terminated, and may forfeit any pending payments.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="w-6 h-6 text-violet-600 mr-3" />
                Limitation of Liability
              </h2>

              <div className="space-y-4 text-gray-600">
                <p>
                  GP Marketplace acts as a platform connecting buyers and publishers. We facilitate transactions but are
                  not responsible for the actions of individual users.
                </p>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What We're Responsible For:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    <li>Maintaining a secure and functional platform</li>
                    <li>Processing payments safely</li>
                    <li>Providing customer support</li>
                    <li>Enforcing our quality standards</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What We're Not Responsible For:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    <li>Content quality beyond our stated standards</li>
                    <li>SEO results or ranking improvements</li>
                    <li>Disputes between buyers and publishers</li>
                    <li>Third-party website changes or issues</li>
                    <li>Business outcomes from guest posting</li>
                  </ul>
                </div>

                <p className="text-sm">
                  Our total liability is limited to the amount paid for the specific transaction in question.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to These Terms</h2>

              <div className="space-y-4 text-gray-600">
                <p>We may update these terms occasionally to reflect changes in our service or legal requirements.</p>
                <p>
                  When we make significant changes, we'll notify you by email and post the updated terms on our website.
                </p>
                <p>Continued use of our service after changes means you accept the new terms.</p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions About These Terms?</h2>

              <p className="text-gray-600 mb-4">
                If you have questions about these Terms of Service, please contact us:
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

              <p className="text-sm text-gray-500 mt-6">We'll respond to your questions within 48 hours.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
