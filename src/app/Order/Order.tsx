"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTopic } from '../TopicContext'
import dynamic from 'next/dynamic'
import PaperType from './PaperType'
import PaperInstruction from './PaperInstruction'
import ContactDetails from './ContactDetails'
import { Loader2 } from 'lucide-react'

const Modal = dynamic(() => import('./Modal'), {
  ssr: false, 
  loading: () => <p>Loading...</p>,
});

interface CurrencyData {
  symbol: string;
  ppp: number;
  unit: string;
}

function Order() {
    const { topic,selectedValue ,wordCount,quality,deadline,referencing,pricePerPage,totalPrice,symbol,setSymbol,ppp,setPpp,unit,setUnit} = useTopic(); // Get topic from context
    const [activeTab, setActiveTab] = useState('type');  
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("...");
    const [number, setNumber] = useState("");
    const [locationDetails, setLocationDetails] = useState<any>({});
      const [currentURL, setCurrentURL] = useState("");
    
  

    const handleNext = () => {
      setActiveTab('instruction');  
    };
  
    const handleNextToDetails = () => {
      setActiveTab('details');  
    };
  
    const handlePreviousToInstruction = () => {
      setActiveTab('instruction');  
    };
  
    const handlePreviousToType = () => {
      setActiveTab('type');  
    };
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    // Separate state variables for symbol, ppp, and unit

    useEffect(() => {
      const fetchCurrencyByIP = async () => {
        try {
          // Fetch IP from the internal API route
          const response = await fetch('/api/ip/');
          if (!response.ok) {
            throw new Error('Failed to fetch IP data');
          }
          const { ip } = await response.json();
  
          // Fetch location data using the IP
          const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
          if (!locationResponse.ok) {
            throw new Error('Failed to fetch location data');
          }
          const locationData = await locationResponse.json();
          
          // Extract country code to map to currency and ppp
          const currencyDetails = getCurrencyDetails(locationData.country_code);
          
          // Set state for symbol, ppp, and unit separately
          setSymbol(currencyDetails.symbol);
          setPpp(currencyDetails.ppp);
          setUnit(currencyDetails.unit);
        } catch (err: unknown) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
        } finally {
          setLoading(false);
        }
      };
  
      fetchCurrencyByIP();
    }, []);
  
    const getCurrencyDetails = (countryCode: string): CurrencyData => {
      switch (countryCode) {
        case 'IE':
          return { symbol: '€', ppp: 23.83, unit: 'eur' };
        case 'AU':
          return { symbol: '$', ppp: 35.93, unit: 'aud' };
        case 'GB':
          return { symbol: '£', ppp: 20.00, unit: 'gbp' };
        case 'NL':
        case 'NO':
          return { symbol: '€', ppp: 23.83, unit: 'eur' };
        case 'NZ':
          return { symbol: '$', ppp: 39.17, unit: 'nzd' };
        case 'OM':
        case 'AE':
        case 'US':
          return { symbol: '$', ppp: 28.51, unit: 'usd' };
        default:
          return { symbol: '£', ppp: 20.00, unit: 'gbp' };
      }
    };

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
        // Get the current URL using window.location
        const currentURL = window.location.href;
        setCurrentURL(currentURL);
        // Log the current URL to the console (or do whatever you need with it)
      }, []);
  
    if (loading) return <div className='h-screen  text-2xl font-semibold flex justify-center items-center gap-2'><Loader2 className='animate-spin w-5 h-5' /> Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
    <div className='mx-auto max-w-screen-xl'>
    <div className='my-10 text-4xl font-bold text-center'>Place Your Order In Simple Steps</div>
    <Modal/>
    <div>

    </div>
    
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 p-4 '>
        <div className='col-span-2 '>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="">
      <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
        <TabsTrigger value="type">Paper Type</TabsTrigger>
        <TabsTrigger value="instruction">Paper Instruction</TabsTrigger>
        <TabsTrigger value="details">Contact Details</TabsTrigger>
      </TabsList>
      <TabsContent value="type">
        <PaperType onNext={handleNext}/>
      </TabsContent>
      <TabsContent value="instruction">
        <PaperInstruction onNext={handleNextToDetails} onPrevious={handlePreviousToType}/>
      </TabsContent>
      <TabsContent value='details'>
        <ContactDetails  onPrevious={handlePreviousToInstruction} locationDetails={locationDetails} currentURL={currentURL} />
      </TabsContent>
    </Tabs>
        </div>

        <div>
            <div className='py-5 px-2 dark:bg-gray-900 bg-zinc-900 text-white rounded-2xl overflow-hidden'>
                <div className='text-xl md:text-3xl text-center py-3 font-bold '>Order Summary</div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Topic Of Paper</div>
                    <div>{topic || '------------------------'}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Referencing Style</div>
                    <div>{referencing}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Paper Standard</div>
                    <div>{quality}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Deadline</div>
                    <div>{deadline}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>No Of Pages</div>
                    <div>{selectedValue}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Word Count</div>
                    <div>{wordCount}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Price Per Page</div>
                    <div>{symbol} {pricePerPage}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Total Price</div>
                    <div>{symbol} {totalPrice}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Ai & Turnitin Report</div>
                    <div className='bg-green-500 text-sm rounded-lg p-1 text-white'>Free</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Discount</div>
                    <div className='bg-orange-500 text-sm rounded-lg p-1 text-white border-2 border-dotted'>45% Applied <span className='font-bold'>(FLAT45OFF)</span></div>
                </div>
                <div className='flex justify-center py-3 px-3'>
                    <Image src={'/imgs/card-dissertationist.webp'} width={400} height={200} alt='card'></Image>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Order