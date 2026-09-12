"use client";

import { motion } from "motion/react";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@supernexusinfra.com",
    href: "mailto:info@supernexusinfra.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8840792065",
    href: "tel:+918840792065",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Kasia, Kushinagar, Uttar Pradesh, India",
    href: "#map",
  },
];

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const whatsappNumber = "918840792065";

    const message = `
Hello SuperNexus Infra Pvt. Ltd.,

I would like to make an enquiry.

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Interested In: ${data.service}

Project Details:
${data.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");

    reset();
  };

  return (
    <section className="bg-[#f6f5f2] py-20 text-[#071b2d] sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#006FFD]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#071b2d]/45">
              Contact SuperNexus
            </span>
          </div>

          <h1 className="text-4xl font-light leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Let's Build
            <br />
            <span className="text-[#006FFD]">Something Meaningful.</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#071b2d]/55">
            Have a project in mind or looking for the right development partner?
            Get in touch with our team and tell us about your requirements.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* LEFT — Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="border-t border-[#071b2d]/10">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex gap-5 border-b border-[#071b2d]/10 py-7"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#071b2d]/10 bg-white transition-colors duration-300 group-hover:border-[#006FFD]">
                      <Icon
                        className="h-4 w-4 text-[#006FFD]"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#071b2d]/35">
                        {item.label}
                      </p>

                      <p className="mt-2 max-w-xs text-sm leading-6 text-[#071b2d]/70 transition-colors duration-300 group-hover:text-[#006FFD]">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      className="h-4 w-4 text-[#071b2d]/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#006FFD]"
                      strokeWidth={1.5}
                    />
                  </a>
                );
              })}
            </div>

            {/* Small company note */}
            <div className="mt-10 border-l-2 border-[#006FFD] pl-5">
              <p className="text-xs leading-6 text-[#071b2d]/50">
                Whether you're planning a construction project, exploring real
                estate opportunities or looking for development support, we'd be
                happy to discuss your requirements.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="border border-[#071b2d]/10 bg-white p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#006FFD]">
                Send an Enquiry
              </p>

              <h2 className="mt-3 text-2xl font-light tracking-[-0.03em] sm:text-3xl">
                Tell us about your project.
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name + Phone */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[9px] font-medium uppercase tracking-[0.15em] text-[#071b2d]/45"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className="w-full border-b border-[#071b2d]/15 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#071b2d]/25 focus:border-[#006FFD]"
                  />

                  {errors.name && (
                    <p className="mt-1 text-[9px] text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[9px] font-medium uppercase tracking-[0.15em] text-[#071b2d]/45"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9+\-\s()]{10,15}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                    className="w-full border-b border-[#071b2d]/15 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#071b2d]/25 focus:border-[#006FFD]"
                  />

                  {errors.phone && (
                    <p className="mt-1 text-[9px] text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[9px] font-medium uppercase tracking-[0.15em] text-[#071b2d]/45"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="w-full border-b border-[#071b2d]/15 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#071b2d]/25 focus:border-[#006FFD]"
                />

                {errors.email && (
                  <p className="mt-1 text-[9px] text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-[9px] font-medium uppercase tracking-[0.15em] text-[#071b2d]/45"
                >
                  Interested In
                </label>

                <select
                  id="service"
                  defaultValue=""
                  {...register("service", {
                    required: "Please select a service",
                  })}
                  className="w-full border-b border-[#071b2d]/15 bg-transparent px-0 py-3 text-sm text-[#071b2d]/60 outline-none transition-colors focus:border-[#006FFD]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Construction">Construction</option>

                  <option value="Real Estate">Real Estate</option>

                  <option value="Development">Development</option>

                  <option value="Project Planning & Design">
                    Project Planning & Design
                  </option>

                  <option value="Consultation & Support">
                    Consultation & Support
                  </option>
                </select>

                {errors.service && (
                  <p className="mt-1 text-[9px] text-red-500">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[9px] font-medium uppercase tracking-[0.15em] text-[#071b2d]/45"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  {...register("message", {
                    required: "Please tell us about your project",
                  })}
                  className="w-full resize-none border-b border-[#071b2d]/15 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#071b2d]/25 focus:border-[#006FFD]"
                />

                {errors.message && (
                  <p className="mt-1 text-[9px] text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-[#006FFD] px-6 py-3.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#0056c4]"
              >
                Send Enquiry on WhatsApp
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </button>

              <p className="text-[8px] leading-5 text-[#071b2d]/35">
                Your enquiry will open WhatsApp with the information you provide
                above.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
