import React from "react";

const Layout = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="font-light uppercase text-sm text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="capitalize font-bold text-gray-300 md:text-6xl text-4xl">
        {des}
      </h1>
    </div>
  );
};

export default Layout;
