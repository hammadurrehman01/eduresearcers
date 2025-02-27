import { Loader2 } from 'lucide-react'
import dynamic, { noSSR } from 'next/dynamic'
import React from 'react'
const ThankYou = dynamic(() => import('./ThankYou'),{ssr:false,
    loading:()=><Loading/>,
})

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