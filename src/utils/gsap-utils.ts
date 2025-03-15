import gsap from "gsap";
import { MutableRefObject, RefObject } from "react";
import SplitType from "split-type";

const forwardAnimation = (
    stripsRef: MutableRefObject<HTMLDivElement[]>,
    contentRef: RefObject<HTMLDivElement>
) => {
    gsap.to(stripsRef.current, {
        height: "100vh",
        duration: 1.5,
        stagger: { amount: 0.5 },
        ease: "power4.inOut",
    });
    gsap.to(contentRef.current, {
        marginTop: "100vh",
        duration: 1.5,
        delay: 0.5,
        ease: "power4.inOut",
    });
};

const reverseAnimation = (
    stripsRef: MutableRefObject<HTMLDivElement[]>,
    contentRef: RefObject<HTMLDivElement>
) => {
    gsap.to(stripsRef.current, {
        height: "0px",
        duration: 1.5,
        stagger: { amount: 0.5 },
        ease: "power4.inOut",
    });
    gsap.to(contentRef.current, {
        marginTop: "0",
        duration: 1.5,
        ease: "power4.inOut",
    });
};

function heroSectionTextReveal(
    heroHead1Ref: RefObject<HTMLDivElement>,
    heroHead2Ref: RefObject<HTMLDivElement>,
    heroHead3Ref: RefObject<HTMLDivElement>
) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".content-wrapper",
            start: "top top",
            end: "bottom+=300 center",
            scrub: 1,
            toggleActions: "play reverse play reverse",
        },
    });

    tl.to(heroHead1Ref.current, { x: "-50px" }, 0)
        .to(heroHead2Ref.current, { x: "50px" }, 0)
        .to(heroHead3Ref.current, { x: "-100px" }, 0);
}

function aboutSectionParallaxImage(
    aboutWrapperRef: MutableRefObject<HTMLDivElement | null>,
    aboutImageRef: MutableRefObject<HTMLDivElement | null>
) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: aboutWrapperRef.current,
            start: "-=100% top",
            end: "50% top",
            scrub: true,
        },
    });

    tl.to(aboutImageRef.current, {
        ease: "none",
        yPercent: -50,
    });
}

function aboutSectionTextReveal(
    text: SplitType,
    aboutWrapperRef: RefObject<HTMLDivElement>
) {
    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: aboutWrapperRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
        },
        opacity: 0.2,
        stagger: 0.1,
    });
}

function artWorkSectionParallax(
    artWorkWrapperRef: MutableRefObject<HTMLDivElement | null>,
    artWorkParallaxImageRef: MutableRefObject<HTMLDivElement | null>
) {
    const parallaxTl = gsap.timeline({
        scrollTrigger: {
            trigger: artWorkWrapperRef.current,
            start: "-=100% top",
            end: "50% top",
            scrub: true,
        },
    });

    parallaxTl.to(artWorkParallaxImageRef.current, {
        ease: "none",
        yPercent: -150,
    });
}

function artWorkSectionScale(
    artWorkWrapperRef: MutableRefObject<HTMLDivElement | null>,
    artWorkScaleImageRef: MutableRefObject<HTMLDivElement | null>,
    word1: SplitType,
    word2: SplitType
) {
    const scaleTl = gsap.timeline({
        scrollTrigger: {
            trigger: artWorkWrapperRef.current,
            start: "top top",
            end: "bottom+=50% top",
            scrub: true,
            pin: true,
        },
    });

    scaleTl
        .to(artWorkScaleImageRef.current, {
            ease: "none",
            width: "100vw",
            marginLeft: 0,
            marginTop: "-30vw",
            height: "200vh",
        })
        .to(
            ".art_work_container",
            {
                paddingTop: "0px",
                height: "100vh",
                overflow: "hidden",
            },
            0
        )
        // Both word1 and word2 animations start at the same time
        .fromTo(
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
}

export {
    forwardAnimation,
    reverseAnimation,
    heroSectionTextReveal,
    aboutSectionParallaxImage,
    aboutSectionTextReveal,
    artWorkSectionParallax,
    artWorkSectionScale,
};
