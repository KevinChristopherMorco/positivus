import React from "react";
import { Link } from "react-router-dom";

const Darkbutton = ({ text, dynamicClass, isFeatured }) => {
  return (
    <Link
      to={"/some-page"}
      className={`${dynamicClass} ${isFeatured ? "bg-[var(--green-accent)] text-[var(--dark-accent)] hover:bg-[var(--green-accent-hover)]" : "bg-[var(--dark-accent)] text-white hover:bg-[var(--dark-accent-hover)]"} flex items-center justify-center rounded-xl p-4 font-bold transition-colors`}
    >
      {text}
    </Link>
  );
};

export default Darkbutton;
