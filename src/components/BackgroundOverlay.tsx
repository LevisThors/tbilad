"use client";
import { useEffect } from "react";

interface BackgroundOverlayProps {
    toggler: React.MouseEventHandler;
}

export default function BackgroundOverlay({ toggler }: BackgroundOverlayProps) {
    useEffect(() => {
        document.body.classList.add("overlay-open");

        return () => {
            document.body.classList.remove("overlay-open");
        };
    }, []);

    return (
        <div
            className="z-10 absolute top-0 left-0 w-full h-full backdrop-blur-animation bg-black/20 overscroll-none"
            id="global-overlay"
            onClick={toggler}
        ></div>
    );
}
