import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Best Guest Posts Marketplace | GP Marketplace",
  description:
    "Connect with 15,000+ verified publishers in our guest posts marketplace. Get high-authority backlinks at wholesale prices. No agencies, no markup.",
}

export default function HomePage() {
  return <ClientPage />
}
