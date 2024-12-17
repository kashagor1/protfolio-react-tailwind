import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Education from "./Edu";
import Skills from "./Skills";
import Experience from "./Experience";
import Achivement from "./Achivements";
import { FaL } from "react-icons/fa6";

const Resume = () => {
  const [Edu, setEdu] = useState(true);
  const [Skil, setSkil] = useState(false);
  const [Exper, setExper] = useState(false);
  const [Achi, setAchi] = useState(false);

  return (
    <section id="resume" className="w-full h-auto py-20  border-b-[1px]">
      <div className="text-center">
        <Layout title="7+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <li
            className={`${
              Edu ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
            onClick={() =>
              setEdu(true) & setSkil(false) & setExper(false) & setAchi(false)
            }
          >
            Education
          </li>
          <li
            className={`${
              Skil ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
            onClick={() =>
              setEdu(false) & setSkil(true) & setExper(false) & setAchi(false)
            }
          >
            Professional Skills
          </li>
          <li
            className={`${
              Exper ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
            onClick={() =>
              setEdu(false) & setSkil(false) & setExper(true) & setAchi(false)
            }
          >
            Experience
          </li>
          <li
            className={`${
              Achi ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
            onClick={() =>
              setEdu(false) & setSkil(false) & setExper(false) & setAchi(true)
            }
          >
            Achivements
          </li>
        </ul>
      </div>
      {Edu && <Education />}
      {Skil && <Skills />}
      {Exper && <Experience />}
      {Achi && <Achivement />}
    </section>
  );
};
export default Resume;
