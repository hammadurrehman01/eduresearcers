"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { ModeToggle } from '@/components/ui/ThemeSwitch';
import { useParams, usePathname, useRouter } from 'next/navigation';


const Navbar = () => {
  const pathname = usePathname();
  const params = useParams();
  const [hash,setHash] = useState(global?.window &&  window.location.hash)
  useEffect(()=>{
    setHash(window.location.hash)
  },[params,pathname])

  // Function to check if the link is active
  const isActiveLink  = (path:string) => path ===  pathname  + hash;

  const links = [
    { href: '/#why-us', label: 'Why Us?' },
    { href: '/#service', label: 'Our Services' },
    { href: '/#howitworks', label: 'How it Works' },
    { href: '/#expertwriters', label: 'Top Experts' },
    { href: '/#review', label: 'Reviews' },
    { href: '/#faq', label: 'FAQs' },
    { href: '/Order?coupon=FLAT45OFF', label: 'Order Now' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background  shadow">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 xl:px-24">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image className='dark:block hidden' src="/edu-logo-darkmode.png" width={200} height={200} alt="edu" />
          <Image className='dark:hidden block' src="/edu-logo-light.png" width={200} height={200} alt="edu" />
        </Link>

        {/* Rating Section */}
        <div className="flex flex-col items-center">
          <Image loading="eager" src="/imgs/rating.webp" width={100} height={100} alt="reviews" />
          <div className="text-center text-muted-foreground text-sm">"Excellent" 4.9/5</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                isActiveLink(link.href) ? 'text-orange-500 font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
          {/* <ModeToggle /> */}
        </nav>

        {/* Mobile Navigation with Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs bg-white dark:bg-muted p-6">
            <div className="grid gap-6">
              {/* Logo Section inside Mobile Menu */}
              <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <Image src="/imgs/edu-logo.png" width={32} height={32} alt="edu" />
                <span className="text-lg font-bold">{process.env.NEXT_PUBLIC_NAME}</span>
              </Link>
              {/* Mobile Navigation */}
              <nav className="grid gap-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${
                      isActiveLink(link.href)
                        ? 'text-orange-500 font-bold'
                        : 'text-muted-foreground hover:text-foreground'
                    } text-sm font-medium`}
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* <ModeToggle /> */}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;


