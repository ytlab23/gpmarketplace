import type { Metadata } from "next"
import ApplyPublisherClient from "./ApplyPublisherClient"

export const metadata: Metadata = {
  title: "Apply as Publisher | GP Marketplace",
  description:
    "Join our verified guest posts marketplace as a publisher. Earn money by accepting quality guest posts on your website.",
}

export default function ApplyPublisherPage() {
  return <ApplyPublisherClient />
}
