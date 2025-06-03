"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
            <div
            className="bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-8 transition-all duration-500 hover:border-indigo-500/30 group flex-1 relative overflow-hidden"
            
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl  opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl  opacity-100 transition-opacity duration-700"></div>
             
                  <h3 className="text-xl font-semibold mb-2 text-white">About Me</h3>
                  <p className="text-white text-lg ">
                   
                  I&apos;m John, a passionate fullstack developer based in Nigeria 📍 . With 3 years of experience in programming, I&apos;ve dedicated my time to building digital solutions to problems.
                  <br />
                  When I&apos;m not coding, you can find me reading about new technology and philosophy, or watching random YouTube videos. I&apos;m always eager to explore and
                   collaborate on new technologies and ideas, and <Link href="mailto:amaojohn767@gmail.com" className="text-blue-500">connect </Link> with like-minded professionals. 

                  </p>
             
                  <h3 className="text-xl font-semibold mb-2 text-white">Interests 🌟</h3>
                  <ul className="text-white text-lg  list-disc pl-5">
                    <li>🎵 Rap music, Afrobeats, Pop music</li>
                    <li>🤔 Philosophy - absurdism, stoicism, nihilism</li>
                    <li>🎮 Gaming</li>
                    <li>🎻 Watching movies, stand-up comedy</li>
                    <li>📚 Reading</li>
                  </ul>
            
            

            </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Page;
