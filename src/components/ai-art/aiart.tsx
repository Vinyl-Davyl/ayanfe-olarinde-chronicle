import Image from "next/image";
import SeeAllWorks from "../see-all-works";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger); // Register plugin

const AIArt = () => {
  useLayoutEffect(() => {
    gsap.to(".art_1", {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".art_1",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div id="studio">
      <div className="sticky top-0 w-1/2 h-96 ms-auto flex items-center justify-center flex-col">
        <div>
          <h1 className="w-fit text-[max(9.896vw,40px)] leading-tight" style={{ fontFamily: "SaolDisplay" }}>
            STUDIO
          </h1>
          <SeeAllWorks />
        </div>
      </div>
      <div className="min-h-screen grid grid-cols-3">
        <div>
          <div className="w-3/4">
            <Image
              src={"/AO7.jpg"}
              alt="Art female"
              width={0}
              height={0}
              className="art_1 -translate-y-1/4"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col pt-20 justify-end">
          <div className="w-1/2 mx-auto relative z-10">
            <Image
              src={"/A09.jpg"}
              alt="Art female"
              width={0}
              height={0}
              sizes="100vw"
              className="art_1"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="w-3/4 mx-auto">
            <Image
              src={"/AO11.jpg"}
              alt="Art female"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
        <div className="pt-20 relative -z-10">
          <div className="w-3/4 mx-auto">
            <Image
              src={"/AO8.jpg"}
              alt="Art female"
              width={0}
              height={0}
              sizes="100vw"
              className="art_1"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIArt;
