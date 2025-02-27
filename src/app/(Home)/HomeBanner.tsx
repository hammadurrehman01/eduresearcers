"use client"
import { BoxIcon, CheckCircle, HelpingHand, HelpingHandIcon, MessageCircle, RocketIcon, ShoppingCartIcon, Star, Users } from 'lucide-react'
import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react'
import DiscountForm from './DiscountForm'
import dynamic from 'next/dynamic';
import { GrUserExpert } from "react-icons/gr";
import Link from 'next/link';
import Image from 'next/image';
import ReCAPTCHA from "react-google-recaptcha";
import { IoChatbubbleEllipses } from "react-icons/io5";

export function HomeBanner() {
  const [highlightForm, setHighlightForm] = useState(false);

  // const handleGetStartedClick = () => {
  //   setHighlightForm(true);
  //   setTimeout(() => {
  //     setHighlightForm(false);
  //   }, 2000);
  // };

  const tawkToClick = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    }
  };

  return (
    <>
      {/* <Tawkto/> */}


      <div id='banner' className="w-full bg-[url('/imgs/banner-im.jpg')] bg-cover bg-center bg-no-repeat relative">
  <div className="dark:absolute dark:inset-0 dark:bg-black/90"></div>
  
        <div className='mx-auto max-w-screen-xl'>
          <div className=' grid lg:grid-cols-2 grid-cols-1 gap-3 lg:py-10 py-3'>
            {/* Left Section */}
            <div className='lg:py-4 lg:pl-24 px-5 scale-90 md:scale-100'>
              <p className='text-sm md:text-base  text-center md:text-start text-[#f97316] font-bold'>
                - AFFORDABLE - FASTEST - 100% SECURED -

              </p>
              <h1 className='font-bold pt-5 text-center md:text-start text-3xl lg:text-3xl'>
              Best Academic Assistance Team
              </h1>
              <p className='text-sm md:text-base text-muted-foreground py-3 font-medium text-center md:text-start'>
                All Subjects Are Accepted With Any Deadline

              </p>
              <div className='md:flex-row md:justify-start gap-3 flex flex-col justify-center items-center scale-[.85] md:scale-100 lg:mt-4'>
                <Link href={"/Order?coupon=FLAT45OFF"}
                  className='flex items-center justify-center py-[13px] px-6 rounded-lg bg-orange-500 text-white  md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 border-[2px] w-full  '
                 
                >
                  <ShoppingCartIcon className='mr-1' /> Place Your Order
                </Link>

                <button onClick={tawkToClick} className='bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 flex font-medium items-center py-[14px] px-6 rounded-lg md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200  gap-2 w-full justify-center md:justify-start text-sm'>
                  <IoChatbubbleEllipses className='w-6 h-6' /> Discuss With Experts
                </button>


              </div>
              <div className='font-medium text-muted-foreground text-center md:text-start pt-4'>
                <span className='font-bold text-[#111827] dark:text-zinc-100'>Achieve A+ Results, <br className='lg:hidden block' /> <span className='text-muted-foreground font-medium'>We Are Best Academic Helpers !</span></span>
              </div>

              <div onClick={tawkToClick} className=" bg-zinc-50 dark:bg-gray-900  p-5 rounded-lg shadow-lg w-full  mx-auto mt-6 lg:block hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left Side */}
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Users className="text-yellow-400" /> 5500+ Experts
                    </h3>
                    <p className="text-sm  pb-2 ps-8">Online to help you 24x7</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-green-400 w-5 h-5" /> Satisfaction Guaranteed
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-green-400 w-5 h-5" /> Experienced Teachers
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-green-400 w-5 h-5" /> Time Flexibility
                      </li>
                    </ul>
                  </div>

                  {/* Right Side */}
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Star className="text-yellow-400" /> Rated 4.9/5
                    </h3>
                    <p className="text-sm  pb-2 ps-8">Out of 3098 Reviews</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-green-400 w-5 h-5 " /> Very Low Pricing
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-green-400 w-5 h-5" /> Fastest Turnaround Time
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-green-400 w-5 h-5" /> Professional Proofreaders
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>




            {/* Right Section */}
            <div>
              <div className='flex justify-center px-3'>
                {/* Highlight the form when button is clicked */}
                <div
                  className={`transition duration-200 ease-in  ${highlightForm ? 'border-2 border-orange-500 shadow-xl scale-95 md:scale-105 rounded-3xl' : ''
                    }`}
                >
                  <DiscountForm />
                </div>
              </div>

              <div className='px-5 scale-90 md:scale-100'>
              <div onClick={tawkToClick} className=" bg-zinc-50 dark:bg-gray-900  p-5 rounded-lg shadow-lg w-full  mx-auto mt-6 lg:hidden block">
                <div className="grid grid-cols-2 gap-2">
                  {/* Left Side */}
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Users className="text-yellow-400" /> 5500+ Experts
                    </h3>
                    <p className="text-xs pt-1 pb-1 ps-4">Online to help you 24x7</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-green-400 w-5 h-5" /> Satisfaction Guaranteed
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-green-400 w-5 h-5" /> Experienced Teachers
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-green-400 w-5 h-5" /> Time Flexibility
                      </li>
                    </ul>
                  </div>

                  {/* Right Side */}
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Star className="text-yellow-400" /> Rated <br className='md:hidden block'/> 4.9/5
                    </h3>
                    <p className="text-xs pt-1 pb-1 ps-4">Out of 3098 Reviews</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-green-400 w-5 h-5 " /> Very Low Pricing
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-green-400 w-5 h-5" /> Fastest Turnaround Time
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-green-400 w-5 h-5" /> Professional Proofreaders
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function HelpDesk() {
  const handleGetStartedClick = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    }
  };
  return (
    <button onClick={handleGetStartedClick} className='bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 flex font-medium items-center py-[13px] px-6 rounded-lg md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 w-full lg:w-auto justify-center lg:justify-start gap-2'>
      <GrUserExpert /> Talk With Experts
    </button>
  )
}

