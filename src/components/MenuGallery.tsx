"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const images = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/7.png",
  "/8.png",
  "/9.png",
  "/10.png",
];

export default function MenuImages() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Thumbnails - vertical list */}
      <div className="flex flex-col space-y-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-full aspect-square cursor-pointer bg-black rounded-xl"
            onClick={() => {
              setActiveIndex(i);
              setOpen(true);
            }}
          >
            <Image
              src={src}
              alt={`menu ${i}`}
              fill
              className="object-contain rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Modal carousel */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl max-h-screen p-0 bg-black/90 border-none shadow-none flex items-center justify-center">
          {/* Accessibility title (hidden visually) */}
          <VisuallyHidden>
            <DialogTitle>Menu Image Preview</DialogTitle>
          </VisuallyHidden>
          <Carousel
            opts={{ loop: true, startIndex: activeIndex }}
            className="w-full relative"
          >
            <CarouselContent>
              {images.map((src, i) => (
                <CarouselItem
                  key={i}
                  className="flex items-center justify-center"
                >
                  <div className="relative w-full h-screen bg-black">
                    <Image
                      src={src}
                      alt={`menu ${i}`}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows (desktop only) */}
            <div className="hidden md:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
}
