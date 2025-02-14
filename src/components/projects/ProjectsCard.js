import { GoDot } from "react-icons/go";

const ProjectsCard = ({
  image,
  title,
  category,
  githubLink,
  liveLink,
  des1,
  des2,
  des3,
}) => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center bg-gray-900 border-b-[1px] border-b-zinc-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="w-full h-64 md:w-full md:h-72 overflow-hidden relative rounded-lg shadow-md">
        <img
          className="h-full w-full object-cover rounded-lg group-hover:scale-110 duration-300"
          src={image}
          alt={title}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600 to-green-200 opacity-30"></div>
      </div>

      {/* Details Section */}
      <div className="w-full md:w-2/3 mt-4 md:mt-0 pl-0 md:pl-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-base text-gray-400 mb-4">{category}</p>

        {/* Description */}
        <ul className="space-y-2 text-gray-300 text-xs">
          <div className="flex items-center gap-1">
            <GoDot size={20} className="text-designColor" />
            <li>{des1}</li>
          </div>
          <div className="flex items-center gap-1">
            <GoDot size={20} className="text-designColor" />
            <li>{des2}</li>
          </div>
          <div className="flex items-center gap-1">
            <GoDot size={20} className="text-designColor" />
            <li>{des3}</li>
          </div>
        </ul>

        {/* Buttons */}
        <div className="space-x-2 mt-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-y-designColor p-1 px-4 rounded-md bg-transparent hover:bg-designColor/30 duration-300"
          >
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-y-designColor p-1 px-2 rounded-md bg-transparent hover:bg-designColor/30 duration-300"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
