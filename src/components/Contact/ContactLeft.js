import React from "react";
import { logo } from "../../assets";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lg:w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] py-10 p-4 lg:p-8  flex flex-col rounded-lg shadow-shadowOne">
      <img className="w-full rounded-lg h-40 object-cover mb-2" src={logo} />
      <div className="flex flex-col mt-8 gap-4 text-gray-400 tracking-wide text-base ">
        <p className="text-3xl font-titleFont font-bold text-white ">
          S M KHIRUL ALAM
        </p>
        <p className="text-lg tracking-wide">Full Stack Developer</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="">
          Phone:{" "}
          <span className="text-white text-opacity-80">+880 1311857092</span>
        </p>
        <p className="">
          Email:{" "}
          <span className="text-white text-opacity-80">
            ka.shagor1@gmail.com
          </span>
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-md my-4 font-thin text-gray-200 ">FIND ME IN</p>
        <div className="flex gap-4 pt-2">
          <span className="bannerIcon">
            <a href="#">
              <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="#">
              <FaTwitter />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="#linkedin">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default ContactLeft;
