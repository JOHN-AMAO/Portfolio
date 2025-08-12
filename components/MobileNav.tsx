"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import styles from "./MobileNav.module.css";

const MobileNav = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [isNavigating, setIsNavigating] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  // Clear navigating state when route changes
  useEffect(() => {
    setIsNavigating(null);
  }, [pathname]);

  const links = [
    { href: '/', icon: '/home.svg', alt: 'home page', label: 'Home' },
    { href: '/about', icon: '/about.svg', alt: 'about page', label: 'About' },
    { href: '/projects', icon: '/projects.svg', alt: 'projects page', label: 'Projects' },
    { href: '/blog', icon: '/blog.svg', alt: 'blog page', label: 'Blog' },
    { href: '/resume', icon: '/resume.svg', alt: 'resume page', label: 'Resume' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname?.startsWith(href) ?? false;
  };

  // Check if the current path is a blog post
  const isBlogPost = pathname?.startsWith('/blog/') && pathname !== '/blog';

  if (isBlogPost) {
    return null; // Don't render the nav on blog post pages
  }

  return (
    <div className={`md:hidden fixed bottom-1 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50 rounded-2xl bg-black/90 bg-gradient-to-r from-indigo-500/[0.12] via-purple-500/[0.08] to-pink-500/[0.12] backdrop-filter backdrop-blur-2xl backdrop-saturate-150 border border-white/10 shadow-lg shadow-black/50 ${styles.liquidGlass} ${isNavigating ? styles.isLoading : ''}`}>
      <div className='flex flex-row justify-evenly w-full py-2 px-2'>
        {links.map((link) => {
          const active = isActive(link.href);
          const showSpinner = isNavigating === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (active) return;
                e.preventDefault();
                setIsNavigating(link.href);
                setTimeout(() => router.push(link.href), 60);
              }}
              aria-current={active ? 'page' : undefined}
              className={`flex items-center justify-center rounded-full transition-all duration-200 h-10 ${
                active
                  ? "bg-white/10 ring-1 ring-white/10 px-3 gap-2"
                  : "hover:bg-white/5 w-10"
              }`}
            >
              <span className={`${styles.iconWrap} ${showSpinner ? styles.progressRing : ''}`}>
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={20}
                  height={20}
                />
              </span>
              {active && (
                <span className='text-[13px] font-medium tracking-wide text-white/90'>
                  {link.label}
                </span>
              )}
            </Link>
          );
        })}
      </div>
      {isNavigating && <div className={styles.isLoadingOverlay} />}
    </div>
  );
};

export default MobileNav;
