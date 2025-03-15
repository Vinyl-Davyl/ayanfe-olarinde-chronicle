"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import Navbar from "../components/navbar/navbar";
import Strips from "../components/hero/strips";
import Preloader from "../components/preloader/preloader";
import Hero from "../components/hero/hero";
import { forwardAnimation, reverseAnimation } from "@/utils/gsap-utils";
import About from "@/components/about/about";
import ArtWork from "@/components/art-work/art-work";
import AIArt from "@/components/ai-art/aiart";
import Painting from "@/components/painting/painting";
import Pictures from "@/components/pictures/pictures";
import RentRow from "@/components/rent-row/rent-row";
import Footer from "@/components/footer/footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlitchText from "@/components/glitch/glitch-text";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const stripsRef = useRef<HTMLDivElement[]>([]); // For strips
  const contentRef = useRef<HTMLDivElement>(null); // For Whole content
  const loaderRef = useRef<HTMLDivElement>(null);
  const loaderOverlayRef = useRef<HTMLDivElement>(null);
  const heroHead1Ref = useRef<HTMLDivElement>(null);
  const heroHead2Ref = useRef<HTMLDivElement>(null);
  const heroHead3Ref = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false); // Track animation direction

  const handleButtonClick = () => {
    if (isAnimating) {
      gsap.to(".nav__container", {
        height: 0,
        duration: 1.5,
        opacity: 0,
        ease: "power4.inOut",
      });
      gsap.to("body", {
        overflow: "auto",
      });
      reverseAnimation(stripsRef, contentRef); // Play reverse animation
    } else {
      gsap.to(".nav__container", {
        height: "100vh",
        delay: 0.5,
        opacity: 1,
        duration: 1.5,
        ease: "power4.inOut",
      });
      gsap.to("body", {
        overflow: "hidden",
      });
      forwardAnimation(stripsRef, contentRef); // Play forward animation
    }
    setIsAnimating(!isAnimating); // Toggle state
  };

  const scrollToContact = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
    handleButtonClick(); // Close the navbar
  };

  function animateAfterLoader() {
    document.body.style.overflow = "";
    document.body.setAttribute("data-lenis-prevent", "false");

    gsap.to(loaderOverlayRef.current, {
      height: 0,
      duration: 1.5,
      ease: "power3.inOut",
    });
    gsap.to(contentRef.current, {
      y: 0,
      duration: 1.5,
      ease: "power3.inOut",
    });

    if (!heroHead1Ref.current) return;
    if (!heroHead2Ref.current) return;
    if (!heroHead3Ref.current) return;

    // Select each letter inside the wordRef
    const letters1 = heroHead1Ref.current.children;
    const letters2 = heroHead2Ref.current.children;
    const letters3 = heroHead3Ref.current.children;

    // Create a GSAP timeline for staggering the slide-up effect
    const tl = gsap.timeline();

    tl.fromTo(
      letters1,
      { y: "100%" },
      {
        y: 0,
        duration: 0.7,
        delay: 1,
        stagger: 0.05, // Animate each letter with a slight delay
        ease: "power3.out",
      }
    )
      .fromTo(
        letters2,
        { y: "100%" },
        {
          y: 0,
          duration: 0.7,
          stagger: 0.05, // Animate each letter with a slight delay
          ease: "power3.out",
        },
        "-=0.5" // Starts 0.5 seconds before the first animation ends
      )
      .fromTo(
        letters3,
        { y: "100%" },
        {
          y: 0,
          duration: 0.7,
          stagger: 0.05, // Animate each letter with a slight delay
          ease: "power3.out",
        },
        "-=0.5" // Starts 0.5 seconds before the first animation ends
      )
      .fromTo(
        ".hero-para",
        {
          opacity: 0,
        },
        { opacity: 1, direction: 0.7, ease: "power1" },
        "-=0.5"
      )
      .to(".split_text_wrapper", {
        overflow: "visible",
      });
  }

  function startLoader() {
    let currentValue = 0;

    function updateCounter() {
      if (currentValue === 100) {
        animateAfterLoader();
        return;
      }

      currentValue += Math.floor(Math.random() * 10) + 1;

      if (currentValue > 100) {
        currentValue = 100;
      }

      if (loaderRef.current) {
        loaderRef.current.textContent = currentValue.toString();
      }

      if (currentValue > 20) {
        gsap.to(loaderRef.current, {
          bottom: `calc(${currentValue}% - 7.25rem)`,
        });
      }

      const delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    }
    updateCounter();
  }

  useLayoutEffect(() => {
    // Disable when preloader is running
    document.body.style.overflow = "hidden"; // standard no-scroll implementation
    document.body.setAttribute("data-lenis-prevent", "true"); // Make sure you pass true as string

    startLoader();
  }, []);

  return (
    <div className="w-full">
      {/* Preloader */}
      <Preloader loaderOverlayRef={loaderOverlayRef} loaderRef={loaderRef} />

      {/* Navbar */}
      <Navbar onClick={handleButtonClick} />

      {/* Navbar overlay */}
      <div className="h-0 relative z-50 opacity- nav__container flex justify-center items-center overflow-hidden opacity-0">
        <div className="flex flex-col gap-12 justify-center items-center">
          <GlitchText
            text="HOME"
            href="/"
            onClick={() => {
              setIsAnimating(false); // Reset animation state
              handleButtonClick(); // Close the navbar
            }}
          />
          <GlitchText text="CONTACT" href="#contact" onClick={scrollToContact} />
        </div>
      </div>

      {/* Strips */}
      <Strips stripsRef={stripsRef} />

      {/* Hero */}
      <div className="content-wrapper">
        <Hero
          contentRef={contentRef}
          heroHead1Ref={heroHead1Ref}
          heroHead2Ref={heroHead2Ref}
          heroHead3Ref={heroHead3Ref}
        />
      </div>

      {/* About */}
      <About />

      {/* Art works section */}
      <ArtWork />

      {/* AI Art section */}
      <AIArt />

      {/* Painting section */}
      <Painting />

      {/* Pictures section */}
      <Pictures />

      {/* Rent Row section */}
      <RentRow />

      {/* Footer section */}
      <Footer />
    </div>
  );
}
