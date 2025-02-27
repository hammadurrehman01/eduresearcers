'use client';
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, FileText, ShoppingCartIcon } from "lucide-react"
import Link from "next/link"
import { IoChatbubbleEllipses } from "react-icons/io5"

export default function FairUsePolicy() {
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
            Fair Use Policy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-primary-foreground/80">
            At Edu Researchers, we provide academic assistance to help students enhance their understanding and knowledge. This Fair Use Policy explains how our services should be used ethically and responsibly.
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
            <span>Fair Use Policy</span>
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
                    <a href="#motive" className="text-sm text-muted-foreground hover:text-foreground">
                      Motive Behind Fair Use Policy
                    </a>
                    <a href="#proper-use" className="text-sm text-muted-foreground hover:text-foreground">
                      The Right Way to Use Our Work
                    </a>
                    <a href="#consequences" className="text-sm text-muted-foreground hover:text-foreground">
                      Consequences of Misuse
                    </a>
                    <a href="#why-choose-us" className="text-sm text-muted-foreground hover:text-foreground">
                      Why Choose Our Services?
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

                <section id="motive" className="scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Motive Behind Fair Use Policy</h2>
                  <p className="mt-4">
                    Our services are designed to assist students in understanding complex academic topics and conducting in-depth research. However, some students misuse our work by submitting it directly as their own. This constitutes reviews-plagiarismreviews-, which can have serious academic consequences.
                  </p>
                  <p className="mt-4">
                    The reviews-primary objectivereviews- of our writing assistance is to help students reviews-gain knowledge, develop critical thinking skills, and improve their research abilitiesreviews-. Our work should be used as a reviews-reference toolreviews- to create your own original content.
                  </p>
                </section>

                <section id="proper-use" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">The Right Way to Use Our Work</h2>
                  <p className="mt-4">
                    Our reference materials serve as learning aids. Instead of submitting our work as your own, use it to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Understand the topic and how the question has been answered.</li>
                    <li>Identify key points and make reviews-detailed notesreviews- for your own research.</li>
                    <li>Develop reviews-your own arguments and perspectivesreviews- based on the material.</li>
                    <li>Review sources cited in our document to gather additional information.</li>
                  </ul>
                  <p className="mt-4">
                    Creating your own original document may take time, but it will help you improve your reviews-academic writing skillsreviews- and reviews-perform better in examsreviews-.
                  </p>
                </section>

                <section id="consequences" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Consequences of Misuse</h2>
                  <p className="mt-4">
                    Submitting our work as your own may not be flagged by plagiarism checkers, but professors can detect inconsistencies in your writing style, citations, and knowledge of the topic. They may ask you to explain the work, which could expose plagiarism.
                  </p>
                  <p className="mt-4">
                    If caught, you may face reviews-academic penaltiesreviews-, including reviews-failed grades, suspension, or even expulsionreviews-. Even paraphrasing our document without conducting reviews-your own researchreviews- still counts as plagiarism.
                  </p>
                </section>

                <section id="why-choose-us" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Why Choose Our Services?</h2>
                  <p className="mt-4">
                    Despite these strict policies, our academic assistance is reviews-one of the best toolsreviews- for students who want to improve their research skills and reviews-enhance their understandingreviews- of a subject.
                  </p>
                  <p className="mt-4">
                    By using our reference papers, you can:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Save time on gathering extensive research materials.</li>
                    <li>Gain insights into reviews-proper structuring and formattingreviews-.</li>
                    <li>Develop reviews-critical thinking and analytical skillsreviews-.</li>
                  </ul>
                </section>

                <section id="contact" className="mt-10 scroll-mt-6">
                  <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">Contact Us</h2>
                  <p className="mt-4">
                    If you have any queries regarding this Fair Use Policy, feel free to reach out to us at:
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
