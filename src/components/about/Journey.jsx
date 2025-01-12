import React from "react";
import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";

const Journey = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"Our Journey"} />
        <p className="md:w-[60%] xl:text-lg">
          From humble beginnings to industry leaders, discover how Positivus has
          evolved to drive success for businesses worldwide.
        </p>
      </div>
    </SectionContainer>
  );
};

export default Journey;
