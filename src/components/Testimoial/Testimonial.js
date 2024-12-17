import React, { useState } from "react";
import Layout from "../Layout/Layout";
const Testimonial = () => {
  const [shoT, setShot] = useState(false);
  return (
    <section
      id="testimonial"
      className="w-full h-[800px] py-20  border-b-[1px]"
    >
      <div className="text-center">
        <Layout title="WHAT CLIENTS SAY" des="Testimonial" />
        <button className="w-[120px] rounded-lg py-2 text-white text-sm font-bodyFont bg-gradient-to-r -from-sky-400  -to-sky-600    shadow-shadowOne">
          Apply Now
        </button>
      </div>
    </section>
  );
};
export default Testimonial;
