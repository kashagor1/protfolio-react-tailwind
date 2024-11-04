import React from "react";

const Layout = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 mb-14">
      <h3 className="font-thin text-xl text-designColor">{title}</h3>
      <h1 className="font-titleFont font-bold text-white text-6xl">{des}</h1>
    </div>
  );
};

export default Layout;
