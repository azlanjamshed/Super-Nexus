"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function ContactMap() {
  return (
    <section
      id="map"
      className="bg-[#071b2d] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#006FFD]" />

              <span className="text-[9px] uppercase tracking-[0.22em] text-white/40">
                Find Us
              </span>
            </div>

            <h2 className="text-4xl font-light tracking-[-0.04em] sm:text-5xl">
              Visit
              <br />
              <span className="text-white/40">SuperNexus.</span>
            </h2>
          </div>

          <div className="flex items-start gap-3 sm:max-w-sm">
            <MapPin
              className="mt-1 h-4 w-4 shrink-0 text-[#006FFD]"
              strokeWidth={1.5}
            />

            <p className="text-xs leading-6 text-white/50">
              Kasia, Kushinagar,
              <br />
              Uttar Pradesh, India
            </p>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative h-[350px] overflow-hidden border border-white/10 sm:h-[450px] lg:h-[500px]"
        >
          <iframe
            title="SuperNexus Infra location"
            src="https://www.google.com/maps?q=Kasia,Kushinagar,Uttar%20Pradesh,India&output=embed"
            className="h-full w-full border-0 "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Map label */}
          <div className="pointer-events-none absolute bottom-5 left-5 border border-white/10 bg-[#071b2d]/90 px-4 py-3 backdrop-blur-sm">
            <p className="text-[8px] uppercase tracking-[0.18em] text-white/35">
              SuperNexus Infra Pvt. Ltd.
            </p>

            <p className="mt-1 text-[10px] text-white/70">
              Uttar Pradesh, India
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
