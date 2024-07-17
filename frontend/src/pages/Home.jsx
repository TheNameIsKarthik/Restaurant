import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Qualities from "../components/Qualities";
import Menu from "../components/Menu";
import Services from "../components/Services";
import Team from "../components/Team";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <Services />
      <Team />
      <Reservation />
      <Footer />
    </>
  );
};

export default Home;
