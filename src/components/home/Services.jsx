import React from "react";
import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";

import seo from "../../assets/images/service/seo.png";
import analytics from "../../assets/images/service/analytics.png";
import content from "../../assets/images/service/content-creation.png";
import email from "../../assets/images/service/email-marketing.png";
import payperclick from "../../assets/images/service/payperclick.png";
import socmed from "../../assets/images/service/socmed.png";

import { RiArrowRightUpLongLine } from "@remixicon/react";
import Darkbutton from "../buttons/Darkbutton";
import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";
import ServiceInformation from "../ServiceInformation";

const ServiceCard = ({
  dynamicClass,
  title,
  img,
  cardColor,
  arrowBG,
  arrowColor,
  isDark,
}) => {
  const { isLargeScreen } = useScreenResponsiveness();
  return (
    <div
      className={`${cardColor} ${isDark ? "text-white" : "text-[var(--dark-accent)]"} grid h-[300px] w-full grid-cols-[1fr_2fr] rounded-[1.5rem] border border-b-8 border-black p-10 md:h-[230px] md:grid-cols-[1.5fr_1fr] md:grid-rows-[60px]`}
    >
      <p className="col-span-2 text-2xl font-bold lg:col-span-1 xl:text-[1.7rem]">
        {title}
      </p>
      <img
        src={img}
        alt={img}
        className="col-start-2 row-span-2 row-start-2 h-full w-full md:h-[100px] md:w-[100px] lg:row-span-3 lg:row-start-1 lg:h-[120px] lg:w-[120px] lg:place-self-center lg:justify-self-center xl:h-[160px] xl:w-[160px]"
      />
      <div className="group col-start-1 row-start-3 cursor-pointer items-center gap-5 place-self-end justify-self-start lg:flex xl:gap-3">
        <div
          className={`${dynamicClass} ${arrowBG} ${arrowColor} rounded-full p-2 transition-colors`}
        >
          <RiArrowRightUpLongLine />
        </div>
        {isLargeScreen && <p className="font-bold xl:text-lg">Learn More</p>}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"Services"} />
        <p className="md:w-[70%] xl:text-lg">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:{" "}
        </p>
      </div>
      <div className="grid w-full justify-items-center gap-y-10 md:grid-cols-1 md:gap-10">
        <ServiceInformation
          serviceData={[
            {
              title: "Search engine optimization",
              img: seo,
              cardColor: "bg-[#F3F3F3]",
              arrowBG: "bg-[var(--dark-accent)]",
              arrowColor: "text-[var(--green-accent)]",
              dynamicClass: "group-hover:bg-[var(--dark-accent-hover)]",
            },
            {
              title: "Pay-per-click advertising",
              img: payperclick,
              cardColor: "bg-[var(--green-accent)]",
              arrowBG: "bg-[var(--dark-accent)]",
              arrowColor: "text-[var(--green-accent)]",
              dynamicClass: "group-hover:bg-[var(--dark-accent-hover)]",
            },
            {
              title: "Social Media Marketing",
              img: socmed,
              cardColor: "bg-[var(--dark-accent)]",
              arrowBG: "bg-white",
              arrowColor: "text-[var(--dark-accent)]",
              isDark: true,
            },
            {
              title: "Email Marketing",
              img: email,
              cardColor: "bg-[#F3F3F3]",
              arrowBG: "bg-[var(--dark-accent)]",
              arrowColor: "text-[var(--green-accent)]",
              dynamicClass: "group-hover:bg-[var(--dark-accent-hover)]",
            },
            {
              title: "Content Creation",
              img: content,
              cardColor: "bg-[var(--green-accent)]",
              arrowBG: "bg-[var(--dark-accent)]",
              arrowColor: "text-[var(--green-accent)]",
              dynamicClass: "group-hover:bg-[var(--dark-accent-hover)]",
            },
            {
              title: "Analytics and Tracking",
              img: analytics,
              cardColor: "bg-[var(--dark-accent)]",
              arrowBG: "bg-white",
              arrowColor: "text-[var(--dark-accent)]",
              isDark: true,
            },
          ]}
        />
      </div>
    </SectionContainer>
  );
};

export default Services;
