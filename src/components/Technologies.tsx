import { useEffect, useRef, useState } from "react";

export default function Technologies() {
    const containerRef = useRef<HTMLDivElement>(null);
    const carrousselRef = useRef<HTMLDivElement>(null);
    const [carrousselPos, setCarrousselPos] = useState<number>(0);
    const tecs = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    useEffect(() => {
        const loopId = setInterval(() => {
            setCarrousselPos((c) => c - 1);
        }, 16);

        return () => clearInterval(loopId);
    }, []);

    useEffect(() => {
        if (
            carrousselPos <=
            -(
                carrousselRef.current!.scrollWidth -
                containerRef.current!.clientWidth
            )
        ) {
            setCarrousselPos(-1);
        }
        if (carrousselRef.current) {
            carrousselRef.current.style.left = `${carrousselPos}px`;
        }
    }, [carrousselPos]);

    return (
        <div
            ref={containerRef}
            className="w-full overflow-x-hidden"
        >
            <div
                className="relative flex w-[200%] flex-row gap-x-2"
                ref={carrousselRef}
            >
                {tecs.map((_, index) => (
                    <div
                        key={index}
                        className="aspect-square w-24 rounded-xl bg-[yellow]"
                    ></div>
                ))}
            </div>
        </div>
    );
}
