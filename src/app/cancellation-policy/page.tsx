import React from 'react'
import CancellationPolicy from './cancellation-policy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Cancellation Policy | Edu Researchers - Academic Assistance",
  description:
    "Learn about Edu Researchers' cancellation policy, including refund eligibility, order modifications, and cancellation procedures. Understand our guidelines before placing your order.",
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
        <CancellationPolicy/>
    </div>
  )
}

export default page