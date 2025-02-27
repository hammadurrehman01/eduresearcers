import { Loader2 } from 'lucide-react'
import dynamic from 'next/dynamic'
import React from 'react'
const ThankOrder = dynamic(() => import('./ThankOrder'),{ssr:false,
  loading:()=><Loading/>,
})

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