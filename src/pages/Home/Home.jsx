import React from "react";
import Hero from "../../components/home/Hero";
import Contact from "../../components/home/Contact";
import Services from "../../components/home/Services";
import Process from "../../components/home/Process";
import Team from "../../components/home/Team";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Team />
      <Contact />
    </>
  );
};

export default Home;
