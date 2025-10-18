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
  "/porkchoma.png",
  "/fried-pork.png",
  "/honey-glazed-pork.png",
  "/sweat-and-sour-pork.png",
  "/mixed-pork-gril.png",
  "/fish.png",
  "/mbuzi-choma.png",
  "/fried-mbuzi.png",
  "/grilled-chicken.png",
  "/fried-chicken-kienyeji.png",
  "/fried-chicken-capon.png",
  "/sticky-wings.png",
  "/fried-beef.png",
  "/fried-liver.png",
  "/mbuzi-tumbukiza.png",
  "/beef-tumbukiza.png",
  "/chicken-tumbukiza.png",
  "/milkshakes.png",
  "/fresh-juice.png",
  "/kids-menu.png",
  "/breakfast-menu.png",
  "/accompiments.png",
  "/platter.png",
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
