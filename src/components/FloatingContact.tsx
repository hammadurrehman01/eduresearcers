"use client";

import { useEffect, useState } from "react";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { AiFillMessage } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdMessage } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

export function FloatingContact() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // useEffect(() => {
  //   // Check if the user has already accepted cookies
  //   const hasAcceptedCookies = localStorage.getItem("customCookies");
  //   if (!hasAcceptedCookies) {
  //     setIsDialogOpen(true); // Open the dialog if cookies have not been accepted
  //   }
  // }, []);

  const handleItemHover = (item: string) => {
    setActiveItem(item);
  };

  const handleItemLeave = () => {
    setActiveItem(null);
  };

  const tawkToClick = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    }
  };

  return (
    <div className="fixed left-2 top-1/2  flex flex-col gap-4 z-50 lg:scale-90 scale-75">
      <div
        className={`flex items-center transition-all duration-300 ease-in-out ${
          activeItem === "whatsapp" ? "scale-105" : ""
        }`}
      >
        <Link
          href="https://wa.me/+447451271188?text=Hello Edu Researchers Team, I need Education Assistance. Could you help me complete my task on time?"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center dark:bg-white bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          <IoLogoWhatsapp
            onMouseEnter={() => handleItemHover("whatsapp")}
            onMouseLeave={handleItemLeave}
            className="w-7 h-7 text-white dark:text-zinc-900"
          />
        </Link>
        <span
          className={`dark:bg-white bg-gray-900 text-white dark:text-zinc-900 py-2 w-32 text-center text-sm rounded-full font-semibold shadow-lg absolute left-full mr-2 transition-all duration-300 ease-in-out ${
            activeItem === "whatsapp"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4"
          }`}
        >
          WhatsApp Us
        </span>
      </div>

      <div
        className={`flex items-center transition-all duration-300 ease-in-out ${
          activeItem === "phone" ? "scale-105" : ""
        }`}
      >
        <Link
          href="tel:+447451271188"
          className="w-12 h-12 flex items-center justify-center dark:bg-white bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          <IoCall
            onMouseEnter={() => handleItemHover("phone")}
            onMouseLeave={handleItemLeave}
            className="w-6 h-6 text-white dark:text-zinc-900"
          />
        </Link>
        <span
          className={`dark:bg-white bg-gray-900 text-white dark:text-zinc-900 py-2 w-32 text-center text-sm rounded-full font-semibold shadow-lg absolute left-full mr-2 transition-all duration-300 ease-in-out ${
            activeItem === "phone"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4"
          }`}
        >
          Call Us
        </span>
      </div>

      <div
        className={`hidden md:flex items-center transition-all duration-300 ease-in-out ${
          activeItem === "tawkto" ? "scale-105" : ""
        }`}
      >
        <button
          onClick={tawkToClick}
          className="w-12 h-12 flex items-center justify-center dark:bg-white bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          <AiFillMessage
            onMouseEnter={() => handleItemHover("tawkto")}
            onMouseLeave={handleItemLeave}
            className="w-6 h-6 text-white dark:text-zinc-900"
          />
        </button>
        <span
          className={`dark:bg-white bg-gray-900 text-white dark:text-zinc-900 py-2 w-36 text-center text-sm rounded-full font-semibold shadow-lg absolute left-full mr-2 transition-all duration-300 ease-in-out ${
            activeItem === "tawkto"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4"
          }`}
        >
          Chat With Expert
        </span>
      </div>

      <div
        className={`md:hidden flex items-center transition-all duration-300 ease-in-out ${
          activeItem === "sms" ? "scale-105" : ""
        }`}
      >
        <Link
          href="sms:+447451271188?body=Hello Edu Researchers Team, I need Education Assistance. Could you help me complete my task on time?"
          className="w-12 h-12 flex items-center justify-center dark:bg-white bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          <MdMessage
            onMouseEnter={() => handleItemHover("sms")}
            onMouseLeave={handleItemLeave}
            className="w-6 h-6 text-white dark:text-zinc-900"
          />
        </Link>
        <span
          className={`dark:bg-white bg-gray-900 text-white dark:text-zinc-900 py-2 w-36 text-center text-sm rounded-full font-semibold shadow-lg absolute left-full mr-2 transition-all duration-300 ease-in-out ${
            activeItem === "sms"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4"
          }`}
        >
          Message Us
        </span>
      </div>

      <div
        className={`hidden md:flex items-center transition-all duration-300 ease-in-out ${
          activeItem === "email" ? "scale-105" : ""
        }`}
      >
        <Link
          href="mailto:support@eduresearchers.com"
          className="w-12 h-12 flex items-center justify-center dark:bg-white bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          <MdEmail
            onMouseEnter={() => handleItemHover("email")}
            onMouseLeave={handleItemLeave}
            className="w-6 h-6 text-white dark:text-zinc-900"
          />
        </Link>
        <span
          className={`dark:bg-white bg-gray-900 text-white dark:text-zinc-900 py-2 w-32 text-center text-sm rounded-full font-semibold shadow-lg absolute left-full mr-2 transition-all duration-300 ease-in-out ${
            activeItem === "email"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4"
          }`}
        >
          Email Us
        </span>
      </div>

      {/* <CookieDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} /> */}
    </div>
  );
}

export default FloatingContact;
