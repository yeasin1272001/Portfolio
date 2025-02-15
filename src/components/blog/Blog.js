import React from "react";
import Title from "../home/Title";
import {
  blogImgOne,
  blogImgTwo,
  blogImgThree,
  blogImgFour,
} from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Other Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 p-4">
        <div
          style={{
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
          }}
        >
          <BlogCard
            image={blogImgOne}
            title1="Next js"
            title2="TypeScript"
            title3="Framer motion"
            title4="Stripe js"
            subTitle="Beauty Pearlar"
            category="Travel"
            githubLink="https://github.com/yeasinmiah1272001/parlour"
            liveLink="https://parlour-blush.vercel.app/"
          />
        </div>
        <div
          style={{
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
          }}
        >
          <BlogCard
            subTitle="E-Commarce"
            image={blogImgTwo}
            title1="Next js"
            title2="TypeScript"
            title3="Framer motion"
            title4="Stripe js"
            githubLink="https://github.com/yeasinmiah1272001/e-commarceSmartyt"
            liveLink="https://e-commarce-smartyt.vercel.app"
          />
        </div>
        <div
          style={{
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
          }}
        >
          <BlogCard
            subTitle="Portfolio"
            image={blogImgThree}
            title1="React js"
            title2="Marquee"
            title3="Framer motion"
            title4="React Scroll"
            githubLink="https://github.com/yeasinmiah1272001/devportfolio"
            liveLink="https://yeasindev.vercel.app"
          />
        </div>
        <div
          style={{
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
          }}
        >
          <BlogCard
            subTitle="Shopping"
            image={blogImgFour}
            title1="Next js"
            title2="Marquee"
            title3="Framer motion"
            title4="Stripe"
            githubLink="https://github.com/yeasinmiah1272001/eid-shopping"
            liveLink="https://eid-shopping.vercel.app/"
          />
        </div>

        <div className="px-6"></div>
      </div>
    </div>
  );
};

export default Blog;
