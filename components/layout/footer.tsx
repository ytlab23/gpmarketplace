"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-16 border-t border-gray-300 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">GP</span>
                <span className="text-gray-900 ml-1">Marketplace</span>
              </span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md mb-6">
              The world's most trusted marketplace for premium guest posts and high-authority backlinks.
            </p>
            <Button
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0"
              onClick={() => window.open("https://app.gpmarketplace.com", "_blank")}
            >
              Login
            </Button>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-lg">Product</h4>
            <ul className="space-y-4">
              {[
                { name: "How It Works", href: "/#how-it-works" },
                { name: "Why Us", href: "/#features" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Cost Calculator", href: "/calculate-savings" },
                { name: "Resellers", href: "/#resellers" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center group"
                  >
                    {item.name}
                    <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-lg">Support</h4>
            <ul className="space-y-4">
              {[
                { name: "Contact Us", href: "/contact" },
                { name: "Apply as Publisher", href: "/apply-publisher" },
                { name: "Publisher Guidelines", href: "/publisher-guidelines" },
                { name: "Refund Policy", href: "/refund-policy" },
                { name: "FAQs", href: "/#faq" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center group"
                  >
                    {item.name}
                    <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">&copy; 2024 GP Marketplace. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors">
              Privacy
            </a>
            <a href="/terms-of-service" className="text-gray-600 hover:text-gray-900 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
