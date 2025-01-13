import React from "react";
import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";

const Hero = () => {
  const { md, isLargeScreen } = useScreenResponsiveness();
  return (
    <div className="flex flex-col gap-5">
      <div className="grid w-full gap-10 md:grid-cols-2 md:grid-rows-[0.7fr_2fr] md:gap-y-5 lg:gap-y-7 lg:rounded-[1.5rem] lg:bg-[var(--gray-accent)] lg:p-10 xl:grid-cols-[1fr_1.5fr] xl:gap-y-0">
        <h4 className="text-4xl font-semibold leading-[1.3] md:col-start-2 md:row-start-1 lg:text-5xl lg:leading-[1.3] 2xl:self-center 2xl:text-6xl 2xl:leading-[1.3]">
          Expert Digital Marketing Services
        </h4>
        <img
          alt=""
          className="row-span-2 md:h-[400px] md:justify-self-center xl:h-[450px] xl:w-[500px] 2xl:h-[550px] 2xl:w-[600px]"
        />
        <p className="font-medium lg:text-lg xl:text-xl 2xl:w-[90%] 2xl:text-xl 2xl:leading-[1.6]">
          Unlock your business' full potential with tailored strategies designed
          to drive growth and deliver results.
        </p>
      </div>
      <div className="grid gap-6 rounded-[1.5rem] bg-[var(--dark-accent)] px-12 py-5 text-white md:grid-cols-[1fr_2fr] md:p-12">
        {!(md || isLargeScreen) && (
          <h4 className="text-3xl text-[var(--green-accent)]">FEATURED</h4>
        )}
        <p className="h-fit w-fit text-2xl md:bg-[var(--green-accent)] md:text-2xl md:font-semibold md:text-[var(--dark-accent)]">
          Search engine optimization
        </p>
        <p className="font-light">
          SEO is the process of improving your website's visibility on search
          engines like Google. By optimizing your content and site structure, we
          help your business rank higher in search results, driving more organic
          traffic and potential customers.
        </p>
        <button className="cursor-pointer rounded-xl bg-white p-5 font-medium text-[var(--dark-accent)] transition-colors md:col-start-2 md:row-start-2">
          Boost My Rankings
        </button>
      </div>
    </div>
  );
};

export default Hero;
