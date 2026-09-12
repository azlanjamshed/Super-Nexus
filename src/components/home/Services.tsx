// "use client";

// import Link from "next/link";
// import { motion } from "motion/react";

// const services = [
//   {
//     number: "01",
//     title: "Construction",
//     description:
//       "End-to-end construction solutions delivered with precision, quality and attention to every detail.",
//     href: "/services/construction",
//   },
//   {
//     number: "02",
//     title: "Real Estate",
//     description:
//       "Strategic real estate development focused on creating sustainable long-term value.",
//     href: "/services/real-estate",
//   },
//   {
//     number: "03",
//     title: "Development",
//     description:
//       "Residential and commercial developments designed around people, place and purpose.",
//     href: "/services/development",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="bg-[#111] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-40">
//       <div className="mx-auto max-w-7xl">
//         {/* Header */}

//         <div className="grid gap-8 lg:grid-cols-2">
//           <div>
//             <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
//               02 — Expertise
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
//               What we do.
//             </h2>
//           </div>

//           <p
//             className="
//             max-w-md
//             self-end
//             text-sm
//             leading-relaxed
//             text-white/45
//           "
//           >
//             From the first idea to the final structure, our expertise spans
//             construction, development and real estate.
//           </p>
//         </div>

//         {/* Services */}

//         <div className="mt-20 border-t border-white/10">
//           {services.map((service) => (
//             <Link
//               key={service.number}
//               href={service.href}
//               className="group block"
//             >
//               <motion.div
//                 whileHover={{ x: 8 }}
//                 transition={{
//                   duration: 0.4,
//                   ease: "easeOut",
//                 }}
//                 className="
//                   grid
//                   gap-6
//                   border-b
//                   border-white/10
//                   py-8
//                   sm:py-10
//                   lg:grid-cols-[80px_1fr_1fr_auto]
//                   lg:items-center
//                 "
//               >
//                 <span className="text-[10px] text-white/30">
//                   {service.number}
//                 </span>

//                 <h3
//                   className="
//                   text-3xl
//                   font-light
//                   tracking-[-0.03em]
//                   sm:text-5xl
//                 "
//                 >
//                   {service.title}
//                 </h3>

//                 <p
//                   className="
//                   max-w-sm
//                   text-sm
//                   leading-relaxed
//                   text-white/40
//                 "
//                 >
//                   {service.description}
//                 </p>

//                 <span
//                   className="
//                   hidden
//                   h-12
//                   w-12
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-white/15
//                   text-sm
//                   transition-all
//                   duration-500
//                   group-hover:bg-white
//                   group-hover:text-black
//                   lg:flex
//                 "
//                 >
//                   ↗
//                 </span>
//               </motion.div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Building2, HardHat, Handshake, ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Construction",
    description:
      "Residential, commercial and industrial construction with highest quality standards.",
    href: "/services/construction",
    icon: HardHat,
  },
  {
    number: "02",
    title: "Real Estate",
    description:
      "Residential plots, apartments, commercial spaces and investment opportunities.",
    href: "/services/real-estate",
    icon: Building2,
  },
  {
    number: "03",
    title: "Project Planning & Design",
    description:
      "Modern design, smart planning and efficient project management.",
    href: "/services/development",
    icon: Building2,
  },
  {
    number: "04",
    title: "Consultation & Support",
    description:
      "End-to-end guidance for your construction and real estate needs.",
    href: "/services/consultation",
    icon: Handshake,
  },
];

export default function Services() {
  return (
    <section className="bg-[#071b2d] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      {/* bg-[#111] */}
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
          className="text-center"
        >
          {/* Red line + label */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-7 bg-[#006FFD]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/50">
              Our Services
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-[-0.04em]
              text-white
              sm:text-4xl
              lg:text-[3rem]
            "
          >
            What We Do
          </h2>
        </motion.div>

        {/* =====================================================
            SERVICE CARDS
        ====================================================== */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link href={service.href} className="group block h-full">
                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="
                      relative
                      flex
                      h-full
                      min-h-[230px]
                      flex-col
                      bg-[#f6f5f2]
                      p-6
                      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                      transition-shadow
                      duration-500
                      group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)]
                      sm:p-7
                    "
                  >
                    {/* Number */}
                    <span
                      className="
                        absolute
                        right-5
                        top-5
                        text-[9px]
                        font-medium
                        tracking-[0.1em]
                        text-[#071b2d]/25
                      "
                    >
                      {service.number}
                    </span>

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: -3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        text-[#071b2d]
                      "
                    >
                      <Icon strokeWidth={1.8} className="h-9 w-9" />
                    </motion.div>

                    {/* Content */}
                    <div className="mt-5">
                      <h3
                        className="
                          text-[15px]
                          font-bold
                          tracking-[-0.02em]
                          text-[#071b2d]
                        "
                      >
                        {service.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-[230px]
                          text-[11px]
                          leading-[1.6]
                          text-[#071b2d]/60
                        "
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="mt-auto flex justify-end pt-6">
                      <motion.div
                        whileHover={{
                          x: 4,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          text-[#006FFD]
                        "
                      >
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                      </motion.div>
                    </div>

                    {/* Bottom red line */}
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
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
