import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import bubble from "../../assets/images/testimonial/bubble.png";

import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";

const TestimonialCard = ({ name, position, comment }) => {
  return (
    <div className="bg-[var(--dark-accent)] p-5">
      <div className="relative">
        <img src={bubble} alt="" className="h-[300px] w-full" />
        <p className="absolute top-0 px-5 py-10 text-[.8rem] text-white xl:text-base xl:leading-[1.8]">
          {comment}
        </p>
      </div>
      <div className="ml-8">
        <p className="font-bold text-[var(--green-accent)] xl:text-xl">
          {name}
        </p>
        <p className="text-sm font-medium text-white xl:text-lg">{position}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"Testimonials"} />
        <p className="md:w-[60%] xl:text-lg">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="grid w-full justify-items-center overflow-hidden rounded-[1.5rem] bg-[var(--dark-accent)] pb-10 pt-5">
        <Swiper
          spaceBetween={40}
          pagination={{ clickable: true }}
          className="w-full"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <TestimonialCard
              name={"John Smith"}
              position={"Marketing Director at XYZ Corp"}
              comment={
                '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name={"John Smith"}
              position={"Marketing Director at XYZ Corp"}
              comment={
                '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name={"John Smith"}
              position={"Marketing Director at XYZ Corp"}
              comment={
                '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
