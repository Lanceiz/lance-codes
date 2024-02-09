"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Cresta",
    desc: "Cresta is a fullstack real-estate website powered by the latest MERN technologies and frameworks. It uses 0auth to offer powerful authentcation to the users. Users can check various properties, favourite them and even book a visit!",
    img: "/cresta.png",
    link: "https://full-stack-website-cresta-client.vercel.app/",
    github: "https://github.com/Lanceiz/Full-stack-real-estate-main",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Farm2Fabric",
    desc: "Farm2Fabric is a website which is built on top of React for the woolen farmers of our country. It provides numerous features to both farmers and buyers. My team made it to the Smart India Hackathon(SIH) 2023 finals with this project.",
    img: "/f2f.png",
    link: "https://farm2fabric.netlify.app/",
    github: "https://github.com/Lanceiz/farm2fabric",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Metasphere",
    desc: "Built with the latest React framework Next.js, Metasphere is the future of the metaverse as we know it. Powered by framer-motion, Metasphere has a stunning array of animations which makes it one of the most interactive websites for web enthusiasts.",
    img: "/pj.png",
    link: "https://metasphere-of-madness.netlify.app/",
    github: "/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Lance-Codes",
    desc: "Lance-codes is built with latest Next.js 14 version and is my portfolio. It shows my web journey as well as demonstrates my skills as an impactful web developer.",
    img: "/lance-codes1.png",
    link: "https://lama.dev",
    github: "/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center text-red-600">
          My Works!⬇️
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-slate-800 h-full p-6">
                  <h1 className=" text-lg text-center font-bold md:text-4xl lg:text-xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[330px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="text-center w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <div className="flex justify-center gap-20">
                    <Link href={item.link} className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-md w-32 bg-gray-700 hover:bg-gray-500 text-white font-semibold m-1 rounded transform duration-200 ease-in">Live</button>
                    </Link>
                    <Link href={item.github} className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-md w-32 hover:bg-gray-500 bg-gray-700 text-white font-semibold m-1 rounded transform duration-200 ease-in">Github</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen overflow-hidden flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Fullstack and Blockchain Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 hover:bg-blue-500 bottom-0 m-auto bg-blue-600 text-white hover:scale-150 rounded-full flex items-center justify-center transform duration-200 ease-in-out"
          >
            Let&apos;s Collab!
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
