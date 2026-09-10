"use client";

import Image from "next/image";
import { motion } from "motion/react";
import image from "../../assets/hero.jpg";

export default function Vision() {
  return (
    <section className="bg-[#f6f5f2] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
            }}
            className="
              relative
              aspect-[4/5]
              overflow-hidden
              lg:col-span-5
            "
          >
            <Image
              src={image}
              alt="Architecture and construction"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}

          <div className="lg:col-span-6 lg:col-start-7">
            <span className="text-[10px] uppercase tracking-[0.25em] text-black/35">
              05 — Our Vision
            </span>

            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                mt-8
                text-5xl
                font-light
                leading-[0.95]
                tracking-[-0.05em]
                sm:text-6xl
                lg:text-[6rem]
              "
            >
              Built with
              <br />
              purpose.
            </motion.h2>

            <p
              className="
              mt-10
              max-w-lg
              text-lg
              font-light
              leading-relaxed
              text-black/60
            "
            >
              We believe great spaces are not simply built. They are carefully
              planned, thoughtfully designed and created with a clear vision for
              the future.
            </p>

            {/* Principles */}

            <div className="mt-14 space-y-6">
              {[
                "Quality in every detail",
                "Precision in every stage",
                "Value for generations",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="
                    flex
                    items-center
                    gap-5
                    border-b
                    border-black/10
                    pb-5
                  "
                >
                  <span className="text-[10px] text-black/30">
                    0{index + 1}
                  </span>

                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
