import React from "react";
import SectionContainer from "../components/containers/SectionContainer";
import SectionHeading from "../components/headings/SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { RiArrowUpLine } from "@remixicon/react";
import useScreenResponsiveness from "../hooks/useScreenResponsiveness";

const CaseCard = ({ title, description }) => {
  return (
    <div className="flex h-[350px] w-full flex-col gap-6 rounded-[1.5rem] bg-[var(--dark-accent)] px-8 py-14 text-white last:border-r-0 md:h-auto md:rounded-none md:border-r md:border-r-white md:px-6 md:py-0">
      <div className="flex flex-col gap-4">
        <p className="xl:text-2xl xl:font-semibold">{title}</p>
        <p className="md:text-sm md:leading-[1.5] xl:text-lg">{description}</p>
      </div>
      <a
        href="#"
        className="flex items-center gap-1 font-semibold text-[var(--green-accent)] hover:text-[var(--green-accent-hover)]"
      >
        <p>Learn More</p>
        <RiArrowUpLine className="rotate-45" />
      </a>
    </div>
  );
};

const InformationSwiper = ({ informationData }) => {
  const { sm, md, isLargeScreen } = useScreenResponsiveness();
  return (
    <SectionContainer>
      <div className="w-full overflow-hidden">
        {sm && (
          <Swiper spaceBetween={40} slidesPerView={1} className="text-white">
            {informationData.map((informationData, index) => {
              const { title, description } = informationData;
              return (
                <SwiperSlide>
                  <CaseCard title={title} description={description} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        {(md || isLargeScreen) && (
          <div className="flex h-fit w-full gap-x-5 rounded-[1.5rem] bg-[var(--dark-accent)] px-4 py-12">
            {informationData.map((informationData, index) => {
              const { title, description } = informationData;
              return <CaseCard title={title} description={description} />;
            })}
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default InformationSwiper;
