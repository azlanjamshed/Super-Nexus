"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import three from "../../assets/3.jpg";

const projects = [
  {
    title: "The Grand Residence",
    location: "New Delhi",
    category: "Residential",
    image: one,
  },
  {
    title: "Business Heights",
    location: "Gurugram",
    category: "Commercial",
    image: two,
  },
  {
    title: "Green Valley",
    location: "Noida",
    category: "Development",
    image: three,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#f6f5f2] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-black/35">
              03 — Selected Projects
            </span>

            <h2
              className="
              mt-8
              text-5xl
              font-light
              tracking-[-0.05em]
              sm:text-7xl
              lg:text-[7rem]
            "
            >
              Our work.
            </h2>
          </div>

          <Link
            href="/projects"
            className="
              group
              flex
              items-center
              gap-4
              text-xs
              uppercase
              tracking-[0.15em]
            "
          >
            View all projects
            <span
              className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-black/15
              transition-all
              duration-300
              group-hover:bg-black
              group-hover:text-white
            "
            >
              ↗
            </span>
          </Link>
        </div>

        {/* Projects */}

        <div className="mt-20 space-y-20">
          {projects.map((project, index) => (
            <Link href="/projects" key={project.title} className="group block">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  grid gap-6
                  lg:grid-cols-12
                  lg:items-end
                  ${index % 2 === 0 ? "" : "lg:grid-flow-col-dense"}
                `}
              >
                {/* Image */}

                <div
                  className={`
                    relative
                    aspect-[4/3]
                    overflow-hidden
                    sm:aspect-[16/9]
                    lg:col-span-8
                    ${index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-5"}
                  `}
                >
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="
                        object-cover
                        grayscale-[15%]
                        transition-all
                        duration-700
                        group-hover:grayscale-0
                      "
                    />
                  </motion.div>
                </div>

                {/* Details */}

                <div
                  className={`
                    lg:col-span-3
                    ${index % 2 === 0 ? "lg:col-start-10" : "lg:col-start-1"}
                  `}
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                    {project.category}
                  </span>

                  <h3
                    className="
                    mt-4
                    text-2xl
                    font-light
                    tracking-[-0.03em]
                    sm:text-3xl
                  "
                  >
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-black/40">
                    {project.location}
                  </p>

                  <span
                    className="
                    mt-8
                    inline-flex
                    translate-x-0
                    border-b
                    border-black/20
                    pb-1
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                  >
                    Explore project ↗
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
