import { RefObject, useLayoutEffect } from "react";
import SplitText from "./split-text";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroSectionTextReveal } from "@/utils/gsap-utils";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({
  contentRef,
  heroHead1Ref,
  heroHead2Ref,
  heroHead3Ref,
}: {
  contentRef: RefObject<HTMLDivElement>;
  heroHead1Ref: RefObject<HTMLDivElement>;
  heroHead2Ref: RefObject<HTMLDivElement>;
  heroHead3Ref: RefObject<HTMLDivElement>;
}) {
  useLayoutEffect(() => {
    // Text reveal animation
    heroSectionTextReveal(heroHead1Ref, heroHead2Ref, heroHead3Ref);
  }, []);
  return (
    <div
      ref={contentRef}
      className="w-full"
      style={{
        transform: "translateY(100vh)",
      }}
    >
      <div className="relative w-full h-ful">
        <video
          src="https://res.cloudinary.com/dq11x4tkw/video/upload/v1730914573/videos/072516-9-cortado_ihrtev.mp4"
          muted
          loop
          autoPlay
          className="w-full h-screen object-cover object-[0%_30%]"
        ></video>
        <div className="w-full h-full bg-black/30 top-0 left-0 absolute"></div>
        <div className="absolute top-1/2 -translate-y-1/2 pt-20 w-full px-10">
          <div
            className="split_text_wrapper flex justify-between overflow-hidden"
            style={{ fontFamily: "SaolDisplay" }}
          >
            <h1 ref={heroHead1Ref}>
              <SplitText text="VISIONARY" />
            </h1>
            <h1 ref={heroHead2Ref}>
              <SplitText text="ARTIST" />
            </h1>
          </div>
          <div className="text-right overflow-hidden" ref={heroHead3Ref} style={{ fontFamily: "SaolDisplay" }}>
            <SplitText text="AYANFE OLARINDE" />
          </div>
          <div className="text-base text-right">
            <p className="hero-para max-w-xs uppercase ms-[16.458vw] pt-24">
              A visionary artist, both photographer and painter, harnesses the power of AI to enhance his surrealistic
              art.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
