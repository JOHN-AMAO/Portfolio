"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const DesktopSidebar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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

  // Check if the current path is a blog post
  const isBlogPost = pathname?.startsWith('/blog/') && pathname !== '/blog';

  if (isBlogPost) {
    return null; // Don't render the sidebar on blog post pages
  }

  return (
    <div className='hidden lg:inline-block relative '>
     
      <div className="relative ml-[20px] mt-6">
        
       
      </div>

      <div className='flex flex-col gap-4 justify-center h-screen ml-5'>
        {/* Sidebar container with glass morphism and light beams */}
        <div className='relative  '>
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='relative flex flex-col gap-8 backdrop-blur-md bg-black/10 rounded-3xl border border-white/10 px-4 py-8 shadow-xl w-20'
          >
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative"
              >
                {hoveredLink === link.href && (
                  <motion.div 
                    layoutId="hoverEffect"
                    className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-blue-500/20 to-white/20 rounded-xl blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                
                <Link
                  href={link.href}
                  className={`relative z-10 rounded-xl p-2.5 transition-all duration-200 flex items-center justify-center ${
                    isActive(link.href) 
                      ? "bg-gradient-to-r from-blue-500 via-blue-500 to-white" 
                      : "hover:bg-gray-800/50"
                  }`}
                >
                  {isActive(link.href) && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-blue-500 to-white"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  <div className={`relative z-10 ${isActive(link.href) ? "text-white" : "text-gray-400"}`}>
                    <Image
                      className={`transition-all duration-300 rounded ${isActive(link.href) ? "scale-110" : ""}`}
                      src={link.icon}
                      alt={link.alt}
                      width={30}
                      height={30}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
