import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WaveSection from "./WaveSection";
import AboutKing from "./AboutKing";
import OurClasses from "./OurClasses";
import Counts from "./Counts";
import OurActivities from "./OurActivities";
import ChooseUs from "./ChooseUs";
import OurTeachers from "./OurTeachers";
import OurGallery from "./OurGallery";
import OurBlog from "./OurBlog";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import Pareents from "./Pareents";

const Root = () => {
  const location = useLocation();

  // Check if the current path is "/"
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Navbar should always be visible */}
      <Navbar />
      
      {/* Show HeroSection and WaveSection only on the homepage */}
      {isHome && (
        <>
          <HeroSection />
          <WaveSection />
          <AboutKing/>
          <OurClasses/>
          <Counts/>
          <OurActivities/>
          <ChooseUs/>
          <OurTeachers/>
          <OurGallery/>
          <OurBlog/>
          <Pareents/>
          <ContactUs/>
          <Footer/>
        </>
      )}

      {/* This is where the routed components (like About) will be rendered */}
      <Outlet />
    </>
  );
};

export default Root;
