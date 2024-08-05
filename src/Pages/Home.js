import React from "react";
import Navbar from "../Components/navbar/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import About from "../Components/About";
import WhySoC from "../Components/WhySoC";
import Testimonials from "../Components/Testimonials";
import Team from "../Components/Team";
import Footer from "../Components/footer/Footer";

import '../App.css';

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhySoC />
      {/* <Testimonials /> */}
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
