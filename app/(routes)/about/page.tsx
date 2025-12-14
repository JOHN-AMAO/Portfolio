"use client";

import Image from "next/image";
import Link from "next/link";
import { Manrope } from "next/font/google";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const Page = () => {
  return (
    <main className="min-h-screen relative overflow-hidden w-full flex-1">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[#0a0f24]">
        <div className="hidden sm:block absolute top-20 left-1/4 w-72 h-72 rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute bottom-40 right-1/4 w-80 h-80 rounded-full bg-blue-600/20 blur-[90px] opacity-40 sm:opacity-100 sm:blur-[120px]" />
        <div className="hidden sm:block absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-white/20 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-5 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02]" />

      <div className={`${manrope.className} mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 relative z-10 w-full max-w-7xl`}>
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12"
        >
          {/* Left: Content */}
          <div className="flex-1 flex flex-col gap-8">
            <motion.div
              custom={0}
              variants={fadeIn}
              className="inline-flex w-fit items-center px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm backdrop-blur-sm"
            >
              About
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeIn}
              className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
            >
              A bit about me
             
             
            </motion.h1>

            <motion.div
              custom={2}
              variants={fadeIn}
              className="bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:border-blue-500/30 group relative overflow-hidden"
            >
              <div className="hidden sm:block absolute -top-24 -right-24 w-56 h-56 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.8) 100%)' }} />
              <div className="hidden sm:block absolute -bottom-24 -left-24 w-56 h-56 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.8) 100%)' }} />

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative z-10">
                <div className="w-full md:max-w-sm relative order-1 md:order-2">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-blue-500 to-white rounded-2xl blur-sm sm:blur opacity-40 md:opacity-60" />
                  <div className="absolute inset-0 rounded-2xl bg-gray-900/80 backdrop-blur-sm" />
                  <Image
                    src="/john-amao.jpeg"
                    width={480}
                    height={600}
                    alt="Photo of John Amao"
                    className="rounded-2xl w-full h-auto relative z-10 shadow-2xl object-cover"
                    priority
                  />
                </div>

                <div className="flex-1 order-2 md:order-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">About Me</h3>
                  <div className="text-white/90 text-base sm:text-lg leading-relaxed space-y-4">
                    <p>
                      I have been a software engineer for about 3 years and have been obsessed with learning about tech and business for roughly 7 years. I was inspired by how people like Mark Zuckerberg and Bill Gates built impactful products at a young age, which sparked my interest in technology.
                    </p>
                    <p>
                      When I&apos;m not coding, you&apos;ll often find me watching Netflix, reading a random academic paper (sometimes), staying up to date on X, or going down YouTube rabbit holes. Occasionally, I&apos;m just brain-rotting on IG. I&apos;m always eager to explore and collaborate on new technologies and ideas.
                    </p>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-white">What I&apos;m Into 🌟</h3>
                  <div className="text-white/90 text-base sm:text-lg leading-relaxed">
                    <ul className="space-y-3 list-disc pl-5">
                      <li>Music 🎵 — usually rap, Afrobeats, or pop depending on my mood.</li>
                      <li>Philosophy 🤔 — absurdism, stoicism, nihilism; reflecting beyond the abstract.</li>
                      <li>Gaming 🎮, movies, and stand-up comedy to unwind.</li>
                    </ul>
                  </div>

                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link href="/projects">
                      <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-blue-500 to-white text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 rounded-xl px-5 py-4 md:px-6 md:py-5 text-sm md:text-base font-medium">
                        View My Work
                      </Button>
                    </Link>
                    <Link href="/blog">
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto bg-gray-900/60 border-white/20 text-white hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-xl px-5 py-4 md:px-6 md:py-5 text-sm md:text-base font-medium backdrop-blur-sm"
                      >
                        Read My Blog
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Page;
