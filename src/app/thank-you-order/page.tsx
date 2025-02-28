import { Loader2 } from 'lucide-react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'
const ThankOrder = dynamic(() => import('./ThankOrder'),{ssr:false,
  loading:()=><Loading/>,
})

export const metadata: Metadata = {
  title: "Order Received | Edu Researchers - Academic Assistance",
  description:
    "Thank you for placing your order with Edu Researchers! Your request has been received, and our experts will begin working on it shortly.",
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
        <ThankOrder/>
    </div>
  )
}

export default page

function Loading(){
  return (
<div className='flex justify-center items-center text-4xl bg-background h-screen '><Loader2 className='animate-spin mr-2 w-10 h-10'/> Loading...  </div>)
}