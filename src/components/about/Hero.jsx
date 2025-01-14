import React from "react";
import heroimage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="grid w-full gap-10 md:grid-cols-2 md:grid-rows-[0.7fr_2fr] md:gap-y-5 lg:gap-y-7 lg:rounded-[1.5rem] lg:bg-[var(--gray-accent)] lg:p-10 xl:grid-cols-[1fr_1.5fr] xl:gap-y-0">
      <h4 className="text-4xl font-semibold leading-[1.3] md:col-start-2 md:row-start-1 lg:text-5xl lg:leading-[1.3] 2xl:self-center 2xl:text-6xl 2xl:leading-[1.3]">
        Together for Success
      </h4>
      <img
        src={heroimage}
        alt=""
        className="row-span-2 md:h-[400px] md:justify-self-center xl:h-[450px] xl:w-[500px] 2xl:h-[550px] 2xl:w-[600px]"
      />
      <p className="font-medium lg:text-lg xl:text-xl 2xl:w-[90%] 2xl:text-2xl 2xl:leading-[1.6]">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>
    </div>
  );
};

export default Hero;
