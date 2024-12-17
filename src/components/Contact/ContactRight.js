import React from "react";

const ContactRight = () => {
  return (
    <div className="w-full lg:w-[60%] h-96 py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lg:p-8 rounded-lg shadow-shadowOne">
      <form>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex-col">
            <div className="w-full">
              <p className="text-gray-400 uppercase tracking-wide">YOUR NAME</p>
              <input className="false contactInput" type="text"></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactRight;
