import { useEffect, useRef, useState } from "react";

import iconHtml from "./../assets/icons/html.svg";
import iconCss from "./../assets/icons/css.svg";
import iconJavascript from "./../assets/icons/javascript.svg";
import iconTypescript from "./../assets/icons/typescript.svg";

import iconBootstrap from "./../assets/icons/bootstrap.svg";
import iconTailwind from "./../assets/icons/tailwind-green.svg";
import iconReact from "./../assets/icons/react.svg";
import iconNext from "./../assets/icons/nextjs.svg";

import iconNode from "./../assets/icons/nodejs.svg";
import iconExpress from "./../assets/icons/expressjs.svg";
import iconFigma from "./../assets/icons/figma.svg";
import iconMongodb from "./../assets/icons/mongodb.svg";

import iconMysql from "./../assets/icons/mysql.svg";

type TechnologyType = {
    id: number;
    name: string;
    icon: string;
};

export default function TechCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [carouselPos, setCarouselPos] = useState<number>(0);

    const techs: TechnologyType[] = [
        {
            id: 0,
            name: "html",
            icon: iconHtml,
        },
        {
            id: 1,
            name: "css",
            icon: iconCss,
        },
        {
            id: 2,
            name: "bootstrap",
            icon: iconBootstrap,
        },
        {
            id: 3,
            name: "tailwind",
            icon: iconTailwind,
        },
        {
            id: 4,
            name: "figma",
            icon: iconFigma,
        },
        {
            id: 5,
            name: "js",
            icon: iconJavascript,
        },
        {
            id: 6,
            name: "ts",
            icon: iconTypescript,
        },
        {
            id: 7,
            name: "react",
            icon: iconReact,
        },
        {
            id: 8,
            name: "next",
            icon: iconNext,
        },
        {
            id: 9,
            name: "node",
            icon: iconNode,
        },
        {
            id: 10,
            name: "express",
            icon: iconExpress,
        },
        {
            id: 11,
            name: "mongodb",
            icon: iconMongodb,
        },
        {
            id: 12,
            name: "mysql",
            icon: iconMysql,
        },
    ];

    const duplicatedTechs = [...techs, ...techs, ...techs];

    useEffect(() => {
        const loopId = setInterval(() => {
            setCarouselPos((c) => c - 2);
        }, 16);

        return () => clearInterval(loopId);
    }, []);

    useEffect(() => {
        if (!carouselRef.current || !containerRef.current) return;

        const itemWidth = 96;
        const oneSetWidth = techs.length * itemWidth;

        if (Math.abs(carouselPos) >= oneSetWidth) {
            setCarouselPos(0);
            carouselRef.current.style.left = "0px";
        } else {
            carouselRef.current.style.left = `${carouselPos}px`;
        }
    }, [carouselPos, techs.length]);

    return (
        <div
            ref={containerRef}
            // prettier-ignore
            className="relative w-full overflow-x-hidden py-2
                before:absolute before:top-0 before:left-0 before:z-10
                before:h-full before:w-16 before:bg-gradient-to-l
                before:from-transparent before:to-background
                after:absolute after:top-0 after:right-0 after:h-full
                after:w-16 after:bg-gradient-to-r
                after:from-transparent after:to-background"
        >
            <div className="relative flex flex-row gap-x-4" ref={carouselRef}>
                {duplicatedTechs.map((tech, index) => (
                    <div className="flex flex-col gap-2" key={`${tech.id}-${index}`}>
                        <img
                            src={tech.icon}
                            className="cs-filter-blur flex aspect-square w-24 max-w-32 min-w-20 items-center justify-center rounded-[14px] bg-[hsla(0,0%,50%,0.2)] p-4 text-4xl sm:w-28 md:w-32"
                        />
                        <h4 className="cs-font-cascadia-code text-center text-sm font-bold uppercase">{tech.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
