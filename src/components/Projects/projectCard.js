import React from "react";
import { logo } from "../../assets/index";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
const PCard = ({ name, des, git, web, src }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-40 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-5">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {name}
            </h3>
            <div className="flex gap-2">
              <a href={git} target="_blank">
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-500 cursor">
                  <BsGithub />
                </span>
              </a>
              <a href={web} target="_blank">
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-500 cursor-pointer">
                  <FaGlobe />
                </span>
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ name, des, git, web, src }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="overflow-hidden  duration-500 rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="mt-5">
        <div className="flex justify-between items-center">
          <h3 className="text-base uppercase text-designColor font-normal">
            {name}
          </h3>
          <div className="flex gap-2">
            <span className="bg-black text-xl inline-flex text-gray-500 h-10 w-10 justify-center items-center rounded-full hover:text-designColor hover:scale-105 duration-500">
              <BsGithub />
            </span>
            <span className="bg-black text-xl inline-flex text-gray-500 h-10 w-10 justify-center items-center rounded-full hover:text-designColor hover:scale-105 duration-500">
              <FaGlobe />
            </span>
          </div>
        </div>
        <div className="mt-4 text-lightText text-sm font-bodyFont">
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
};

export { PCard, ProjectCard };
