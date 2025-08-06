"use client"

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-gray-200/20 bg-gray-50/80 backdrop-blur-xl supports-[backdrop-filter]:bg-gray-50/80 sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <a href="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">GP</span>
            <span className="text-gray-900 ml-1">Marketplace</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/#how-it-works"
            className="text-gray-700 hover:text-gray-900 transition-all duration-300 relative group"
          >
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="/#features" className="text-gray-700 hover:text-gray-900 transition-all duration-300 relative group">
            Why Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="/#resellers"
            className="text-gray-700 hover:text-gray-900 transition-all duration-300 relative group"
          >
            Resellers
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="/#faq" className="text-gray-700 hover:text-gray-900 transition-all duration-300 relative group">
            FAQs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="/contact" className="text-gray-700 hover:text-gray-900 transition-all duration-300 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-purple-500/25"
            onClick={() => window.open("https://app.gpmarketplace.com", "_blank")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
