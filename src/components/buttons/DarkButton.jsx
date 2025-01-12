import React from "react";

const Darkbutton = ({ text, dynamicClass, isFeatured }) => {
  return (
    <button
      className={`${dynamicClass} ${isFeatured ? "bg-[var(--green-accent)] text-[var(--dark-accent)] hover:bg-[var(--green-accent-hover)]" : "bg-[var(--dark-accent)] text-white hover:bg-[var(--dark-accent-hover)]"} rounded-xl p-4 font-bold transition-colors`}
    >
      {text}
    </button>
  );
};

export default Darkbutton;
