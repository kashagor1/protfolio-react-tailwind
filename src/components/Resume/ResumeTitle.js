import React from "react";

const ResumeTitle = ({ title, subtitle }) => {
  return (
    <div className="py-10 lgl:py-12 font-titleFont flex flex-col gap-4">
      <p className="text-sm text-designColor tracking-[4px] uppercase">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
    </div>
  );
};
export default ResumeTitle;
