import { ReactNode } from "react";

interface SlideProps {
  id: number;
  backgroundColor?: string;
  foregroundColor?: string;  // Add foreground color support
  children: ReactNode;
  currentSlide?: number;
}

export function Slide({
  id,
  backgroundColor = "bg-white",
  foregroundColor = "text-black",  // Default foreground color
  currentSlide = 1,
  children,
}: SlideProps) {
  return (
    <div
      id={`slide-${id}`}
      className={`w-full h-full flex items-center justify-center ${backgroundColor} ${foregroundColor} transition-colors duration-300 ${
        currentSlide === id ? "block" : "hidden"
      }`}
    >
      {children}
    </div>
  );
}
