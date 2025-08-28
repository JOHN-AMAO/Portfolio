"use client"
import React from 'react'
import Image from 'next/image'
import { Dock, DockIcon } from "@/components/magicui/dock"
import { Icons } from "@/components/icons"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto  py-8 flex flex-col items-center gap-2">
      <div className="lg:w-1/2 mr-0 lg:mr-80 ">
        {children}
      </div>
      <div className="w-full max-w-sm mx-auto lg:w-1/4 lg:fixed lg:top-8 lg:right-8 lg:mx-0 lg:max-w-none mb-16">
        <div className="flex flex-col gap-4 mr-0 lg:mr-0">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#2a3557] rounded-lg shadow-lg"
              initial={{ rotate: -3, scale: 0.98 }}
              whileHover={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute inset-0 bg-[#223047] rounded-lg shadow-lg"
              initial={{ rotate: -1.5, scale: 0.99 }}
              whileHover={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="bg-[#1a2547] rounded-lg shadow-lg p-6 relative z-10"
              initial={{ rotate: 0, scale: 1 }}
              whileHover={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-[150px] h-[150px] mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/john-amao.jpeg"
                  alt="John Amao"
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-2xl font-bold text-center text-white mb-2">John Amao</h2>
              <p className="text-gray-300 text-center mb-4">Software Engineer & Tech Enthusiast</p>
              <div className="space-y-2 text-gray-300">
                <p>📍 Based in Lagos, Nigeria</p>
                <p>💼 Software Engineer</p>
                <p>🎓 B.Sc. Computer Science (in view)</p>
                <p>💻 Passionate about AI, Business, Education and everything in between</p>
              </div>
            </motion.div>
          </motion.div>
          <Dock direction="middle" magnification={64} distance={100} className="hover:w-max bg-[#1a2547] bg-opacity-90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <DockIcon className="text-white hover:text-blue-400 transition-colors duration-200">
              <a href="https://instagram.com/johnnie_jy" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="size-6" />
              </a>
            </DockIcon>
            <DockIcon className="text-white hover:text-blue-400 transition-colors duration-200">
              <a href="https://x.com/johnama0" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="size-6" />
              </a>
            </DockIcon>
            <DockIcon className="text-white hover:text-blue-400 transition-colors duration-200">
              <a href="https://github.com/JOHN-AMAO" target="_blank" rel="noopener noreferrer">
                <FaGithub className="size-6" />
              </a>
            </DockIcon>
            <DockIcon className="text-white hover:text-blue-400 transition-colors duration-200">
              <a href="https://linkedin.com/in/john-amao-7352631b7/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="size-6" />
              </a>
            </DockIcon>
          </Dock>
        </div>
      </div>
    </div>
  )
}

export default Layout
