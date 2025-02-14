import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree } from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 p-4">
        <div
          style={{
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
          }}
        >
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
        </div>
        <div
          style={{
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
          }}
        >
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
        </div>
        <div
          style={{
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
          }}
        >
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
        </div>
        <div
          style={{
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
          }}
        >
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
        </div>
        <div
          style={{
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
          }}
        >
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
        </div>
        <div
          style={{
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
          }}
        >
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
        </div>
        <div
          style={{
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
          }}
        >
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
        </div>
        <div
          style={{
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
          }}
        >
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
        </div>
        <div
          style={{
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
          }}
        >
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
        </div>
        <div
          style={{
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
          }}
        >
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
        </div>

        <div className="px-6"></div>
      </div>
    </div>
  );
};

export default Blog;
