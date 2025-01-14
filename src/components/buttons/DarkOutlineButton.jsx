import React from "react";
import { Link } from "react-router-dom";

const DarkOutlineButton = ({ dynamicClass, text, isFeatured }) => {
  return (
    <Link
      to={"/some-page"}
      className={`${dynamicClass} ${isFeatured ? "border-white bg-[var(--dark-accent)] text-white hover:bg-white hover:text-[var(--dark-accent)]" : "border-[var(--dark-accent)] bg-white text-[var(--dark-accent)] hover:bg-[var(--dark-accent)] hover:text-white"} flex items-center justify-center rounded-xl border p-4 transition-colors`}
    >
      {text}
    </Link>
  );
};

export default DarkOutlineButton;
