import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarList = ({ list, isDark, linkName, isLink }) => {
  const { pathname } = useLocation();
  return (
    <>
      {isLink ? (
        <li
          className={`${isDark ? "text-gray-300" : "text-black"} ${pathname === linkName ? "rounded-lg bg-[var(--green-accent)] px-2 py-1 font-semibold text-[var(--dark-accent)]" : "hover:font-medium hover:text-green-500"} w-fit cursor-pointer text-[1.2rem] transition-all lg:text-sm xl:text-base`}
        >
          <Link to={linkName}>
            <p>{list}</p>
          </Link>
        </li>
      ) : (
        <li
          className={`${isDark ? "text-gray-300" : "text-black"} cursor-pointer text-[1.2rem] transition-all hover:font-medium hover:text-green-500 lg:text-sm xl:text-base`}
        >
          <p>{list}</p>
        </li>
      )}
    </>
  );
};

export default NavbarList;
