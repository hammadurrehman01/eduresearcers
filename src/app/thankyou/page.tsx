"use client"
import Link from 'next/link'
import React from 'react'
import { HelpDesk } from '../(Home)/HomeBanner'
import { Package2 } from 'lucide-react'

function ThankYou() {
    const email = localStorage.getItem("email")

  return (
    <div style={{backgroundImage:"url('/imgs/banner-im.webp')",backgroundSize:'cover',backgroundPosition:'center'}} className="flex  flex-col items-center justify-center h-screen bg-background px-4 pb-24 pt-32 md:pt-2 sm:px-6 lg:px-8 relative">
       <div className="dark:absolute dark:inset-0 dark:bg-black/90"></div>
    <div className="mx-auto max-w-screen-xl text-center  scale-90 md:scale-100">
      <div className="inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-white">
        <span>Thank You for Choosing Us!</span>
      </div>
      <h1 className="mt-6 text-xl font-medium tracking-tight  sm:text-2xl">
        Dear Student 
      </h1>
      <h1 className="mt-6 text-lg font-medium   sm:text-xl">
        Please Check your Email <span>{email}</span> we have sent 45% discount offer
      </h1>
      <p className="mt-4  lg:w-[610px] mx-auto">
      We sincerely appreciate your trust in our academic services. Your success is our priority, and we are committed to providing you with high-quality assistance.
      </p>
      <p className="mt-4  lg:w-[610px] mx-auto">
      If you have any questions, need further support, or require additional services, feel free to contact us. We're always here to help!
      </p>
      <div className="mt-6 flex flex-col items-center md:flex-row justify-center gap-4">
        <Link
          href="/Order?coupon=FLAT45OFF"
          className="flex items-center justify-center hover:scale-105 transition ease-in duration-200 delay-200 py-3 bg-zinc-200 dark:bg-zinc-900 w-[200px] text-black dark:text-zinc-100 border-[2px] border-black dark:border-white rounded-lg"
          prefetch={false}
        >
           <Package2 className='mr-2'/> Order Now
        </Link>
        <HelpDesk/>
      </div>
    </div>
  </div>
  )
}

export default ThankYou
