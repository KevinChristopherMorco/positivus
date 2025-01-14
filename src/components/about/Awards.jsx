import React from "react";
import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";
import DarkButton from "../buttons/DarkButton";

import marketing from "../../assets/images/about/marketing.png";
import innovation from "../../assets/images/about/webdesign.png";
import performer from "../../assets/images/about/top-performer.png";
import trending from "../../assets/images/about/socmed-trending.png";
import about from "../../assets/images/about/about.png";

const AwardCard = ({ title, description, img }) => {
  return (
    <div className="flex flex-col gap-1 rounded-[1.5rem] bg-[var(--gray-accent)]">
      <img src={img} alt="" className="w-full rounded-[1.5rem]" />
      <div className="flex flex-col gap-4 p-5">
        <p className="text-[.9rem] font-semibold xl:text-lg">{title}</p>
        <p className="text-sm xl:text-base">{description}</p>
      </div>
    </div>
  );
};

const Awards = () => {
  return (
    <SectionContainer>
      <div className="flex w-full flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"Awards & Recognition"} />
        <p className="md:w-[40%] xl:text-lg">
          At the heart of everything we do are our core values:
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <AwardCard
          title={"Best Small Business Digital Marketing Agency of the Year"}
          description={
            "Celebrating our success in delivering innovative strategies and measurable results for small business clients"
          }
          img={marketing}
        />
        <AwardCard
          title={"Innovative Website Design"}
          description={
            "Honoring our expertise in developing visually stunning, user-friendly websites that capture a brand's essence and boost conversions"
          }
          img={innovation}
        />
        <AwardCard
          title={"Top performing PPC Campaign of the Year"}
          description={
            "Acknowledging our ability to design and execute a high-impact pay-per-click campaign that drove exceptional client results."
          }
          img={performer}
        />
        <AwardCard
          title={"Expertise in Social Media Marketing"}
          description={
            "Recognizing our exceptional skills in crafting effective social media strategies, managing accounts, and creating engaging content."
          }
          img={trending}
        />
      </div>
      <div className="grid place-items-center justify-items-center gap-8 rounded-[1.5rem] border border-[var(--dark-accent)] bg-[var(--green-accent)] p-10 text-center text-black md:grid-cols-[2fr_1fr] md:p-16 md:text-start">
        <div className="flex flex-col gap-6">
          <p className="text-3xl font-bold xl:text-4xl">Join Our Team</p>
          <p className="font-medium xl:text-lg">
            At Positivus, we thrive on innovation and collaboration. We're
            always looking for passionate individuals to join our team and help
            business grow. Ready to make an impact .
          </p>
          <DarkButton
            text={"Explore Careers"}
            dynamicClass={"md:w-[60%] xl:w-[40%]"}
          />
        </div>
        <img src={about} alt="" className="rounded-[1.5rem]" />
      </div>
    </SectionContainer>
  );
};

export default Awards;
