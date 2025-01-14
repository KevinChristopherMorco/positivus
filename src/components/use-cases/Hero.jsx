import React from "react";
import SectionContainer from "../containers/SectionContainer";
import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";
import { RiArrowUpLine } from "@remixicon/react";

import success from "../../assets/images/usecase/success-story.png";

const StatCard = ({ stat, description }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-[1.5rem] bg-white p-6 text-center text-[var(--dark-accent)]">
      <p className="flex flex-col items-center justify-center text-4xl font-bold 2xl:text-5xl">
        {stat}
      </p>
      <p className="2xl:w-[80%] 2xl:text-xl">{description}</p>
    </div>
  );
};

const Hero = () => {
  const { md, isLargeScreen } = useScreenResponsiveness();
  return (
    <SectionContainer>
      <div className="grid w-full gap-10 md:grid-cols-2 md:grid-rows-[0.7fr_2fr] md:gap-y-5 lg:gap-y-7 lg:rounded-[1.5rem] lg:bg-[var(--gray-accent)] lg:p-10 xl:grid-cols-[1fr_1.5fr] xl:gap-y-0">
        <h4 className="text-4xl font-semibold leading-[1.3] md:col-start-2 md:row-start-1 lg:text-5xl lg:leading-[1.3] 2xl:self-center 2xl:text-6xl 2xl:leading-[1.3]">
          Proven Success Stories
        </h4>
        <img
          src={success}
          alt=""
          className="row-span-2 md:h-[400px] md:justify-self-center xl:h-[450px] xl:w-[500px] 2xl:h-[550px] 2xl:w-[600px]"
        />
        <p className="font-medium lg:text-lg xl:text-xl 2xl:w-[90%] 2xl:text-2xl 2xl:leading-[1.6]">
          See how our innovative digital marketing strategies have transformed
          businesses. Whether through SEO, PPC, social media, or web design,
          these use cases highlight the tangible impact of our work. Explore the
          successes and envision what we can achieve together.
        </p>
      </div>

      <div className="grid gap-6 rounded-[1.5rem] bg-[var(--dark-accent)] p-12 text-white md:grid-cols-[1.5fr_2.5fr] md:p-12 lg:grid-cols-[1.5fr_2fr] lg:gap-x-12 xl:grid-cols-[3fr_2fr]">
        {!(md || isLargeScreen) && (
          <h4 className="text-3xl text-[var(--green-accent)]">FEATURED</h4>
        )}
        {(md || isLargeScreen) && (
          <h4 className="text-3xl text-[var(--green-accent)] xl:text-2xl 2xl:text-3xl">
            Featured Success Story
          </h4>
        )}
        <p className="h-fit w-fit text-2xl md:col-start-1 md:row-start-2 md:text-2xl md:font-semibold 2xl:text-3xl">
          Scaling Success for a Leading E-Commerce Brand
        </p>
        <p className="font-light md:col-start-1 md:row-start-3 2xl:text-xl">
          Through a comprehensive SEO and PPC strategy, we helped this
          e-commerce brand increase visibility, drive traffic, and boost sales.
        </p>
        <div className="grid gap-6 md:col-start-2 md:row-span-4 md:row-start-1 md:grid-cols-2">
          <StatCard stat={"200%"} description={"increase in organic traffic"} />
          <StatCard stat={"150%"} description={"rise in online sales"} />
          <StatCard stat={"75%"} description={"reduction in cost-per-click"} />
          <StatCard
            stat={"300%"}
            description={"improvement in conversion rate"}
          />
        </div>
        <div className="flex w-fit cursor-pointer items-center gap-2 transition-colors hover:text-[var(--green-accent-hover)] md:col-start-1 md:row-start-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--green-accent)] text-[var(--dark-accent)]">
            <RiArrowUpLine className="h-6 w-6 rotate-45" />
          </div>
          <p className="text-[var(--green-accent)]">Read</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
