import Image from 'next/image'
import React from 'react'
import { CarouselSpacing } from './SupportCarousel'
import { MessageCircleIcon, Package } from 'lucide-react'
import { RiCoupon2Line } from "react-icons/ri";
import Link from 'next/link'

function SupportSection() {
    return (
        <div className='pt-10'>
            <div data-aos='fade-down' data-aos-duration="1500" style={{ backgroundImage: "url('/imgs/support_bg.webp')", backgroundSize: 'cover' }} className='py-10'>
                <div className='mx-auto max-w-screen-xl'>
                    <div className='px-3 md:pt-10 scale-95 md:scale-100'>
                        <h1 className='text-center text-xl md:text-7xl  font-extrabold text-white text-opacity-10 '>Success in Academic Career</h1>
                        <div className=' flex justify-center '>
                            <h2 className='text-lg text-zinc-100 md:text-3xl w-[600px] -translate-y-6 md:-translate-y-10  font-extrabold text-center'>Achieve Success in Your Career with <br></br> <span className='text-orange-500'>Edu Researchers</span></h2>
                        </div>
                        <p className='text-zinc-100 font-medium text-center -translate-y-3 md:text-base text-sm'>Completing academic tasks can be challenging, but we make it simple for you. <br></br> At Edu Researchers, we provide expert assistance to ensure your work meets high standards while saving you time and effort.</p>
                        <h2 className='pt-4 font-semibold text-center text-zinc-100 text-lg md:text-3xl'>Your Success Is Our Priority!</h2>
                        <div className='grid lg:grid-cols-2 grid-cols-1 md:p-5 items-center '>
                            <div className=''>
                                
                                <div className='pt-5 flex items-center justify-start '>
                                 <Image loading='eager' src={'/imgs/support-1.webp'} width={20} height={20} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100 md:text-base text-sm'>Urgent deadlines? don't worry We deliver every tasks on time</p>
                                </div>
                                <div className='pt-5 flex items-center justify-start '>
                                 <Image loading='eager' className='lg:-ml-5' src={'/imgs/support-1.webp'} width={20} height={20} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100 md:text-base text-sm'>Confused about requirements? Our experts follow all guidelines.</p>
                                </div>
                                <div className='pt-5 flex items-center justify-start '>
                                 <Image loading='eager' src={'/imgs/support-1.webp'} width={20} height={20} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100 md:text-base text-sm'>Looking for reliable support? We provide original, high-quality work.</p>
                                </div>
                            </div>
                            <div className=''>
                            <div className='pt-5 flex items-center justify-start '>
                                 <Image loading='eager' className='lg:-ml-5' src={'/imgs/support-1.webp'} width={20} height={20} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100 md:text-base text-sm'>24/7 support & 100% money-back guarantee </p>
                                </div>
                                <div className='pt-5 flex items-center justify-start '>
                                 <Image loading='eager' className='' src={'/imgs/support-1.webp'} width={20} height={20} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100 md:text-base text-sm'>Let us handle the details while you focus on learning.</p>
                                </div>
                                <div className=' pt-5 flex items-center justify-start '>
                                 <Image loading='eager' className='lg:ml-5' src={'/imgs/support-1.webp'} width={20} height={20} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100 md:text-base text-sm'> Get started today! Chat with us now.</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-down' className='flex justify-center'>
                        <CarouselSpacing/>
                        </div>
                        <h2 className='py-8 text-zinc-100 font-semibold text-lg md:text-2xl text-center '>Need Help? Our Academic Assistance Team Are Available 24/7 for You!</h2>
                        <div className='md:flex-row  gap-3  flex flex-col justify-center items-center scale-[.85] md:scale-100 mt-4'>
                        <Link href={'/Order?coupon=FLAT45OFF'} className='bg-background flex items-center font-medium py-3 px-8 rounded-lg md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 border-[2px] border-zinc-900 dark:border-zinc-300 w-full lg:w-auto justify-center lg:justify-start'>
                        <RiCoupon2Line className="mr-1 w-6 h-6 "/> Activate Discount Coupon
                        </Link>
                        <Link href={'https://wa.me/+447451271188?text=Hello Edu Researchers Team, I need Education Assistance. Could you help me complete my task on time?'} target="_blank" rel="noopener noreferrer" className='bg-background flex font-medium items-center py-3 px-6 rounded-lg md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 border-[2px] border-green-600 w-full lg:w-auto justify-center lg:justify-start'>
                            <Image className='mr-2' src={'/imgs/whatsapp.png'} width={25} height={25} alt='whatsapp'></Image> Share Your Task With Us
                        </Link>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportSection