import React from "react";

const DarkOutlineButton = ({ dynamicClass, text, isFeatured }) => {
  return (
    <button
      className={`${dynamicClass} ${isFeatured ? "border-white bg-[var(--dark-accent)] text-white hover:bg-white hover:text-[var(--dark-accent)]" : "border-[var(--dark-accent)] bg-white text-[var(--dark-accent)] hover:bg-[var(--dark-accent)] hover:text-white"} rounded-xl border p-4 transition-colors`}
    >
      {text}
    </button>
  );
};

export default DarkOutlineButton;
