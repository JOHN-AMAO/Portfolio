"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DesktopSidebar = () => {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <div className='hidden lg:inline-block'>
      <Image
        className='ml-[20px]'
        src='/logo.svg'
        width={50}
        height={50}
        alt='my logo'
      />
      <div className='flex flex-col gap-4 justify-center h-screen ml-5 '>
        <div className='flex flex-col gap-8 bg-[#16234b] rounded-2xl border px-4 py-8 border-blue-600'>
          <Link
            href='/'
            className={
              activeLink === "/"
                ? "bg-blue-500 rounded-lg p-2"
                : "rounded-md p-2"
            }
            onClick={() => setActiveLink("/")}
          >
            <Image
              className='hover:scale-125 transition rounded'
              src='/home.svg'
              alt='home page'
              width={30}
              height={30}
            />
          </Link>
          <Link
            href='/about'
            className={
              activeLink === "/about"
                ? "bg-blue-500 rounded-md p-2"
                : "rounded-md p-2"
            }
            onClick={() => setActiveLink("/about")}
          >
            <Image
              className='hover:scale-125 transition rounded'
              src='/about.svg'
              alt='about page'
              width={30}
              height={30}
            />
          </Link>
          <Link
            href='/projects'
            className={
              activeLink === "/projects"
                ? "bg-blue-500 rounded-md p-2"
                : "rounded-md p-2"
            }
            onClick={() => setActiveLink("/projects")}
          >
            <Image
              className='hover:scale-125 transition rounded'
              src='/projects.svg'
              alt='projects page'
              width={30}
              height={30}
            />
          </Link>
          <Link
            href='/blog'
            className={
              activeLink === "/blog"
                ? "bg-blue-500 rounded-md p-2"
                : "rounded-md p-2"
            }
            onClick={() => setActiveLink("/blog")}
          >
            <Image
              className='hover:scale-125 transition rounded'
              src='/blog.svg'
              alt='blog page'
              width={30}
              height={30}
            />
          </Link>
          <Link
            href='/resume'
            className={
              activeLink === "/resume"
                ? "bg-blue-500 rounded-md p-2"
                : "rounded-md p-2"
            }
            onClick={() => setActiveLink("/resume")}
          >
            <Image
              className='hover:scale-125 transition rounded'
              src='/resume.svg'
              alt='resume page'
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
