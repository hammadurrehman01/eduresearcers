import React from 'react'
import TermsAndConditions from './terms-and-conditions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms and Conditions | Edu Researchers - Academic Policies",
  description:
    "Read the terms and conditions of Edu Researchers. Understand our policies on academic assistance, privacy, refunds, and user responsibilities.",
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
        <TermsAndConditions/>
    </div>
  )
}

export default page