import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useLayoutEffect(() => {
    const word1 = SplitType.create(".footer_slideup_text_1");
    const word2 = SplitType.create(".footer_slideup_text_2");

    const tl = gsap.timeline({});

    // Both word1 and word2 animations start at the same time
    tl.fromTo(
      word1.chars,
      { opacity: 0, translateY: "100%" },
      {
        translateY: "0%",
        opacity: 1,
        stagger: -0.05, // Stagger backwards for word1
      },
      "-=0.1"
    )
      .fromTo(
        word2.chars,
        { opacity: 0, translateY: "100%" },
        {
          translateY: "0%",
          opacity: 1,
          stagger: 0.05, // Stagger forwards for word2
        },
        "<"
      )
      .to(
        ".art_overlay",
        {
          opacity: 1,
        },
        "<"
      );
  }, []);

  const handleEmailSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const email = event.currentTarget.value.trim();
      if (email) {
        window.location.href = `mailto:helloayanfe@gmail.com`;
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="contact" className="h-screen min-h-fit pt-[10vw] px-[5vw] pb-10 bg-[var(--background)]">
      <div className="grid grid-cols-3">
        <ul className="uppercase text-[1.3vw] grid grid-cols-3 cursor-pointer">
          <li>
            <Link href="/" onClick={() => scrollToSection("hero")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#painting" onClick={() => scrollToSection("painting")}>
              Painting
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => scrollToSection("contact")}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="#studio" onClick={() => scrollToSection("studio")}>
              Studio
            </Link>
          </li>
          <li>
            <Link href="#pictures" onClick={() => scrollToSection("pictures")}>
              Pictures
            </Link>
          </li>
        </ul>
        <div>
          <div className="w-[10vw] mx-auto">
            <Image
              src={"/logo.png"}
              alt="Logo"
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
        <div className="space-y-3">
          <span className="uppercase text-[1.3vw]">Contact</span> &nbsp;
          <input
            type="email"
            placeholder="enter your e-mail here"
            className="bg-transparent outline-none border-b border-b-white text-[1.5vw] text-center placeholder:text-center"
            onKeyDown={handleEmailSubmit}
          />
        </div>
      </div>
      <div className="mt-[10vw] overflow-hidden space-y-10">
        <h3 className="text-[8.5vw] whitespace-nowrap text-center leading-none" style={{ fontFamily: "SaolDisplay" }}>
          AYANFE&apos;S ARTWORKS
        </h3>

        <p className="text-center">
          <span className="text-white/65">Built with</span> ❤️‍🔥{" "}
          <Link href={"https://vinyldavyl.xyz"} target="_blank" className="text-white font-semibold cursor-pointer">
            Vinyl Davyl
          </Link>
          &nbsp;
          <span className="text-white/65">Inspired by</span>{" "}
          <Link href={"https://github.com/prajilk"} target="_blank" className="text-white font-semibold cursor-pointer">
            Prajilk
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
