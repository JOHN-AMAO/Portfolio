"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-16">
        <div className="flex flex-col gap-6 w-full md:w-1/2 lg:w-3/5">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4 font-extrabold tracking-tight leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent  bg-clip-text">
              John Amao
            </span>
          </h1>
          <div className="space-y-4">
        
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-2xl transform rotate-3 -z-10 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-2xl transform rotate-2 -z-20 group-hover:rotate-4 transition-transform duration-300"></div>
                <div className="bg-[#1a2547] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2">
                  <h3 className="text-xl font-semibold mb-2 text-white">The Developer</h3>
                  <p className="text-white text-sm md:text-base">
                    Welcome to my digital realm! I&apos;m a 19-year-old full stack developer from Nigeria, passionate about crafting everything from simple art to complex enterprise-level applications. My playground? The vast landscape of the internet, where I constantly learn and build.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl transform rotate-3 -z-10 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-400 rounded-2xl transform rotate-2 -z-20 group-hover:rotate-4 transition-transform duration-300"></div>
                <div className="bg-[#1a2547] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2">
                  <h3 className="text-xl font-semibold mb-2 text-white">The Tech Enthusiast</h3>
                  <p className="text-white text-sm md:text-base">
                    In the realm of technology, I&apos;m fluent in multiple programming languages. My toolkit is diverse, allowing me to approach problems from various angles and create robust, efficient solutions. I thrive on the challenge of mastering new technologies and applying them creatively.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl transform rotate-3 -z-10 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl transform rotate-2 -z-20 group-hover:rotate-4 transition-transform duration-300"></div>
                <div className="bg-[#1a2547] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2">
                  <h3 className="text-xl font-semibold mb-2 text-white">The Lifelong Learner</h3>
                  <p className="text-white text-sm md:text-base">
                    Beyond the screen, I&apos;m an insatiable learner. You might find me immersed in a game, exploring philosophical concepts on YouTube, or mentoring aspiring coders. I firmly believe in the power of collective growth, where every shared idea has the potential to spark the next big innovation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end">
          <Image
            className="rounded-2xl w-3/4 md:w-full max-w-md transform md:rotate-3 transition-transform duration-300 hover:rotate-0"
            src="/myimage.png"
            alt="John Amao"
            width={400}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
