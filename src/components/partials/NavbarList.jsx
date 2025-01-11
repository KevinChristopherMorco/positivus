import React from "react";

const NavbarList = ({ list, isDark }) => {
  return (
    <li
      className={`${isDark ? "text-gray-300" : "text-black"} cursor-pointer text-[1.2rem] transition-all hover:font-medium hover:text-green-500`}
    >
      <p>{list}</p>
    </li>
  );
};

export default NavbarList;
