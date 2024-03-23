"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  return (
    <div>
      <div className='md:hidden fixed bottom-0 left-0 right-0 shadow-md bg-white backdrop-filter backdrop-blur-xl bg-opacity-10 mt-5'>
        <div className='flex flex-row justify-evenly w-full ml-5 mb-5 pt-2'>
          <Link
            href='/'
            className={
              activeLink === "/"
                ? "flex-1 bg-blue-500 rounded p-2"
                : "flex-1 rounded p-2"
            }
            onClick={() => setActiveLink("/")}
          >
            <Image
              src='/home.svg'
              alt='home page'
              width={20}
              height={20}
            />
          </Link>
          <Link
            href='/about'
            className={
              activeLink === "/about"
                ? "flex-1 bg-blue-500 rounded p-2"
                : "flex-1 rounded p-2"
            }
            onClick={() => setActiveLink("/about")}
          >
            <Image
              src='/about.svg'
              alt='about page'
              width={20}
              height={20}
            />
          </Link>
          <Link
            href='/projects'
            className={
              activeLink === "/projects"
                ? "flex-1 bg-blue-500 rounded p-2"
                : "flex-1 rounded p-2"
            }
            onClick={() => setActiveLink("/projects")}
          >
            <Image
              src='/projects.svg'
              alt='projects page'
              width={20}
              height={20}
            />
          </Link>
          <Link
            href='/blog'
            className={
              activeLink === "/blog"
                ? "flex-1 bg-blue-500 rounded p-2"
                : "flex-1 rounded p-2"
            }
            onClick={() => setActiveLink("/blog")}
          >
            <Image
              src='/blog.svg'
              alt='blog page'
              width={20}
              height={20}
            />
          </Link>
          <Link
            href='/resume'
            className={
              activeLink === "/resume"
                ? "flex-1 bg-blue-500 rounded p-2"
                : "flex-1 rounded p-2"
            }
            onClick={() => setActiveLink("/resume")}
          >
            <Image
              src='/resume.svg'
              alt='resume page'
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
