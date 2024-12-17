import React from "react";
import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <section id="contact" className="w-full h-[800px] py-20  border-b-[1px]">
      <div className="text-center">
        <Layout title="CONTACT" des="Contact With Me" />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-col w-full">
          <p>THis is column a</p>
        </div>
        <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
          <form>
            <div className="flex flex-col lg:flex-row w-full">
              <div className="flex-col">
                <div className="w-full">
                  <p className="text-gray-400 uppercase tracking-wide">
                    YOUR NAME
                  </p>
                  <input className="false contactInput" type="text"></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
