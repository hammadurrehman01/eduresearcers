import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Package2 } from 'lucide-react'
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiPackageFill } from "react-icons/pi";



function HowItWorks() {
    const handleGetStartedClick = () => {
        if (window.Tawk_API) {
            window.Tawk_API.toggle();
        }
    };
    return (
        <div id='howitworks' className='mx-auto max-w-screen-xl '>
            <div data-aos='fade-up' data-aos-duration="1500" className='mt-20'>
            <h1 className='text-center text-4xl md:text-7xl text-muted font-extrabold '>HOW IT WORKS</h1>
                <div className=' flex flex-col justify-center items-center mx-auto  -translate-y-6 md:-translate-y-10'>
                    <h2 className='text-xl md:text-3xl md:w-[600px]   font-extrabold text-center'>Simple & Fast Order Process
                    </h2>
                    <p className='pt-2 text-center md:text-base text-sm px-4'>We’ve made the ordering process hassle-free so you can focus on what matters most. <br></br> Just follow these four easy steps to get high-quality academic support delivered on time.</p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-2 md:p-5 scale-95 md:scale-100 '>
                    <div data-aos='flip-up' className='group'>
                        <div className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[400px] rounded-xl shadow-xl bg-zinc-50 dark:bg-gray-900 border-2 border-orange-500 rounded-xl p-5'>
                            <div className='pt-5 flex items-center justify-around'>
                                <Image loading='eager' src={'/imgs/howitworks-1.webp'} width={80} height={80} alt='howitworks' ></Image>
                                <Image loading='eager' className='grayscale' src={'/imgs/arrow.webp'} width={20} height={20} alt='arrow'></Image>

                            </div>
                            <h2 className=' mt-8 text-lg md:text-2xl font-bold text-zinc-800 dark:text-zinc-100'>Share Your Task</h2>
                            <p className='mt-4 text-muted-foreground font-medium text-sm md:text-base '>Tell us what you need through live chat or our fast order form. Provide complete task details, including requirements and deadlines, so we can tailor the service to your needs.</p>
                        </div>
                    </div>

                    <div data-aos='flip-down' className='group'>
                        <div className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[400px] rounded-xl shadow-xl bg-zinc-50 dark:bg-gray-900 border-2 border-orange-500 rounded-xl p-5'>
                            <div className='pt-5 flex items-center justify-around'>
                                <Image loading='eager' src={'/imgs/howitworks-2.webp'} width={80} height={80} alt='howitworks' ></Image>
                                <Image loading='eager' className='grayscale' src={'/imgs/arrow.webp'} width={20} height={20} alt='arrow'></Image>

                            </div>
                            <h2 className=' mt-8 text-lg md:text-2xl font-bold text-zinc-800 dark:text-zinc-100'>Get a Free Quote</h2>
                            <p className='mt-4 text-muted-foreground font-medium text-sm md:text-base'>Once you submit the form, our system will generate an instant order summary with a price estimate. Review the details to ensure accuracy before proceeding to the next step.</p>
                        </div>
                    </div>

                    <div data-aos='flip-right' className='group'>
                        <div className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[400px] rounded-xl shadow-xl bg-zinc-50 dark:bg-gray-900 border-2 border-orange-500 rounded-xl p-5'>
                            <div className='pt-5 flex items-center justify-around'>
                                <Image loading='eager' src={'/imgs/howitworks-3.webp'} width={80} height={80} alt='howitworks' ></Image>
                                <Image loading='eager' className='grayscale' src={'/imgs/arrow.webp'} width={20} height={20} alt='arrow'></Image>

                            </div>
                            <h2 className=' mt-8 text-lg md:text-2xl font-bold text-zinc-800 dark:text-zinc-100'>Proceed to Payment</h2>
                            <p className='mt-4 text-muted-foreground font-medium'>Once you submit the order, you’ll be redirected to a secure 3D payment gateway. Complete the payment to confirm your order</p>
                        </div>
                    </div>

                    <div data-aos='flip-left' className='group'>
                        <div className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[400px] rounded-xl shadow-xl bg-zinc-50 dark:bg-gray-900 border-2 border-orange-500 rounded-xl p-5'>
                            <div className='pt-5 flex items-center justify-around'>
                                <Image loading='eager' src={'/imgs/howitworks-4.webp'} width={80} height={80} alt='howitworks' ></Image>
                                <Image loading='eager' className='grayscale' src={'/imgs/arrow.webp'} width={20} height={20} alt='arrow'></Image>

                            </div>
                            <h2 className=' mt-8 text-lg md:text-2xl font-bold text-zinc-800 dark:text-zinc-100'>Receive Your Work</h2>
                            <p className='mt-4 text-muted-foreground font-medium text-sm md:text-base'>Get your completed work on your provided deadline. Our experts will notify you when it’s ready. If you need any enhancements, feel free to share your feedback</p>
                        </div>
                    </div>

                </div>
                <div className='flex lg:flex-row flex-col justify-center items-center py-4 gap-4'>
                    
                <Link href={'/Order?coupon=FLAT45OFF'}
                        className='flex items-center md:hover:scale-105 md:scale-100 text-white scale-90 hover:scale-95 transition ease-in duration-200 bg-orange-500
                       font-semibold rounded-xl w-full lg:w-auto justify-center lg:justify-start px-5 py-4'>
                        <PiPackageFill className='mr-1 w-7 h-7 '/> Order Now
                    </Link>

                    <button onClick={handleGetStartedClick} className='bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 flex font-medium items-center py-[13px] px-6 rounded-lg md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 w-full lg:w-auto justify-center lg:justify-start  '>
                    <MdOutlineSupportAgent className='mr-1 w-7 h-7 '/> Share Your Task With Expert
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default HowItWorks