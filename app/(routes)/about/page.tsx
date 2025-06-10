"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});


const Page = () => {

  
  
  return (
    <div className="container mx-auto px-4 py-8  md:mx-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-16">
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4 font-extrabold tracking-tight leading-tight">
            Hi, I&apos;m{" "}
            <span className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ${dancingScript.className}`}>
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
             
            {/* Content layout with text on left and image on right */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Text content on the left */}
              <div className="flex-1">
                <h3 className={`text-2xl font-bold mb-4 text-white ${dancingScript.className}`}>About Me</h3>
                <div className={`text-white text-lg mb-8 leading-relaxed `}>
                  <p className="mb-4">
                    I have been a software engineer for about 3 years, been obessing and learning about tech and business for about 7 years.
                    I was inpired my the amazing things people like Mark Zuckerberg and Bill Gates could do at a young age and that got me interested in Technology.
                  </p>
                  <p>
                    When I&apos;m not coding, I build be watching Netflix, reading a random academic paper(sometimes), staying up to date on X or watching random YouTube videos or I could just be brain rotting on IG. I&apos;m always eager to explore and collaborate on new technologies and ideas
                    
                  </p>
                </div>
           
                <h3 className={`text-2xl font-bold mb-4 text-white ${dancingScript.className}`}>What I&apos;m Into 🌟</h3>
                <div className="text-white text-lg leading-relaxed">
                  <p>
                    I love Music 🎵 - I&apos;m always vibing to some rap, Afrobeats, or pop music depending on my mood. 
                  </p>
                  <p className="mt-4">
                    I enjoy learning about philosophical concepts as well 🤔, concepts like absurdism, stoicism, and nihilism. It allows me to reflect, feel and go beyond the abstract. 
                  </p>
                  <p className="mt-4">
                    When I need to unwind, you&apos;ll find me gaming 🎮 or binge-watching movies and stand-up comedy .
                  </p>
                </div>
              </div>

              {/* Image on the right */}
              <div className="flex-shrink-0">
                <Image 
                  src="/john-amao.jpeg" 
                  width={300} 
                  height={400} 
                  alt="an image of John Amao" 
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>

            </div>

            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Page;
