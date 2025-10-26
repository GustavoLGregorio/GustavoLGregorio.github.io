import { useRef, useEffect } from "react";
import EntropyParticles from "entropy-particles";
import { backgroundBus } from "../lib/backgroundBus";

export default function Background() {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const particles = new EntropyParticles();
        const divCurrent = divRef.current!;

        particles.config = {
            canvas: {
                id: "entropy-particles-background",
                appendTo: divCurrent,
                threshold: divCurrent.clientWidth * 0.2,
                backgroundColor: "transparent",
                size: {
                    width: divCurrent.clientWidth,
                    height: divCurrent.clientHeight,
                },
            },
            particles: {
                quantity: 500,
                color: ["#4E56C0", "#9B5DE0", "#D78FEE", "#FDCFFA"],
                velocity: 0,
                lifespan: 2 * 60,
                length: 5,
                maxLifespan: 3 * 60,
                size: 1,
                maxSize: 10,
                spreadFactor: 2,
            },
        };
        particles.start();

        backgroundBus.on("pause", () => particles.pause());
        backgroundBus.on("start", () => particles.start());
    }, []);

    return <div ref={divRef} className="fixed z-[-10] h-dvh w-dvw"></div>;
}
