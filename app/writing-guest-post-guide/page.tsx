import type { Metadata } from "next"
import { GuestPostGuideClient } from "./GuestPostGuideClient"

export const metadata: Metadata = {
  title: "How to Write the Perfect Guest Post - Complete Guide | GP Marketplace",
  description:
    "Master guest post writing with our comprehensive guide covering SEO optimization, AI tools, freelancer hiring, and advanced strategies for guest posts marketplace success.",
  keywords:
    "guest posts, guest post writing, guest posts marketplace, SEO optimization, content marketing, guest posting guide",
  openGraph: {
    title: "How to Write the Perfect Guest Post - Complete Guide | GP Marketplace",
    description:
      "Master guest post writing with our comprehensive guide covering SEO optimization, AI tools, freelancer hiring, and advanced strategies for guest posts marketplace success.",
    type: "article",
  },
}

export default function GuestPostGuidePage() {
  return <GuestPostGuideClient />
}
