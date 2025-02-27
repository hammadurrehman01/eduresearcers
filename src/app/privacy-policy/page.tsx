import React from 'react'
import PrivacyPolicy from './privacy-policy'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Privacy Policy | Edu Researchers - Your Data, Your Control",
  description:
    "Read Edu Researchers' Privacy Policy to understand how we collect, use, and protect your data. Your privacy and security are our top priorities.",
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
        <PrivacyPolicy/>
    </div>
  )
}

export default page