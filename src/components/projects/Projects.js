import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
          <div
            className="px-6 "
            style={{
              border: "1px solid yellow",
              boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
            }}
          >
            <ProjectsCard
              className=""
              title="Tree Plantish"
              category="Website"
              image={workImgThree}
              githubLink="https://github.com/your-repo-blog"
              liveLink="https://your-live-demo-blog.com"
            />
          </div>
          <div
            className="px-6 "
            style={{
              border: "1px solid yellow",
              boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
            }}
          >
            <ProjectsCard
              className=""
              title="Tree Plantish"
              category="Website"
              image={workImgThree}
              githubLink="https://github.com/your-repo-blog"
              liveLink="https://your-live-demo-blog.com"
            />
          </div>
          <div
            className="px-6 "
            style={{
              border: "1px solid yellow",
              boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
            }}
          >
            <ProjectsCard
              className=""
              title="Tree Plantish"
              category="Website"
              image={workImgThree}
              githubLink="https://github.com/your-repo-blog"
              liveLink="https://your-live-demo-blog.com"
            />
          </div>
          <div
            className="px-6 "
            style={{
              border: "1px solid yellow",
              boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
            }}
          >
            <ProjectsCard
              className=""
              title="Tree Plantish"
              category="Website"
              image={workImgThree}
              githubLink="https://github.com/your-repo-blog"
              liveLink="https://your-live-demo-blog.com"
            />
          </div>
          <div
            className="px-6 "
            style={{
              border: "1px solid yellow",
              boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
            }}
          >
            <ProjectsCard
              className=""
              title="Tree Plantish"
              category="Website"
              image={workImgThree}
              githubLink="https://github.com/your-repo-blog"
              liveLink="https://your-live-demo-blog.com"
            />
          </div>
          <div
            className="px-6 "
            style={{
              border: "1px solid yellow",
              boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
            }}
          >
            <ProjectsCard
              className=""
              title="Tree Plantish"
              category="Website"
              image={workImgThree}
              githubLink="https://github.com/your-repo-blog"
              liveLink="https://your-live-demo-blog.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
