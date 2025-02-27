"use client";

import { sendPopupEmails } from "@/app/(backend)/action/popupFormAction";
import { Loader, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import CustomCaptcha from "./ui/common/CustomCaptcha";

interface Props {
    setModal: (value: boolean) => void;
}

const SitePopup = ({ setModal }: Props) => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState<any>("");
    const [name, setName] = useState("");
    const [pending, setPending] = useState(false);
    const [isVerified, setIsVerified] = useState(false);


    const [emailMessage, setEmailMessage] = useState("");
    const [phoneMessage, setPhoneMessage] = useState<any>("");
    const [nameMessage, setNameMessage] = useState("");

    const closeModal = () => {
        setModal(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isVerified) {
            toast.error("Please Verify the Captcha")
            return
        }

        const data = {
            name,
            email,
            phone,
        };

        if (email === "") {
            setEmailMessage("Please Enter Your Email");
        }

        if (name === "") {
            setNameMessage("Please Enter Your Name");
        }

        if (phone === "") {
            setPhoneMessage("Please Enter Your Phone Number");
        }

        if (data.name !== "" && data.email !== "" && data.phone !== "") {
            setPending(true);

            const convertToFormData = (data: any): FormData => {
                const formData = new FormData();

                Object.entries(data).forEach(([key, value]) => {
                    if (typeof value === "string" || value instanceof Blob) {
                        formData.append(key, value);
                    } else {
                        console.warn(`Value for ${key} is not a string or Blob:`, value);
                    }
                });

                return formData;
            }

            try {
                const formData = convertToFormData(data);
                const response = await sendPopupEmails(formData);
                if (response.discount === "Discount received successully!") {
                    localStorage.setItem("discount", response.discount);
                }
                console.log(response);

                if (response?.success) {
                    router.push("/thank-you");
                } else {
                    console.log("Error: " + response?.error);
                }
            } catch (error) {
                console.error("Form submission failed", error);
            }
        }
    };

    const [hours, setHours] = useState(1)
    const [minutes, setMinutes] = useState(57)
    const [seconds, setSeconds] = useState(55)

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            } else if (minutes > 0) {
                setMinutes(minutes - 1)
                setSeconds(59)
            } else if (hours > 0) {
                setHours(hours - 1)
                setMinutes(59)
                setSeconds(59)
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [hours, minutes, seconds])

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999]" onClick={closeModal}></div>

            {/* Modal Content */}
            <div className="fixed w-full  flex  justify-center z-[100000] modal-content p-4 ">
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-[95%] md:w-[90%] lg:w-[80%] max-w-5xl rounded-2xl flex flex-col lg:flex-row overflow-hidden shadow-2xl mx-auto relative lg:scale-[.72] scale-[.60]  lg:-translate-y-48 -translate-y-64  ">
                    {/* Left Section - Gradient Background with Offer */}
                    <div className="bg-gray-900 text-white p-6 lg:p-10 lg:w-[40%] hidden lg:block">
                        <div className="flex flex-col  justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="h-1 w-10 bg-yellow-400 rounded-full"></div>
                                    <h4 className="text-yellow-300 font-medium">LIMITED TIME OFFER</h4>
                                </div>
                                <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-2">
                                    Get <span className="text-yellow-400 text-5xl md:text-6xl">45%</span>
                                </h2>
                                <h3 className="text-2xl md:text-3xl font-bold text-white/90 mb-2">Discount Code</h3>
                                <p className="text-white/80 text-lg">on Your Email</p>
                                <div className="border-t border-white/20 w-full my-6"></div>
                            </div>

                            <div className="space-y-6 mt-4">
                                {/* Trust Badges */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 w-14 h-14 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 text-yellow-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Money Back Guarantee</p>
                                        <p className="text-white/70">30-day satisfaction guarantee</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 w-14 h-14 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 text-yellow-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Premium Quality</p>
                                        <p className="text-white/70">Expert writers & thorough checks</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 w-14 h-14 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">100% Satisfaction</p>
                                        <p className="text-white/70">Guaranteed results or your money back</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 w-14 h-14 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 text-yellow-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 14c3.31 0 6 2.69 6 6M6 20c0-3.31 2.69-6 6-6M12 10a4 4 0 100-8 4 4 0 000 8z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">100% Human Written</p>
                                        <p className="text-white/70">No AI-generated content</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 w-14 h-14 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 text-yellow-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Plagiarism Free</p>
                                        <p className="text-white/70">100% original content</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <div className="bg-white p-6 lg:p-10 lg:w-[60%]   ">
                        <div className="mb-6">
                            <div className="hidden lg:inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                                Renowned for A+ Grades
                            </div>
                            <div className="lg:hidden inline-block  bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-3 w-full mx-auto text-center">
                            Get 45% Discount Code on Your Email
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Unlock Your Academic Success</h2>
                            <p className="text-gray-600">Connect with our expert professors and get the help you need.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                            className="w-5 h-5 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-3"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                    {name === "" && <span className="text-red-600 text-xs mt-1 block">{nameMessage}</span>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-base font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                            className="w-5 h-5 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        id="phone"
                                        type="text"
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={setPhone}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-3"
                                    />
                                    {phone === "" && <span className="text-red-600 text-xs mt-1 block">{phoneMessage}</span>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-3"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                    {email === "" && <span className="text-red-600 text-xs mt-1 block">{emailMessage}</span>}
                                </div>
                            </div>

                            {/* Special Offer Timer */}
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                                        SPECIAL OFFER
                                    </div>
                                    <div className="text-sm text-gray-500">Limited time only</div>
                                </div>

                                <div className="flex items-center justify-center gap-3 my-2">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-gray-800 text-white px-3 py-2 rounded-md min-w-[40px] text-center">
                                            <span className="text-xl font-bold">{hours.toString().padStart(2, "0")}</span>
                                        </div>
                                        <span className="text-xs text-gray-500 mt-1">HOURS</span>
                                    </div>
                                    <span className="text-xl font-bold text-gray-800">:</span>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-gray-800 text-white px-3 py-2 rounded-md min-w-[40px] text-center">
                                            <span className="text-xl font-bold">{minutes.toString().padStart(2, "0")}</span>
                                        </div>
                                        <span className="text-xs text-gray-500 mt-1">MINUTES</span>
                                    </div>
                                    <span className="text-xl font-bold text-gray-800">:</span>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-gray-800 text-white px-3 py-2 rounded-md min-w-[40px] text-center">
                                            <span className="text-xl font-bold">{seconds.toString().padStart(2, "0")}</span>
                                        </div>
                                        <span className="text-xs text-gray-500 mt-1">SECONDS</span>
                                    </div>
                                </div>
                            </div>

                            {/* Captcha */}
                            <div className="w-full">
                                <CustomCaptcha setIsVerified={setIsVerified} />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-lg transition-all duration-200 shadow-md"
                            >
                                {pending ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <Loader className="animate-spin" />
                                        <span>Processing Your Request...</span>
                                    </div>
                                ) : (
                                    "Get Your 50% Discount Now"
                                )}
                            </button>
                            <p className="text-center text-sm text-gray-500 mt-2">You'll receive a response within minutes!</p>
                        </form>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute right-3 top-3 text-gray-600 hover:text-gray-100 cursor-pointer rounded-full p-2 bg-white/90 hover:bg-red-500 shadow-md transition-all duration-200"
                        aria-label="Close modal"
                    >
                        <X size={18} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SitePopup;
