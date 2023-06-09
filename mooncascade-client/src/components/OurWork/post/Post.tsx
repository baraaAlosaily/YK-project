import React from "react";
import IPost from "./post.model";
import Skeleton from "@mui/material/Skeleton";


export default function Post({ post }: IPost) {
  let merged = [...post.sector, ...post.solution];
  merged = merged.filter((ele, i) => ele != "others");

  return (
    <div className="flex flex-col gap-10 font-primary_font">
      <a href={`our-work/${post.link}`}>
          <div className="flex flex-col gap-5 h-[5rem]">
            <p className="text-[1.3rem]">{post.client}</p>
            <div>
              {merged.map((ele: any, i: React.Key | null | undefined) => (
                <span key={i} className="text-final_gray text-sm md:text-lg">
                  {ele} {merged.length - 1 > Number(i) ? "," : ""}
                </span>
              ))}
            </div>
          </div>
          <div className="w-[100%] h-[25rem] mt-10">
            <img
              className="w-[100%] h-[100%] object-cover"
              src={post.smImage}
              alt={post.id}
            />
          </div>
        </a>
    </div>
  );
}
