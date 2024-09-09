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
                Greetings from Lagos, Nigeria! I&apos;m not just a developer; I&apos;m a digital
                architect crafting solutions that bridge gaps and empower communities. My code
                isn&apos;t just syntax; it&apos;s a blueprint for change, touching lives from
                bustling marketplaces to virtual classrooms.
              </p>
              <p className="leading-relaxed">
                In the realm of tech, I&apos;m a polyglot fluent in the languages of both front-end
                finesse and back-end robustness. Whether I&apos;m choreographing pixels for seamless
                UX or orchestrating databases for lightning-fast queries, each line of code is a
                brushstroke in my digital masterpiece.
              </p>
              <p className="leading-relaxed">
                Beyond the screen, I&apos;m an insatiable learner and a community catalyst. You might
                find me deep-diving into emerging tech trends, sparking discussions at local tech
                meetups, or mentoring aspiring coders. I believe in the power of collective growth,
                where every shared idea can ignite the next big innovation. In this ever-evolving
                digital landscape, I&apos;m not just keeping pace; I&apos;m helping set the rhythm for
                the future of African tech.
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
