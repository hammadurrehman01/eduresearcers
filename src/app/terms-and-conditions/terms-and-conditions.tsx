'use client';
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, FileText, ShoppingCartIcon } from "lucide-react"
import Link from "next/link"
import { IoChatbubbleEllipses } from "react-icons/io5"

export default function TermsAndConditions() {
  const tawkToClick = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-zinc-900 text-primary-foreground">
        <div className="absolute inset-0 opacity-10" />
        <div className="container mx-auto relative px-4 py-16 sm:py-24 lg:py-32">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Terms & Conditions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-primary-foreground/80">Thank you for visiting Edu Researchers and choosing us for your academic support. Before using our services, please review these terms carefully. By placing an order, you confirm that you have read, understood, and agreed to the terms stated below.</p>

          <div className='md:flex-row md:justify-center gap-3 flex flex-col justify-center items-center scale-[.85] md:scale-100 mt-8'>
                <Link href={"/Order?coupon=FLAT45OFF"}
                  className='flex items-center justify-center py-[13px] px-6 rounded-lg bg-orange-500 text-white  md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 '
                 
                >
                  <ShoppingCartIcon className='mr-1' /> Place Your Order
                </Link>

                <button onClick={tawkToClick} className='bg-zinc-100  text-zinc-900 flex font-medium items-center py-[13px] px-6 rounded-lg md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200  gap-2'>
                  <IoChatbubbleEllipses className='w-6 h-6' /> Discuss With Experts
                </button>


              </div>
        </div>
      </div>

      <div className="container px-4 py-10">
        <div className="flex flex-col gap-6 pl-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Terms and Conditions</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[250px_1fr] lg:gap-12">
            {/* Sticky Table of Contents */}
            <div className="hidden lg:block ">
              <div className="sticky top-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5" />
                  <h2 className="font-semibold">On this page</h2>
                </div>
                <ScrollArea className="h-[calc(100vh-200px)]">
                <nav className="flex flex-col gap-2">
  <a href="#introduction" className="text-sm text-muted-foreground hover:text-foreground">
    1. Definitions
  </a>
  <a href="#services" className="text-sm text-muted-foreground hover:text-foreground">
    2. Use of Our Services
  </a>
  <a href="#delivery" className="text-sm text-muted-foreground hover:text-foreground">
    3. Order Delivery Policy
  </a>
  <a href="#plagiarism" className="text-sm text-muted-foreground hover:text-foreground">
    4. No Plagiarism Policy
  </a>
  <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground">
    5. Privacy & Data Protection
  </a>
  <a href="#warranties" className="text-sm text-muted-foreground hover:text-foreground">
    6. Client Responsibilities
  </a>
  <a href="#modifications" className="text-sm text-muted-foreground hover:text-foreground">
    7. Modifications to Terms
  </a>
  <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
    8. Contact Information
  </a>
</nav>

                </ScrollArea>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-3xl">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        
        <section id="introduction" className="scroll-mt-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">1. Definitions</h2>
          <p className="mt-4">
            These Terms & Conditions outline the rules and regulations for using Edu Researchers' services.
            By accessing our platform, you agree to comply with these terms.
          </p>
        </section>

        <section id="services" className="mt-10 scroll-mt-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">2. Use of Our Services</h2>
          <p className="mt-4">
            Edu Researchers provides professional academic assistance through expert writers, editors, and proofreaders.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Orders are confirmed once payment is received.</li>
            <li>Completed work is delivered via email without extra charges.</li>
            <li>Clients can file complaints within seven days if expectations are not met.</li>
            <li>Unauthorized sharing or reselling of our work is strictly prohibited.</li>
          </ul>
        </section>

        <section id="delivery" className="mt-10 scroll-mt-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">3. Order Delivery Policy</h2>
          <p className="mt-4">
            We ensure timely delivery of all academic work. In case of delays, customers may request a full refund.
          </p>
        </section>

        <section id="plagiarism" className="mt-10 scroll-mt-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">4. No Plagiarism Policy</h2>
          <p className="mt-4">
            Clients must agree that all work provided by Edu Researchers is for reference and research purposes only.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Delivered content must not be submitted as original work.</li>
            <li>Reselling or redistributing the material is prohibited.</li>
            <li>Edu Researchers reserves the right to cancel orders if plagiarism is detected.</li>
          </ul>
        </section>

        <section id="privacy" className="mt-10 scroll-mt-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">5. Privacy & Data Protection</h2>
          <p className="mt-4">
            Your privacy is our priority. We do not share your personal information unless required by law.
            Read our full <Link href="/privacy-policy">Privacy Policy</Link> for more details.
          </p>
        </section>

        <section id="warranties" className="mt-10 scroll-mt-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">6. Client Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Clients must properly cite any information taken from our work.</li>
            <li>All content is meant for learning and reference purposes only.</li>
            <li>Clients cannot distribute or resell our work in any form.</li>
            <li>Customers agree to receive updates on promotions (opt-out available).</li>
          </ul>
        </section>

        <section id="modifications" className="mt-10 scroll-mt-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">7. Modifications to Terms</h2>
          <p className="mt-4">
            Edu Researchers reserves the right to update these Terms & Conditions at any time.
            Clients are encouraged to review this page regularly.
          </p>
        </section>

        <section id="contact" className="mt-10 scroll-mt-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">8. Contact Information</h2>
          <p className="mt-4">
            If you have any questions regarding these terms, feel free to reach out to us at:
          </p>
          <div className="mt-4">
            <Button variant="outline">
              <Link href="mailto:support@eduresearchers.com">support@eduresearchers.com</Link>
            </Button>
          </div>
        </section>

      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  )
}

