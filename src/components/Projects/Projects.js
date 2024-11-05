import React from "react";
import Layout from "../Layout/Layout";
import { ProjectCard } from "./projectCard";
import { logo } from "../../assets/index";
const Project = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px]">
      <div className="flex flex-col items-center justify-center text-center">
        <Layout
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-3 gap-10">
        <ProjectCard
          name="this"
          des="This is descrtipiton one"
          git=""
          web=""
          src={logo}
        />
        <ProjectCard
          name="this"
          des="This is descrtipiton two"
          git=""
          web=""
          src={logo}
        />

        <ProjectCard
          name="this"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          git=""
          web=""
          src={logo}
        />
        <ProjectCard
          name="this"
          des="This is descrtipiton four"
          git=""
          web=""
          src={logo}
        />
        <ProjectCard
          name="this"
          des="This is descrtipiton five"
          git=""
          web=""
          src={logo}
        />
        <ProjectCard
          name="this"
          des="This is descrtipiton six"
          git=""
          web=""
          src={logo}
        />
      </div>
    </section>
  );
};

export default Project;
