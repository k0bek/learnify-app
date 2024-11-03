"use client";

import { Sparkles } from "./Sparkles";
import { motion } from "framer-motion";

export default function Hero() {
  const learningOptions = [
    {
      title: "Courses",
      description: "Self-paced paths",
    },
    {
      title: "Workshops",
      description: "Interactive sessions",
    },
    {
      title: "Resources",
      description: "Comprehensive materials",
    },
  ];

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center flex-col"
      >
        <div className="mx-auto mt-32">
          <div className="text-center text-4xl flex flex-col">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-primary-foreground to-primary font-semibold">
              Transform your learning journey.
            </h1>
            <span className="dark:text-white text-gray-700 text-2xl mt-1">
              Master new skills daily.
            </span>
          </div>
          <div className="mt-6 flex justify-between">
            {learningOptions.map((option, index) => (
              <div key={index} className="group text-center flex flex-col">
                <span className="dark:text-white text-gray-700 text-lg  mb-1 font-semibold">
                  {option.title}
                </span>
                <span className="dark:text-primary-foreground text-sm  group-hover:opacity-100 transition-opacity text-primary">
                  {option.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="relative -mt-32 h-96 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-primary dark:after:bg-zinc-900 after:bg-purple-200">
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
  );
}
