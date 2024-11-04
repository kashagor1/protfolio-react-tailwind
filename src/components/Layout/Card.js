import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ icon, title, des }) => {
  return (
    <div className="flex w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne items-center bg-gradient-to-b from-bodyColor to-[#202327] group-hover:bg-gradient-to-r hover:from-black hover:to-[#1e2024] duration-100 group">
      <div className="h-70 overflow-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
          <div>
            <span className="text-5xl text-designColor">{icon}</span>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="font-bodyFont text-gray-400">{des}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
