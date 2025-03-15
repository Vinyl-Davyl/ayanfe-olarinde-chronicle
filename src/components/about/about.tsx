import { aboutSectionParallaxImage, aboutSectionTextReveal } from "@/utils/gsap-utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutImageRef = useRef<HTMLDivElement | null>(null);
  const aboutWrapperRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const text = SplitType.create(".reveal_text");

    // Parallax animation
    aboutSectionParallaxImage(aboutWrapperRef, aboutImageRef);
    // Text reveal animation
    aboutSectionTextReveal(text, aboutWrapperRef);
  }, []);

  return (
    <div ref={aboutWrapperRef}>
      <div className="grid grid-cols-2 py-10 text-white">
        <div
          ref={aboutImageRef}
          className="w-[40vw] relative aspect-[1/1.2]"
          style={{
            transform: "translateY(30%)",
          }}
        >
          <Image src="/AO3.jpg" alt="" className="w-full" fill />
        </div>
        <div className="uppercase text-[max(1.146vw,22px)] my-auto">
          <div className="reveal_text max-w-[31rem] overflow-hidden 2xl:max-w-[50rem] [&>div:first-child]:ms-64">
            Ayanfe Olarinde is a Nigerian artist who revives Yoruba folklore through her work, blending history and
            self-discovery. Bred in Lagos, she explores themes of identity, gender, and human imperfection, using
            vibrant paintings to reclaim cultural narratives and inspire future generations.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
