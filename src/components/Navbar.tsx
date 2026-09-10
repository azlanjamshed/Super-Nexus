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
//     <header className="fixed left-0 top-0 z-50 w-full bg-transparent backdrop-blur-md">
//       <div className="relative flex h-[50px] w-full items-center justify-between px-5 sm:px-8 lg:px-10">
//         {/* ================= LEFT NAV ================= */}

//         <nav className="hidden items-center gap-7 md:flex">
//           {leftLinks.map((link, index) => (
//             <motion.div
//               key={link.name}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.1,
//               }}
//             >
//               <Link
//                 href={link.href}
//                 className="group relative text-[15px] font-normal tracking-[-0.01em] text-black"
//               >
//                 {link.name}

//                 {/* underline */}
//                 <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
//               </Link>
//             </motion.div>
//           ))}
//         </nav>

//         {/* ================= CENTER LOGO ================= */}

//         <motion.div
//           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
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
//                 className="h-[58px] w-[58px] object-contain sm:h-[68px] sm:w-[68px] lg:h-[76px] lg:w-[76px]"
//               />
//             </motion.div>
//           </Link>
//         </motion.div>

//         {/* ================= RIGHT NAV ================= */}

//         <nav className="hidden items-center gap-7 md:flex">
//           {rightLinks.map((link, index) => (
//             <motion.div
//               key={link.name}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.5,
//                 delay: 0.2 + index * 0.1,
//               }}
//             >
//               <Link
//                 href={link.href}
//                 className="group relative text-[15px] font-normal tracking-[-0.01em] text-black"
//               >
//                 {link.name}

//                 <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
//               </Link>
//             </motion.div>
//           ))}
//         </nav>

//         {/* ================= MOBILE BUTTON ================= */}

//         <motion.button
//           type="button"
//           onClick={() => setMenuOpen((prev) => !prev)}
//           whileTap={{ scale: 0.9 }}
//           className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
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
//             className="overflow-hidden border-t border-black/5 md:hidden"
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
//                     className="block border-b border-black/5 py-4 text-xl font-light text-black"
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
//                     text-[15px]
//                     font-bold
//                     tracking-[-0.01em]
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
//                     text-[15px]
//                     font-bold
//                     tracking-[-0.01em]
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
// {
//   index < rightLinks.length - 1 && (
//     <span className="mx-1.5 text-[12px] text-black/50">.</span>
//   );
// }
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
//                         text-xl
//                         font-light
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

const leftLinks = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Service",
    href: "/service",
  },
];

const rightLinks = [
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-transparent *:backdrop-blur-md">
      <div className="relative mx-auto flex h-[64px] w-full items-center px-5 sm:px-8 lg:px-10">
        {/* ================= LEFT NAV ================= */}

        <nav className="hidden items-center md:flex">
          {leftLinks.map((link, index) => (
            <div key={link.name} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Link
                  href={link.href}
                  className="
                    group
                    relative
                    block
                    px-2
                    py-2
                    text-[13px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-black
                  "
                >
                  {link.name}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-2
                      h-px
                      w-0
                      bg-black
                      transition-all
                      duration-300
                      group-hover:w-[calc(100%-16px)]
                    "
                  />
                </Link>
              </motion.div>
              {index < rightLinks.length - 1 && (
                <span className="mx-1.5 text-[12px] font-bold text-black/50">
                  |
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* ================= CENTER LOGO ================= */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
          "
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link href="/" aria-label="Home">
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={76}
                height={76}
                priority
                className="
                  h-[58px]
                  w-[58px]
                  object-contain
                  sm:h-[68px]
                  sm:w-[68px]
                  lg:h-[76px]
                  lg:w-[76px]
                "
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* ================= RIGHT NAV ================= */}

        <nav className="ml-auto hidden items-center md:flex ">
          {rightLinks.map((link, index) => (
            <div key={link.name} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
              >
                <Link
                  href={link.href}
                  className="
                    group
                    relative
                    block
                    px-2
                    py-2
                    text-[13px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-black

                  "
                >
                  {link.name}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-2
                      h-px
                      w-0
                      bg-black
                      transition-all
                      duration-300
                      group-hover:w-[calc(100%-16px)]
                    "
                  />
                </Link>
              </motion.div>
              {index < rightLinks.length - 1 && (
                <span className="mx-1.5 text-[12px] font-bold text-black/50">
                  |
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* ================= MOBILE BUTTON ================= */}

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
            md:hidden
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
            className="block h-[1px] w-5 bg-black"
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
            className="block h-[1px] w-5 bg-black"
          />
        </motion.button>
      </div>

      {/* ================= MOBILE MENU ================= */}

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
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-black/5 bg-transparent backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col px-5 pb-6 pt-2 sm:px-8">
              {[...leftLinks, ...rightLinks].map((link, index) => (
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
                    delay: index * 0.07,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                        block
                        border-b
                        border-black/5
                        py-4
                        text-base
                        font-medium
                        uppercase
                        tracking-[0.08em]
                        text-black
                      "
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
