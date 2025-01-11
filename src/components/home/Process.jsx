import React from "react";
import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";
import plus from "../../assets/images/plus.png";

import { RiArrowDownFill, RiArrowDownLine } from "@remixicon/react";

const ProcessCard = ({ cardNumber, cardTitle, cardDescription, isOpen }) => {
  return (
    <div
      className={`${isOpen ? "bg-[var(--green-accent)]" : "bg-[var(--gray-accent)]"} flex w-full flex-col gap-5 rounded-[1.5rem] border border-b-8 border-black p-6`}
    >
      <div>
        <div className="grid grid-cols-[1fr_3fr_1fr]">
          <div className="col-span-2 col-start-1 flex items-center gap-6 font-bold">
            <p className="text-2xl md:text-3xl">{cardNumber}</p>
            <p className="md:text-xl">{cardTitle}</p>
          </div>
          <div className="col-start-3 cursor-pointer place-self-center justify-self-center md:justify-self-end">
            <img src={plus} alt="" className="h-8 w-8 md:h-10 md:w-10" />
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <hr className="border border-black" />
          <div>
            <p className="xl:text-lg">{cardDescription}</p>
          </div>
        </>
      )}
    </div>
  );
};

const Process = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"Our Working Process"} />
        <p className="md:w-[120%] xl:text-lg">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className="grid w-full gap-y-5">
        <ProcessCard
          cardNumber={"01"}
          cardTitle={"Consultation"}
          cardDescription={
            " During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
          }
          isOpen={true}
        />
        <ProcessCard
          cardNumber={"02"}
          cardTitle={"Research and Strategy Development"}
        />
        <ProcessCard cardNumber={"03"} cardTitle={"Implementation"} />
        <ProcessCard
          cardNumber={"04"}
          cardTitle={"Monitoring and Optimization"}
        />
        <ProcessCard
          cardNumber={"05"}
          cardTitle={"Reporting and Communication"}
        />
        <ProcessCard cardNumber={"06"} cardTitle={"Continual Improvement"} />
      </div>
    </SectionContainer>
  );
};

export default Process;
