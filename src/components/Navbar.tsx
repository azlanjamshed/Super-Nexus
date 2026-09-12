// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { AnimatePresence, motion } from "motion/react";
// import { useState } from "react";

// const leftLinks = [
//   {
//     name: "About",
//     href: "/about",
//   },
//   {
//     name: "Service",
//     href: "/service",
//   },
// ];

// const rightLinks = [
//   {
//     name: "Projects",
//     href: "/projects",
//   },
//   {
//     name: "Contact",
//     href: "/contact",
//   },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed left-0 top-0 z-50 w-full bg-transparent *:backdrop-blur-md">
//       <div className="relative mx-auto flex h-[64px] w-full items-center px-5 sm:px-8 lg:px-10">
//         {/* ================= LEFT NAV ================= */}

//         <nav className="hidden items-center md:flex">
//           {leftLinks.map((link, index) => (
//             <div key={link.name} className="flex items-center">
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                 }}
//               >
//                 <Link
//                   href={link.href}
//                   className="
//                     group
//                     relative
//                     block
//                     px-2
//                     py-2
//                     text-[13px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.12em]
//                     text-black
//                   "
//                 >
//                   {link.name}

//                   <span
//                     className="
//                       absolute
//                       bottom-0
//                       left-2
//                       h-px
//                       w-0
//                       bg-black
//                       transition-all
//                       duration-300
//                       group-hover:w-[calc(100%-16px)]
//                     "
//                   />
//                 </Link>
//               </motion.div>
//               {index < rightLinks.length - 1 && (
//                 <span className="mx-1.5 text-[12px] font-bold text-black/50">
//                   |
//                 </span>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* ================= CENTER LOGO ================= */}

//         <motion.div
//           className="
//             absolute
//             left-1/2
//             top-1/2
//             -translate-x-1/2
//             -translate-y-1/2
//           "
//           initial={{
//             opacity: 0,
//             scale: 0.8,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//           }}
//           transition={{
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         >
//           <Link href="/" aria-label="Home">
//             <motion.div
//               whileHover={{
//                 scale: 1.08,
//                 rotate: 3,
//               }}
//               whileTap={{
//                 scale: 0.95,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 15,
//               }}
//             >
//               <Image
//                 src="/logo.png"
//                 alt="Logo"
//                 width={76}
//                 height={76}
//                 priority
//                 className="
//                   h-[58px]
//                   w-[58px]
//                   object-contain
//                   sm:h-[68px]
//                   sm:w-[68px]
//                   lg:h-[76px]
//                   lg:w-[76px]
//                 "
//               />
//             </motion.div>
//           </Link>
//         </motion.div>

//         {/* ================= RIGHT NAV ================= */}

//         <nav className="ml-auto hidden items-center md:flex ">
//           {rightLinks.map((link, index) => (
//             <div key={link.name} className="flex items-center">
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: 0.2 + index * 0.1,
//                 }}
//               >
//                 <Link
//                   href={link.href}
//                   className="
//                     group
//                     relative
//                     block
//                     px-2
//                     py-2
//                     text-[13px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.12em]
//                     text-black

//                   "
//                 >
//                   {link.name}

//                   <span
//                     className="
//                       absolute
//                       bottom-0
//                       left-2
//                       h-px
//                       w-0
//                       bg-black
//                       transition-all
//                       duration-300
//                       group-hover:w-[calc(100%-16px)]
//                     "
//                   />
//                 </Link>
//               </motion.div>
//               {index < rightLinks.length - 1 && (
//                 <span className="mx-1.5 text-[12px] font-bold text-black/50">
//                   |
//                 </span>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* ================= MOBILE BUTTON ================= */}

//         <motion.button
//           type="button"
//           onClick={() => setMenuOpen((prev) => !prev)}
//           whileTap={{ scale: 0.9 }}
//           className="
//             ml-auto
//             flex
//             h-10
//             w-10
//             flex-col
//             items-center
//             justify-center
//             gap-[5px]
//             md:hidden
//           "
//           aria-label="Toggle navigation"
//           aria-expanded={menuOpen}
//         >
//           <motion.span
//             animate={
//               menuOpen
//                 ? {
//                     rotate: 45,
//                     y: 3,
//                   }
//                 : {
//                     rotate: 0,
//                     y: 0,
//                   }
//             }
//             className="block h-[1px] w-5 bg-black"
//           />

//           <motion.span
//             animate={
//               menuOpen
//                 ? {
//                     rotate: -45,
//                     y: -3,
//                   }
//                 : {
//                     rotate: 0,
//                     y: 0,
//                   }
//             }
//             className="block h-[1px] w-5 bg-black"
//           />
//         </motion.button>
//       </div>

//       {/* ================= MOBILE MENU ================= */}

//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{
//               opacity: 0,
//               height: 0,
//             }}
//             animate={{
//               opacity: 1,
//               height: "auto",
//             }}
//             exit={{
//               opacity: 0,
//               height: 0,
//             }}
//             transition={{
//               duration: 0.35,
//               ease: "easeInOut",
//             }}
//             className="overflow-hidden border-t border-black/5 bg-transparent backdrop-blur-md md:hidden"
//           >
//             <nav className="flex flex-col px-5 pb-6 pt-2 sm:px-8">
//               {[...leftLinks, ...rightLinks].map((link, index) => (
//                 <motion.div
//                   key={link.name}
//                   initial={{
//                     opacity: 0,
//                     x: -15,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   transition={{
//                     delay: index * 0.07,
//                   }}
//                 >
//                   <Link
//                     href={link.href}
//                     onClick={() => setMenuOpen(false)}
//                     className="
//                         block
//                         border-b
//                         border-black/5
//                         py-4
//                         text-base
//                         font-medium
//                         uppercase
//                         tracking-[0.08em]
//                         text-black
//                       "
//                   >
//                     {link.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  // { name: "Why Us", href: "/why-us" },
  // { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      {/* =====================================================
          TOP INFORMATION BAR
      ====================================================== */}
      {/* <div className="hidden h-[28px] bg-[#071b2d] text-white sm:block">
        <div className="mx-auto flex h-full w-full items-center justify-between px-5 text-[9px] sm:px-8 lg:px-10">
          
          <div className="flex items-center gap-5 text-white/80">
            <span className="flex items-center gap-1.5">
              <span className="text-[10px]">⌖</span>
              Kasia, Kushinagar, Uttar Pradesh
            </span>

            <span className="h-3 w-px bg-white/20" />

            <a
              href="mailto:info@supernexusinfra.com"
              className="transition-colors duration-300 hover:text-white"
            >
              info@supernexusinfra.com
            </a>
          </div>

          
          <div className="flex items-center gap-5">
            <span className="text-white/80">Building a Better Tomorrow</span>

            <div className="flex items-center gap-3 text-white/80">
              <span className="transition-colors hover:text-white">in</span>
              <span className="transition-colors hover:text-white">f</span>
              <span className="transition-colors hover:text-white">◎</span>
              <span className="transition-colors hover:text-white">▶</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <div className="border-b border-black/5 bg-transparent *:backdrop-blur-md">
        <div className="relative mx-auto flex h-[64px] w-full items-center px-5 sm:px-8 lg:px-10">
          {/* =================================================
              LOGO
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="shrink-0"
          >
            <Link href="/" aria-label="SuperNexus Home">
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
                }}
                whileTap={{
                  scale: 0.55,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
              >
                <Image
                  src="/logo.png"
                  alt="SuperNexus Infra Pvt. Ltd."
                  width={220}
                  height={75}
                  priority
                  className="h-[48px] w-auto object-contain sm:h-[52px]"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.08 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={link.href}
                  className="group relative block whitespace-nowrap px-3 py-3 text-[15px] font-semibold tracking-[-0.01em] text-[#071b2d]"
                >
                  {link.name}

                  {/* Red animated underline */}
                  <span
                    className={`
      absolute
      bottom-[9px]
      left-3
      h-[2px]
      bg-[#006FFD]
      transition-all
      duration-300
      ease-out
      ${
        pathname === link.href
          ? "w-[calc(100%-24px)]"
          : "w-0 group-hover:w-[calc(100%-24px)]"
      }
    `}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* =================================================
              GET A QUOTE BUTTON
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="ml-auto hidden lg:block"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#006FFD]
                  px-5
                  py-2.5
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.04em]
                  text-white
                  shadow-sm
                  transition-colors
                  duration-300
                  hover:bg-[#0056c4]
                "
              >
                <span>Get A Quote</span>

                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  className="text-sm"
                >
                  →
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}
          <motion.button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
            className="
              ml-auto
              flex
              h-10
              w-10
              flex-col
              items-center
              justify-center
              gap-[5px]
              lg:hidden
            "
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={
                menuOpen
                  ? {
                      rotate: 45,
                      y: 3,
                    }
                  : {
                      rotate: 0,
                      y: 0,
                    }
              }
              transition={{ duration: 0.25 }}
              className="block h-[1.5px] w-5 bg-[#071b2d]"
            />

            <motion.span
              animate={
                menuOpen
                  ? {
                      rotate: -45,
                      y: -3,
                    }
                  : {
                      rotate: 0,
                      y: 0,
                    }
              }
              transition={{ duration: 0.25 }}
              className="block h-[1.5px] w-5 bg-[#071b2d]"
            />
          </motion.button>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              overflow-hidden
              border-b
              border-black/5
              bg-transparent *:backdrop-blur-md
              lg:hidden
            "
          >
            <nav className="px-5 pb-5 pt-2 sm:px-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.35,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-black/5
                      py-4
                      text-sm
                      font-semibold
                      text-[#071b2d]
                      hover:scale-[1.01]
                      transition-all
                      duration-300
                    "
                  >
                    <span>{link.name}</span>

                    <span className="text-[#006FFD]">→</span>
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Quote */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                // transition={{
                //   delay: 0.45,
                // }}
                className="pt-5"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#006FFD]
                    px-5
                    py-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-white
                    hover:bg-[#0056c4]
                  "
                >
                  Get A Quote
                  <span>→</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
