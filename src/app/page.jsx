"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TypeIt from "typeit-react";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
            <iframe
              style={{ border: "none" }}
              width="100%"
              height="100%"
              src="https://rive.app/s/0m9TP-uGAEC3i09JThGswQ/embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          
          <h1 className="text-3xl md:text-6xl font-bold text-gray-700">
            <span className="text-xl md:text-3xl font-bold">
              <span className="text-purple-500">Hello</span>
              , I am <span><TypeIt
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                instance
                  .type("Atul.")
                  .pause(800)
                  .delete(8)
                  .type("Lance.");

                // Remember to return it!
                return instance;
              }}
            /></span>
            </span>
            <br />
            <br />
            A <span className="text-purple-500">{"<"}</span>Developer<span className="text-purple-500">{"/>"}</span> & <span className="text-purple-500">{"{"}</span>Programmer<span className="text-purple-500">{"}"}</span>
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-gray-700">
            Welcome to my digital canvas! Let us follow my journey of programming, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence ✨
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
            <button className="relative h-12 w-40 overflow-hidden border border-purple-500 text-purple-500 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-purple-500 before:duration-300 before:ease-out hover:text-white hover:shadow-purple-500 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
              <span className="relative z-10">Download Resume</span>
            </button>
            </Link>
            <Link href="/portfolio">
              <button className="relative h-12 w-40 overflow-hidden border border-purple-500 text-purple-500 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-purple-500 before:duration-300 before:ease-out hover:text-white hover:shadow-purple-500 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                <span className="relative z-10">Explore my work!</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
