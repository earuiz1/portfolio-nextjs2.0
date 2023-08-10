"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendContactForm } from "@/utils/apiUtils";

export interface FormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactContent = () => {
  const validationSchema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async ({
    fullName,
    email,
    subject,
    message,
  }: FormValues) => {
    try {
      const response = await sendContactForm({
        fullName,
        email,
        subject,
        message,
      });

      // Process the response if needed
      if (response.success) {
        // Handle success
        console.log("Email sent successfully!");
        reset();
        // ...
      } else {
        // Handle error
        console.error("Failed to send email:", response.error);
        // ...
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error if the API request fails
    }
  };
  return (
    <>
      <SectionTitle title="Let's Connect" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-3 rounded-md bg-slate-950/40 p-8"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-primary"
          >
            Full Name
          </label>
          <input
            type="text"
            {...register("fullName")}
            className={`rounded-md border border-b-4 border-primary bg-transparent p-3 text-primary/80 placeholder:text-sm  focus:border-b-[#9A47F2] focus:outline-none ${
              errors.fullName && "border-b-red-600"
            }`}
            placeholder="Enter full name..."
          />
          <p className="text-sm text-red-600">{errors.fullName?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-primary">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className={`rounded-md border border-b-4 border-primary bg-transparent p-3 text-primary/80 placeholder:text-sm  focus:border-b-[#9A47F2] focus:outline-none ${
              errors.email && "border-b-red-600"
            }`}
            placeholder="Enter Email..."
          />
          <p className="text-sm text-red-600">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm font-medium text-primary">
            Subject
          </label>
          <input
            type="text"
            {...register("subject")}
            className={`rounded-md border border-b-4 border-primary bg-transparent p-3 text-primary/80 placeholder:text-sm  focus:border-b-[#9A47F2] focus:outline-none ${
              errors.subject && "border-b-red-600"
            }`}
            placeholder="Enter Subject..."
          />
          <p className="text-sm text-red-600">{errors.subject?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-primary">
            Message
          </label>
          <textarea
            {...register("message")}
            className={`h-32 resize-none rounded-md border border-b-4 border-primary bg-transparent p-3 text-primary/80 placeholder:text-sm focus:border-b-[#9A47F2] focus:outline-none ${
              errors.message && "border-b-red-600"
            }`}
            placeholder="Enter Message..." // Adjust 'h-32' to change the height
          />
          <p className="text-sm text-red-600">{errors.message?.message}</p>
        </div>
        <button
          type="submit"
          className="mx-auto mt-8 w-full rounded-md bg-primary py-3 font-medium text-[#9A47F2] md:w-[30%]"
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactContent;
