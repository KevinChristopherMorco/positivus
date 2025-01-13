import React from "react";
import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";
import ServiceInformation from "../ServiceInformation";

import seo from "../../assets/images/service/seo.png";
import analytics from "../../assets/images/service/analytics.png";
import content from "../../assets/images/service/content-creation.png";
import email from "../../assets/images/service/email-marketing.png";
import payperclick from "../../assets/images/service/payperclick.png";
import socmed from "../../assets/images/service/socmed.png";

const OtherServices = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"Our Other Services"} />
        <p className="md:w-[80%] xl:text-lg">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <ServiceInformation
        serviceData={[
          {
            title: "Search engine optimization",
            img: seo,
            cardColor: "bg-[gray-accent]",
            arrowBG: "bg-[var(--dark-accent)]",
            arrowColor: "text-[var(--green-accent)]",
            dynamicClass: "group-hover:bg-[var(--dark-accent-hover)]",
          },
          {
            title: "Pay-per-click advertising",
            img: payperclick,
            cardColor: "bg-[gray-accent]",
            arrowBG: "bg-[var(--dark-accent)]",
            arrowColor: "text-[var(--green-accent)]",
            dynamicClass: "group-hover:bg-[var(--dark-accent-hover)]",
          },
          {
            title: "Social Media Marketing",
            img: socmed,
            cardColor: "bg-[gray-accent]",
            arrowBG: "bg-[var(--dark-accent)]",
            arrowColor: "text-[var(--green-accent)]",
          },
          {
            title: "Email Marketing",
            img: email,
            cardColor: "bg-[gray-accent]",
            arrowBG: "bg-[var(--dark-accent)]",
            arrowColor: "text-[var(--green-accent)]",
            dynamicClass: "group-hover:bg-[var(--dark-accent-hover)]",
          },
          {
            title: "Content Creation",
            img: content,
            cardColor: "bg-[gray-accent]",
            arrowBG: "bg-[var(--dark-accent)]",
            arrowColor: "text-[var(--green-accent)]",
            dynamicClass: "group-hover:bg-[var(--dark-accent-hover)]",
          },
          {
            title: "Analytics and Tracking",
            img: analytics,
            cardColor: "bg-[gray-accent]",
            arrowBG: "bg-[var(--dark-accent)]",
            arrowColor: "text-[var(--green-accent)]",
          },
        ]}
      />
      <div className="grid gap-6 rounded-[1.5rem] border border-black p-10 md:grid-cols-[1.5fr_1fr] lg:grid-rows-[200px]">
        <div className="flex flex-col gap-6 md:col-start-1 md:row-span-2">
          <p className="text-2xl font-semibold">
            Ready to Elevate Your Search Rankings?
          </p>
          <hr className="border border-gray-300" />
          <p>
            Our proven SEO strategies and designed to help your business achieve
            long-lasting success in search engines. Whether you want to boost
            organic traffic, improve keyword rankings, or increase conversions,
            we're here to make it happen.
          </p>
          <p className="font-semibold">
            Let's work together to grow your online presence.
          </p>
        </div>

        <img
          src={seo}
          alt=""
          className="md:col-start-2 md:row-start-2 md:h-[300px] lg:row-start-1 xl:justify-self-center"
        />
        <button className="w-full rounded-xl bg-[var(--green-accent)] p-5 font-bold text-[var(--dark-accent)] md:col-start-1 md:row-start-3">
          Start My SEO Journey
        </button>
      </div>
    </SectionContainer>
  );
};

export default OtherServices;
