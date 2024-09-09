"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const DesktopSidebar = () => {
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
    <div className='hidden lg:inline-block'>
      <Image
        className='ml-[20px]'
        src='/logo.svg'
        width={50}
        height={50}
        alt='my logo'
      />
      <div className='flex flex-col gap-4 justify-center h-screen ml-5 w-20'>
        <div className='flex flex-col gap-8 bg-[#16234b] rounded-2xl border px-4 py-8 border-blue-600'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg p-2 transition-colors duration-200 ${
                isActive(link.href) ? "bg-blue-500" : "hover:bg-blue-400/20"
              }`}
            >
              <Image
                className='transition rounded'
                src={link.icon}
                alt={link.alt}
                width={30}
                height={30}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
