'use client'

import { useEffect, useState } from 'react'
import { Mail, MessageSquare, Phone } from 'lucide-react'
import { AiFillMessage } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { MdEmail,MdMessage  } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from 'next/link'

export function FloatingContact() {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)


  // useEffect(() => {
  //   // Check if the user has already accepted cookies
  //   const hasAcceptedCookies = localStorage.getItem("customCookies");
  //   if (!hasAcceptedCookies) {
  //     setIsDialogOpen(true); // Open the dialog if cookies have not been accepted
  //   }
  // }, []);

  const handleItemHover = (item: string) => {
    setActiveItem(item)
  }

  const handleItemLeave = () => {
    setActiveItem(null)
  }

  const tawkToClick = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    }
  };

  return (
    <div className="fixed left-2 top-1/2  flex flex-col gap-4 z-50 lg:scale-90 scale-75">
      <div 
        className={`flex items-center transition-all duration-300 ease-in-out ${activeItem === 'whatsapp' ? 'scale-105' : ''}`}
        onMouseEnter={() => handleItemHover('whatsapp')}
        onMouseLeave={handleItemLeave}
      >
        <Link
          href="https://wa.me/+447451271188?text=Hello Edu Researchers Team, I need Education Assistance. Could you help me complete my task on time?"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center dark:bg-white bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          <IoLogoWhatsapp className="w-7 h-7 text-white dark:text-zinc-900"/>
          {/* <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-[#25D366]"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg> */}
        </Link>
        <span className={`dark:bg-white bg-gray-900 text-white dark:text-zinc-900 py-2 w-32 text-center text-sm rounded-full font-semibold shadow-lg absolute left-full mr-2 transition-all duration-300 ease-in-out ${activeItem === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          WhatsApp Us
        </span>
      </div>

      <div 
        className={`flex items-center transition-all duration-300 ease-in-out ${activeItem === 'phone' ? 'scale-105' : ''}`}
        onMouseEnter={() => handleItemHover('phone')}
        onMouseLeave={handleItemLeave}
      >
        <Link 
          href="tel:+447451271188" 
          className="w-12 h-12 flex items-center justify-center dark:bg-white bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          <IoCall className="w-6 h-6 text-white dark:text-zinc-900" />
        </Link>
        <span className={`dark:bg-white bg-gray-900 text-white dark:text-zinc-900 py-2 w-32 text-center text-sm rounded-full font-semibold shadow-lg absolute left-full mr-2 transition-all duration-300 ease-in-out ${activeItem === 'phone' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          Call Us
        </span>
      </div>

      <div 
        className={`hidden md:flex items-center transition-all duration-300 ease-in-out ${activeItem === 'tawkto' ? 'scale-105' : ''}`}
        onMouseEnter={() => handleItemHover('tawkto')}
        onMouseLeave={handleItemLeave}
      >
        <button
        onClick={tawkToClick} 
          className="w-12 h-12 flex items-center justify-center dark:bg-white bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          <AiFillMessage className="w-6 h-6 text-white dark:text-zinc-900" />
        </button>
        <span className={`dark:bg-white bg-gray-900 text-white dark:text-zinc-900 py-2 w-36 text-center text-sm rounded-full font-semibold shadow-lg absolute left-full mr-2 transition-all duration-300 ease-in-out ${activeItem === 'tawkto' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          Chat With Expert
        </span>
      </div>

      <div 
        className={`md:hidden flex items-center transition-all duration-300 ease-in-out ${activeItem === 'sms' ? 'scale-105' : ''}`}
        onMouseEnter={() => handleItemHover('sms')}
        onMouseLeave={handleItemLeave}
      >
        <Link 
          href="sms:+447451271188?body=Hello Edu Researchers Team, I need Education Assistance. Could you help me complete my task on time?" 
          className="w-12 h-12 flex items-center justify-center dark:bg-white bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          <MdMessage className="w-6 h-6 text-white dark:text-zinc-900" />
        </Link>
        <span className={`dark:bg-white bg-gray-900 text-white dark:text-zinc-900 py-2 w-36 text-center text-sm rounded-full font-semibold shadow-lg absolute left-full mr-2 transition-all duration-300 ease-in-out ${activeItem === 'sms' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          Message Us
        </span>
      </div>



      <div 
        className={`hidden md:flex items-center transition-all duration-300 ease-in-out ${activeItem === 'email' ? 'scale-105' : ''}`}
        onMouseEnter={() => handleItemHover('email')}
        onMouseLeave={handleItemLeave}
      >
        <Link 
          href="mailto:support@takingmyclassesonline.com" 
          className="w-12 h-12 flex items-center justify-center dark:bg-white bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          <MdEmail className="w-6 h-6 text-white dark:text-zinc-900" />
        </Link>
        <span className={`dark:bg-white bg-gray-900 text-white dark:text-zinc-900 py-2 w-32 text-center text-sm rounded-full font-semibold shadow-lg absolute left-full mr-2 transition-all duration-300 ease-in-out ${activeItem === 'email' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          Email Us
        </span>
      </div>

      {/* <CookieDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} /> */}
    </div>
  )
}

export default FloatingContact