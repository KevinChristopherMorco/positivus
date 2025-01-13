import React from "react";
import SectionContainer from "../components/containers/SectionContainer";
import SectionHeading from "../components/headings/SectionHeading";

import { RiArrowRightUpLongLine } from "@remixicon/react";
import Darkbutton from "../components/buttons/Darkbutton";
import useScreenResponsiveness from "../hooks/useScreenResponsiveness";

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

const ServiceInformation = ({ serviceData }) => {
  return (
    <SectionContainer>
      <div className="grid w-full justify-items-center gap-y-10 md:grid-cols-2 md:gap-10">
        {serviceData.map((serviceData, index) => {
          const {
            title,
            img,
            cardColor,
            arrowBG,
            arrowColor,
            dynamicClass,
            isDark,
          } = serviceData;
          return (
            <ServiceCard
              title={title}
              img={img}
              cardColor={cardColor}
              arrowBG={arrowBG}
              arrowColor={arrowColor}
              dynamicClass={dynamicClass}
              isDark={isDark}
            />
          );
        })}
      </div>
      <div className="grid w-full gap-y-5 rounded-[1.5rem] bg-[#F3F3F3] p-10">
        <h4 className="text-2xl font-semibold">Let's make things happen!</h4>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Darkbutton
          dynamicClass={"w-full md:w-[40%]"}
          text={"Get your free proposal"}
        />
      </div>
    </SectionContainer>
  );
};

export default ServiceInformation;
