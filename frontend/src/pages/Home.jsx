import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <div className="bg-[#1A1A40] text-white min-h-screen">
      {/* Top SCET Nexus Branding Header */}
      <Header />

      {/* Navigation Bar with Home / About / Login */}
      <Navbar />

      {/* Hero Section with Typing Text & Background Slider */}
      <HeroSlider />

      {/* You can add more sections below if needed (like Testimonials, Info, etc.) */}
    </div>
  );
};

export default Home;
