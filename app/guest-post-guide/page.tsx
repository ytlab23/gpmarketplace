import type { Metadata } from "next"
import { GuestPostGuideClient } from "./GuestPostGuideClient"

export const metadata: Metadata = {
  title: "How to Write the Perfect Guest Post | GP Marketplace",
  description:
    "Master guest posting with our complete guide. Learn SEO optimization, AI tools, freelancer hiring, and proven strategies for guest posts that get published and drive results.",
}

export default function GuestPostGuidePage() {
  return <GuestPostGuideClient />
}
