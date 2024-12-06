"use client"; 
import { useState } from "react";
import Image from "next/image";

interface ProductCarouselProps {
  images: string[];
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0); 

  return (
    <div className="relative w-full max-w-lg ">
      <Image
        src={images[currentIndex]}
        alt="Product image"
        width={600}
        height={600}
        className="h-[300px] w-full object-cover transition duration-500"
      />
      <div className="flex justify-center gap-2 py-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`btn btn-xs ${
              index === currentIndex ? "btn-active" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
