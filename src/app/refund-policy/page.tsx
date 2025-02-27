import React from 'react'
import RefundPolicy from './refund-policy'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Refund Policy | Edu Researchers - Money-Back Guarantee",
  description:
    "Review Edu Researchers' refund policy to understand your eligibility for a refund. We ensure customer satisfaction with a clear money-back guarantee.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

function page() {
  return (
    <div>
        <RefundPolicy/>
    </div>
  )
}

export default page