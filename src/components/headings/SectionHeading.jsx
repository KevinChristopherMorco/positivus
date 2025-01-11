import React from "react";

const SectionHeading = ({ title }) => {
  return (
    <h1 className="w-fit rounded-lg bg-[var(--green-accent)] p-2 text-3xl font-bold text-[var(--dark-accent)] xl:text-4xl">
      {title}
    </h1>
  );
};

export default SectionHeading;
