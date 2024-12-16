"use client";

import {
  ArrowUpRight,
  Shuffle,
  Star,
  Clock,
  Minus,
  Zap,
  Heart,
  Rabbit,
  Mail,
} from "lucide-react";
import { useState, useEffect, useCallback, Suspense } from "react";
import { Logo } from "@/app/components/Logo";
import { useRouter, useSearchParams } from "next/navigation";
import { generateRandomColors } from "@/utils/colors";

function PageContent() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [showShortcutHint, setShowShortcutHint] = useState(false);
  const [logoSize, setLogoSize] = useState(32);
  const router = useRouter();
  const searchParams = useSearchParams();

  const generateRandomColorsForPage = useCallback(() => {
    const { backgroundColor, textColor } = generateRandomColors();
    setBackgroundColor(backgroundColor);
    setTextColor(textColor);
    router.push(`?bg=${backgroundColor.slice(1)}&txt=${textColor.slice(1)}`);
  }, [router]);

  const setInitialColorsForPage = useCallback(() => {
    const { backgroundColor, textColor } = generateRandomColors();
    setBackgroundColor(backgroundColor);
    setTextColor(textColor);
  }, []);

  useEffect(() => {
    const bgColor = searchParams.get("bg");
    const txtColor = searchParams.get("txt");

    if (bgColor && txtColor) {
      setBackgroundColor(`#${bgColor}`);
      setTextColor(`#${txtColor}`);
    } else {
      setInitialColorsForPage();
    }
  }, [searchParams, setInitialColorsForPage]);

  useEffect(() => {
    // Set the background color of the html and body elements
    document.documentElement.style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "s" || event.key === "S") {
        generateRandomColorsForPage();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [generateRandomColorsForPage]);

  useEffect(() => {
    const updateLogoSize = () => {
      if (window.innerWidth >= 1280) {
        setLogoSize(64);
      } else if (window.innerWidth >= 1024) {
        setLogoSize(40);
      } else if (window.innerWidth >= 640) {
        setLogoSize(34);
      } else {
        setLogoSize(28);
      }
    };

    updateLogoSize();
    window.addEventListener("resize", updateLogoSize);

    return () => {
      window.removeEventListener("resize", updateLogoSize);
    };
  }, []);

  const products = [
    {
      name: "Flexile",
      url: "https://Flexile.com",
      description: "equity compensation for your team",
    },
    {
      name: "Gumroad",
      url: "https://Gumroad.com",
      description: "sell your work and see what sticks",
    },
    {
      name: "Helper",
      url: "https://Helper.ai",
      description: "help your customers help themselves",
    },
    {
      name: "Iffy",
      url: "https://Iffy.com",
      description: "prevent meanies from abusing your product",
    },
    {
      name: "Shortest",
      url: "https://shortest.com",
      description: "app evals using natural language",
    },
  ];

  const values = [
    {
      title: "Real artists ship",
      icon: <Star size={24} />,
      points: [
        "We ship early and often",
        "We get feedback before shipping more",
        "Use other peoples' code before writing your own",
      ],
    },
    {
      title: "Save others time and energy",
      icon: <Clock size={24} />,
      points: [
        "Time is our most sacred asset",
        "Everything important is where AI can see it",
        "Make shipping easier for everyone, not just you",
      ],
    },
    {
      title: "Less is more",
      icon: <Minus size={24} />,
      points: [
        "We say no by default",
        "No performative busywork",
        "Decrease the stuff one needs to understand to ship",
      ],
    },
    {
      title: "Above and beyond",
      icon: <Zap size={24} />,
      points: [
        "We ship better than we scope",
        "Minimize surface area to maximize polish",
        "Our jobs change constantly–every 3 months",
      ],
    },
    {
      title: "Now or never",
      icon: <Rabbit size={24} />,
      points: [
        "We avoid to-do lists and backlogs",
        "We scope, design, and build at the same time",
        "We focus on impact we can have today, not tomorrow",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen font-sans transition-colors duration-300"
      style={{
        fontFamily: "Helvetica Neue, sans-serif",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-24">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center md:mb-8 xl:mb-16">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="xl:mt-[2px] lg:mt-[1px] md:mt-[0px] mt-[1px]">
              <Logo
                size={logoSize}
                color={textColor}
                background="transparent"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold ml-3">
              Anti-Work
            </h1>
          </div>
          <div
            className="relative hidden sm:block"
            onMouseEnter={() => setShowShortcutHint(true)}
            onMouseLeave={() => setShowShortcutHint(false)}
          >
            <button
              onClick={generateRandomColorsForPage}
              className="p-2 rounded xl:p-4"
              style={{ backgroundColor: textColor, color: backgroundColor }}
            >
              <Shuffle size={24} className="xl:w-8 xl:h-8" />
            </button>
            {showShortcutHint && (
              <div
                className="absolute right-0 mt-2 px-2 py-1 text-xs xl:text-sm rounded"
                style={{ backgroundColor: textColor, color: backgroundColor }}
              >
                Press &apos;S&apos; to shuffle
              </div>
            )}
          </div>
        </header>
        <p
          className="text-sm sm:text-base lg:text-lg xl:text-2xl mb-8 xl:mb-16"
          style={{ color: textColor }}
        >
          A sweet suite of open source software for small businesses and large
          enterprises alike.
        </p>

        <main>
          <section className="mb-8 xl:mb-16">
            <h2 className="text-sm sm:text-base lg:text-lg xl:text-2xl font-bold mb-4 xl:mb-8 uppercase tracking-wide">
              Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="border-t pt-3 xl:pt-6"
                  style={{ borderColor: textColor }}
                >
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold">
                    {product.name}
                  </h3>
                  <p
                    className="text-xs sm:text-sm xl:text-lg mb-2 xl:mb-4"
                    style={{ color: textColor }}
                  >
                    {product.description}
                  </p>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs sm:text-sm xl:text-lg hover:underline"
                    aria-label={`Learn more about ${product.name}`}
                    style={{ color: textColor }}
                  >
                    Learn more{" "}
                    <ArrowUpRight className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
                  </a>
                </div>
              ))}
              <div
                className="border-dashed border-2 xl:pt-6 p-3 pl-6"
                style={{ borderColor: textColor }}
              >
                <div className="flex items-center mb-2 xl:mb-4">
                  <Mail size={24} />
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold ml-2">
                    Suggest a product
                  </h3>
                </div>
                <p
                  className="text-xs sm:text-sm xl:text-lg mb-2 xl:mb-4"
                  style={{ color: textColor }}
                >
                  Know a product we should consider?
                </p>
                <a
                  href="mailto:sahil@antiwork.com"
                  className="inline-flex items-center text-xs sm:text-sm xl:text-lg hover:underline"
                  style={{ color: textColor }}
                >
                  Suggest a product{" "}
                  <ArrowUpRight className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
                </a>
              </div>
            </div>
          </section>

          <section className="mb-8 xl:mb-16">
            <h2 className="text-sm sm:text-base lg:text-lg xl:text-2xl font-bold mb-4 xl:mb-8 uppercase tracking-wide">
              Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="border-t pt-4 xl:pt-8"
                  style={{ borderColor: textColor }}
                >
                  <div className="flex items-center mb-2 xl:mb-4">
                    {value.icon}
                    <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold ml-2">
                      {value.title}
                    </h3>
                  </div>
                  <div className="space-y-2 xl:space-y-4">
                    {value.points.map((point, pointIndex) => (
                      <p
                        key={pointIndex}
                        className="text-xs sm:text-sm xl:text-base"
                        style={{ color: textColor }}
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              <div
                className="border-dashed border-2 pt-4 xl:pt-8 p-4 pl-6"
                style={{ borderColor: textColor }}
              >
                <div className="flex items-center mb-2 xl:mb-4">
                  <Heart size={24} />
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold ml-2">
                    Join Us
                  </h3>
                </div>
                <p
                  className="text-xs sm:text-sm xl:text-base"
                  style={{ color: textColor }}
                >
                  We&apos;re always looking for talented individuals to join our
                  team. If you resonate with our values, we&apos;d love to hear
                  from you!
                </p>
                <a
                  href="https://jobs.antiwork.com"
                  className="inline-flex items-center text-xs sm:text-sm xl:text-lg hover:underline mt-2"
                  style={{ color: textColor }}
                >
                  Apply now{" "}
                  <ArrowUpRight className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export function Page() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            textAlign: "center",
          }}
        >
          ▼▼
        </div>
      }
    >
      <PageContent />
    </Suspense>
  );
}
