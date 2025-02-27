import React from 'react'
import TermsAndConditions from './usage-policy'
import UsagePolicy from './usage-policy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Usage Policy | Edu Researchers - Terms & Responsible Use",
  description:
    "Review Edu Researchers' Usage Policy to understand the terms of responsible use. Learn about academic integrity, ethical guidelines, and how to use our services properly.",
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
        <UsagePolicy/>
    </div>
  )
}

export default page