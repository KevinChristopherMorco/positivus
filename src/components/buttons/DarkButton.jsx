import React from "react";

const Darkbutton = ({ text, dynamicClass }) => {
  return (
    <button
      className={`${dynamicClass} rounded-xl bg-[var(--dark-accent)] p-4 text-white transition-colors hover:bg-[var(--dark-accent-hover)]`}
    >
      {text}
    </button>
  );
};

export default Darkbutton;
