import { useEffect, useState, useRef } from "react";

export default function Hero() {
    // prettier-ignore
    const [screenHeight, setScreenHeight] = 
        useState<number>(window.outerHeight);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const resizer = () => {
            setScreenHeight(window.outerHeight);
        };
        window.addEventListener("resize", resizer);

        return () => removeEventListener("resize", resizer);
    }, []);

    useEffect(() => {
        containerRef.current!.style.height = `${screenHeight}px`;
    }, [screenHeight]);

    return (
        <div
            className={`flex flex-col justify-center gap-4 px-4`}
            ref={containerRef}
        >
            <h1 className="cs-font-tilt-warp text-5xl">
                Gustavo Luiz Gregorio
            </h1>
            <h2 className="cs-font-montserrat text-2xl">
                Desenvolvedor Fullstack
            </h2>
        </div>
    );
}
