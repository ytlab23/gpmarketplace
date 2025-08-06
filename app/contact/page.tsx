import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | GP Marketplace",
  description:
    "Get help with your guest posts marketplace questions. Contact our support team for assistance with your link building campaigns.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
