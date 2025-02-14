import React from "react";

const BlogCard = ({
  image,
  title,
  subTitle,
  category,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="py-6 flex flex-col gap-2 items-center justify-center border-b-[1px] border-b-zinc-800 group">
      <div className="w-full h-full mb-2 overflow-hidden relative cursor-pointer">
        <img
          className="w-full h-48 object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
          src={image}
          alt="blogImgOne"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-designColor border-[1px] border-designColor px-2">
          {title}
        </span>
        <h2 className="text-base text-center font-semibold font-titleFont text-[#ccc] group-hover:text-designColor duration-300">
          {subTitle}
        </h2>
        <p className="text-sm -mt-1 text-gray-400">{category}</p>
        <div className="flex items-center gap-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-y-designColor p-1 px-2 rounded-md bg-transparent hover:bg-designColor/30 duration-300"
          >
            Live Link
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-y-designColor p-1 px-2 rounded-md bg-transparent hover:bg-designColor/30 duration-300"
          >
            GitHub Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
