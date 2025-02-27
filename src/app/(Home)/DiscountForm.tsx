"use client"

import React, { useEffect, useRef, useState } from 'react';
import EmailAction from '../(backend)/action/formAction';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import CustomCaptcha from '@/components/ui/common/CustomCaptcha';
import Image from 'next/image';

const DiscountForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isVerified, setIsVerified] = useState(false);


  const [currentText, setCurrentText] = useState<string>('Avail 45% OFF');
  const texts = [
    'Get Free AI & Plagiarism Report',
    'Avail Flat 45% Discount Now',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 4000); 

    return () => clearInterval(intervalId);
  }, []);



  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [pending, setPending] = useState(false)
  const [errorObj, setErrorObj] = useState<any>({})
  const router = useRouter()


  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!isVerified) {
      toast.error("Please Verify the Captcha");
      return; // Stop execution if captcha is not verified
  }
      setPending(true)
      e.preventDefault()
      localStorage.setItem("name", name)
      localStorage.setItem("number", number)
  
   

    const sendData = async () => {
      const res = await EmailAction(name, email, number)
      setPending(false)
      if (res?.success) {
        formRef.current?.reset();
        router.push("/Thank")
      } else if (res?.error) {
        toast.error(res.error);
      } else if (res?.info) {
        setErrorObj(res.info)
      }
    }
    sendData()

  }


  return (
    
    <div className="max-w-sm mx-auto bg-background rounded-3xl shadow-lg scale-95 lg:scale-100">
      
      <div ><Image alt='discount-img' className='hidden md:absolute w-[35%] left-[331px] rotate-[345deg] top-[-20px]' src={'/imgs/45-discount.png'} width={100} height={100}></Image></div>
      <div className='rounded rounded-tr-3xl text-zinc-100 rounded-tl-3xl bg-gray-900'>
        <h2 className="text-[19px] font-bold p-5 typing-animation">
          {currentText}
        </h2>
        
      </div>
      

      <p className="text-lg  font-semibold mt-4 text-center ">Let's Connect With Our Professors !</p>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 p-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name='name'
          type="text"
          placeholder="Enter Your Full Name"
          className="w-full px-4 py-1 border border-orange-400 rounded-md focus:outline-none focus:border-orange-600"
        />
        {errorObj?.name?.map((item: any, i: any) => (
          <p key={i} className='text-red-600 text-sm'>{item}</p>
        ))}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          placeholder="Enter Your Email Address"
          className="w-full px-4 py-1 border border-orange-400 rounded-md focus:outline-none focus:border-orange-600"
        />
        {errorObj?.email?.map((item: any, i: any) => (
          <p key={i} className='text-red-600 text-sm'>{item}</p>
        ))}
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          name='phone'
          type="number"
          placeholder="Enter Your Phone Number"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full px-4 py-1 border border-orange-400 rounded-md focus:outline-none focus:border-orange-600"
        />
        {errorObj?.phone?.map((item: any, i: any) => (
          <p key={i} className='text-red-600 text-sm'>{item}</p>
        ))}
        <div className="pt-4 pb-2">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-sm">PROMO CODE</span>
            <span className="font-bold  md:text-xl">FLAT45OFF</span>
          </div>
         
        </div>

       
        <div className='w-full mx-auto flex items-center justify-center'>
        <CustomCaptcha setIsVerified={setIsVerified}  />
        </div>

        <button
          onClick={handleSubmit}
          disabled={pending}
          className="w-full text-xl bg-orange-500 text-white  justify-center items-center py-5 rounded rounded-bl-3xl rounded-br-3xl mt-8 font-semibold hover:bg-orange-600 transition ease-in duration-200 delay-200"
        >
          {pending ? (
            <>
              <Loader2 className="animate-spin mr-2 h-5 w-5" /> <p>Loading...</p>
            </>
          ) : (
            "Request a Free Quote"
          )}
          <p className='text-xs pt-1'>Fast and Reliable Support !</p>
        </button>
      </form>
    </div>
    
  );
};

export default DiscountForm;

