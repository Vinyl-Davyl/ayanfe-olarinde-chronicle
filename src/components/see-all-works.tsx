import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";

const SeeAllWorks = ({ className, value = "See all works" }: { className?: string; value?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="https://www.instagram.com/ayanfee__/"
      target="_blank"
      className={cn(
        "flex w-fit items-center gap-2 cursor-pointer text-white transition-all duration-300",
        isHovered && "glitch-text",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={cn(
          "uppercase relative after:absolute after:w-1/4 after:h-[1px] after:bottom-0 after:bg-white after:left-0"
        )}
      >
        {value}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        className={cn("transition-transform duration-300", isHovered && "translate-x-1")}
      >
        <path d="M2 1L16 1V14" stroke="#fff" strokeWidth="1" />
        <path d="M16 1L1 16" stroke="#fff" strokeWidth="1" />
      </svg>
    </Link>
  );
};

export default SeeAllWorks;
