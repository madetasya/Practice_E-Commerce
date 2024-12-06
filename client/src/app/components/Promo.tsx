"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function PromoCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 md:mx-8">
      <Carousel slideInterval={2000}>
        <div className="relative w-full h-full">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="Carousel Image 1"
            layout="fill" 
            objectFit="cover" 
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="Carousel Image 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="Carousel Image 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="Carousel Image 4"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="Carousel Image 5"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Carousel>
    </div>
  );
}
