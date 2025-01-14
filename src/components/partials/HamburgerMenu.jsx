import React from "react";
import { RiCloseFill } from "@remixicon/react";
import NavbarList from "./NavbarList";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo/logo.png";

const HamburgerMenu = ({ isOpen, isDelayed, handleMenuToggle }) => {
  return (
    <div
      className={`fixed right-0 top-0 z-[1000] h-screen w-full bg-black bg-opacity-50`}
    >
      <div
        className={`${isOpen && !isDelayed ? "animate-slide-in-right" : "animate-slide-in-left"} fixed right-0 flex h-screen w-[80%] flex-col gap-6 bg-white p-5`}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              {/* <img src={logo} alt="" className="2xl:h-[3rem] 2xl:w-[3rem]" /> */}
              {/* <h5 className="text-lg font-semibold text-[var(--primary-color)] xl:text-xl 2xl:text-2xl">
                POSITIVUS
              </h5> */}

              <img src={logo} alt="logo" className="w-[70%] 2xl:w-[90%]" />
            </div>
            <div className="cursor-pointer" onClick={handleMenuToggle}>
              <RiCloseFill />
            </div>
          </div>
          <div className="-mx-5 border-b border-[var(--primary-color)]" />
        </div>
        <div className="flex h-full flex-col justify-between">
          <ul className="flex flex-col gap-5 text-lg">
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
              item={"Use Cases"}
            />
            <NavbarList list={"Pricing"} linkName={"/pricing"} isLink={true} />
          </ul>
          <div className="flex flex-col gap-5">
            <Link
              to={"/request-quote"}
              className="rounded-xl border border-black p-4 text-center text-[1.2rem] duration-200 hover:bg-[var(--dark-accent)] hover:font-semibold hover:text-white hover:transition-all"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
