import React from "react";
import Hero from "../../components/home/Hero";
import Contact from "../../components/home/Contact";
import Services from "../../components/home/Services";
import Process from "../../components/home/Process";
import Team from "../../components/home/Team";
import Case from "../../components/home/Case";
import Testimonials from "../../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Case />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
