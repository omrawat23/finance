"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image"
import Link from "next/link"
import { categories } from "@/lib/constants"
import MaxWidthWrapper from "./MaxWidth"

export function InfiniteScroll() {
  const scrollRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    let animationFrameId: number;
    const scroll = () => {
      if (!isHovered && scrollRef.current) {
        setScrollPosition((prev) => {
          const newPosition = prev + 0.5; // Reduced speed from 1 to 0.5
          if (newPosition >= (scrollRef.current as unknown as HTMLDivElement).scrollWidth / 2) {
            return 0;
          }
          return newPosition;
        });
        (scrollRef.current as HTMLDivElement).scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, scrollPosition]);

  // Double the categories array for seamless scrolling
  const doubledCategories = [...categories, ...categories]

  return (
    <MaxWidthWrapper maxWidth="2xl">
      <div className="relative w-full overflow-hidden bg-background py-12">
        <div
          ref={scrollRef}
          className="flex overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-6 flex-nowrap">
            {doubledCategories.map((category, index) => (
              <Link
                key={`${category.id}-${index}`}
                href={category.href}
                className="group relative flex-shrink-0 cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={300}
                    height={200}
                    className="h-[200px] w-[300px] object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
                  />
                </div>
                <h3 className="mt-3 text-center text-sm font-medium">{category.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
