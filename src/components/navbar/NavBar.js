import { Link, link } from "react-scroll";
import React from "react";
import { logo } from "../../assets/index";
import navData from "../../constants";
const NavBar = () => {
  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center border-b-[1px] border-b-lightText">
      <div>
        <img className="rounded-3xl h-12" src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navData.map(({ __id, title, link }) => (
            <li
              className="text-gray-200 tracking-wide font-normal hover:text-red-600 duration-300"
              key={__id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
