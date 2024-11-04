import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const SocialMediaLinks = () => {
  return (
    <div style={styles.container}>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        <FaFacebook size={25} />
      </a>
      <a
        href="https://www.github.com"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        <FaGithub size={25} />
      </a>

      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        <FaInstagram size={25} />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        <FaLinkedin size={25} />
      </a>
    </div>
  );
};

const DevProfileLinks = () => {
  return (
    <div style={styles.container}>
      <a href="" target="_blank" rel="noopener noreferrer" style={styles.link}>
        <FaGithub size={25} />
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "15px",
    marginTop: "10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Competetive Programmer.",
      "Full Stack Developer.",
      "Backend Developer.",
      "Wordpress Specialist.",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-1/2 py-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">S M Khirul Alam</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a{" "}
          <span>
            {text}{" "}
            <Cursor
              cursorBlinking="false"
              cursorType="|"
              cursorColor="#ff014f"
            />{" "}
          </span>
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I’m a Fullstack cum Backend Developer with expertise in both
          server-side and client-side development. I build robust applications
          by seamlessly integrating front-end interfaces with efficient,
          scalable backend logic and data structures. I’m skilled in
          technologies like JavaScript, Node.js, SQL/NoSQL databases, and
          frameworks like Express or Django, bridging the gap between user
          experience and server functionality.
        </p>
        <div className="flex text-lightText font-bold justify-between items-center">
          <div className="w-1/2 py-10">
            <h1>Connect with me</h1>
            <SocialMediaLinks />
          </div>
          <div className="w-1/2 py-10">
            <h1>See my works</h1>
            <DevProfileLinks />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftBanner;
