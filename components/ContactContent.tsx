import React from "react";
import SectionTitle from "./SectionTitle";

const ContactContent = () => {
  return (
    <>
      <SectionTitle title="Let's Connect" />
      <form className="flex w-full flex-col gap-3 rounded-md bg-slate-950/40 p-8">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-primary"
          >
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            className="rounded-md border border-b-4 border-primary bg-transparent p-3 text-primary/80 placeholder:text-sm  focus:border-b-[#9A47F2] focus:outline-none"
            placeholder="Enter full name..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-primary">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="rounded-md border border-b-4 border-primary bg-transparent p-3 text-primary/80 placeholder:text-sm  focus:border-b-[#9A47F2] focus:outline-none"
            placeholder="Enter Email..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm font-medium text-primary">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="rounded-md border border-b-4 border-primary bg-transparent p-3 text-primary/80 placeholder:text-sm  focus:border-b-[#9A47F2] focus:outline-none"
            placeholder="Enter Subject..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-primary">
            Message
          </label>
          <textarea
            name="message"
            className="h-32 resize-none rounded-md border border-b-4 border-primary bg-transparent p-3 text-primary/80 placeholder:text-sm focus:border-b-[#9A47F2] focus:outline-none"
            placeholder="Enter Message..." // Adjust 'h-32' to change the height
          ></textarea>
        </div>
        <button className="mx-auto mt-8 w-full rounded-md bg-primary py-3 font-medium text-[#9A47F2] md:w-[30%] lg:w-[20%]">
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactContent;
