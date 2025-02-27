'use client';
import { Button } from '@/components/ui/button';
import { MessageCircle, MountainSnowIcon, PhoneCall, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GrWhatsapp } from 'react-icons/gr';
import { PiEnvelopeFill, PiWhatsappLogo } from 'react-icons/pi';



const links = [
    { href: '/#why-us', label: 'Why Us?' },
    { href: '/#service', label: 'Our Services' },
    { href: '/#howitworks', label: 'How it Works' },
    { href: '/#expertwriters', label: 'Top Experts' },
    { href: '/#review', label: 'Reviews' },
    { href: '/#faq', label: 'FAQs' },
    { href: '/Order?coupon=FLAT45OFF', label: 'Order Now' },
];

const policieslinks = [
    { href: '/refund-policy', label: 'Refund Policy' },
    { href: '/cancellation-policy', label: 'Cancellation Policy' },
    { href: '/terms-and-conditions', label: 'Terms & Conditions' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/usage-policy', label: 'Usage Policy' },

];



function Footer() {

    const handleGetStartedClick = () => {
        if (window.Tawk_API) {
            window.Tawk_API.toggle();
        }
    };
    return (
        <div className=' pt-10 pb-5  bg-zinc-900 dark:bg-gray-900'>
            <div className='mx-auto max-w-screen-xl'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-4 pt-10'>
                    <div className=''>
                        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 lg:-translate-x-8" prefetch={false}>
                            <Image className='' src="/edu-logo-darkmode.png" width={300} height={300} alt="edu" />

                        </Link>
                        <p className='pt-4 text-white text-center lg:text-start font-medium text-sm'>Edu Researchers – Your Trusted Partner For Academic Success. Get Expert Assistance 24/7 With Best Quality, Originality, And Timely Delivery Guaranteed! </p>
                        <div className='flex item-center justify-center lg:justify-start gap-3 mt-4'>
                            <div className='flex-col'>
                                <Image className='mt-3' src={'/imgs/rating.webp'} width={100} height={100} alt='likes'></Image>
                                <div className='pt-2 text-white font-medium'>"Excellent" 4.9/5</div>
                            </div>



                        </div>
                    </div>

                    <div className="bg-zinc-500 dark:bg-zinc-800 h-1 w-full mt-4 lg:hidden block"></div>

                    <div>
                        <ul className='lg:pl-9 gap-2 font-medium text-sm md:text-base text-center lg:text-start text-white'>
                            {links.map((link, index) => (
                                <li key={index} className='p-2'>
                                    <Link href={link.href}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-zinc-500 dark:bg-zinc-800 h-1 w-full mt-4 lg:hidden block"></div>


                    <div>
                        <ul className='lg:pl-9 gap-2 font-medium text-sm md:text-base text-center lg:text-start text-white'>
                            {policieslinks.map((link, index) => (
                                <li key={index} className='p-2'>
                                    <Link href={link.href}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-zinc-500 dark:bg-zinc-800 h-1 w-full mt-4 lg:hidden block"></div>

                    <div>
                        <div className="flex flex-col justify-center lg:justify-start mx-auto lg:mx-0 gap-4 lg:pl-9 ">
                            {/* Call Now Button */}
                            <div className="flex items-center justify-center lg:justify-start mx-auto lg:mx-0 text-white ">
                                <Link href="tel:+447451271188" className="flex items-center gap-2">
                                    <PhoneCall className='w-6 h-6 text-red-500' /> Call Now
                                </Link>
                            </div>

                            {/* WhatsApp Button */}
                            <div className="text-white ">
                                <Link href="https://wa.me/+447451271188?text=Hello Edu Researchers Team, I need Education Assistance. Could you help me complete my task on time?" className="flex items-center gap-2 justify-center lg:justify-start mx-auto lg:mx-0">
                                    <PiWhatsappLogo className='w-6 h-6 text-green-500' /> WhatsApp Now
                                </Link>
                            </div>

                            {/* Email Button */}
                            <div className="text-white">
                                <Link href="mailto:support@eduresearchers.com" className="flex items-center gap-2 justify-center lg:justify-start mx-auto lg:mx-0">
                                    <PiEnvelopeFill className='w-6 h-6 text-orange-500' /> Email Us
                                </Link>
                            </div>
                            <div className="text-white">
                                <Button onClick={handleGetStartedClick} className="flex items-center justify-center lg:justify-start mx-auto lg:mx-0 gap-2 pl-0 pt-0 bg-transparent hover:bg-transparent">
                                    <MessageCircle className='w-6 h-6 text-blue-500' /> Live Chat
                                </Button>
                            </div>
                        </div>
                    </div>



                    {/* <div className=''>
                        <div className='pt-3 text-white font-medium '>Follow Us</div>
                        <Image className='mt-4' src={'/imgs/footer-1.webp'} width={80} height={80} alt='likes'></Image>
                        <p className='bg-blue-500 flex w-3/4 text-center py-1 px-2 rounded-full text-white font-medium text-sm mt-2 '> <Twitter className='mr-1' /> Follow {process.env.NEXT_PUBLIC_NAME} </p>
                        <Image className='mt-4' src={'/imgs/dmca_protected_sml_120m.webp'} width={120} height={120} alt='dmca' ></Image>
                        <div className='pt-5 text-white font-medium'> We accept</div>
                        <Image className='pt-3' src={'/imgs/pay-cards.webp'} width={120} height={100} alt='pay' ></Image>

                    </div> */}





                </div>
            </div>
            <div className='text-center mt-7'>
                <hr></hr>
                <p className='pt-3 font-medium text-sm text-white'>© All Right Reserved - 2025 {process.env.NEXT_PUBLIC_NAME}</p>

            </div>
        </div>


    )
}

export default Footer