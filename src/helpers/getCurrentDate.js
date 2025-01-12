import React from "react";

const getCurrentDate = () => {
  const currentYear = new Date().getUTCFullYear();
  return { currentYear };
};

export default getCurrentDate;
