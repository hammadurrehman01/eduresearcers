import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCheckIcon, Package } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const tabContent = [
  {
    value: 'Homework',
    title: 'Homework',
    description: "Too much homework? Let us make it easy for you with quick and reliable support",
  },
  {
    value: 'Assignment',
    title: 'Assignment',
    description: 'Get well-written assignments that follow all academic rules and look professional.',
  },
  {
    value: 'CV Writing',
    title: 'CV Writing',
    description: 'Want a job-winning CV? We create professional resumes that leave a strong impression.',
  },
  {
    value: 'Editing & Proofreading',
    title: 'Editing & Proofreading',
    description: "Make your work perfect with expert checking for mistakes and better readability.",
  },
  {
    value: 'More Services',
    title: 'More Academic Services',
    description: "Need help with something else? We handle all academic tasks across every subject and level.",
  },
]

function ExpertSection() {
  // const handleGetStartedClick = () => {
  //   // Ensure Tawk_API is loaded and available
  //   if (window.Tawk_API) {
  //     window.Tawk_API.toggle(); // This will toggle the chat widget
  //   }
  // };
  return (
    <div id='service' className='max-w-screen-xl mx-auto mt-4 md:mt-10'>
      <div data-aos='fade-down' data-aos-duration="1500" className='grid lg:grid-cols-2 grid-cols-1 p-5 rounded-xl bg-[url(/imgs/banner-im.webp)] bg-cover bg-center bg-no-repeat relative'>
      <div className="absolute dark:inset-0 dark:bg-black/90"></div>

        <div data-aos='zoom-in'>
          <h1 className='md:text-4xl text-xl text-center md:text-start scale-[.85] md:scale-100 font-extrabold pt-5'>Our Services</h1>
          <p className='pt-2 text-sm'>Reliable Academic Assistance You Can Trust – Only at Edu Researchers</p>
          <div className='md:pt-5 scale-95 md:scale-100'>
            <Tabs defaultValue="Homework">
              <TabsList>
                {tabContent.map(({ value }) => (
                  <TabsTrigger key={value} value={value}>{value}</TabsTrigger>
                ))}
              </TabsList>
              {tabContent.map(({ value, title, description }) => (
                <TabsContent key={value} className='p-4 ' value={value}>
                  <h1 className='text-xl font-extrabold text-zinc-800 dark:text-zinc-100 py-5'>{title}</h1>
                  <p className='font-medium text-muted-foreground lg:pr-44'>{description}</p>
                  <div className='flex items-center text-sm md:text-base mt-3 font-medium text-muted-foreground'>
                    <CheckCheckIcon className='mr-2 text-green-500' /> Help for all academic tasks
                  </div>
                  <div className='flex items-center text-sm md:text-base mt-3 font-medium text-muted-foreground'>
                    <CheckCheckIcon className='mr-2 text-green-500' /> 24/7 Experts available 
                  </div>
                  <div className='flex items-center text-sm md:text-base mt-3 font-medium text-muted-foreground'>
                    <CheckCheckIcon className='mr-2 text-green-500' /> Always delivered on time
                  </div>
                  <div className='flex flex-col lg:flex-row  items-center gap-3 mt-10'>
                    <Link href={'/Order?coupon=FLAT45OFF'}
                      className='flex items-center md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 bg-orange-500 text-white
                       font-semibold rounded-lg w-[170px] px-5 py-3 w-full lg:w-auto justify-center lg:justify-start '>
                      <Package className='mr-1' /> Order Now
                    </Link>

                    <Link href={'https://wa.me/+447451271188?text=Hello Edu Researchers Team, I need Education Assistance. Could you help me complete my task on time?'} target="_blank" rel="noopener noreferrer" className='bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 flex font-semibold items-center py-3 px-6 rounded-xl md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 border-[2px] border-green-600 w-full lg:w-auto justify-center lg:justify-start'>
                      <Image className='mr-2' src={'/imgs/whatsapp.png'} width={25} height={25} alt='whatsapp'></Image> Whatsapp Now
                    </Link>

                  </div>
                  <div className='text-muted-foreground text-center lg:text-start text-sm ml-4 pt-2'>It's <span className='font-bold'>100%</span> Confidential</div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
        <div className='md:pt-5'>
          <div className='rounded-xl mt-5 scale-95 md:scale-100'>
            <Carousel>
              <CarouselContent>
                {['1', '2', '3', '4', '6'].map(num => (
                  <CarouselItem key={num}>
                    <Image loading='eager' className='rounded-full mx-auto lg:mt-24' src={`/imgs/service-${num}.jpg`} width={500} height={600} alt='tab' />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpertSection