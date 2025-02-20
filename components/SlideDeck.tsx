"use client";

import { useState, useEffect, Suspense } from "react";
import { Loader2 } from "lucide-react";
import { Slide } from "@/components/Slide";
import { useRouter, useSearchParams } from "next/navigation";
import { KeyboardHelp } from "@/components/KeyboardHelp";

interface SlideDeckProps {
  slides: React.ReactElement[];
}

export function SlideDeck({ slides }: SlideDeckProps) {
  const router = useRouter();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [typedNumber, setTypedNumber] = useState("");
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const totalSlides = slides.length;

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const slideParam = searchParams.get("slide");
    const slideNumber = slideParam ? parseInt(slideParam) : 1;
    if (slideNumber > 0 && slideNumber <= slides.length) {
      setCurrentSlide(slideNumber);
    }
  }, [slides.length]);

  useEffect(() => {
    const updateSlide = (slideNumber: number) => {
      setCurrentSlide(slideNumber);
      const params = new URLSearchParams(window.location.search);
      params.set("slide", slideNumber.toString());
      router.replace(`?${params.toString()}`, { scroll: false });
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < totalSlides) {
        updateSlide(currentSlide + 1);
      } else if (e.key === "ArrowLeft" && currentSlide > 1) {
        updateSlide(currentSlide - 1);
      } else if (/^[0-9]$/.test(e.key)) {
        if (typingTimeout) {
          clearTimeout(typingTimeout);
        }

        const newTypedNumber = typedNumber + e.key;
        setTypedNumber(newTypedNumber);
        const timeout = setTimeout(() => {
          const slideNumber = parseInt(newTypedNumber);
          if (slideNumber > 0 && slideNumber <= totalSlides) {
            updateSlide(slideNumber);
          }
          setTypedNumber("");
        }, 750);

        setTypingTimeout(timeout);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;

      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isLeftSwipe && currentSlide < totalSlides) {
        updateSlide(currentSlide + 1);
      }

      if (isRightSwipe && currentSlide > 1) {
        updateSlide(currentSlide - 1);
      }

      setTouchEnd(null);
      setTouchStart(null);
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [
    currentSlide,
    totalSlides,
    touchStart,
    touchEnd,
    typedNumber,
    typingTimeout,
    router,
  ]);

  return (
    <Suspense>
      <div className="relative h-screen w-screen overflow-hidden">
        <div className="h-screen w-screen">
          <Slide id={currentSlide} currentSlide={currentSlide}>
            {slides[currentSlide - 1]}
          </Slide>
        </div>
        <KeyboardHelp />
        <div
          className={`fixed bottom-2 right-2 flex items-center gap-1 rounded px-2 py-1 text-sm ${
            typedNumber
              ? "bg-black text-white opacity-100 dark:bg-white dark:text-black"
              : "bg-white text-black opacity-50 dark:bg-gray-800 dark:text-white"
          }`}
        >
          {typedNumber ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Jumping to {typedNumber}</span>
            </>
          ) : (
            `${currentSlide} / ${totalSlides}`
          )}
        </div>
      </div>
    </Suspense>
  );
}
