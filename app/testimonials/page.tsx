import type { Metadata } from "next"
import TestimonialsClient from "./TestimonialsClient"

export const metadata: Metadata = {
  title: "Customer Testimonials | GP Marketplace",
  description:
    "Read success stories from businesses using our guest posts marketplace. See how companies improved their SEO with quality backlinks.",
}

export default function TestimonialsPage() {
  return <TestimonialsClient />
}
