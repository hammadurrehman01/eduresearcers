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
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("...");
  const [number, setNumber] = useState("");
  const [locationDetails, setLocationDetails] = useState<any>({});
  const [modal, setModal] = useState<boolean>(false);


  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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

  const fetchCity = async () => {
    let cityy = localStorage.getItem("city");
    let countryy = localStorage.getItem("country");
    if (cityy !== null) {
      setCity(cityy as any);
    }
    if (countryy !== null) {
      setCountry(countryy as any);
    }

    const ipUrl = "https://api.ipify.org?format=json";

    try {
      // Fetch the user's IP address
      const response = await fetch(ipUrl);
      const data = await response.json(); // Assuming the response is in JSON
      const userIp = data.ip;

      // Fetch location data based on the IP address
      const locationResponse = await fetch(
        `https://pro.ip-api.com/json/${userIp}?key=tRuJ0KuCug4wEHs&fields=status,message,continent,continentCode,country,countryCode,countryCode3,region,regionName,city,district,zip,lat,lon,timezone,offset,currentTime,currency,callingCode,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
      );


      if (!locationResponse.ok) {
        throw new Error("Network response was not ok");
      }

      const locationData = await locationResponse.json();

      // CHANGES: im change the city to country
      let fetchedCity = locationData.country || "London"; // Set default value
      // let fetchedCity = locationData.country || "London"; // Set default value
      let fetchedCountry = locationData.countryCode || "GB"; // Set default value

      // Store the city and country in local storage
      localStorage.setItem("city", fetchedCity);
      localStorage.setItem("country", fetchedCountry);

      // Assuming you have functions like setCity and setCountry to update your UI
      setCity(fetchedCity);
      setCountry(fetchedCountry);
      setLocationDetails(locationData);
    } catch (error) {
      // If the API request fails, set default values
    }
  };

  useEffect(() => {
    fetchCity();
  }, []);

  useEffect(() => {
    const dynamicNumber: any = {
      US: "+19179331132",
      MX: "+19179331132",
      CA: "+19179331132",
      AU: "+61480004010",
      NZ: "+61480004010",
      UK: "+447593709971",
    };

    if (dynamicNumber[country]) {
      setNumber(dynamicNumber[country]);
    } else {
      setNumber("+447593709971");
    }
  }, [country]);

  useEffect(() => {
    const modalData = localStorage.getItem("modal");
    const storedTime = localStorage.getItem("modalTimestamp");

    if (modalData === "true" && storedTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - parseInt(storedTime, 10);
      const fiveHours = 5 * 60 * 60 * 1000;

      if (elapsedTime >= fiveHours) {
        localStorage.setItem("modal", "false");
      }
    }

    // If modalData is "false" (or missing after 8 hours), show modal
    if (!modalData || modalData === "false") {
      const timer = setTimeout(() => {
        setModal(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
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

  return (
    <div ref={ref} onClick={() => setModal(false)}>
      {modal && <SitePopup setModal={setModal} locationDetails={locationDetails} />}
      <Suspense fallback={<>loading...</>}>
      <HomeBanner locationDetails={locationDetails}  />
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
