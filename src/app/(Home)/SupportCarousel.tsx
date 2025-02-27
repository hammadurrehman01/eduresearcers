import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {Carousel,CarouselContent,CarouselItem} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselSpacing() {
  return (
    <Carousel opts={{loop:true}} className=" w-full max-w-screen-xl scale-[.85] md:scale-100">
      <CarouselContent className="-ml-1 mt-5">

          <CarouselItem  className="pl-1  lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/1 (1).webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">Oliver Reynolds</p>
                    <p className="font-medium text-muted-foreground text-sm text-sm "><span className="text-orange-500"> 7+ years</span> Business & Finance</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem  className="pl-1  lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/2 (1).webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">Sophia Carter</p>
                    <p className="font-medium text-muted-foreground text-sm"><span className="text-orange-500">5+ years</span>  Law & Legal Studies </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem  className="pl-1   lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/3 (1).webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">Ethan Mitchell</p>
                    <p className="font-medium text-muted-foreground text-sm"><span className="text-orange-500">6+ years</span> IT & Computer Science </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

            <CarouselItem  className="pl-1  lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/4 (1).webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">Ava Thompson</p>
                    <p className="font-medium text-muted-foreground text-sm"><span className="text-orange-500">4+ years </span>Nursing & Healthcare </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

            <CarouselItem  className="pl-1  lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/1.webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">Noah Bennett</p>
                    <p className="font-medium text-muted-foreground text-sm"><span className="text-orange-500">4+ years</span> Engineering & Technology </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

            <CarouselItem  className="pl-1  lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/3.webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">Emma Roberts</p>
                    <p className="font-medium text-muted-foreground text-sm"><span className="text-orange-500">9+ years</span> Social Sciences & Humanities </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

            <CarouselItem  className="pl-1  lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/7 (1).webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">Liam Harrison</p>
                    <p className="font-medium text-muted-foreground text-sm"><span className="text-orange-500">6+ years</span> Economics & Statistics </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

            <CarouselItem  className="pl-1  lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/2.webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">Isabella Foster</p>
                    <p className="font-medium text-muted-foreground text-sm"><span className="text-orange-500">8+ years </span> Marketing & Management </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

      </CarouselContent>
      
     
    </Carousel>
  )
}
