import React from 'react';
import HomeComps from '@/app/(Home)/HomeComps';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best Academic Assistance Team | Edu Researchers",
  description:
    "Our Academic Assistance Team at Edu Researchers provides professional academic support to help students succeed. Get high-quality academic assistance tailored to your needs.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: { 
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return <HomeComps />;
}
