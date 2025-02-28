"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Star, Check } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Review {
    id: string
    rating: number
    date: string
    text: string
}

interface Writer {
    id: string
    name: string
    title: string
    qualification: string
    mainreview: string
    image: string
    focusAreas: string[]
    lovesToWrite: string[]
    stats: {
        satisfaction: number
        onTime: number
        delivery: string
    }
    reviews: Review[]
}

const writers: Writer[] = [
    {
        id: "TAP-223248",
        name: "Walter G",
        title: "Psychologist",
        qualification: "MS",
        image: "/imgs/writer-1.webp",
        focusAreas: ["Psychology", "Sociology", "Healthcare"],
        lovesToWrite: ["Dissertation chapter", "case study"],
        stats: {
            satisfaction: 100,
            onTime: 99,
            delivery: "4h+",
        },
        mainreview: "I recently purchased an English essay from Walter G, and I was thoroughly impressed! His writing was both captivating and concise, presenting complex ideas with remarkable clarity. I'm truly grateful for his exceptional work!",
        reviews: [
            {
                id: "1",
                rating: 5,
                date: "5 Feb 2025",
                text: "Walter G's expertise in psychology was evident in the dissertation chapter he wrote for me. His deep analysis of cognitive behavioral therapy was well-structured and thoroughly researched. Highly satisfied with the quality of work!"
            },
            {
                id: "2",
                rating: 5,
                date: "20 Jan 2025",
                text: "The case study on social behavior patterns was outstanding! Walter G demonstrated a strong grasp of sociology concepts and presented the findings in a clear, engaging manner. Definitely recommended!"
            },
            {
                id: "3",
                rating: 5,
                date: "10 Jan 2025",
                text: "I needed a well-researched paper on healthcare policies, and Walter G delivered an exceptional piece. The arguments were well-supported with data, and the writing was clear and professional. Exceeded my expectations!"
            },
            {
                id: "4",
                rating: 5,
                date: "18 Dec 2024",
                text: "Walter G did an amazing job on my dissertation chapter related to mental health. His analysis was in-depth, and the references were perfectly cited. I truly appreciate the effort and expertise he put into this work."
            },
            {
                id: "5",
                rating: 5,
                date: "3 Dec 2024",
                text: "The sociology case study I ordered was well-researched and insightful. Walter G's ability to analyze social structures and trends made the paper incredibly strong. Delivered before the deadline, too!"
            },
            {
                id: "6",
                rating: 5,
                date: "15 Nov 2024",
                text: "Walter G's research on healthcare ethics was top-notch. His ability to break down complex ethical dilemmas into clear and well-argued points made my dissertation chapter truly stand out. Would definitely work with him again!"
            }
        ]
    },
    {
        id: "TAP-223249",
        name: "Morgan M",
        title: "Sales",
        qualification: "PhD",
        image: "/imgs/writer-2.webp",
        focusAreas: ["Economics", "Business Studies", "Marketing"],
        lovesToWrite: ["Dissertation chapter", "case study"],
        stats: {
            satisfaction: 99,
            onTime: 98,
            delivery: "48h+",
        },
        mainreview: "Morgan M is an exceptional writer! His expertise in economics, business studies, and marketing is truly remarkable. I've worked with him on multiple projects, and he consistently delivers high-quality work that exceeds my expectations. Highly recommended!",
        reviews: [
            {
                id: "1",
                rating: 5,
                date: "12 Sep 2024",
                text: "Morgan's grasp of economic theories is impressive! He delivered a detailed analysis of market structures with solid references. The report was clear, concise, and right on time!",
            },
            {
                id: "2",
                rating: 5,
                date: "3 Aug 2024",
                text: "Morgan helped me with a business case study, and his insights into organizational behavior were spot on. The paper was well-organized and exceeded my expectations!",
            },
            {
                id: "3",
                rating: 5,
                date: "25 Jul 2024",
                text: "Excellent marketing research report! Morgan's understanding of consumer behavior and market segmentation made my project shine. Highly recommend his services!",
            },
            {
                id: "4",
                rating: 5,
                date: "5 Jun 2024",
                text: "Morgan delivered an outstanding economic impact assessment within the deadline. The data analysis was thorough, and the presentation was flawless!",
            },
            {
                id: "5",
                rating: 5,
                date: "15 Oct 2024",
                text: "Very professional and timely delivery. The writing style was exactly what I needed for my dissertation chapter. Will definitely work with Walter G again.",
            },
            {
                id: "6",
                rating: 5,
                date: "1 Oct 2024",
                text: "Morgan crafted a brilliant marketing plan for my project. His recommendations were practical and backed by solid research. Will definitely request his help again!",
            },
        ],
    },
    {
        id: "TAP-223250",
        name: "John W",
        title: "Researcher",
        qualification: "PhD",
        image: "/imgs/writer-3.webp",
        focusAreas: ["Education", "Philosophy", "History"],
        lovesToWrite: ["Essay", "Assignment", "Coursework"],
        stats: {
            satisfaction: 100,
            onTime: 99,
            delivery: "4h+",
        },
        mainreview: "John W is an exceptional writer! His expertise in education, philosophy, and history is truly remarkable. I've worked with him on multiple projects, and he consistently delivers high-quality work that exceeds my expectations. Highly recommended!",
        reviews: [
            {
                id: "1",
                rating: 5,
                date: "1 Feb 2025",
                text: "John W provided an insightful essay on modern educational methodologies. His research was well-grounded, and the arguments were structured with clarity. The references were spot-on, making my paper highly credible. Definitely a top-tier writer!",
            },
            {
                id: "2",
                rating: 5,
                date: "20 Jan 2025",
                text: "I needed an in-depth analysis of existentialism, and John W exceeded my expectations! His ability to break down complex philosophical theories into clear, digestible arguments was impressive. Highly recommended!",
            },
            {
                id: "3",
                rating: 5,
                date: "5 Jan 2025",
                text: "John W crafted a well-researched coursework paper on the causes of World War I. His attention to historical accuracy and ability to present balanced perspectives made the paper stand out. Delivered before the deadline, too!",
            },
            {
                id: "4",
                rating: 5,
                date: "18 Dec 2024",
                text: "The research paper on inclusive education was outstanding! John W demonstrated deep knowledge of the subject and provided strong evidence-based arguments. The formatting was flawless, and it was delivered ahead of schedule",
            },
            {
                id: "5",
                rating: 5,
                date: "2 Dec 2024",
                text: "John W's essay on ethics in modern society was thought-provoking and well-argued. His ability to analyze different philosophical perspectives and present them coherently made my paper truly stand out.",
            },
            {
                id: "6",
                rating: 5,
                date: "10 Nov 2024",
                text: "The dissertation chapter on medieval European history was meticulously researched and brilliantly written. John W ensured the arguments were backed by credible sources, making the work highly authoritative. Would definitely work with him again!",
            },
        ],
    },
    {
        id: "TAP-223246",
        name: "Ammie M",
        title: "Translator",
        qualification: "PhD",
        image: "/imgs/writer-4.webp",
        focusAreas: ["Film and Theater Studies", "Classic English Literature"],
        lovesToWrite: ["Letter", "literature analysis/review"],
        stats: {
            satisfaction: 99,
            onTime: 100,
            delivery: "8h+",
        },
        mainreview: "Ammie M is an exceptional writer! Her expertise in Classic English Literature and Film and Theater Studies is truly remarkable. I've worked with her on multiple projects, and she consistently delivers high-quality work that exceeds my expectations. Highly recommended!",
        reviews: [
            {
                id: "1",
                rating: 5,
                date: "2 Feb 2025",
                text: "Ammie M's literature review on Shakespearean tragedies was exceptional! Her deep understanding of Classic English Literature was evident in the detailed analysis and critical perspectives. Highly recommended!"
            },
            {
                id: "2",
                rating: 5,
                date: "20 Jan 2025",
                text: "I needed a letter analyzing the evolution of film narratives, and Ammie M delivered beyond my expectations. Her insights into Film and Theater Studies were truly remarkable. The structure and arguments were spot on!"
            },
            {
                id: "3",
                rating: 5,
                date: "10 Jan 2025",
                text: "The literature review on Victorian-era novels was incredibly well-researched and engaging. Ammie M captured the essence of the period with precision and elegance. Will definitely work with her again!"
            },
            {
                id: "4",
                rating: 5,
                date: "5 Dec 2024",
                text: "Ammie M provided an in-depth critical analysis of a modern theater production. Her ability to deconstruct themes and character arcs was impressive. A fantastic experience working with her!"
            },
            {
                id: "5",
                rating: 5,
                date: "15 Nov 2024",
                text: "Her work on the comparative study of Romantic poets was outstanding. The analysis was nuanced and well-supported with textual evidence. Ammie M is truly an expert in Classic English Literature!"
            },
            {
                id: "6",
                rating: 5,
                date: "1 Nov 2024",
                text: "The film review letter she wrote was brilliant! Ammie M dissected the cinematography, screenplay, and direction with incredible depth. Highly appreciate her expertise in Film and Theater Studies!"
            }
        ]
    },
    {
        id: "TAP-223247",
        name: "Wayne J",
        title: "Researcher",
        qualification: "PhD",
        image: "/imgs/writer-5.webp",
        focusAreas: ["Technology", "Web", "Computer Science"],
        lovesToWrite: ["Article", "assignment", "coding"],
        stats: {
            satisfaction: 99,
            onTime: 100,
            delivery: "5h+",
        },
        mainreview: "Wayne J is an exceptional writer! His expertise in Technology, Web, and Computer Science is truly remarkable. I've worked with him on multiple projects, and he consistently delivers high-quality work that exceeds my expectations. Highly recommended!",
        reviews: [
            {
                id: "1",
                rating: 5,
                date: "2 Feb 2025",
                text: "Wayne J provided a fantastic article on the latest advancements in AI technology. His analysis was in-depth, well-structured, and supported by the latest research. Highly recommend his work!"
            },
            {
                id: "2",
                rating: 5,
                date: "18 Jan 2025",
                text: "I needed an assignment on web development trends, and Wayne J delivered an exceptional piece! His insights into modern frameworks and best practices were spot-on. The references were up-to-date, making the work highly credible."
            },
            {
                id: "3",
                rating: 5,
                date: "5 Jan 2025",
                text: "Wayne J's coding expertise is top-notch! He helped me with a complex Python project, ensuring clean code and thorough documentation. The logic was flawless, and the project was delivered ahead of schedule."
            },
            {
                id: "4",
                rating: 5,
                date: "22 Dec 2024",
                text: "I needed an article on cybersecurity, and Wayne J exceeded expectations. His deep understanding of encryption techniques and network security was evident throughout the paper. Well-researched and highly informative!"
            },
            {
                id: "5",
                rating: 5,
                date: "10 Dec 2024",
                text: "Outstanding work on my cloud computing assignment! Wayne J explained complex concepts in a clear and concise manner. The paper was well-structured and provided real-world applications of cloud technologies."
            },
            {
                id: "6",
                rating: 5,
                date: "25 Nov 2024",
                text: "Wayne J provided a detailed research paper on blockchain technology. His ability to break down technical jargon into easy-to-understand content was truly impressive. The citations and references were impeccable!"
            }
        ]
    },
]

function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    React.useEffect(() => {
        if (emblaApi) {
            emblaApi.on("select", () => {
                setSelectedIndex(emblaApi.selectedScrollSnap())
            })
        }
    }, [emblaApi])

    const reviewsPerPage = isMobile ? 1 : 2
    const totalPages = Math.ceil(reviews.length / reviewsPerPage)

    return (
        <div className="space-y-6" id="expertwriters">
            <h4 className="font-semibold text-lg">Reviews</h4>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {Array.from({ length: totalPages }, (_, pageIndex) => (
                        <div key={pageIndex} className="flex-[0_0_100%] min-w-0">
                            <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-6 px-1`}>
                                {reviews.slice(pageIndex * reviewsPerPage, pageIndex * reviewsPerPage + reviewsPerPage).map((review) => (<div key={review.id} className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-0.5">
                                                {Array(5).fill(0).map((_, i) => (<Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />))}</div>
                                            <span className="text-gray-500 text-sm">({review.rating})</span></div><span className="text-sm ">{review.date}</span></div>
                                    <p className="text-sm  line-clamp-3">{review.text}</p>
                                </div>))}</div>
                        </div>))}
                </div>
            </div>
            <div className="flex justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors ${i === selectedIndex ? "bg-emerald-600" : "bg-gray-300"
                            }`}
                        onClick={() => emblaApi?.scrollTo(i)}
                        aria-label={`Go to review page ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export function WriterCarousel() {

    const handleGetStartedClick = () => {
        if (window.Tawk_API) {
            window.Tawk_API.toggle();
        }
    };

    const [emblaRef, emblaApi] = useEmblaCarousel()
    const [selectedWriter, setSelectedWriter] = React.useState<Writer | null>(null)

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])


    return (
        <div id="expertwriters" className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-8 space-y-4">
                <h2 className="text-3xl font-bold">
                    WORK WITH EXPERT <span className="text-orange-500">ACADEMIC WRITERS</span>
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    Our team consists of experienced academic writers with a strong track record of delivering outstanding work. You can choose a writer who specializes in your subject, or let our dedicated customer support team find the perfect expert for your academic needs.
                </p>
            </div>

            <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {writers.map((writer) => (
                            <div key={writer.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]  p-4">
                                <div className="border rounded-lg p-6 space-y-4 h-[450px] bg-zinc-50 dark:bg-[#1d1917]">
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={writer.image || "/placeholder.svg"}
                                            alt={writer.name}
                                            width={80}
                                            height={80}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-lg">{writer.name}</h3>
                                                <div className="flex bg-green-700 text-white gap-1 px-1 py-1 rounded-sm ">

                                                    <span className="text-xs text-white b  ">Verified</span>
                                                    <span className="">
                                                        <Check size={16} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {writer.qualification} • {writer.title}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-sm font-medium mb-2">Focus area</div>
                                        <div className="flex flex-wrap gap-2">
                                            {writer.focusAreas.map((area) => (
                                                <span key={area} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
                                                    {area}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-sm font-medium mb-2">Loves to write</div>
                                        <div className="text-sm text-muted-foreground">{writer.lovesToWrite.join(", ")}</div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-xl font-bold">{writer.stats.satisfaction}%</div>
                                            <div className="text-xs text-gray-500">Satisfaction Rate</div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-bold">{writer.stats.onTime}%</div>
                                            <div className="text-xs text-gray-500">On Time Rate</div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-bold">{writer.stats.delivery}</div>
                                            <div className="text-xs text-gray-500">Delivery</div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center  gap-4">
                                        <Link href={'/Order?coupon=FLAT45OFF'}>
                                            <Button className=" bg-orange-500 hover:bg-orange-600 text-white">Hire Writer</Button>
                                        </Link>
                                        <Button
                                            variant="outline"
                                            className=" bg-gray-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-gray-950 hover:text-zinc-50"
                                            onClick={() => setSelectedWriter(writer)}
                                        >
                                            About Writer
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={scrollPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background rounded-full p-2 shadow-lg"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background rounded-full p-2 shadow-lg"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>

            <Dialog open={!!selectedWriter} onOpenChange={() => setSelectedWriter(null)}>
        {selectedWriter && (
          <DialogContent className="max-w-[95vw] sm:max-w-lg md:max-w-2xl md:overflow-y-hidden overflow-y-auto p-4 sm:p-6 rounded-lg md:h-auto h-[90vh] md:scale-95 scale-100 ">
            <DialogHeader className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Image
                  src={selectedWriter.image || "/placeholder.svg"}
                  alt={selectedWriter.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto sm:mx-0"
                />
                <div className="text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center sm:justify-start">
                    <DialogTitle className="text-xl">{selectedWriter.name}</DialogTitle>
                    <div className="flex bg-green-700 text-white gap-1 px-2 py-1 rounded-sm self-center sm:self-auto">
                      <span className="text-xs text-white">Verified</span>
                      <span>
                        <Check size={14} />
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">PhD • {selectedWriter.title}</div>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-6 mt-4">
              <div>
                <div className="text-sm text-gray-500">Writer ID: {selectedWriter.id}</div>
                <p className="mt-4 text-sm">{selectedWriter.mainreview}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                <div className="border rounded-lg p-3">
                  <div className="text-lg font-bold">3+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Subjects Expert</div>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="text-lg font-bold">5+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Years on Service</div>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="text-lg font-bold">100%</div>
                  <div className="text-xs sm:text-sm text-gray-500">Acceptance Rate</div>
                </div>
              </div>

              {selectedWriter && <ReviewsCarousel reviews={selectedWriter.reviews} />}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href={"/Order?coupon=FLAT45OFF"} className="w-full">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Send Task Details</Button>
                </Link>
                <Button
                  onClick={handleGetStartedClick}
                  variant="outline"
                  className="w-full bg-gray-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-gray-950 hover:text-zinc-50"
                >
                  Chat with {selectedWriter.name}
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

{/* 
            <Dialog open={!!selectedWriter} onOpenChange={() => setSelectedWriter(null)}>
                {selectedWriter && (
                    <DialogContent className="max-w-full sm:max-w-lg md:max-w-2xl md:w-[95%] w-[90%] md:overflow-y-hidden overflow-y-auto rounded-lg lg:scale-95 ">
                        <DialogHeader>
                            <div className="flex items-center gap-4">
                                <Image
                                    src={selectedWriter.image || "/placeholder.svg"}
                                    alt={selectedWriter.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full"
                                />
                                <div>
                                    <div className="flex items-center gap-2">
                                        <DialogTitle>{selectedWriter.name}</DialogTitle>
                                        <div className="flex bg-green-700 text-white gap-1 px-1 py-1 rounded-sm ">

                                            <span className="text-xs text-white b  ">Verified</span>
                                            <span className="">
                                                <Check size={16} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-600">PhD • {selectedWriter.title}</div>
                                </div>
                            </div>
                        </DialogHeader>

                        <div className="space-y-6">
                            <div>
                                <div className="text-sm text-gray-500">Writer ID: {selectedWriter.id}</div>
                                <p className="mt-4 text-sm md:text-base">{selectedWriter.mainreview}</p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                                <div className="border rounded-lg p-4">
                                    <div className="text-xl font-bold">3+</div>
                                    <div className="text-sm text-gray-500">Subjects Expert</div>
                                </div>
                                <div className="border rounded-lg p-4">
                                    <div className="text-xl font-bold">5+</div>
                                    <div className="text-sm text-gray-500">Years on Service</div>
                                </div>
                                <div className="border rounded-lg p-4">
                                    <div className="text-xl font-bold">100%</div>
                                    <div className="text-sm text-gray-500">Acceptance Rate</div>
                                </div>
                            </div>

                            {selectedWriter && <ReviewsCarousel reviews={selectedWriter.reviews} />}
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                                <div className="w-full">
                                    <Link href={'/Order?coupon=FLAT45OFF'} className="w-full">
                                        <Button className="w-full bg-orange-500 hover:bg-orange-600">
                                            Send Task Details
                                        </Button>
                                    </Link>
                                </div>
                                <div className="w-full">
                                    <Button
                                        onClick={handleGetStartedClick}
                                        variant="outline"
                                        className="w-full bg-gray-900 text-zinc-50  dark:bg-zinc-100 dark:text-zinc-900 hover:bg-gray-950 hover:text-zinc-50"
                                    >
                                        Chat with {selectedWriter.name}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                )}
            </Dialog> */}
        </div>
    )
}

