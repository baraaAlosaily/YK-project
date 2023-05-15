import React from "react";
import { ISectionOne } from "./data.model";

export default function SectionOne({ data }: ISectionOne) {
  return (
    <section className="flex items-center justify-center flex-col md:px-28 md:pb-28 md:pt-36 px-10 pt-24 pb-10 font-primary_font">
      <div className="flex items-center justify-center md:grid md:grid-cols-6 mb-5">
        <div className="hidden lg:block md:col-span-2"></div>
        <div className="md:col-span-6 lg:col-span-4 flex flex-col gap-10">
          <h1 className="text-3xl md:text-6xl">{data.title}</h1>
        </div>
      </div>
      <div className="flex items-center justify-center md:grid md:grid-cols-6">
        <div className="hidden md:block md:col-span-2"></div>
        <div className="md:col-span-4 flex flex-col gap-10">
          <p className="text-lg md:ext-xl">{data.content}</p>
        </div>
      </div>
    </section>
  );
}
