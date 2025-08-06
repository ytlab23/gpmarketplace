import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { RefreshCw, CheckCircle, Clock, AlertCircle, CreditCard, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Refund Policy | GP Marketplace",
  description:
    "Our 100% money-back guarantee policy. Learn when and how to get refunds for your orders on GP Marketplace.",
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <RefreshCw className="w-8 h-8 text-violet-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Refund Policy</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We stand behind our service with a 100% money-back guarantee. Your satisfaction is our priority.
          </p>
          <p className="text-gray-400 mt-4">Last updated: December 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Quick Overview */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Guarantee</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: CheckCircle,
                  title: "100% Money Back",
                  description: "Full refund if your post isn't published or doesn't meet our quality standards.",
                },
                {
                  icon: Clock,
                  title: "Fast Processing",
                  description: "Refunds processed within 3-5 business days once approved.",
                },
                {
                  icon: CreditCard,
                  title: "Secure Escrow",
                  description: "Your money is held safely until the post goes live. No risk to you.",
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
            {/* When You Get a Full Refund */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                When You Get a Full Refund
              </h2>

              <p className="text-gray-600 mb-6">You're entitled to a complete refund in these situations:</p>

              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Post Not Published</h3>
                  <p className="text-gray-600">
                    If your guest post isn't published within the agreed timeframe (usually 14 days), you get a full
                    refund automatically.
                  </p>
                </div>

                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Standards Not Met</h3>
                  <p className="text-gray-600">
                    If the published post doesn't include your backlink, is on the wrong website, or doesn't match what
                    was promised.
                  </p>
                </div>

                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Publisher Fraud</h3>
                  <p className="text-gray-600">
                    If we discover the publisher provided fake metrics or doesn't own the website they claimed.
                  </p>
                </div>

                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Technical Issues</h3>
                  <p className="text-gray-600">
                    If our platform fails to process your order correctly or there are payment processing errors.
                  </p>
                </div>
              </div>
            </div>

            {/* Partial Refunds */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertCircle className="w-6 h-6 text-orange-600 mr-3" />
                Partial Refunds
              </h2>

              <p className="text-gray-600 mb-6">In some cases, you may receive a partial refund:</p>

              <div className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Content Modifications</h3>
                  <p className="text-gray-600">
                    If the publisher makes significant changes to your content that you didn't approve, but the post is
                    still published with your link.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Delayed Publication</h3>
                  <p className="text-gray-600">
                    If your post is published significantly later than promised (but within 30 days), you may receive a
                    partial refund as compensation.
                  </p>
                </div>
              </div>
            </div>

            {/* What's Not Refundable */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Not Refundable</h2>

              <p className="text-gray-600 mb-6">We cannot provide refunds in these situations:</p>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Successful Publication</h3>
                  <p className="text-gray-600">
                    Once your post is successfully published with your backlink on the agreed website, the transaction
                    is complete.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">SEO Results</h3>
                  <p className="text-gray-600">
                    We don't guarantee specific SEO outcomes, ranking improvements, or traffic increases from guest
                    posts.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Content Rejection</h3>
                  <p className="text-gray-600">
                    If your content is rejected by the publisher for not meeting their editorial guidelines (after
                    you've been informed of the requirements).
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Change of Mind</h3>
                  <p className="text-gray-600">
                    Once you've submitted an order and it's been accepted by a publisher, you cannot cancel just because
                    you changed your mind.
                  </p>
                </div>
              </div>
            </div>

            {/* How to Request a Refund */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Request a Refund</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contact Our Support Team</h3>
                    <p className="text-gray-600">
                      Email us at{" "}
                      <a href="mailto:info@gpmarketplace.com" className="text-violet-600 hover:text-violet-700">
                        info@gpmarketplace.com
                      </a>{" "}
                      with your order details and reason for the refund request.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Provide Documentation</h3>
                    <p className="text-gray-600">
                      Include screenshots, order numbers, and any relevant communication with the publisher to help us
                      review your case quickly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">We Review Your Case</h3>
                    <p className="text-gray-600">
                      Our team will investigate within 24-48 hours and respond with our decision and next steps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Refund Processed</h3>
                    <p className="text-gray-600">
                      If approved, your refund will be processed within 3-5 business days to your original payment
                      method.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Timeline */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-violet-600 mr-3" />
                Refund Timeline
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Request Review</span>
                  <span className="text-violet-600 font-semibold">24-48 hours</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Refund Processing</span>
                  <span className="text-violet-600 font-semibold">3-5 business days</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Bank Processing</span>
                  <span className="text-violet-600 font-semibold">1-3 business days</span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Total time from request to money in your account: 5-10 business days maximum.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>

              <div className="space-y-4 text-gray-600">
                <p>If you disagree with our refund decision, we're committed to finding a fair solution:</p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request a second review by our senior team</li>
                  <li>Provide additional evidence or documentation</li>
                  <li>Discuss alternative solutions (credit, partial refund, etc.)</li>
                  <li>Escalate to our management team if needed</li>
                </ul>

                <p>We aim to resolve all disputes fairly and quickly, usually within 5-7 business days.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="w-6 h-6 text-violet-600 mr-3" />
                Need Help with a Refund?
              </h2>

              <p className="text-gray-600 mb-4">
                Our support team is here to help with any refund questions or requests:
              </p>

              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@gpmarketplace.com" className="text-violet-600 hover:text-violet-700">
                    info@gpmarketplace.com
                  </a>
                </p>
                <p>
                  <strong>Subject Line:</strong> "Refund Request - Order #[Your Order Number]"
                </p>
                <p>
                  <strong>Company:</strong> Guest Posts Marketplace
                </p>
                <p>
                  <strong>Address:</strong> 402 West Broadway, San Diego, California, United States
                </p>
              </div>

              <div className="mt-6 p-4 bg-violet-50 rounded-lg border border-violet-200">
                <p className="text-gray-700">
                  <strong>Response Time:</strong> We respond to all refund requests within 24 hours, even on weekends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
