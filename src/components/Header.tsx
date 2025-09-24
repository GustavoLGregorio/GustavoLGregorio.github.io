import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    const [isToggled, setIsToggled] = useState<boolean>(true);
    const [navbarToggler, setNavbarToggler] =
        useState<IconDefinition>(faBars);
    const navRef = useRef(null);
    const [menuClasses, setMenuClasses] =
        useState<string>("hidden");

    useEffect(() => {
        if (isToggled) {
            setMenuClasses("hidden");
            setNavbarToggler(faBars);
        } else {
            setMenuClasses("flex");
            setNavbarToggler(faXmark);
        }
    }, [isToggled]);

    const toggleMenu = () => {
        if (isToggled) setIsToggled(false);
        else setIsToggled(true);
    };

    return (
        <header className="bg-background cs-font-lalezar absolute z-50 flex w-full items-center justify-between px-6 py-6">
            <a href="#" className="text-xl">
                Gustavo L. Gregorio
            </a>

            <nav className="">
                <button
                    onClick={toggleMenu}
                    className="cursor-pointer"
                >
                    <FontAwesomeIcon
                        icon={navbarToggler}
                        size="2x"
                    />
                </button>
                <ul
                    ref={navRef}
                    className={`${menuClasses} bg-background absolute left-0 mt-4 h-dvh w-full flex-col gap-2 px-4 py-4`}
                >
                    <div className="p-4">
                        <li className="text-lg capitalize">
                            Sobre
                        </li>
                        <li className="text-lg capitalize">
                            Currículo
                        </li>
                    </div>
                    <div
                        // style={{ borderTop: "2px solid" }}
                        className="border-t-foreground flex flex-row justify-center gap-x-4 border-t-2 pt-6"
                    >
                        <li>
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                size="2x"
                            />
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="2x"
                            />
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
