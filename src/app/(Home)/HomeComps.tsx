"use client"
import { useInView } from "react-intersection-observer";
import ExpertSection from "./ExpertSection";
import FaqSection from "./FaqSection";
import {HomeBanner} from "./HomeBanner";
import HowItWorks from "./HowItWorks";
import Reviews from "./Reviews";
import ServiceSection from "./ServiceSection";
import SmallDivider from "./SmallDivider";
import SupportSection from "./SupportSection";
import UniSection from "./UniSection";
import { Suspense, useEffect, useState } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css';
import { WriterCarousel } from "./writer-carousel";
import SitePopup from "@/components/SitePopup";

export default function HomeComps( ) {



  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

const [modal, setModal] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setModal(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (modal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [modal]);


  useEffect(() => {
    Aos.init({
      duration: 800,
      disable:'mobile',
      offset: 100,
    });
  }, [inView]);
  return (
    <div ref={ref} onClick={() => setModal(false)}>
      {modal && <SitePopup setModal={setModal} />}
      <Suspense fallback={<>loading...</>}>
      <HomeBanner />
      </Suspense>
      <UniSection/>
      <div className="bg-zinc-500 dark:bg-zinc-800 h-1 w-full mt-4"></div>
      <ServiceSection/>
      <ExpertSection/>
      <HowItWorks/>
      {/* <TopExperts/> */}
      <div className="bg-zinc-500 dark:bg-zinc-800 h-1 w-full mt-4"></div>
      <WriterCarousel/>
      <SupportSection/>
      <Reviews/>
      <SmallDivider/>
      <FaqSection/>
    </div>
  );
}
