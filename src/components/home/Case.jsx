import React from "react";
import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { RiArrowUpLine } from "@remixicon/react";
import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";

const CaseCard = ({ description }) => {
  const { sm } = useScreenResponsiveness();
  return (
    <div className="flex h-[300px] w-full flex-col gap-6 rounded-[1.5rem] bg-[var(--dark-accent)] px-8 py-14 text-white last:border-r-0 md:h-[220px] md:rounded-none md:border-r md:border-r-white md:px-6 md:py-0 lg:h-[180px] xl:h-[220px] 2xl:h-[180px]">
      <p className="md:h-[10rem] md:text-sm md:leading-[1.5] lg:h-[8rem] xl:h-[12rem] xl:text-lg">
        {description}
      </p>
      {sm && <hr className="w-full border border-white" />}
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

const Case = () => {
  const { sm, md, isLargeScreen } = useScreenResponsiveness();
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"Case Studies"} />
        <p className="md:w-[60%] xl:text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="w-full overflow-hidden">
        {sm && (
          <Swiper spaceBetween={40} slidesPerView={1} className="text-white">
            <SwiperSlide>
              <CaseCard
                description={
                  "For a local restaurant, we implemented a targeted PPC campaignthat resulted in a 50% increase in website traffic and a 25% increase in sales."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <CaseCard
                description={
                  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <CaseCard
                description={
                  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
                }
              />
            </SwiperSlide>
          </Swiper>
        )}

        {(md || isLargeScreen) && (
          <div className="flex h-fit w-full gap-x-5 rounded-[1.5rem] bg-[var(--dark-accent)] px-4 py-12">
            <CaseCard
              description={
                "For a local restaurant, we implemented a targeted PPC campaignthat resulted in a 50% increase in website traffic and a 25% increase in sales."
              }
            />
            <CaseCard
              description={
                "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
              }
            />
            <CaseCard
              description={
                "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
              }
            />
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default Case;
