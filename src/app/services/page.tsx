import PlanningDesign from "@/components/services/PlanningDesign";

import ServicesCTA from "@/components/services/ServicesCTA";
import ServicesIntro from "@/components/services/ServicesIntro";
import React from "react";
import image from "../../assets/hero.jpg";
import ServiceSection from "@/components/services/ServiceSection";
const services = [
  {
    number: "01",
    title: "Construction",
    heading: "Building",
    highlightedHeading: "With Precision.",
    description:
      "We focus on delivering construction solutions with attention to quality, planning and execution. From initial preparation to final delivery, every stage is approached with discipline and purpose.",
    image: image,
    imageAlt: "SuperNexus construction project",
    focus: [
      "Quality Execution",
      "Project Coordination",
      "Timely Delivery",
      "Attention to Detail",
    ],
    icon: "construction" as const,
    dark: true,
  },

  {
    number: "02",
    title: "Real Estate",
    heading: "Spaces That",
    highlightedHeading: "Create Value.",
    description:
      "Our real estate approach focuses on identifying opportunities and creating spaces that combine functionality, thoughtful planning and long-term value.",
    image: image,
    imageAlt: "SuperNexus real estate project",
    focus: [
      "Property Development",
      "Residential Spaces",
      "Commercial Opportunities",
      "Long-Term Value",
    ],
    icon: "real-estate" as const,
    dark: false,
  },

  {
    number: "03",
    title: "Development",
    heading: "Developing",
    highlightedHeading: "What Matters.",
    description:
      "We approach development with a focus on purpose, practicality and long-term potential. Our goal is to transform opportunities into well-planned spaces and sustainable developments.",
    image: image,
    imageAlt: "SuperNexus development project",
    focus: [
      "Strategic Planning",
      "Site Development",
      "Project Management",
      "Sustainable Growth",
    ],
    icon: "development" as const,
    dark: true,
  },

  {
    number: "04",
    title: "Consultation & Support",
    heading: "Guidance From",
    highlightedHeading: "Start to Finish.",
    description:
      "We provide practical consultation and project support to help clients make informed decisions, coordinate requirements and move projects forward with clarity.",
    image: image,
    imageAlt: "SuperNexus consultation and planning",
    focus: [
      "Project Consultation",
      "Planning Support",
      "Requirement Analysis",
      "Execution Guidance",
    ],
    icon: "consultation" as const,
    dark: false,
  },
];

const page = () => {
  return (
    <main>
      <ServicesIntro />
      {services.map((service) => (
        <ServiceSection key={service.number} {...service} />
      ))}
      {/* <PlanningDesign /> */}

      <ServicesCTA />
    </main>
  );
};

export default page;
