import React from "react";
import logo from "../../assets/images/logo/logo.png";
import { RiMenuFill } from "@remixicon/react";
import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";
import NavbarList from "./NavbarList";
import { Link } from "react-router-dom";

const Navbar = ({ handleMenuToggle }) => {
  const { isSmallScreen, isLargeScreen } = useScreenResponsiveness();
  return (
    <>
      {isSmallScreen && (
        <nav className="fixed z-[999] flex w-full items-center justify-between bg-white p-5">
          <div>
            <img src={logo} alt="logo" className="w-[70%]" />
          </div>
          <div onClick={handleMenuToggle}>
            <RiMenuFill />
          </div>
        </nav>
      )}
      {isLargeScreen && (
        <nav className="fixed z-[999] flex w-full items-center justify-between bg-[white] px-16 py-8 2xl:px-60">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-[70%] 2xl:w-[90%]" />
          </Link>
          <div>
            <ul className="flex items-center gap-10">
              <NavbarList
                list={"About us"}
                linkName={"/about-us"}
                isLink={true}
              />
              <NavbarList
                list={"Services"}
                linkName={"/services"}
                isLink={true}
              />
              <NavbarList
                list={"Use Cases"}
                linkName={"/use-case"}
                isLink={true}
              />
              <NavbarList
                list={"Pricing"}
                linkName={"/pricing"}
                isLink={true}
              />
              <li>
                <Link
                  to={"/request-quote"}
                  className="rounded-xl border border-black p-4 text-[1.2rem] duration-200 hover:bg-[var(--dark-accent)] hover:font-semibold hover:text-white hover:transition-all"
                >
                  Request a quote
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
