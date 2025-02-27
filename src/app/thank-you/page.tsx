import { Loader2 } from 'lucide-react'
import { Metadata } from 'next'
import dynamic, { noSSR } from 'next/dynamic'
import React from 'react'
const ThankYou = dynamic(() => import('./ThankYou'),{ssr:false,
    loading:()=><Loading/>,
})

export const metadata: Metadata = {
  title: "Thank You | Edu Researchers - Academic Assistance",
  description:
    "Thank you for reaching out to Edu Researchers! We appreciate your inquiry and will get back to you soon. Stay tuned for expert academic assistance",
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
    <ThankYou/>  
  )
}



export default page


function Loading(){
    return (
<div className='flex justify-center items-center text-4xl bg-background h-screen '><Loader2 className='animate-spin mr-2 w-10 h-10'/> Loading...  </div>)
}