import React from "react";
import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";

import InformationSwiper from "../InformationSwiper";

const Case = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"Use Cases"} />
        <p className="md:w-[70%] xl:text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <InformationSwiper
        informationData={[
          {
            title: "E-commerce Fashion Brand",
            description:
              "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise online sales within six months.",
          },
          {
            title: "Local Restaurant Chain",
            description:
              "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic",
          },
          {
            title: "Healthcare Provider",
            description:
              "Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.",
          },
        ]}
      />
    </SectionContainer>
  );
};

export default Case;
