import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <section
      className='relative w-full h-screen
    mx-auto'
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[70px]
         max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div
          className='flex flex-col
         justify-center items-center mt-5'
        >
          <div className='w-5 h-5 rounded-full bg-[#915eff] ' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#915eff]'>John</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter.changeDeleteSpeed(10);
              }}
              options={{
                strings: [
                  "I Build my Ideas.",
                  "I develop Functional and Scalable Applications ",
                  "I Code.",
                  "I Eat.",
                  "I Sleep.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div
        className='absolute xs:bottom-10 
      bottom-32 w-full flex justify-center 
      items-center'
      >
        <a href='#about'>
          <div
            className='w-[35px] h-[64px] rounded-3xl border-4 
        border-secondary flex justify-center items-start p-2'
          >
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className=' w-3 h-3 rounded-full bg-secondary  mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
