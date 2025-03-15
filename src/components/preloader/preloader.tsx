import { RefObject } from "react";

type PreloaderProps = {
    loaderOverlayRef: RefObject<HTMLDivElement>;
    loaderRef: RefObject<HTMLDivElement>;
};

const Preloader = ({ loaderOverlayRef, loaderRef }: PreloaderProps) => {
    return (
        <div
            ref={loaderOverlayRef}
            className="w-full h-screen bg-[#1D1D1D] fixed flex top-0 left-0 z-[9999] overflow-hidden"
        >
            <div
                ref={loaderRef}
                className="text-8xl text-white absolute bottom-0 m-5"
                style={{ fontFamily: "SaolDisplay" }}
            ></div>
        </div>
    );
};

export default Preloader;
