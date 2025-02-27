import Image from 'next/image'
import React from 'react'
import { HelpDesk } from './HomeBanner'
import Link from 'next/link'
import { ShoppingCartIcon } from 'lucide-react'

function ServiceSection() {
    return (
        <div className='mx-auto max-w-screen-xl'>
            <div data-aos='fade-up' data-aos-duration="2000" className=' md:mt-10 mt-4 md:scale-100 '>
                <h1 className='text-center text-2xl md:text-7xl text-muted font-extrabold '>WHY US?</h1>
                <div className=' flex justify-center '>
                    <h2 className='text-xl md:text-3xl w-[600px] -translate-y-6 md:-translate-y-10  font-extrabold text-center'>Your Ultimate Academic Solution <br></br> <span className='text-xl font-medium'> Expert Support in All Subjects </span></h2>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-5 '>
                    <div className='group'>
                        <div data-aos='flip-up' className='md:group-hover:scale-105 md:scale-100 scale-90 group-hover:scale-95   group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[350px] flex flex-col justify-center p-5 bg-zinc-50 dark:bg-gray-900  border-2 border-orange-500 rounded-xl'>
                            <Image loading='eager' src={'/imgs/flawless.webp'} width={60} height={60} alt='flawless'></Image>
                            <h2 className='pt-5 text-lg md:text-lg font-bold lg:pr-20 md:pr-16'>Expert Academic Assistance</h2>
                            <p className='text-sm  font-medium pt-2'>Get expert help across all academic needs with top-quality work, ensuring accuracy and excellence in every task</p>
                        </div>
                    </div>


                    <div className='group'>
                        <div data-aos='flip-down' className='md:group-hover:scale-105 md:scale-100 scale-90 group-hover:scale-95  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[350px] flex flex-col justify-center p-5 bg-zinc-50 dark:bg-gray-900 border-2 border-orange-500 rounded-xl'>
                            <Image loading='eager' src={'/imgs/secure.webp'} width={60} height={60} alt='flawless'></Image>
                            <h2 className='pt-5 text-lg md:text-lg font-bold lg:pr-24 md:pr-16'>100% Secure & Confidential</h2>
                            <p className='text-sm   font-medium pt-2'>Your privacy matters! Our services are designed to keep your data safe and your work confidential, No compromises.</p>
                        </div>
                    </div>


                    <div className='group'>
                        <div data-aos='flip-up' className='md:group-hover:scale-105 md:scale-100 scale-90 group-hover:scale-95  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[350px] flex flex-col justify-center p-5 bg-zinc-50 dark:bg-gray-900 border-2 border-orange-500 rounded-xl'>
                            <Image loading='eager' src={'/imgs/247support.webp'} width={60} height={60} alt='flawless'></Image>
                            <h2 className='pt-5 text-lg md:text-lg font-bold lg:pr-24 md:pr-16'>24/7 Support Available</h2>
                            <p className='text-sm  font-medium pt-2'>Got a question? Need urgent academic help? Our experts support team is always ready to assist you</p>
                        </div>
                    </div>


                    <div className='group'>
                        <div data-aos='flip-down' className=' md:group-hover:scale-105 md:scale-100 scale-90 group-hover:scale-95  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[350px] flex flex-col justify-center p-5 bg-zinc-50 dark:bg-gray-900 border-2 border-orange-500 rounded-xl'>
                            <Image loading='eager' src={'/imgs/downloadyourwork.webp'} width={60} height={60} alt='flawless'></Image>
                            <h2 className='pt-5 text-lg md:text-lg font-bold lg:pr-24 md:pr-16'>Timely Delivery, Every Time</h2>
                            <p className='text-sm  font-medium pt-2'>We respect deadlines! Whether it's a short task or a lengthy project, expect your work to be delivered on time, No delays.</p>
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col justify-center items-center py-4 gap-4  '>
                    <HelpDesk />

                    <Link href={'https://wa.me/+447451271188?text=Hello Edu Researchers Team, I need Education Assistance. Could you help me complete my task on time?'} target="_blank" rel="noopener noreferrer" className='bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 flex font-medium items-center py-[13px] px-6 rounded-lg md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 border-[2px] border-green-600 w-full lg:w-auto justify-center lg:justify-start'>
                  <Image className='mr-2' src={'/imgs/whatsapp.png'} width={25} height={25} alt='whatsapp'></Image> Chat On Whatsapp
                </Link>

                </div>
            </div>
        </div>
    )
}

export default ServiceSection