import gsap from "gsap";
import SeeAllWorks from "../see-all-works";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Pictures = () => {
  useLayoutEffect(() => {
    gsap.to(".pictures_1", {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".pictures_1",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".pictures_2", {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: ".pictures_2",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div id="pictures">
      <div className="sticky z-10 top-0 w-1/2 h-96 flex items-center justify-center flex-col">
        <div>
          <h1 className="w-fit text-[max(9.896vw,40px)] leading-tight" style={{ fontFamily: "SaolDisplay" }}>
            Pictures
          </h1>
          <SeeAllWorks />
        </div>
      </div>
      <div className="min-h-screen grid grid-cols-3">
        <div className="flex flex-col gap-20">
          <div className="w-3/4 relative">
            <Image
              src={"/AO2.jpg"}
              alt="Art female"
              width={0}
              height={0}
              sizes="100vw"
              className="pictures_1"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div>
            <Image
              src={"/AO20.jpg"}
              alt="Art female"
              width={0}
              height={0}
              sizes="100vw"
              className="translate-x-1/2"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
        <div className="pb-16">
          <div className="w-fit h-fit translate-x-1/4 relative z-10">
            <Image
              src={"/AO23.jpg"}
              alt="Art female"
              width={0}
              height={0}
              sizes="100vw"
              className="-translate-y-20 pictures_2"
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
              src={"/AO19.jpg"}
              alt="Art female"
              width={0}
              height={0}
              className="translate-y-1/2"
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

export default Pictures;
