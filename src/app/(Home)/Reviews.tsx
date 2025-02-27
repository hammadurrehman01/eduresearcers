import Image from 'next/image'
import React from 'react'
import ReviewCarousel from './ReviewCarousel'
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiPackageFill } from "react-icons/pi";
import Link from 'next/link';

function Reviews() {

    const handleGetStartedClick = () => {
        if (window.Tawk_API) {
            window.Tawk_API.toggle();
        }
    };

  return (
    <div id='review' className='my-10'>
        <div data-aos='fade-down' data-aos-duration="1500" className='mx-auto max-w-screen-xl'>
            <div className='grid lg:grid-cols-2 grid-cols-1 p-2 scale-95 md:scale-100'>
            <div data-aos='flip-down' className='p-3 lg:p-10'>
                <h1 className='font-extrabold lg:text-3xl text-xl text-center md:text-start '>See What Students Say About<br></br> <span className='text-orange-500'>Edu Researchers !</span></h1>
                <p className='pt-5  font-medium md:text-base text-sm text-center md:text-start'>we’re dedicated to helping students achieve their academic goals. Here’s what some of them have to say about their experience <br></br> with us</p>
                <div className='flex lg:flex-row flex-col md:justify-start justify-center items-center py-4 gap-4 mt-3'>
                    
                    <Link href={'/Order?coupon=FLAT45OFF'}
                            className='flex items-center md:hover:scale-105 md:scale-100 text-white scale-90 hover:scale-95 transition ease-in duration-200 bg-orange-500
                           font-semibold rounded-xl w-full lg:w-auto justify-center lg:justify-start px-5 py-4'>
                            <PiPackageFill className='mr-1 w-7 h-7 '/> Order Now
                        </Link>
    
                        <button onClick={handleGetStartedClick} className='bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 flex font-medium items-center py-[13px] px-6 rounded-lg md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 w-full lg:w-auto justify-center lg:justify-start'>
                        <MdOutlineSupportAgent className='mr-1 w-7 h-7 '/> Share Your Review
                        </button>
    
                       
                    </div>
                <div className='md:block flex justify-center items-center mt-10'>

                    <Image src={'/imgs/rating.webp'} width={120} height={120} alt='rating' ></Image>
                </div>
                <p className='text-muted-foreground md:text-base text-sm font-medium text-center md:text-start pt-2 -ml-3'>“Excellent” - 4.9/5</p>
         
            </div>
         


            <div data-aos='flip-up' className='mt-10 md:my-0 p-3 lg:p-10'>
                <ReviewCarousel/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews