import React from "react";
import { logo } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-1/2 flex justify-center items-center relative">
      <img className="w-[300px] h-[450px] z-10" src={logo} alt="BannerImg" />
      <div className="absolute z-1 bottom-0 w-[400px] h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};
export default RightBanner;
