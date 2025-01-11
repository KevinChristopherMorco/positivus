import React from "react";
import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";

import john from "../../assets/images/team/john.png";
import brian from "../../assets/images/team/brian.png";
import emily from "../../assets/images/team/emily.png";
import jane from "../../assets/images/team/jane.png";
import michael from "../../assets/images/team/michael.png";
import sarah from "../../assets/images/team/sarah.png";

import { RiLinkedinLine } from "@remixicon/react";

const TeamCard = ({ image, name, position, description }) => {
  return (
    <div className="flex w-full flex-col gap-5 rounded-[1.5rem] border border-b-8 border-black p-5 xl:w-[95%] xl:justify-self-center xl:p-8">
      <div className="grid grid-cols-[1.5fr_2fr_0.5fr] gap-x-4 xl:grid-cols-[1.5fr_4fr_0.5fr]">
        <img src={image} alt="" className="col-start-1 row-start-1 w-full" />
        <div className="col-start-2 flex flex-col place-self-end justify-self-start text-[.90rem]">
          <p className="font-semibold xl:text-lg 2xl:text-xl">{name}</p>
          <p className="2xl:text-lg">{position}</p>
        </div>
        <div className="col-start-3 row-start-1 flex h-8 w-8 cursor-pointer items-center justify-center place-self-start justify-self-center rounded-full bg-[var(--dark-accent)] text-[var(--green-accent)] transition-colors hover:bg-[var(--dark-accent-hover)] 2xl:h-10 2xl:w-10">
          <RiLinkedinLine className="h-4 w-4 2xl:h-6 2xl:w-6" />
        </div>
      </div>
      <hr className="border border-black" />
      <div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"Team"} />
        <p className="md:w-[60%] xl:text-lg">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-y-10">
        <TeamCard
          image={john}
          name={"John Smith"}
          position={"CEO and founder"}
          description={
            "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
          }
        />
        <TeamCard
          image={jane}
          name={"Jane Doe"}
          position={"Director of Operations"}
          description={
            "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
          }
        />
        <TeamCard
          image={michael}
          name={"Michael Brown"}
          position={"Senior SEO Specialist"}
          description={
            "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
          }
        />
        <TeamCard
          image={emily}
          name={"Emily Johnson"}
          position={"PPC Manager"}
          description={
            "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
          }
        />
        <TeamCard
          image={brian}
          name={"Brian Williams"}
          position={"Social Media Specialist"}
          description={
            "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
          }
        />
        <TeamCard
          image={sarah}
          name={"Sarah Kim"}
          position={"Content Creator"}
          description={
            "2+ years of experience in writing and editing, skilled in creating compelling, SEO-optimized content for various industries"
          }
        />
      </div>
    </SectionContainer>
  );
};

export default Team;
