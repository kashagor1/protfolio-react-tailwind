import React from "react";
import Layout from "../Layout/Layout";
import ResumeTitle from "./ResumeTitle";
import RCard from "./ResumeCard";
import Education from "./Edu";

const Resume = () => {
  return (
    <section id="resume" className="w-full h-auto py-20  border-b-[1px]">
      <div className="text-center">
        <Layout title="7+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <li className="resumeLi">Education</li>
          <li className="resumeLi">Professional Skills</li>
          <li className="resumeLi">Experience</li>
          <li className="resumeLi">Achivements</li>
        </ul>
      </div>
      <Education />
    </section>
  );
};
export default Resume;
