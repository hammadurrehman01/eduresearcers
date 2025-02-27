import React from 'react'
import Order from './Order'
import { TopicProvider } from '../TopicContext'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Order Now | Edu Researchers - Academic Assistance",
  description:
    "Place your order with Edu Researchers for expert academic assistance. Get high-quality, plagiarism-free content tailored to your academic needs.",
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

export default function Page() {
  return (
    <TopicProvider>
      <Order />
    </TopicProvider>
  )
}
