/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ISectionThree } from "./data.model";
import { useTranslations } from "next-intl";

export default function SectionThree({ data }: ISectionThree) {
  const t = useTranslations("AboutUs");
  return (
    <div
      data-aos="fade-up"
      className="md:px-28 md:py-28 px-10 py-10 font-primary_font md:grid md:grid-cols-6 flex flex-col gap-8"
    >
      <div className="col-span-2">
        <h2 className="text-xl mb-5">{t(`${data.moreInfo.title}`)}</h2>
      </div>
      <div className="col-span-4">
        {data.moreInfo.moreInfoList.map(
          (ele: any, i: React.Key | null | undefined) => (
            <div
              data-aos="fade-up"
              key={i}
              className="md:grid md:grid-cols-2 mb-5 flex flex-col gap-4"
            >
              <div className="flex items-center col-span-1 gap-5">
                <img className="w-12" src={ele.img} alt={ele.title} />
                <h3 className="text-lg">{t(`${ele.title}`)}</h3>
              </div>
              <div className="col-span-1">
                <p className="text-lg text-final_gray">
                  {t(`${ele.description}`)}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
