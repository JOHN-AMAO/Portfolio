import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-16">
        <div className="flex flex-col gap-6 w-full md:w-1/2 lg:w-3/5">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              John Amao
            </span>
          </h1>
          <div className="text-white border rounded-2xl p-6 text-left">
            <h2 className="font-bold text-2xl md:text-3xl text-white mb-4">Bio:</h2>
            <div className="space-y-4 text-sm md:text-base">
              <p>
                I am a builder currently based in Lagos, Nigeria.
                I&apos;m passionate about building products that solve problems
                for lots of people ranging from education to commerce.
              </p>
              <p className="leading-relaxed">
                I love developing intuitive user interfaces, optimizing backend
                systems, or deploying scalable solutions, I enjoy every aspect of
                the development process.
              </p>
              <p className="leading-relaxed">
                Outside of coding, you can find me exploring new technologies,
                attending tech meetups, or brainstorming new project ideas. I
                believe that continuous learning and collaboration are essential
                in the fast-paced world of technology, and I&apos;m always eager
                to learn and grow alongside like-minded individuals.
              </p>
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
