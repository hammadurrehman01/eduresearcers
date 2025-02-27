import { MessageCircle, Package } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


interface ExpertContent {
  name: string;
  degree: string;
  fields: string;
  completedOrders: string;
  reviews: string;
}

const expertData: { [key: number]: ExpertContent } = {

    1: {
        name: "CRAIG BURKE",
        degree: "Ph.D.",
        fields: "Psychology, Management, Business",
        completedOrders: "1315 completed orders",
        reviews: "1012 reviews"
      },

  2: {
    name: "CONNIE RITCHEY",
    degree: "Ph.D.",
    fields: "English, Literature, Creative Writing",
    completedOrders: "1419 completed orders",
    reviews: " 1200 reviews"
  },
  3: {
    name: "JERRY GENTRY",
    degree: "Master's",
    fields: "Math, Statistics, Engineering",
    completedOrders: "809 completed orders",
    reviews: "714 reviews"
  },
  4: {
    name: "EVA COATES",
    degree: "Master's",
    fields: "Mathematics, Computer Sciences",
    completedOrders: "1135 completed orders",
    reviews: " 909 reviews"
  },
  5: {
    name: "DALLAS SMITH",
    degree: "Ph.D.",
    fields: "Finance and Accounting",
    completedOrders: "806 completed orders",
    reviews: " 503 reviews"
  },

};

function TopExperts() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(1);

  const handleMouseEnter = (imageNumber: number) => {
    setHoveredImage(imageNumber);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const currentExpert = hoveredImage ? expertData[hoveredImage] : null;

  useEffect(() => {

    const intervalId = setInterval(() => {
      setHoveredImage(prev => {
        const next = (prev ?? 0) + 1;
        return next <= Object.keys(expertData).length ? next : 1;
      });
    }, 2500); 

    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  return (
    <div className="mx-auto max-w-screen-xl">
      <div data-aos="fade-up" data-aos-duration="1500" className="mt-10">
        <h1 className="text-center text-2xl md:text-7xl text-muted font-extrabold scale-95 md:scale-100">
          TOP EXPERTS
        </h1>
        <div className="flex justify-center">
          <h2 className="text-lg md:text-3xl w-[600px] -translate-y-6 md:-translate-y-10 font-extrabold text-center scale-95 md:scale-100">
            MEET URGENT DEADLINE WITH PROFESSIONAL ASSISTANCE
          </h2>
        </div>
        <p className="text-muted-foreground font-medium text-center -translate-y-3 md:-translate-y-7 text-sm scale-95 md:scale-100 lg:px-56">
          WE HAVE WRITERS AND EDITORS FROM DIFFERENT DISCIPLINES TO MEET STUDENTS' UNIQUE REQUIREMENTS. WHETHER IT IS SCIENCE OR ACCOUNTING, OUR EXPERTS WILL DEAL WITH IT.
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 p-4">
          <div data-aos="fade-up" className="md:py-3 pr-5">
            <div className="-ml-10 md:-ml-0 scale-75 md:scale-100 h-[600px] md:h-[800px] bg-sky-50 dark:bg-transparent border-[2px] border-dashed rounded-tr-full rounded-br-full">
              <div
               className={`${hoveredImage === 1 ? 'border-[4px] border-sky-500 scale-150 shadow-xl transition ease-in  duration-200 delay-200 ' : ''} rounded-full w-16 h-16 -translate-y-5 translate-x-3`}

                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <Image src="/imgs/10.webp" width={64} height={64} alt="top expert" />
              </div>
              <div
                className={`${hoveredImage === 2 ? 'border-[3px] border-sky-500 scale-125 shadow-xl transition ease-in  duration-200 delay-200 ' : ''} rounded-full w-20 h-20 translate-y-12 translate-x-72 lg:translate-x-60 xl:translate-x-64 md:translate-x-[575px]`}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <Image src="/imgs/9.webp" width={80} height={80} alt="top expert" />
              </div>
              <div
                className={`${hoveredImage === 3 ? 'border-[5px] border-sky-500 scale-105 shadow-xl transition ease-in  duration-200 delay-200 ' : ''} rounded-full w-28 h-28 translate-y-32 md:translate-y-40 translate-x-[295px] lg:translate-x-64 xl:translate-x-80 md:translate-x-[605px]`}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                <Image src="/imgs/8.webp" width={120} height={120} alt="top expert" />
              </div>
              <div
                className={`${hoveredImage === 4 ? 'border-[4px] border-sky-500 scale-125 shadow-xl transition ease-in  duration-200 delay-200 ' : ''} rounded-full w-20 h-20 translate-y-48 md:translate-y-80 translate-x-[260px] lg:translate-x-64 xl:translate-x-72 md:translate-x-[600px]`}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
              >
                <Image src="/imgs/7.webp" width={80} height={80} alt="top expert" />
              </div>
              <div
                className={`${hoveredImage === 5 ? 'border-[3px] border-sky-500 scale-150 shadow-xl transition ease-in  duration-200 delay-200 ' : ''} rounded-full w-16 h-16 translate-y-[225px] md:translate-y-[420px] translate-x-3`}
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={handleMouseLeave}
              >
                <Image src="/imgs/6.webp" width={64} height={64} alt="top expert" />
              </div>
            </div>
          </div>
          <div>
            <div data-aos="fade-down" className=" lg:pt-64 lg:ml-5 px-5 scale-95 md:scale-100">
              <div className="flex justify-between items-center">
                <span className="md:text-2xl text-xl font-extrabold text-zinc-800 dark:text-zinc-100">
                  {currentExpert ? currentExpert.name : "JERRY GENTRY"}
                </span>
                <span className="md:text-base text-sm rounded-full px-3 py-1 bg-sky-100 dark:bg-zinc-800 dark:text-white font-medium">
                  {currentExpert ? currentExpert.degree : "Master's"}
                </span>
              </div>
              <p className="pt-10 font-medium text-muted-foreground md:text-base text-sm ">
                {currentExpert ? currentExpert.fields : "Math, Statistics, Engineering"}
              </p>
              <div className="pt-5 flex items-center text-muted-foreground font-medium md:text-base text-sm ">
                <Image className="mr-2" src="/imgs/thumbsup.webp" width={20} height={20} alt="thumb" />
                {currentExpert ? currentExpert.completedOrders : "809 completed orders"}
              </div>
              <div className="pt-2 flex items-center text-muted-foreground font-medium md:text-base text-sm">
                <Image className="mr-2" src="/imgs/eye.webp" width={20} height={20} alt="thumb" />
                {currentExpert ? currentExpert.reviews : "714 reviews"}
              </div>
              <Link href={'https://wa.me/+447451271188?text=Hello Edu Researchers Team, I need Education Assistance. Could you help me complete my task on time?'}
                target="_blank" rel="noopener noreferrer"
              className="bg-zinc-100 dark:bg-zinc-900 md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 flex items-center justify-center py-4 w-full rounded-lg mt-5 text-zinc-900 dark:text-zinc-100 font-medium border-[2px] border-zinc-800 dark:border-zinc-100 ">
                <MessageCircle className="mr-1" /> Chat With Expert
              </Link>
              <div className="text-muted-foreground font-medium text-center pt-2 md:text-base text-sm">
                Prices start at just <span className="font-bold">£11/page.</span>
              </div>
            </div>
          </div>
          <div>
            <div data-aos="fade-up" className=" lg:pt-64 lg:ml-5 px-5 scale-95 md:scale-100">
              <div className="bg-sky-50 dark:bg-transparent rounded-lg p-5">
                <h2 className="text-center text-xl text-orange-500 font-bold">IMPORTANT FACTS</h2>
                <div className="mt-4 flex items-center">
                  <Image src="/imgs/fact-1.webp" width={25} height={25} alt="fact" />
                  <p className="text-muted-foreground font-medium text-sm ml-2">All of our experts hold MAs, MBAs & PhDs</p>
                </div>
                <div className="mt-4 flex items-center">
                  <Image src="/imgs/fact-2.webp" width={25} height={25} alt="fact" />
                  <p className="text-muted-foreground font-medium text-sm ml-2">We hire only graduates with exceptional records</p>
                </div>
                <div className="mt-4 flex items-center">
                  <Image src="/imgs/fact-3.webp" width={25} height={25} alt="fact" />
                  <p className="text-muted-foreground font-medium text-sm ml-2">Our youngest expert has 6-year experience</p>
                </div>
                <div className="mt-4 flex items-center">
                  <Image src="/imgs/fact-4.webp" width={25} height={25} alt="fact" />
                  <p className="text-muted-foreground font-medium text-sm ml-2">We have at least 250 available experts 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopExperts;
