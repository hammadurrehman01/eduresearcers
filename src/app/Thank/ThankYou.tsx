"use client"
import Link from 'next/link'
import React from 'react'
import { HelpDesk } from '../(Home)/HomeBanner'
import { Package2 } from 'lucide-react'

function ThankYou() {
    const name = localStorage.getItem("name")
    const number = localStorage.getItem("number")
  return (
    <div style={{backgroundImage:"url('/imgs/banner-im.jpg')",backgroundSize:'cover',backgroundPosition:'center'}} className="flex  flex-col items-center justify-center h-screen bg-background px-4 pb-24 pt-32 md:pt-2 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-screen-xl text-center  scale-90 md:scale-100">
      <div className="inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-primary-foreground">
        <CheckIcon className="mr-2 h-5 w-5" />
        <span>Thank You!</span>
      </div>
      <h1 className="mt-6 text-xl font-medium tracking-tight text-zinc-900 sm:text-2xl">
        Dear <span className=' font-bold'>{name || "User"} </span>.
      </h1>
      <h1 className="mt-6 text-lg font-medium  text-zinc-900 sm:text-xl">
        Please Check your whatsapp <span className='font-bold'>{number}</span>  we have sent 45% discount offer
      </h1>
      <p className="mt-4 text-zinc-900 lg:w-[610px] mx-auto">
        Thank you for your recent purchase. We hope you enjoy your new product. If you have any questions or concerns,
        please don't hesitate to contact us.
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

function CheckIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }