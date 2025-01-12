import React from "react";
import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";

const NumberCard = ({ stats, text }) => {
  return (
    <div className="relative col-span-2 flex w-full flex-col items-center rounded-t-[1.5rem] border-l-2 border-r-2 border-t-2 border-black p-10 last:col-span-2 last:col-start-2 lg:col-span-1 lg:last:col-span-1">
      <div className="absolute top-6 flex flex-col items-center justify-center gap-1 text-center">
        <p className="text-5xl font-bold">{stats}</p>
        <p className="text-sm lg:text-base">{text}</p>
      </div>
    </div>
  );
};

const Numbers = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"Our Impact in Numbers"} />
        <p className="md:w-[50%] xl:text-lg">
          A snapshot of the milestones and achievements that drive our success
        </p>
      </div>
      <div className="grid w-full grid-cols-4 place-items-center justify-items-center gap-y-10 md:grid-cols-4 lg:grid-cols-5">
        {/* <div className="relative flex w-full flex-col items-center rounded-t-[1.5rem] border-l-2 border-r-2 border-t-2 border-black p-10">
          <div className="absolute top-6 flex flex-col gap-1 text-center">
            <p className="text-5xl font-bold">8+</p>
            <p className="text-sm">Years of Experience</p>
          </div>
        </div> */}
        <NumberCard stats={"8+"} text={"Years of Experience"} />
        <NumberCard stats={"50+"} text={"Experts"} />
        <NumberCard stats={"100+"} text={"Successful Campaigns"} />
        <NumberCard stats={"20+"} text={"Industry Awards"} />
        <NumberCard stats={"500%"} text={"ROI for our clients"} />
      </div>
    </SectionContainer>
  );
};

export default Numbers;
