import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import NavBar from "./components/navbar/NavBar";
import Project from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Testimonial from "./components/Testimoial/Testimonial";
export default function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-white">
      <div className="max-w-screen-2xl mx-auto px-16">
        <NavBar />
        <Banner />
        <Features />
        <Project />
        <Resume />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}
