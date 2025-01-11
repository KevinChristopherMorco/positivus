import React from "react";
import logo from "../../assets/images/logo/logo-light.png";
import NavbarList from "./NavbarList";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "@remixicon/react";

const FooterContact = ({ text }) => {
  return <li className="text-gray-300 xl:text-lg">{text}</li>;
};

const FooterSocials = ({ icon: Icon }) => {
  return (
    <li>
      <div className="flex cursor-pointer items-center justify-center rounded-full bg-white p-2">
        <Icon className="h-6 w-6" />
      </div>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="grid justify-items-center gap-y-12 bg-[var(--dark-accent)] py-10 md:grid-cols-[1fr_2fr] md:place-items-center md:gap-y-10 md:px-5 lg:grid-cols-[1fr_1.5fr_1fr] xl:mx-16 xl:my-8 xl:rounded-3xl xl:px-10 2xl:mx-60 2xl:px-24">
      <img
        src={logo}
        alt=""
        className="md:col-start-1 md:row-start-1 lg:justify-self-start"
      />
      <ul className="flex flex-col gap-5 md:col-start-2 md:row-start-1 md:flex-row lg:gap-8 xl:gap-10">
        <NavbarList list={"About us"} isDark={true} />
        <NavbarList list={"Services"} isDark={true} />
        <NavbarList list={"Use Cases"} isDark={true} />
        <NavbarList list={"Pricing"} isDark={true} />
      </ul>
      <div className="flex flex-col items-center justify-center gap-10 md:col-start-1 md:row-start-2 lg:items-start">
        <div className="rounded-xl bg-[var(--green-accent)] px-4 py-1 font-bold xl:text-xl">
          <p>Contact us</p>
        </div>
        <ul className="flex flex-col gap-5 px-5 text-center lg:px-0 lg:text-start">
          <FooterContact text={"Email: info@positivus.com"} />
          <FooterContact text={"Phone: 555-567-8901"} />
          <FooterContact
            text={"Address: 1234 Main St Moonstone City, Stardust State 12345"}
          />
        </ul>
      </div>
      <div className="mx-auto flex w-[90%] flex-col items-center place-self-start rounded-xl bg-[#292A32] px-5 py-8 md:col-start-2 md:row-start-2 md:mx-0 md:justify-self-center md:px-10 lg:col-span-2 lg:w-[80%] lg:justify-self-end lg:px-2 xl:text-lg">
        <form
          action=""
          className="flex flex-col gap-6 md:flex-row md:items-center lg:w-full lg:justify-center"
        >
          <input
            type="email"
            placeholder="Email"
            className="rounded-xl border border-gray-400 bg-transparent p-4 text-gray-400 outline-gray-400 lg:w-[55%] lg:p-6"
          />
          <input
            type="submit"
            value={"Subscribe to news"}
            className="cursor-pointer rounded-xl bg-[var(--green-accent)] p-4 transition-colors hover:bg-[var(--green-accent-hover)] hover:font-medium lg:p-6"
          />
        </form>
      </div>

      <ul className="flex items-center gap-4 md:col-span-2 md:row-start-4 lg:col-start-3 lg:row-start-1 lg:justify-self-end">
        <FooterSocials icon={RiLinkedinFill} />
        <FooterSocials icon={RiFacebookFill} />
        <FooterSocials icon={RiTwitterXFill} />
      </ul>
      <hr className="w-[90%] bg-gray-300 md:col-span-2 md:col-start-1 md:row-start-3 md:w-full lg:col-span-3" />

      <div className="flex flex-col text-center text-gray-300 md:col-span-2 md:row-start-5 lg:col-span-3 lg:row-start-4 xl:text-lg">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
