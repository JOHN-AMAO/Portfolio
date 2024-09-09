/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  onOpenChange,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
  onOpenChange?: (isOpen: boolean) => void;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} onOpenChange={onOpenChange} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  onOpenChange,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  onOpenChange?: (isOpen: boolean) => void;
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onOpenChange?.(open);
  }, [open, onOpenChange]);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <div className="flex items-center justify-center">
        <motion.div
          animate={open ? "open" : "closed"}
          className="relative"
        >
          <motion.div
            variants={{
              open: { rotate: 0 },
              closed: { rotate: 180 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <button
              onClick={() => setOpen(!open)}
              className="h-12 w-12 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center z-50 relative"
            >
              <IconLayoutNavbarCollapse className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />
            </button>
          </motion.div>
          <AnimatePresence>
            {open && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { opacity: 1 },
                  closed: { opacity: 0 },
                }}
                className="absolute left-1/2 transform -translate-x-1/2 bottom-16"
              >
                <div className="flex justify-center items-center">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={{
                        open: {
                          opacity: 1,
                          x: 0,
                          transition: { delay: index * 0.05 },
                        },
                        closed: { opacity: 0, x: -20 },
                      }}
                      className="mx-2"
                    >
                      <Link href={item.href}>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="h-12 w-12 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
                        >
                          <div className="h-6 w-6 text-neutral-500 dark:text-neutral-400">
                            {item.icon}
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
