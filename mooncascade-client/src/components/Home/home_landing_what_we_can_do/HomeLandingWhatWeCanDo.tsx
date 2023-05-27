import React from "react";
import Expand from "../../shared/Expand/Expand";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslations } from "next-intl";
interface Props {
  homeExpands: any[];
}

export default function HomeLandingWhatWeCanDo({ homeExpands }: Props) {
  const t = useTranslations("ExpandHome");
  return (
    <section
      data-aos="fade-up"
      className="flex flex-col items-center justify-center gap-10 md:px-28 md:py-28 px-10 py-10 font-primary_font"
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className=" text-2xl md:text-4xl lg:text-6xl">{t('title')}</h2>
        <p className="max-w-3xl text-[1rem] lg:text-xl lg:leading-8">
          {t('description')}
        </p>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col justify-between">
          <Expand expandedData={homeExpands} w={"33%"} />
          <a href="" className="flex gap-2 mt-10 lg:my-0">
            <span>{t('button')}</span>
            <span className="lg:block hidden">
              <ArrowForwardIcon />
            </span>
          </a>
        </div>
        <div className="hidden lg:block">
          <Image
            src={"/curosal/two.jpg"}
            alt="image"
            height={700}
            width={800}
          />
        </div>
      </div>
    </section>
  );
}
