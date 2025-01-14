import React, { useState } from "react";
import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";

const ProcessCard = ({ cardNumber, cardTitle, cardDescription }) => {
  const [isOpen, setIsOpen] = useState();
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
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="col-start-3 cursor-pointer place-self-center justify-self-center md:justify-self-end"
          >
            <img
              src={isOpen ? minus : plus}
              alt=""
              className="h-8 w-8 md:h-10 md:w-10"
            />
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
          cardDescription={
            "In this phase, we conduct in-depth research to understand your industry, competitors, and customer behaviors. Based on these insights, we develop a comprehensive, data-driven strategy that aligns with your business goals and positions your brand for success."
          }
        />
        <ProcessCard
          cardNumber={"03"}
          cardTitle={"Implementation"}
          cardDescription={
            "Once the strategy is in place, we move forward with the execution phase, implementing the tactics and campaigns designed to achieve your business objectives. Our team ensures a seamless rollout of all initiatives, utilizing the most effective channels and tools for optimal impact."
          }
        />
        <ProcessCard
          cardNumber={"04"}
          cardTitle={"Monitoring and Optimization"}
          cardDescription={
            "After implementation, we continuously monitor the performance of all campaigns. By analyzing key metrics, we identify opportunities for improvement and make real-time adjustments to ensure that your efforts are achieving the desired results."
          }
        />
        <ProcessCard
          cardNumber={"05"}
          cardTitle={"Reporting and Communication"}
          cardDescription={
            "We believe in transparency and clear communication. Throughout the process, we provide regular reports and updates on the progress of your campaigns, ensuring you stay informed and confident in the impact of our efforts."
          }
        />
        <ProcessCard
          cardNumber={"06"}
          cardTitle={"Continual Improvement"}
          cardDescription={
            "Success is an ongoing process. We focus on continual improvement by refining strategies, exploring new opportunities, and adapting to changes in the market. This allows us to consistently drive growth and deliver long-term value for your business."
          }
        />
      </div>
    </SectionContainer>
  );
};

export default Process;
