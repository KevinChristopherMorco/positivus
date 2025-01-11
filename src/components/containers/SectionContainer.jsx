import React from "react";

const SectionContainer = ({ children, dynamicClass }) => {
  return (
    <section
      className={`${dynamicClass} grid justify-items-center gap-6 md:justify-items-start`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
