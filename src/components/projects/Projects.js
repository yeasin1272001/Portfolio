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
    <div className="p-3">
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full ">
        <div className=" grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-10">
          <div
            className=" "
            style={{
              border: "1px solid yellow",
              boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
            }}
          >
            <ProjectsCard
              className=""
              title="Tree Plantish"
              category="Website"
              des1=" Next.js, TypeScript, Tailwind CSS"
              des2="Framer Motion, Carousel, Marquee."
              des3="Stripe.js, Redux, scalable architecture."
              image={workImgOne}
              githubLink="https://github.com/yeasinmiah1272001/Tree-Plantation"
              liveLink="https://tree-plantation.vercel.app/"
            />
          </div>
          <div
            style={{
              border: "1px solid yellow",
              boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
            }}
          >
            <ProjectsCard
              className=""
              title="Online News Portal"
              category="Website"
              des1="React, Tailwind CSS,TanStack Query, Firebase"
              des2="Node.js, Express.js, Mongoose, MongoD"
              des3="Server on Vercel."
              image={workImgFour}
              githubLink="https://github.com/yeasinmiah1272001/Newspaer-clent-side/tree/main/webNewsWeb-clinet-main"
              liveLink="https://webnewswave-client.web.app"
              Sever="https://github.com/yeasinmiah1272001/Newspaer-clent-side/tree/main/webNewsWeb-server-v1-main/webNewsWeb-server-v1-main"
            />
          </div>

          <div
            style={{
              border: "1px solid yellow",
              boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
            }}
          >
            <ProjectsCard
              className=""
              title="Doctor Appointment"
              category="Website"
              des1="Framer Motion, Carousel, Marquee."
              des2="Framer Motion, Carousel, Marquee."
              des3="Framer Motion, Carousel, Marquee."
              image={workImgThree}
              liveLink="https://doctor-client-lovat.vercel.app"
              githubLink="https://github.com/yeasinmiah1272001/Doctor-Client"
              Sever="https://github.com/yeasinmiah1272001/Doctor-Server"
            />
          </div>

          <div
            style={{
              border: "1px solid yellow",
              boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
            }}
          >
            <ProjectsCard
              className=""
              title="E-Commarce-Shofy"
              category="Website"
              des1="Framer Motion, Carousel, Marquee."
              des2="Framer Motion, Carousel, Marquee."
              des3="Framer Motion, Carousel, Marquee."
              image={workImgTwo}
              githubLink="https://github.com/yeasinmiah1272001/shofy-practice-main"
              liveLink="https://shofyproject.vercel.app"
            />
          </div>
          <div
            style={{
              border: "1px solid yellow",
              boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
            }}
          >
            <ProjectsCard
              className=""
              title="Tree Plantish"
              des1="Framer Motion, Carousel, Marquee."
              des2="Framer Motion, Carousel, Marquee."
              des3="Framer Motion, Carousel, Marquee."
              category="Website"
              image={workImgThree}
              githubLink="https://github.com/your-repo-blog"
              liveLink="https://your-live-demo-blog.com"
            />
          </div>
          <div
            style={{
              border: "1px solid yellow",
              boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
            }}
          >
            <ProjectsCard
              className=""
              title="Tree Plantish"
              category="Website"
              des1="Framer Motion, Carousel, Marquee."
              des2="Framer Motion, Carousel, Marquee."
              des3="Framer Motion, Carousel, Marquee."
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
