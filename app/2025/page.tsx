"use client";

import { SlideDeck } from "@/components/SlideDeck";
import Slide1 from "./slides/1";
import Slide2 from "./slides/2";
import Slide4 from "./slides/4";
import Slide5 from "./slides/5";
import Slide6 from "./slides/6";
import Slide7 from "./slides/7";
import Slide8 from "./slides/8";
import Slide9 from "./slides/9";
import Slide10 from "./slides/10";
import Slide11 from "./slides/11";
import Slide12 from "./slides/12";
import Slide13 from "./slides/13";
import Slide14 from "./slides/14";
import Slide15 from "./slides/15";
import Slide16 from "./slides/16";
import Slide18 from "./slides/18";

export default function AnnualMeeting() {
  const slides = [
    <Slide1 key={1} />,
    <Slide2 key={2} />,
    <Slide4 key={4} />,
    <Slide5 key={5} />,
    <Slide6 key={6} />,
    <Slide7 key={7} />,
    <Slide9 key={9} />,
    <Slide10 key={10} />,
    <Slide11 key={11} />,
    <Slide12 key={12} />,
    <Slide13 key={13} />,
    <Slide14 key={14} />,
    <Slide15 key={15} />,
    <Slide8 key={8} />,
    <Slide16 key={16} />,
    <Slide18 key={18} />,
  ];

  return <SlideDeck slides={slides} />;
}
