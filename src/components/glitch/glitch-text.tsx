import Link from "next/link";
import { useState } from "react";
import { cn } from "@/utils/cn";

interface GlitchTextProps {
  text: string;
  href: string;
  onClick?: () => void;
}

const GlitchText = ({ text, href, onClick }: GlitchTextProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn("relative inline-block text-8xl transition-all duration-300", isHovered && "glitch-text")}
      style={{ fontFamily: "SaolDisplay" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{text}</span>
      {isHovered && (
        <>
          <span className="absolute top-0 left-0 -translate-x-1 translate-y-1 text-[#ff0000] opacity-50 z-0">
            {text}
          </span>
          <span className="absolute top-0 left-0 translate-x-1 -translate-y-1 text-[#00ff00] opacity-50 z-0">
            {text}
          </span>
          <span className="absolute top-0 left-0 translate-x-1 translate-y-1 text-[#0000ff] opacity-50 z-0">
            {text}
          </span>
        </>
      )}
    </Link>
  );
};

export default GlitchText;
