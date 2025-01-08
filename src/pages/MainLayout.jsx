import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/partials/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex grow p-5 lg:px-16 2xl:px-60">
        <main className="mt-20 flex grow flex-col gap-20 lg:mt-0">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
