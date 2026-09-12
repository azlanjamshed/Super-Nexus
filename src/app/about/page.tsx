import AboutHero from "@/components/about/AboutHero";
import CoreValues from "@/components/about/CoreValues";
import OurApproach from "@/components/about/OurApproach";
import VisionMission from "@/components/about/VisionMission";
import WhoWeAre from "@/components/about/WhoWeAre";
import AboutCTA from "@/components/about/AboutCTA";
import React from "react";

const page = () => {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <CoreValues />
      <VisionMission />
      <OurApproach />
      <AboutCTA />
    </>
  );
};

export default page;
