import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import HamburgerMenu from "../components/partials/HamburgerMenu";
import useToggleHamburger from "../hooks/useToggleHamburger";
import useScrollTop from "../hooks/useScrollTop";

const MainLayout = () => {
  const { isOpen, isDelayed, handleMenuToggle } = useToggleHamburger();
  useScrollTop();

  return (
    <>
      <Navbar handleMenuToggle={handleMenuToggle} />
      <div className="flex grow p-5 lg:px-16 2xl:px-60">
        <main className="mt-20 flex grow flex-col gap-20 lg:mt-28">
          <Outlet />
        </main>
      </div>
      {isOpen && (
        <HamburgerMenu
          isDelayed={isDelayed}
          isOpen={isOpen}
          handleMenuToggle={handleMenuToggle}
        />
      )}
      <Footer />
    </>
  );
};

export default MainLayout;
