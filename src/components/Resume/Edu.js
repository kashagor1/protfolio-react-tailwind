import React from "react";
// import { motion } from "framer-motion";
import RCard from "./ResumeCard";
import ResumeTitle from "./ResumeTitle";

const Education = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
      {/* part one */}
      <div>
        <ResumeTitle title="Education" subtitle="2016-2024" />

        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <RCard
            title="BSc. - Computer Science & Engineering"
            subtitle="National University (2019-2024)"
            result="3.5/4"
            desc="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <RCard
            title="BSc. - Computer Science & Engineering"
            subtitle="National University (2019-2024)"
            result="3.5/4"
            desc="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <RCard
            title="BSc. - Computer Science & Engineering"
            subtitle="National University (2019-2024)"
            result="3.5/4"
            desc="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <ResumeTitle title="Education" subtitle="2016-2024" />

        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <RCard
            title="BSc. - Computer Science & Engineering"
            subtitle="National University (2019-2024)"
            result="3.5/4"
            desc="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <RCard
            title="BSc. - Computer Science & Engineering"
            subtitle="National University (2019-2024)"
            result="3.5/4"
            desc="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <RCard
            title="BSc. - Computer Science & Engineering"
            subtitle="National University (2019-2024)"
            result="3.5/4"
            desc="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
