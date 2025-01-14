import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import heroimg from "../../assets/images/hero.png";
import Darkbutton from "../buttons/Darkbutton";
import amazon from "../../assets/images/brands/amazon.png";
import dribble from "../../assets/images/brands/dribble.png";
import hubspot from "../../assets/images/brands/hubspot.png";
import netflix from "../../assets/images/brands/netflix.png";
import notion from "../../assets/images/brands/notion.png";
import zoom from "../../assets/images/brands/zoom.png";
import { Link } from "react-router-dom";

const BrandList = ({ logo, alt }) => {
  return (
    <div>
      <img src={logo} alt={alt} className="w-[200px] grayscale 2xl:w-[180px]" />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="grid w-full gap-10 md:grid-cols-2 md:gap-y-5 lg:gap-y-7 xl:grid-cols-[1fr_1.5fr] xl:gap-y-0">
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
      <Link
        to={"/consultation"}
        className="flex w-full items-center justify-center rounded-xl bg-[var(--dark-accent)] p-4 font-light text-white transition-colors hover:bg-[var(--dark-accent-hover)] md:p-0 xl:w-[50%] xl:text-lg"
      >
        Book a consultation
      </Link>
      <div className="w-full overflow-hidden md:col-span-2 md:pt-10 xl:py-6">
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            speed={1000}
            className="w-full"
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              768: { slidesPerView: 3, spaceBetween: 50 },
              1280: { slidesPerView: 5, spaceBetween: 70 },
            }}
          >
            <SwiperSlide>
              <BrandList logo={amazon} alt={"amazon-logo"} />
            </SwiperSlide>
            <SwiperSlide>
              <BrandList logo={dribble} alt={"amazon-logo"} />
            </SwiperSlide>
            <SwiperSlide>
              <BrandList logo={hubspot} alt={"amazon-logo"} />
            </SwiperSlide>
            <SwiperSlide>
              <BrandList logo={netflix} alt={"amazon-logo"} />
            </SwiperSlide>
            <SwiperSlide className="flex h-full items-center justify-center">
              <BrandList logo={notion} alt={"amazon-logo"} />
            </SwiperSlide>
            <SwiperSlide>
              <BrandList logo={zoom} alt={"amazon-logo"} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
