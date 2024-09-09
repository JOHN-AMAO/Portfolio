"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const links = [
    { href: '/', icon: '/home.svg', alt: 'home page' },
    { href: '/about', icon: '/about.svg', alt: 'about page' },
    { href: '/projects', icon: '/projects.svg', alt: 'projects page' },
    { href: '/blog', icon: '/blog.svg', alt: 'blog page' },
    { href: '/resume', icon: '/resume.svg', alt: 'resume page' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className='md:hidden fixed bottom-0 left-0 right-0 shadow-md bg-white backdrop-filter backdrop-blur-xl bg-opacity-10'>
      <div className='flex flex-row justify-evenly w-full ml-5 mb-5 pt-2'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex-1 rounded p-2 transition-colors duration-200 ${
              isActive(link.href) ? "bg-blue-500" : "hover:bg-blue-400/20"
            }`}
          >
            <Image
              src={link.icon}
              alt={link.alt}
              width={20}
              height={20}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
