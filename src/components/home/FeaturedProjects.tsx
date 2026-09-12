// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "motion/react";
// import one from "../../assets/1.jpg";
// import two from "../../assets/2.jpg";
// import three from "../../assets/3.jpg";

// const projects = [
//   {
//     title: "The Grand Residence",
//     location: "New Delhi",
//     category: "Residential",
//     image: one,
//   },
//   {
//     title: "Business Heights",
//     location: "Gurugram",
//     category: "Commercial",
//     image: two,
//   },
//   {
//     title: "Green Valley",
//     location: "Noida",
//     category: "Development",
//     image: three,
//   },
// ];

// export default function FeaturedProjects() {
//   return (
//     <section className="bg-[#f6f5f2] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
//       <div className="mx-auto max-w-7xl">
//         {/* Heading */}

//         <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
//           <div>
//             <span className="text-[10px] uppercase tracking-[0.25em] text-black/35">
//               03 — Selected Projects
//             </span>

//             <h2
//               className="
//               mt-8
//               text-5xl
//               font-light
//               tracking-[-0.05em]
//               sm:text-7xl
//               lg:text-[7rem]
//             "
//             >
//               Our work.
//             </h2>
//           </div>

//           <Link
//             href="/projects"
//             className="
//               group
//               flex
//               items-center
//               gap-4
//               text-xs
//               uppercase
//               tracking-[0.15em]
//             "
//           >
//             View all projects
//             <span
//               className="
//               flex
//               h-9
//               w-9
//               items-center
//               justify-center
//               rounded-full
//               border
//               border-black/15
//               transition-all
//               duration-300
//               group-hover:bg-black
//               group-hover:text-white
//             "
//             >
//               ↗
//             </span>
//           </Link>
//         </div>

//         {/* Projects */}

//         <div className="mt-20 space-y-20">
//           {projects.map((project, index) => (
//             <Link href="/projects" key={project.title} className="group block">
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{
//                   duration: 0.8,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className={`
//                   grid gap-6
//                   lg:grid-cols-12
//                   lg:items-end
//                   ${index % 2 === 0 ? "" : "lg:grid-flow-col-dense"}
//                 `}
//               >
//                 {/* Image */}

//                 <div
//                   className={`
//                     relative
//                     aspect-[4/3]
//                     overflow-hidden
//                     sm:aspect-[16/9]
//                     lg:col-span-8
//                     ${index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-5"}
//                   `}
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.04 }}
//                     transition={{
//                       duration: 0.7,
//                       ease: "easeOut",
//                     }}
//                     className="absolute inset-0"
//                   >
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       className="
//                         object-cover
//                         grayscale-[15%]
//                         transition-all
//                         duration-700
//                         group-hover:grayscale-0
//                       "
//                     />
//                   </motion.div>
//                 </div>

//                 {/* Details */}

//                 <div
//                   className={`
//                     lg:col-span-3
//                     ${index % 2 === 0 ? "lg:col-start-10" : "lg:col-start-1"}
//                   `}
//                 >
//                   <span className="text-[10px] uppercase tracking-[0.2em] text-black/35">
//                     {project.category}
//                   </span>

//                   <h3
//                     className="
//                     mt-4
//                     text-2xl
//                     font-light
//                     tracking-[-0.03em]
//                     sm:text-3xl
//                   "
//                   >
//                     {project.title}
//                   </h3>

//                   <p className="mt-2 text-xs text-black/40">
//                     {project.location}
//                   </p>

//                   <span
//                     className="
//                     mt-8
//                     inline-flex
//                     translate-x-0
//                     border-b
//                     border-black/20
//                     pb-1
//                     text-[10px]
//                     uppercase
//                     tracking-[0.15em]
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-2
//                   "
//                   >
//                     Explore project ↗
//                   </span>
//                 </div>
//               </motion.div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import three from "../../assets/3.jpg";

const projects = [
  {
    title: "Residential Projects",
    description: "Modern homes for a better lifestyle",
    category: "Residential",
    image: one,
  },
  {
    title: "Commercial Projects",
    description: "Spaces for your business growth",
    category: "Commercial",
    image: two,
  },
  {
    title: "Ongoing Projects",
    description: "Quality work in progress",
    category: "Development",
    image: three,
  },
  {
    title: "Land & Plots",
    description: "Secure your future investment",
    category: "Real Estate",
    image: one,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#f6f5f2] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#006FFD]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#071b2d]">
                Our Projects
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-3
                text-3xl
                font-bold
                tracking-[-0.04em]
                text-[#071b2d]
                sm:text-4xl
                lg:text-[3rem]
              "
            >
              Featured <span className="text-[#006FFD]">Projects</span>
            </h2>
          </div>

          {/* View All Button */}
          <Link href="/projects" className="group w-fit">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
                flex
                items-center
                gap-3
                rounded-[5px]
                border
                border-[#071b2d]/20
                px-4
                py-2.5
                text-[9px]
                font-medium
                uppercase
                tracking-[0.08em]
                text-[#071b2d]
                transition-all
                duration-300
                group-hover:border-[#071b2d]
                
                
              "
            >
              <span>View All Projects</span>

              <span
                className="
                  text-[#071b2d]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* =====================================================
            PROJECT CARDS
        ====================================================== */}
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href="/projects" className="group block">
                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="
                    overflow-hidden
                    rounded-[3px]
                    border
                    border-[#071b2d]/15
                    bg-[#f6f5f2]
                    transition-colors
                    duration-300
                    group-hover:border-[#071b2d]/30
                  "
                >
                  {/* =================================================
                      IMAGE
                  ================================================== */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{
                        scale: 1.06,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="
                          object-cover
                          transition-all
                          duration-700
                          group-hover:scale-110
                        "
                      />
                    </motion.div>

                    {/* Image overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#071b2d]/50
                        via-transparent
                        to-transparent
                        opacity-60
                        transition-opacity
                        duration-500
                        group-hover:opacity-30
                      "
                    />
                  </div>

                  {/* =================================================
                      CARD CONTENT
                  ================================================== */}
                  <div className="relative p-3.5 sm:p-4">
                    {/* Category */}
                    <span
                      className="
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-[#071b2d]/40
                    "
                    >
                      {project.category}
                    </span>

                    {/* Title + Arrow */}
                    <div className="mt-1.5 flex items-center justify-between gap-3">
                      <h3
                        className="
                        text-[12px]
                        font-semibold
                        tracking-[-0.01em]
                        text-[#071b2d]
                        sm:text-[13px]
                      "
                      >
                        {project.title}
                      </h3>

                      <motion.span
                        whileHover={{
                          x: 3,
                        }}
                        className="
                          shrink-0
                          text-sm
                          text-white/70
                          transition-colors
                          duration-300
                          group-hover:text-[#006FFD]
                        "
                      >
                        →
                      </motion.span>
                    </div>

                    {/* Description */}
                    <p
                      className="
                      mt-1
                      text-[9px]
                      leading-[1.5]
                      text-white/45
                    "
                    >
                      {project.description}
                    </p>

                    {/* Red bottom accent */}
                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-0
                        bg-[#006FFD]
                        transition-all
                        duration-500
                        ease-out
                        group-hover:w-full
                      "
                    />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
