import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">
            Hello! I'm <strong>Yeasin Miah</strong>{" "}
          </h2>
          <p className="text-base leading-6 ">
            I'm a Frontend Developer skilled in HTML, CSS, and React.js,
            expanding my expertise in Next.js and TypeScript. I focus on
            creating responsive, user-friendly web applications using Tailwind
            CSS. I've worked across various industries, from agencies to
            startups, delivering modern solutions.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            23
          </li>

          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Dhaka, Lalbag
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
