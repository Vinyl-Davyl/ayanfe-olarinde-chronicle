import { MutableRefObject } from "react";

export default function Strips({
    stripsRef,
}: {
    stripsRef: MutableRefObject<HTMLDivElement[]>;
}) {
    // Function to add each ref to the stripsRef array
    const setRef = (el: HTMLDivElement | null, index: number) => {
        if (el) stripsRef.current[index] = el;
    };

    return (
        <div className="z-40 left-0 top-0 fixed w-full grid grid-cols-7">
            {[...Array(7)].map((_, i) => (
                <div
                    key={i}
                    className="bg-[#1D1D1D] h-0"
                    ref={(el) => setRef(el, i)}
                />
            ))}
        </div>
    );
}
