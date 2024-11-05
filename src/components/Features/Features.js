import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Layout/Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px]">
      <Layout title="Feature" des="What I Do" />
      <div className="grid grid-cols-3 gap-10">
        <Card
          icon={<FaGlobe />}
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
        />
        <Card
          icon={<FaGlobe />}
          title="Hosting Websites"
          des="This is going to be the description for the card inside features section."
        />
        <Card
          icon={<FaGlobe />}
          title="Hosting Websites"
          des="This is going to be the description for the card inside features section."
        />
        <Card
          icon={<FaGlobe />}
          title="Hosting Websites"
          des="This is going to be the description for the card inside features section."
        />
        <Card
          icon={<FaGlobe />}
          title="Hosting Websites"
          des="This is going to be the description for the card inside features section."
        />
        <Card
          icon={<FaGlobe />}
          title="Hosting Websites"
          des="This is going to be the description for the card inside features section."
        />
      </div>
    </section>
  );
};
export default Features;
