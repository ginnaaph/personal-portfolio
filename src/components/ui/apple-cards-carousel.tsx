"use client";
import React, { useEffect, useRef, useState, useContext, useCallback } from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { CarouselContext } from "./carousel-context";
interface CarouselProps {
  items: React.ReactNode[]; // Changed from JSX.Element[] for better compatibility
  initialScroll?: number;
}

type CardType = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};


export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll, checkScrollability]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 280;
      const gap = 16;
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative p-2 px-9 w-screen flex items-center">
        <div
          className="flex flex-col w-full items-center overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          {/* Main Container: Removed mx-auto to allow full width */}
          <div className="flex flex-row justify-start items-center gap-4 pl-8">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                }}
                key={"card-container-" + index}
                className="justify-content-center last:pr-[5%] md:last:pr-[10%]" // Adjusted pr for better full-width feel
              >
                {item}
              </motion.div>
            ))}
          
        </div>
        <div className="flex mt-6">
        <div className="mr-10 flex  justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-secondary disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-main" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-secondary disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-main" />
          </button>
        </div>
        </div>
      </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CardType;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handleClose = useCallback(() => {
    setOpen(false);
    onCardClose(index);
  }, [index, onCardClose]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") handleClose();
    }
    document.body.style.overflow = open ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]);

  // Fixed Type: passing the ref as the correct expected type for the hook
  useOutsideClick(containerRef as React.RefObject<HTMLDivElement>, () => handleClose());

  

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-main/40 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-60 mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p className="text-base  text-main dark:text-secondary">
                {card.category}
              </motion.p>
              <motion.p className="mt-2 font-semibold text-main md:text-5xl dark:text-secondary">
                {card.title}
              </motion.p>
              <div className="py-7">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="group relative z-10 flex h-80 w-70 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-70 md:w-70 dark:bg-neutral-900"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-linear-to-b from-main/50 via-transparent to-transparent" />
        <div className="relative z-40 p-4 items-start justify-start flex flex-col">
         
          <p className="text-left font-semibold text-balance text-main md:text-2xl bg-secondary/70 mt-2 px-2 py-1 rounded-md">
            {card.title}
          </p>
          <Badge variant="default" className="mt-2 "aria-label={`Category: ${card.category}`}>
            {card.category}
          </Badge>
        </div>
        
        <BlurImage
          src={card.src}
          alt={card.title}
          className="absolute inset-0 z-10 object-cover group-hover:blur-0 group-hover:scale-105"
        />
     
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  src,
  className,
  alt,
  ...rest
}: { src: string; className?: string; alt?: string }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
    className={cn(
        "h-full w-full blur-sm transition-[filter,transform] duration-300 ease-in-out hover:blur-none",
        "hover:blur-none group-hover:blur-none group-hover:scale-105",
        isLoading && "opacity-70",
        !isLoading && "opacity-100",
        className
)}
      onLoad={() => setLoading(false)}
      src={src}
      loading="lazy"
      alt={alt || "Background Image"}
      {...rest}
    />
  );
};
