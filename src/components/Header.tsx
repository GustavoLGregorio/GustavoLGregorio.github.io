import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { backgroundBus } from "../lib/backgroundBus";
// import NavBackground from "./NavBackground";

export default function Header() {
    const [isToggled, setIsToggled] = useState<boolean>(true);
    const [navbarToggler, setNavbarToggler] = useState<IconDefinition>(faBars);
    const navRef = useRef(null);
    const [menuClasses, setMenuClasses] = useState<string>("hidden");
    const [windowSize, setWindowSize] = useState<[number, number]>([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        if (isToggled) {
            setMenuClasses("hidden");
            setNavbarToggler(faBars);
            backgroundBus.emit("start");
        } else {
            setMenuClasses("flex");
            setNavbarToggler(faXmark);
            backgroundBus.emit("pause");
        }
    }, [isToggled]);

    useEffect(() => {
        console.log(windowSize);
        const resizeHandler = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, [windowSize]);

    const handleOnClickPageScroll = () => {
        window.scrollTo({ top: window.outerHeight });
    };

    const toggleMenu = () => {
        if (isToggled) setIsToggled(false);
        else setIsToggled(true);
    };

    const handleCurriculumClick = () => {
        window.open(location.href + "cv.pdf", "_blank");
    };

    const TogglableNav = () => {
        return (
            <nav>
                <button onClick={toggleMenu} className="cursor-pointer">
                    <FontAwesomeIcon icon={navbarToggler} size="2x" />
                </button>
                <ul
                    ref={navRef}
                    className={`${menuClasses} bg-background absolute left-0 mt-4 h-dvh w-full flex-col gap-2 px-4 py-4`}
                >
                    <div className="p-4">
                        <li className="capitalize">
                            <a onClick={handleOnClickPageScroll} className="cursor-pointer">
                                Sobre
                            </a>
                        </li>
                        <li className="capitalize">
                            <a onClick={handleCurriculumClick} className="cursor-pointer">
                                Currículo
                            </a>
                        </li>
                    </div>
                    <div className="border-t-foreground flex flex-row justify-center gap-x-4 border-t-2 pt-6">
                        <li>
                            <a href="https://www.linkedin.com/in/gustavo-luiz-gregorio/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/GustavoLGregorio" target="_blank">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </li>
                    </div>
                    {/* <NavBackground /> */}
                </ul>
            </nav>
        );
    };

    const RowNav = () => {
        return (
            <nav>
                <ul ref={navRef} className="bg-background flex w-full items-center gap-4">
                    <li className="capitalize">
                        <a onClick={handleOnClickPageScroll} className="cursor-pointer">
                            Sobre
                        </a>
                    </li>
                    <li className="capitalize">
                        <button onClick={handleCurriculumClick} className="cs-link cursor-pointer">
                            Currículo
                        </button>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/gustavo-luiz-gregorio/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/GustavoLGregorio" target="_blank">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                    </li>
                </ul>
            </nav>
        );
    };

    return (
        <header className="bg-background cs-font-lalezar fixed z-50 flex w-full items-center justify-between px-6 py-6 text-lg sm:text-xl md:text-2xl">
            <a href="#" className="text-xl">
                Gustavo L. Gregorio
            </a>

            {windowSize[0] >= 640 ? <RowNav /> : <TogglableNav />}
        </header>
    );
}
