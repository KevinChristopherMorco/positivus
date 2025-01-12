import React from "react";
import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";

const CoreCards = ({ title, description, dynamicClass, hasImage }) => {
  return (
    <div
      className={`${hasImage ? "md:grid-cols-2" : ""} ${dynamicClass} grid w-full gap-10 rounded-[1.5rem] border border-b-8 border-black p-8 md:gap-6`}
    >
      <div className="flex flex-col gap-5">
        <h4 className="text-2xl font-bold 2xl:text-3xl">{title}</h4>
        <hr className="border border-black" />
        <p className="2xl:text-lg">{description}</p>
      </div>
      {hasImage && (
        <div className="md:col-start-2">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="h-full w-full"
          />
        </div>
      )}
    </div>
  );
};

const Core = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"Core Values"} />
        <p className="md:w-[60%] xl:text-lg">
          At the heart of everything we do are our core values:
        </p>
      </div>
      <div className="grid gap-5 md:gap-5 lg:grid-cols-2">
        <CoreCards
          title={"Client Success First"}
          description={
            "We are dedicated to achieving measurable results for our clients. Each strategy is tailored to meet unique business goals and drive long-term success."
          }
        />
        <CoreCards
          title={"Innovation"}
          description={"We constantly strive to stay ahead of industry trends."}
          dynamicClass={"lg:col-start-2 lg:row-start-1"}
          hasImage={true}
        />
        <CoreCards
          title={"Transparency"}
          description={
            "Open and honest communication is key to our success. We keep our clients informed every step of the way to ensure trust and clarity."
          }
          dynamicClass={"lg:col-start-2 lg:row-start-2"}
        />
        <CoreCards
          title={"Collaboration"}
          description={"We believe in the power of teamwork and partnership"}
          hasImage={true}
        />
      </div>
      <div className="grid gap-y-8 rounded-[1.5rem] bg-[var(--dark-accent)] p-10 text-white md:grid-cols-2 md:gap-x-10 lg:grid-rows-1">
        <div className="flex flex-col gap-8 lg:place-self-center">
          <p className="col-span-2 text-2xl font-semibold md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1 lg:row-span-1 lg:leading-[1.4] xl:text-3xl xl:leading-[1.5] 2xl:text-4xl 2xl:leading-[1.7]">
            "At Positivus, we believe that success is built on innovation
            collaboration and a relentless focus on delivering results."
          </p>
          <p className="lg:text-xl 2xl:text-2xl">
            - John Smith, Founder of Positivus
          </p>
        </div>
        <img
          src="https://placehold.co/600x400"
          alt=""
          className="col-start-2 row-start-2 md:col-start-1 md:row-span-2 md:row-start-1"
        />
      </div>
    </SectionContainer>
  );
};

export default Core;
