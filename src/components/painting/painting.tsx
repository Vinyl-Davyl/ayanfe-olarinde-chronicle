import gsap from "gsap";
import SeeAllWorks from "../see-all-works";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Painting = () => {
  useLayoutEffect(() => {
    gsap.to(".painting_1", {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".painting_1",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".painting_3", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".painting_3",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);
  return (
    <div id="painting">
      <div className="sticky z-10 top-0 w-1/2 h-96 mx-auto flex items-center justify-center flex-col">
        <h1 className="w-fit text-[max(9.896vw,40px)] leading-tight" style={{ fontFamily: "SaolDisplay" }}>
          Paintings
        </h1>
        <SeeAllWorks />
      </div>
      <div className="min-h-screen grid grid-cols-3">
        <div className="flex flex-col gap-[20vw]">
          <div className="w-3/4 relative">
            <Image
              src={"/AO13.jpg"}
              alt="Art female"
              width={0}
              height={0}
              sizes="100vw"
              className="painting_1"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="pt-40">
            <Image
              src={"/AO14.jpg"}
              alt="Art female"
              width={0}
              height={0}
              sizes="100vw"
              className="painting_2 translate-x-10"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
        <div className="flex items-end pb-16">
          <div className="w-fit h-fit translate-x-1/4 pb-40">
            <Image
              src={"/AO15.jpg"}
              alt="Art female"
              width={0}
              height={0}
              sizes="100vw"
              className="painting_3"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
        <div className="pt-20">
          <div className="w-4/5 relative -z-10 ms-auto">
            <Image
              src={"/AO10.jpg"}
              alt="Art female"
              width={0}
              height={0}
              className="translate-y-1/2 painting_1"
              sizes="100vw"
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

export default Painting;
