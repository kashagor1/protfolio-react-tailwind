import React from "react";
import LeftBanner from "./LeftBanner";
import { logo } from "../../assets/index";
import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full flex items-center font-titleFont h-[800px] pb-20  border-b-[1px]"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};
export default Banner;
