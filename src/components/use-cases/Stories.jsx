import React from "react";
import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";
import { RiArrowUpLine } from "@remixicon/react";
import Darkbutton from "../buttons/Darkbutton";

const StoryCard = ({ title, description }) => {
  return (
    <div className="storyCard flex flex-col gap-5 rounded-[1.5rem] border border-b-4 border-black p-8 lg:rounded-none lg:border-r-2 lg:border-t-0 2xl:p-12">
      <p className="text-3xl font-semibold">{title}</p>
      <p>{description}</p>
      <div className="flex cursor-pointer items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--green-accent)]">
          <RiArrowUpLine className="h-6 w-6 rotate-45" />
        </div>
        <p>Learn More</p>
      </div>
    </div>
  );
};

const Stories = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"All Success Stories"} />
        <p className="md:w-[70%] xl:text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-0 lg:rounded-[1.5rem] lg:border lg:border-black lg:p-8">
        <StoryCard
          title={"E-commerce Fashion Brand"}
          description={
            "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
          }
        />
        <StoryCard
          title={"Local Restaurant Chain"}
          description={
            "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic"
          }
        />
        <StoryCard
          title={"Healthcare Provider"}
          description={
            "Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings."
          }
        />
        <StoryCard
          title={"E-commerce Fashion Brand"}
          description={
            "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
          }
        />
        <StoryCard
          title={"Local Restaurant Chain"}
          description={
            "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic"
          }
        />
        <StoryCard
          title={"Healthcare Provider"}
          description={
            "Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings."
          }
        />
      </div>
      <div className="grid gap-8 rounded-[1.5rem] border border-black bg-[var(--green-accent)] p-8 text-center md:grid-cols-2 md:text-start">
        <div className="flex flex-col gap-8">
          <p className="text-2xl font-semibold xl:text-3xl">
            Let's Create Your Next Success Story
          </p>
          <p className="xl:text-lg">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Darkbutton text={"Get your free proposal"} />
        </div>
        <img
          src="https://placehold.co/200x200"
          alt=""
          className="lg:justify-self-center"
        />
      </div>
    </SectionContainer>
  );
};

export default Stories;
