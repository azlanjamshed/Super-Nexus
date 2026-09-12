// "use client";

// import { motion } from "motion/react";

// const stats = [
//   {
//     number: "15+",
//     label: "Years of experience",
//   },
//   {
//     number: "50+",
//     label: "Projects delivered",
//   },
//   {
//     number: "2M+",
//     label: "Sq. ft. developed",
//   },
//   {
//     number: "10+",
//     label: "Cities",
//   },
// ];

// export default function Stats() {
//   return (
//     <section className="bg-[#e9e7e1] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-36">
//       <div className="mx-auto max-w-7xl">
//         <div className="mb-16">
//           <span className="text-[10px] uppercase tracking-[0.25em] text-black/35">
//             04 — By the numbers
//           </span>
//         </div>

//         <div className="grid grid-cols-2 border-t border-black/10 lg:grid-cols-4">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.1,
//               }}
//               className="
//                 border-b
//                 border-black/10
//                 py-10
//                 pr-5
//                 sm:py-14
//                 lg:border-b-0
//                 lg:border-r
//                 lg:px-8
//                 lg:first:pl-0
//                 lg:last:border-r-0
//               "
//             >
//               <div
//                 className="
//                 text-5xl
//                 font-light
//                 tracking-[-0.05em]
//                 sm:text-7xl
//                 lg:text-8xl
//               "
//               >
//                 {stat.number}
//               </div>

//               <p
//                 className="
//                 mt-4
//                 max-w-[140px]
//                 text-[10px]
//                 uppercase
//                 leading-relaxed
//                 tracking-[0.15em]
//                 text-black/40
//               "
//               >
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "motion/react";
import { Building2, Users, ShieldCheck, Leaf } from "lucide-react";

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
    icon: Building2,
  },
  {
    number: "100+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    number: "100%",
    label: "Commitment to Quality",
    icon: ShieldCheck,
  },
  {
    number: "Sustainable",
    label: "Development Focus",
    icon: Leaf,
  },
];

export default function Stats() {
  return (
    <section className="bg-[#071b2d] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  flex
                  items-center
                  gap-4
                  px-4
                  py-5

                  sm:gap-5
                  sm:px-6
                  sm:py-6

                  lg:px-8
                  lg:py-5

                  ${
                    index % 2 === 0
                      ? "border-r border-[#f6f5f2] lg:border-r"
                      : ""
                  }

                  ${index < 2 ? "border-b border-[#f6f5f2] lg:border-b-0" : ""}

                  ${index === 1 ? "lg:border-r" : ""}

                  ${index === 2 ? "lg:border-r" : ""}
                `}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    text-[#f6f5f2]

                    sm:h-11
                    sm:w-11
                  "
                >
                  <Icon className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.7} />
                </motion.div>

                {/* Content */}
                <div className="min-w-0">
                  <h3
                    className="
                      text-xl
                      font-bold
                      leading-none
                      tracking-[-0.04em]
                      text-[#f6f5f2]

                      sm:text-2xl
                    "
                  >
                    {stat.number}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-[9px]
                      font-medium
                      leading-tight
                      text-[#f6f5f2]/55

                      sm:text-[10px]
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
