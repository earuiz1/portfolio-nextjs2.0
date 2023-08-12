import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendContactForm } from "@/utils/apiUtils";
import { ModalContext } from "@/app/context/ModalContext";

export interface FormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const ModalOverlay = () => {
  const { closeModal } = useContext(ModalContext);
  // const [success, setSuccess] = useState(false);
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
        // setSuccess(true);
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
    <div className="fixed inset-0 z-[50] flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative w-[80%] rounded bg-white p-6 shadow-lg">
          {/* {!success ? (
            <div className="mx-auto flex w-[60%] items-center justify-center bg-green-300 py-2 mb-4 ">
              <p className="font-medium text-slate-900">Message Sent!</p>
            </div>
          ) : null}
           */}
            <h2 className="text-lg font-semibold w-full text-center mb-4">Contact Us</h2>
            <button
              className=" absolute top-2 right-4
          text-slate-950"
              onClick={closeModal}
            >
              X
            </button>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="relative z-0">
            <input
              type="text"
              id="floating_fullName"
              {...register("fullName")}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-800 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="floating_fullName"
              className="absolute top-3 -z-10 origin-[0] -translate-y-7 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-600"
            >
              Full Name
            </label>
          </div>
          <div className="relative z-0">
            <input
              type="email"
              id="floating_email"
              {...register("email")}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-800 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              className="absolute top-3 -z-10 origin-[0] -translate-y-7 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-600 "
            >
              Email
            </label>
          </div>
          <div className="relative z-0">
            <input
              type="text"
              id="floating_subject"
              {...register("subject")}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-800 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="floating_subject"
              className="absolute top-3 -z-10 origin-[0] -translate-y-7 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-600 "
            >
              Subject
            </label>
          </div>
          <div className="relative z-0">
            <textarea
              id="floating_textArea"
              {...register("message")}
              className="peer block h-32 w-full appearance-none border-0 border-b-2 border-gray-800 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="floating_textArea"
              className="absolute top-3 -z-10 origin-[0] -translate-y-7 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-600"
            >
              Message
            </label>
          </div>
          <button className="self-end rounded-md bg-slate-900 px-3 py-2 text-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalOverlay;
