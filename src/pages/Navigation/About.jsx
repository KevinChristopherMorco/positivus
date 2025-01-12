import React from "react";
import Hero from "../../components/about/Hero";
import Core from "../../components/about/Core";
import Awards from "../../components/about/Awards";
import Numbers from "../../components/about/Numbers";
import Journey from "../../components/about/Journey";

const About = () => {
  return (
    <>
      <Hero />
      <Numbers />
      <Journey />
      <Core />
      <Awards />
    </>
  );
};

export default About;
