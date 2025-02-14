import React from "react";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";

const Contact = () => {
  return (
    <div className="w-full">
      <Title title="Get" subTitle="in Touch" />
      <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Address:
            </span>
            Dhaka
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Phone:
            </span>
            01910255376
          </p>
        </div>
        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between  text-sm lgl:gap-6 w-full  text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Email:
            </span>
            <span className="text-xs"> yeasinmiah1272001@gmail.com</span>
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Freelance:
            </span>
            Available
          </p>
        </div>
      </div>
      <div className="w-full">
        <Title title="Send" subTitle="Messages" />

        <form
          id="form"
          action="https://getform.io/f/e18ee560-5133-4cfe-9a48-eddb6f012a9f"
          method="POST"
          className="p-6 flex flex-col gap-6"
        >
          <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between">
            <input
              className="w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <textarea
            className="w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300 resize-none"
            placeholder="Your Message"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200"
          >
            Send Message{" "}
            <span className="mt-1 text-designColor">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
