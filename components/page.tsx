"use client";

import {
  ArrowUpRight,
  Shuffle,
  Sparkles,
  Heart,
  Hammer,
  Trophy,
  Rocket,
  Mail,
  Send,
} from "lucide-react";
import { useState, useEffect, useCallback, Suspense } from "react";
import { Logo } from "@/app/components/Logo";
import { useRouter, useSearchParams } from "next/navigation";
import { generateRandomColors } from "@/utils/colors";
import { Confetti } from "@/components/magicui/confetti";

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
      description: "team and shareholder management",
      icon: <Trophy size={24} />,
    },
    {
      name: "Gumroad",
      url: "https://Gumroad.com",
      description: "sell your stuff. see what sticks",
      icon: <Rocket size={24} />,
    },
    {
      name: "Helper",
      url: "https://Helper.ai",
      description: "customer support AI",
      icon: <Mail size={24} />,
    },
    {
      name: "Iffy",
      url: "https://Iffy.com",
      description: "keep your product clean",
      icon: <Hammer size={24} />,
    },
    {
      name: "Shortest",
      url: "https://shortest.com",
      description: "QA via natural language AI tests",
      icon: <Sparkles size={24} />,
    },
  ];

  const values = [
    {
      title: "make Work play",
      icon: <Sparkles size={24} />,
      points: [
        "ship products that make work fun",
        "build our office like a playground",
        "celebrate wins big and small",
      ],
    },
    {
      title: "meaning over money",
      icon: <Heart size={24} />,
      points: [
        "measure success by impact",
        "offer equity to everyone",
        "prioritize purpose-driven projects",
      ],
    },
    {
      title: "build for builders",
      icon: <Hammer size={24} />,
      points: [
        "open-source everything",
        "teach what we know",
        "champion creative expression",
      ],
    },
    {
      title: "ship world-class software",
      icon: <Trophy size={24} />,
      points: [
        "craft with pride",
        "play with the best",
        "seek feedback on everything from everyone",
      ],
    },
    {
      title: "every day anew",
      icon: <Rocket size={24} />,
      points: [
        "stay nimble and embrace change",
        "fire yourself into new challenges",
        "reject performative busywork",
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
      <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12 md:px-6 lg:px-8 lg:py-16 xl:py-24">
        <header className="flex flex-col items-start justify-between sm:flex-row sm:items-center md:mb-8 xl:mb-16">
          <div className="mb-4 flex items-center md:mb-0">
            <div className="mt-[1px] md:mt-[0px] lg:mt-[1px] xl:mt-[2px]">
              <Logo
                size={logoSize}
                color={textColor}
                background="transparent"
              />
            </div>
            <h1 className="ml-3 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-6xl">
              Antiwork
            </h1>
          </div>
          <div
            className="relative hidden sm:block"
            onMouseEnter={() => setShowShortcutHint(true)}
            onMouseLeave={() => setShowShortcutHint(false)}
          >
            <button
              onClick={generateRandomColorsForPage}
              className="rounded p-2 xl:p-4"
              style={{ backgroundColor: textColor, color: backgroundColor }}
            >
              <Shuffle size={24} className="xl:h-8 xl:w-8" />
            </button>
            {showShortcutHint && (
              <div
                className="absolute right-0 mt-2 rounded px-2 py-1 text-xs xl:text-sm"
                style={{ backgroundColor: textColor, color: backgroundColor }}
              >
                Press &apos;S&apos; to shuffle
              </div>
            )}
          </div>
        </header>
        <p
          className="mb-8 text-sm font-bold sm:text-base lg:text-lg xl:mb-16 xl:text-4xl"
          style={{ color: textColor }}
        >
          on a mission to make <span title="boring, rote">Work</span>{" "}
          <span title="fun, creative">play</span>.
        </p>

        <main>
          <section className="mb-8 xl:mb-16">
            <p className="text-sm sm:text-base lg:text-lg xl:mb-16 xl:text-2xl">
              we build software that liberates creative builders from what they
              consider toil—whether it&apos;s{" "}
              <a
                href="https://shortest.com"
                className="hover:underline"
                title="Shortest: QA via natural language AI tests"
                style={{ color: textColor }}
              >
                QA
              </a>
              ,{" "}
              <a
                href="https://Iffy.com"
                className="hover:underline"
                title="Iffy: keep your product clean"
                style={{ color: textColor }}
              >
                moderation
              </a>
              ,{" "}
              <a
                href="https://Helper.ai"
                className="hover:underline"
                title="Helper: customer support AI"
                style={{ color: textColor }}
              >
                customer support
              </a>
              , or{" "}
              <a
                href="https://Flexile.com"
                className="hover:underline"
                title="Flexile: team and shareholder management"
                style={{ color: textColor }}
              >
                payroll
              </a>
              .
            </p>
          </section>

          <section className="mb-8 xl:mb-16">
            <h2 className="mb-8 text-sm font-bold tracking-wide sm:text-base lg:text-lg xl:text-4xl">
              made with love
            </h2>
            <div className="grid grid-cols-1 gap-8 xl:gap-12">
              {products.map((product) => (
                <div key={product.name} style={{ borderColor: textColor }}>
                  <div className="mb-2 flex items-center xl:mb-4">
                    {product.icon}
                    <h3 className="ml-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
                      <a
                        href={product.url}
                        className="hover:underline"
                        style={{ color: textColor }}
                      >
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p
                    className="text-xs sm:text-sm xl:text-base"
                    style={{ color: textColor }}
                  >
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8 xl:mb-16">
            <h2 className="mb-8 text-sm font-bold tracking-wide sm:text-base lg:text-lg xl:text-4xl">
              rules of the playground
            </h2>
            <div className="grid grid-cols-1 gap-8 xl:gap-12">
              {values.map((value) => (
                <div key={value.title} style={{ borderColor: textColor }}>
                  <div className="mb-2 flex items-center xl:mb-4">
                    {value.icon}
                    <h3 className="ml-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
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
            </div>
          </section>

          <section className="mb-8 xl:mb-16">
            <h2 className="mb-8 text-sm font-bold tracking-wide sm:text-base lg:text-lg xl:text-4xl">
              stay in the loop
            </h2>
            <div
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              style={{ border: `2px solid ${textColor}` }}
            >
              <input
                type="email"
                placeholder="your email"
                className="flex-1 bg-transparent px-4 py-2 text-sm placeholder-current sm:text-base lg:text-lg xl:text-xl"
                style={{
                  color: textColor,
                }}
              />
              <div
                className="relative"
                onMouseEnter={() => setShowShortcutHint(true)}
                onMouseLeave={() => setShowShortcutHint(false)}
              >
                <Confetti
                  options={{
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.7 },
                    shapes: ["triangle"],
                    colors: ["#26ccff", "#a25afd", "#ff5e7e"],
                  }}
                  manualstart={true}
                >
                  <button
                    onClick={generateRandomColorsForPage}
                    className="p-2 xl:p-4"
                    style={{
                      backgroundColor: textColor,
                      color: backgroundColor,
                    }}
                  >
                    <Send size={24} className="xl:h-8 xl:w-8" />
                  </button>
                </Confetti>
                {showShortcutHint && (
                  <div
                    className="absolute right-0 mt-2 px-2 py-1 text-xs xl:text-sm"
                    style={{
                      backgroundColor: textColor,
                      color: backgroundColor,
                    }}
                  >
                    Press &apos;S&apos; to shuffle
                  </div>
                )}
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
