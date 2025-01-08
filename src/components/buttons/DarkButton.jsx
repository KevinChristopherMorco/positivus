import React from "react";

const Darkbutton = ({ text }) => {
  return (
    <button className="w-full rounded-xl bg-[var(--dark-accent)] p-4 text-white transition-colors hover:bg-[var(--dark-accent-hover)]">
      {text}
    </button>
  );
};

export default Darkbutton;
