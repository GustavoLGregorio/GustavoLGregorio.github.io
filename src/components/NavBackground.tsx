import { useRef, useEffect } from "react";
import EntropyParticles from "entropy-particles";

export default function NavBackground() {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const particles = new EntropyParticles();
        const divCurrent = divRef.current!;

        particles.config = {
            canvas: {
                id: "entropy-particles-nav-background",
                appendTo: divCurrent,
                threshold: divCurrent.clientWidth * 0.2,
                backgroundColor: "transparent",
                size: {
                    width: divCurrent.clientWidth,
                    height: divCurrent.clientHeight,
                },
            },
            particles: {
                quantity: 1000,
                color: ["red", "purple", "pink"],
                velocity: 1,
                lifespan: 2 * 60,
                maxLifespan: 3 * 60,
                size: 1,
                maxSize: 10,
                spreadFactor: 1,
            },
            listeners: {
                spawners: {
                    keyboardTrigger: "Control",
                },
            },
        };
        particles.start();
    }, []);

    return <div ref={divRef} className="h-full w-full"></div>;
}
