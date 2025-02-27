'use client';
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, FileText, ShoppingCartIcon } from "lucide-react"
import Link from "next/link"
import { IoChatbubbleEllipses } from "react-icons/io5"

export default function CancellationPolicy() {
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
            Order Cancellation Policy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-primary-foreground/80">
            Edu Researchers reserves the right to cancel an order under specific circumstances. While we strive to fulfill every order regardless of complexity and deadline, certain conditions may lead to order rejection or cancellation.
          </p>

          <div className="md:flex-row md:justify-center gap-3 flex flex-col justify-center items-center scale-[.85] md:scale-100 mt-8">
            <Link href={"/Order?coupon=FLAT45OFF"}
              className="flex items-center justify-center py-[13px] px-6 rounded-lg bg-orange-500 text-white md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200"
            >
              <ShoppingCartIcon className="mr-1" /> Place Your Order
            </Link>

            <button onClick={tawkToClick} className="bg-zinc-100 text-zinc-900 flex font-medium items-center py-[13px] px-6 rounded-lg md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 gap-2">
              <IoChatbubbleEllipses className="w-6 h-6" /> Discuss With Experts
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
            <span>Order Cancellation Policy</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[250px_1fr] lg:gap-12">
            {/* Sticky Table of Contents */}
            <div className="hidden lg:block">
              <div className="sticky top-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5" />
                  <h2 className="font-semibold">On this page</h2>
                </div>
                <ScrollArea className="h-[calc(100vh-200px)]">
                  <nav className="flex flex-col gap-2">
                    <a href="#overview" className="text-sm text-muted-foreground hover:text-foreground">
                      1. Overview
                    </a>
                    <a href="#conditions" className="text-sm text-muted-foreground hover:text-foreground">
                      2. Cancellation Conditions
                    </a>
                    <a href="#exceptions" className="text-sm text-muted-foreground hover:text-foreground">
                      3. Exceptions & Refunds
                    </a>
                    <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                      4. Contact Information
                    </a>
                  </nav>
                </ScrollArea>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-3xl">
              <div className="prose prose-gray dark:prose-invert max-w-none">

                <section id="overview" className="scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">1. Overview</h2>
                  <p className="mt-4">
                    Edu Researchers reserves the right to cancel any order under severe circumstances. While we take pride in handling even the most complex tasks, certain unavoidable situations may lead to order rejection or cancellation.
                  </p>
                </section>

                <section id="conditions" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">2. Cancellation Conditions</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>reviews-Client-Initiated Cancellation:reviews- If a client changes their mind and cancels the order, they will be eligible for a reviews-50% refundreviews- only.</li>
                    <li>reviews-Early Cancellation Compensation:reviews- If an order is canceled within reviews-2 to 4 hoursreviews-, and the client wishes to use the amount for a different order, reviews-25% of the amount will be deducted as service charges.reviews-</li>
                    <li>reviews-Writer Unavailability:reviews- If we fail to find a suitable expert for the requested subject, the order may be canceled.</li>
                    <li>reviews-Violation of Terms:reviews- If the client breaches the terms and conditions, reviews-no refundreviews- will be granted.</li>
                    <li>reviews-Delayed Fulfillment:reviews- If we are unable to deliver the order within reviews-24 to 48 hoursreviews- beyond the agreed-upon deadline due to complexity, the order may be canceled.</li>
                    <li>reviews-Unexpected Circumstances:reviews- If an unforeseen event occurs on our end that prevents completion, the order may be canceled.</li>
                  </ul>
                </section>

                <section id="exceptions" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">3. Exceptions & Refunds</h2>
                  <p className="mt-4">
                    In the event that an order is revoked after approval due to unforeseen circumstances reviews-(excluding contract violations), a full refund will be issued.reviews-
                  </p>
                </section>

                <section id="contact" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">4. Contact Information</h2>
                  <p className="mt-4">
                    For any cancellation requests, please contact us at:
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
