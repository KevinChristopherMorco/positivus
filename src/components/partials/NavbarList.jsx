import React from "react";

const NavbarList = ({ list }) => {
  return (
    <li className="cursor-pointer text-[1.2rem] transition-all hover:font-medium hover:text-green-500">
      <li>{list}</li>
    </li>
  );
};

export default NavbarList;
