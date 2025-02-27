'use client';
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, FileText, ShoppingCartIcon } from "lucide-react"
import Link from "next/link"
import { IoChatbubbleEllipses } from "react-icons/io5"

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-primary-foreground/80">
            At Edu Researchers, we prioritize the privacy of our customers and are committed to safeguarding any personal data shared with us. This policy outlines how we collect, use, and protect your information.
          </p>

      
          <div className="md:flex-row md:justify-center gap-3 flex flex-col justify-center items-center scale-[.85] md:scale-100 mt-8">
          <Link href={"/Order?coupon=FLAT45OFF"}
              className="flex items-center justify-center py-[13px] px-6 rounded-lg bg-orange-500 text-white md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200"
            >
              <ShoppingCartIcon className="mr-1" /> Place Your Order
            </Link>

            <button onClick={tawkToClick} className="bg-zinc-100 text-zinc-900 flex font-medium items-center py-[13px] px-6 rounded-lg md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 gap-2">
              <IoChatbubbleEllipses className="w-6 h-6" /> Contact Support
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
            <span>Privacy Policy</span>
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
                    <a href="#data-collection" className="text-sm text-muted-foreground hover:text-foreground">
                      Data We Collect
                    </a>
                    <a href="#legal-bases" className="text-sm text-muted-foreground hover:text-foreground">
                      Legal Basis for Processing
                    </a>
                    <a href="#data-retention" className="text-sm text-muted-foreground hover:text-foreground">
                      Data Retention
                    </a>
                    <a href="#data-security" className="text-sm text-muted-foreground hover:text-foreground">
                      Data Security
                    </a>
                    <a href="#user-rights" className="text-sm text-muted-foreground hover:text-foreground">
                      Your Rights
                    </a>
                    <a href="#cookies" className="text-sm text-muted-foreground hover:text-foreground">
                      Cookies & Tracking
                    </a>
                    <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                      Contact Us
                    </a>
                  </nav>
                </ScrollArea>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-3xl">
              <div className="prose prose-gray dark:prose-invert max-w-none">

                <section id="data-collection" className="scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Data We Collect</h2>
                  <p className="mt-4">
                    When you visit our website, we may collect both Personally Identifiable Information (PII) and Non-Personally Identifiable Information (Non-PII).
                  </p>
                  <h3 className="text-lg font-semibold mt-4">Personally Identifiable Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name</li>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email Address</li>
                    <li>Country</li>
                  </ul>
                  <p className="mt-4">
                    Payment details are reviews-not storedreviews- by Edu Researchers. All transactions are securely processed through third-party payment gateways like PayPal.
                  </p>
                </section>

                <section id="legal-bases" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Legal Basis for Processing</h2>
                  <p className="mt-4">
                    We comply with reviews-Article 6, Recital 40 of the GDPRreviews-, meaning that we will only process your data after obtaining your reviews-explicit consentreviews- or under a reviews-legal obligationreviews-.
                  </p>
                </section>

                <section id="data-retention" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Data Retention</h2>
                  <p className="mt-4">
                    We retain your personal data only as long as necessary for service delivery, compliance with legal requirements, or gathering feedback.
                  </p>
                </section>

                <section id="data-security" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Data Security</h2>
                  <p className="mt-4">
                    Your information is protected with reviews-SSL encryptionreviews- and reviews-firewall securityreviews- to prevent unauthorized access.
                  </p>
                </section>

                <section id="user-rights" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Your Rights</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Right to be informed (Article 14)</li>
                    <li>Right to access (Article 15)</li>
                    <li>Right to rectification (Article 16)</li>
                    <li>Right to erasure (Article 17)</li>
                    <li>Right to restrict processing (Article 18)</li>
                    <li>Right to data portability (Article 19)</li>
                    <li>Right to object (Article 21)</li>
                    <li>Right to lodge a complaint (Article 77)</li>
                  </ul>
                </section>

                <section id="cookies" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Cookies & Tracking</h2>
                  <p className="mt-4">
                    Cookies are used to improve your browsing experience. You may manage cookie preferences through our reviews-Cookie Consent Toolreviews-.
                  </p>
                </section>

                <section id="contact" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Contact Us</h2>
                  <p className="mt-4">
                    If you have any concerns regarding our privacy policy, please contact us at:
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
