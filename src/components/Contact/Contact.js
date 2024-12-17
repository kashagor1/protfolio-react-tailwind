import React from "react";
import Layout from "../Layout/Layout";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <section id="contact" className="w-full h-auto py-20  border-b-[1px]">
      <div className="text-center">
        <Layout title="CONTACT" des="Contact With Me" />
      </div>
      <div className="flex flex-col gap-10 justify-between lg:flex-row">
        <ContactLeft />
        <ContactRight />
      </div>
    </section>
  );
};
export default Contact;
