'use client';
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, FileText, ShoppingCartIcon } from "lucide-react"
import Link from "next/link"
import { IoChatbubbleEllipses } from "react-icons/io5"

export default function RefundPolicy() {
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
            Refund Policy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-primary-foreground/80">
            Edu Researchers aims to provide fair and transparent refund policies to ensure a smooth experience for our customers. If you believe your order does not meet the expected quality, you may request a refund under specific conditions outlined below.
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
            <span>Refund Policy</span>
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
                    <a href="#eligibility" className="text-sm text-muted-foreground hover:text-foreground">
                      2. Refund Eligibility
                    </a>
                    <a href="#conditions" className="text-sm text-muted-foreground hover:text-foreground">
                      3. Refund Conditions
                    </a>
                    <a href="#exceptions" className="text-sm text-muted-foreground hover:text-foreground">
                      4. Exceptions
                    </a>
                    <a href="#process" className="text-sm text-muted-foreground hover:text-foreground">
                      5. Refund Process
                    </a>
                    <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                      6. Contact Information
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
                    At Edu Researchers, we prioritize customer satisfaction and strive to deliver high-quality academic assistance. However, if you feel your order does not meet expectations, we offer refund options under specific circumstances.
                  </p>
                </section>

                <section id="eligibility" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">2. Refund Eligibility</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Refunds are only processed if the issue is reported within 30 days of delivery.</li>
                    <li>Clients must request at least 7 revisions before becoming eligible for a refund.</li>
                    <li>Refunds are not available for urgent orders (deadlines under 48 hours).</li>
                  </ul>
                </section>

                <section id="conditions" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">3. Refund Conditions</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Double charges will be refunded immediately.</li>
                    <li>Clients are eligible for up to 50% refund if:
                      <ul className="list-disc pl-6 space-y-2">
                        <li>The work does not meet quality standards.</li>
                        <li>Plagiarism is detected with valid proof.</li>
                        <li>Customer service fails to respond within 48 hours.</li>
                        <li>After 7-10 revisions, work remains unsatisfactory.</li>
                      </ul>
                    </li>
                    <li>No refund is granted if incorrect instructions were provided.</li>
                  </ul>
                </section>

                <section id="exceptions" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">4. Exceptions</h2>
                  <p className="mt-4">
                    Refunds are not applicable for online exams or test-taking services once access is granted.
                  </p>
                </section>

                <section id="process" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">5. Refund Process</h2>
                  <p className="mt-4">
                    Refunds are processed within two weeks after verifying evidence. Full refunds equate to 90% of the amount (10% deduction for transaction costs).
                  </p>
                </section>

                <section id="contact" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">6. Contact Information</h2>
                  <p className="mt-4">
                    For refund requests, contact our team at:
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
