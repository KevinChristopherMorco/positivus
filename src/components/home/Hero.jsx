import React from "react";
import heroimg from "../../assets/images/hero.png";
import Darkbutton from "../buttons/Darkbutton";
import amazon from "../../assets/images/brands/amazon.png";
import dribble from "../../assets/images/brands/dribble.png";
import hubspot from "../../assets/images/brands/hubspot.png";
import netflix from "../../assets/images/brands/netflix.png";
import notion from "../../assets/images/brands/notion.png";
import zoom from "../../assets/images/brands/zoom.png";

const BrandList = ({ logo, alt }) => {
  return (
    <li>
      <img src={logo} alt={alt} className="w-[150px] grayscale 2xl:w-[180px]" />
    </li>
  );
};

const Hero = () => {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-y-5 lg:gap-y-7 xl:grid-cols-[1fr_1.5fr] xl:gap-y-0">
      <h4 className="md:grid-col-start-1 text-4xl font-semibold leading-[1.3] md:row-start-1 lg:text-5xl lg:leading-[1.3] 2xl:self-center 2xl:text-6xl 2xl:leading-[1.3]">
        Navigating the digital landscape for success
      </h4>
      <img
        src={heroimg}
        alt=""
        className="row-span-3 md:h-[400px] md:justify-self-center xl:h-[450px] xl:w-[500px] 2xl:h-[550px] 2xl:w-[600px]"
      />
      <p className="font-medium lg:text-lg 2xl:w-[90%] 2xl:text-xl 2xl:leading-[1.6]">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>
      <div>
        <button className="w-full rounded-xl bg-[var(--dark-accent)] p-4 font-light text-white transition-colors hover:bg-[var(--dark-accent-hover)] xl:w-[50%] xl:text-lg">
          Book a consultation
        </button>
      </div>
      <div className="md:col-span-2 md:pt-10 xl:py-6">
        <ul className="flex flex-wrap items-center justify-between gap-y-4 md:justify-center md:gap-x-10 lg:gap-x-24 xl:justify-between xl:gap-x-0">
          <BrandList logo={amazon} alt={"amazon-logo"} />
          <BrandList logo={dribble} alt={"dribble-logo"} />
          <BrandList logo={hubspot} alt={"hubspot-logo"} />
          <BrandList logo={netflix} alt={"netflix-logo"} />
          <BrandList logo={notion} alt={"notion-logo"} />
          <BrandList logo={zoom} alt={"zoom-logo"} />
        </ul>
      </div>
    </div>
  );
};

export default Hero;
