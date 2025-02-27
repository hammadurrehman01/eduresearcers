import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

function ReviewCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop:true
      }}
      orientation="vertical"
      className="w-full max-w-xl shadow-xl"
    >
      <CarouselContent className="-mt-1 h-[300px] md:h-[230px] ">

          <CarouselItem  className="pt-1 ">
            <div className="p-1">
              <Card>
                <CardContent className=" p-6">
                  <div className='flex items-center gap-3'>
                  <div className='w-16 h-16 rounded-full flex items-center'>
                    <Image loading='eager' className='rounded-full' src={'/imgs/reviews-1.jpg'} width={80} height={80} alt='testimonial' ></Image>
                  </div>
                  <div className='flex gap-3 p-2'>
                    <div className=' text-muted-foreground font-medium'>
                     <span className='text-orange-500 text-lg font-bold'>Giulio Arcuri </span> <div className='text-muted-foreground font-bold ps-3 text-xs pt-1'> 29 November 2024  </div></div>
                     <div className='pt-2'><Image src={'/imgs/rating.webp'} width={90} height={90} alt='rating' ></Image></div>
                     
                     </div>
                     </div>
                     <div className='pt-2 text-sm  font-medium'>Hello! I like this service. I ordered several drafts from the same expert and they were pretty cool, but the prices for urgent help are a bit high in my opinion.</div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>


       
          <CarouselItem  className="pt-1 ">
            <div className="p-1">
              <Card>
                <CardContent className=" p-6">
                  <div className='flex items-center gap-3'>
                  <div className='w-16 h-16 rounded-full flex items-center'>
                    <Image loading='eager' className='rounded-full' src={'/imgs/reviews-2.jpg'} width={80} height={80} alt='testimonial' ></Image>
                  </div>
                  <div className='flex gap-3 p-2'>
                    <div className=' text-muted-foreground font-medium'>
                     <span className='text-orange-500 text-lg font-bold'>Aiden T</span> <div className='text-muted-foreground font-bold ps-3 text-xs pt-1'> 07 December 2024  </div></div>
                     <div className='pt-2'><Image src={'/imgs/rating.webp'} width={90} height={90} alt='rating' ></Image></div>
                     
                     </div>
                     </div>
                     <div className='pt-2 text-sm  font-medium'>I was struggling to complete my assignment on time, but Edu Researchers made the process so easy. The quality was spot on</div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>


          <CarouselItem  className="pt-1 ">
            <div className="p-1">
              <Card>
                <CardContent className=" p-6">
                  <div className='flex items-center gap-3'>
                  <div className='w-16 h-16 rounded-full flex items-center'>
                    <Image loading='eager' className='rounded-full' src={'/imgs/reviews-5.png'} width={80} height={80} alt='testimonial' ></Image>
                  </div>
                  <div className='flex gap-3 p-2'>
                    <div className=' text-muted-foreground font-medium'>
                     <span className='text-orange-500 text-lg font-bold'>Sophia R </span> <div className='text-muted-foreground font-bold ps-3 text-xs pt-1'> 18 January 2025  </div></div>
                     <div className='pt-2'><Image src={'/imgs/rating.webp'} width={90} height={90} alt='rating' ></Image></div>
                     
                     </div>
                     </div>
                     <div className='pt-2 text-sm  font-medium'>Their support team is super helpful! They guided me through my project step by step, and I couldn’t be happier with the results</div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>


          <CarouselItem  className="pt-1 ">
            <div className="p-1">
              <Card>
                <CardContent className=" p-6">
                  <div className='flex items-center gap-3'>
                  <div className='w-16 h-16 rounded-full flex items-center'>
                    <Image loading='eager' className='rounded-full' src={'/imgs/reviews-3.png'} width={80} height={80} alt='testimonial' ></Image>
                  </div>
                  <div className='flex gap-3 p-2'>
                    <div className=' text-muted-foreground font-medium'>
                     <span className='text-orange-500 text-lg font-bold'>Liam M </span> <div className='text-muted-foreground font-bold ps-3 text-xs pt-1'> 10 February 2025  </div></div>
                     <div className='pt-2'><Image src={'/imgs/rating.webp'} width={90} height={90} alt='rating' ></Image></div>
                     
                     </div>
                     </div>
                     <div className='pt-2 text-sm  font-medium'>I had a tight deadline and wasn’t sure I’d make it, but these guys delivered exactly what I needed, right on time.</div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>


          <CarouselItem  className="pt-1 ">
            <div className="p-1">
              <Card>
                <CardContent className=" p-6">
                  <div className='flex items-center gap-3'>
                  <div className='w-16 h-16 rounded-full flex items-center'>
                    <Image loading='eager' className='rounded-full' src={'/imgs/reviews-4.png'} width={80} height={80} alt='testimonial' ></Image>
                  </div>
                  <div className='flex gap-3 p-2'>
                    <div className=' text-muted-foreground font-medium'>
                     <span className='text-orange-500 text-lg font-bold'>William Smith</span> <div className='text-muted-foreground font-bold ps-3 text-xs pt-1'> 23 February 2025  </div></div>
                     <div className='pt-2'><Image src={'/imgs/rating.webp'} width={90} height={90} alt='rating' ></Image></div>
                     
                     </div>
                     </div>
                     <div className='pt-2 text-sm font-medium'>I used their service for the first time and was impressed by how well-structured and detailed my work was </div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem  className="pt-1 ">
            <div className="p-1">
              <Card>
                <CardContent className=" p-6">
                  <div className='flex items-center gap-3'>
                  <div className='w-16 h-16 rounded-full flex items-center'>
                    <Image loading='eager' className='rounded-full' src={'/imgs/reviews-6.png'} width={80} height={80} alt='testimonial' ></Image>
                  </div>
                  <div className='flex gap-3 p-2'>
                    <div className=' text-muted-foreground font-medium'>
                     <span className='text-orange-500 text-lg font-bold'>Ethan D </span> <div className='text-muted-foreground font-bold ps-3 text-xs pt-1'> 25 February 2025  </div></div>
                     <div className='pt-2'><Image src={'/imgs/rating.webp'} width={90} height={90} alt='rating' ></Image></div>
                     
                     </div>
                     </div>
                     <div className='pt-2 text-sm  font-medium'>They saved me so much time! Instead of stressing, I got expert help that made a real difference in my grades.</div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>

  )
}

export default ReviewCarousel