import Image from 'next/image'
import React from 'react'

function UniSection() {
  return (
    <div id="why-us" className='mx-auto max-w-screen-xl' data-aos='fade-up' data-aos-duration="1000">
        <div className='grid lg:grid-cols-6 grid-cols-2 lg:gap-0 gap-2 py-4 px-3  items-center scale-90 md:scale-100'>
          <div className='col-span-2 lg:mx-0 mx-auto'>
            <p className=' font-bold md:text-2xl md:text-start text-center text-lg pt-3 text-orange-500'>Trusted by 76,000+ Students</p>
            <p className=' font-normal  text-sm pt-2 pl-2'>Connect with Over 4000+ Trusted Experts Today

</p>
            </div>

             <div className='mx-auto'><Image  loading='eager' src={'/imgs/uni_5.png'} width={130} height={100} alt='uni'></Image></div>
             <div className='mx-auto'><Image  loading='eager' src={'/imgs/uni_2.png'} width={120} height={100} alt='uni'></Image></div>
             <div className='mx-auto'><Image loading='eager' src={'/imgs/uni_3.png'} width={120} height={100} alt='uni'></Image></div>
             <div className='mx-auto'><Image loading='eager' src={'/imgs/uni_4.png'} width={120} height={100} alt='uni'></Image></div>

            
        </div>
    </div>
  )
}

export default UniSection