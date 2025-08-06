import type { Metadata } from "next"
import CalculateSavingsClient from "./CalculateSavingsClient"

export const metadata: Metadata = {
  title: "Calculate Your Savings | GP Marketplace",
  description:
    "Calculate how much you can save on guest posts with our marketplace compared to agencies and freelancers. Get instant savings estimates.",
}

export default function CalculateSavingsPage() {
  return <CalculateSavingsClient />
}
