import { useEffect, useState, useRef } from "react";
import TypewriterText from "./TypewriterText";

export default function Hero() {
    const [screenHeight, setScreenHeight] = useState<number>(
        window.outerHeight,
    );
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const resizer = () => {
            setScreenHeight(window.outerHeight);
        };
        window.addEventListener("resize", resizer);

        return () => removeEventListener("resize", resizer);
    }, []);

    // TODO: Add screenHeight dependency to the useEffect and fix the resize bug
    useEffect(() => {
        containerRef.current!.style.height = `${screenHeight}px`;
    }, []);

    return (
        <div
            className={`flex flex-col justify-center gap-4 px-4`}
            ref={containerRef}
        >
            <h1 className="cs-font-tilt-warp text-5xl">
                Gustavo Luiz Gregorio
            </h1>
            <h2 className="cs-font-montserrat relative w-full text-3xl">
                <div className="absolute top-0 z-10 w-full">
                    <TypewriterText
                        text="Desenvolvedor Fullstack | Web Tooling"
                        typeSpeed={100}
                        deleteSpeed={80}
                    />
                </div>
            </h2>
        </div>
    );
}
