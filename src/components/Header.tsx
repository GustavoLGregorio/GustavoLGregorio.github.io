import { useState, useEffect, useRef } from "react";

export default function Header() {
    const [isToggled, setIsToggled] = useState<boolean>(true);
    const navRef = useRef(null);
    const [menuClasses, setMenuClasses] =
        useState<string>("hidden");

    useEffect(() => {
        if (isToggled) {
            setMenuClasses("hidden");
        } else {
            setMenuClasses("flex");
        }
    }, [isToggled]);

    const toggleMenu = () => {
        if (isToggled) setIsToggled(false);
        else setIsToggled(true);
    };

    return (
        <header className="bg-background absolute z-50 flex w-full justify-between px-6 py-4">
            <a href="#" className="">
                Gustavo L. Gregorio
            </a>

            <nav className="">
                <button
                    onClick={toggleMenu}
                    className="cursor-pointer"
                >
                    HM
                </button>
                <ul
                    ref={navRef}
                    className={`${menuClasses} bg-background absolute left-0 mt-4 h-dvh w-full flex-col gap-2 px-4 py-4`}
                >
                    <div className="pt-2 pb-4">
                        <li>sobre</li>
                        <li>currículo</li>
                    </div>
                    <div className="border-t-background flex flex-row justify-center gap-x-4 border-t-2 pt-4">
                        <li>LI</li>
                        <li>GI</li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
