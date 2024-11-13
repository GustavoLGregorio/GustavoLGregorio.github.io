"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import "@/styles/Header.css";
import Footer from "./Footer";

export default function Header() {
  const navbar = useRef();
  const toggler = useRef();
  const togglerIcon = useRef();
  const [collapsed, setCollapsed] = useState(true);
  const [icon, setIcon] = useState(faBarsStaggered);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const widthId = window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      });

      setWidth(window.innerWidth);

      if (window.innerWidth < 768) {
        if (collapsed) {
          navbar.current.style.left = "-100%";
          setIcon(faBarsStaggered);
          toggler.current.style.position = "relative";
          toggler.current.style.color = "var(--foreground)";
          navbar.current.style.opacity = "1";
        }
        if (!collapsed) {
          navbar.current.style.left = "0%";
          setIcon(faXmark);
          toggler.current.style.position = "relative";
          toggler.current.style.color = "var(--background)";
          navbar.current.style.opacity = "1";
        }
      }

      return () => {
        window.removeEventListener("resize", widthId);
      };
    }
  }, [width, collapsed]);

  return (
    <header className="absolute left-2/4 top-0 z-20 mx-auto flex h-[5rem] w-full max-w-7xl translate-x-[-50%] justify-start bg-background px-8 py-6 text-foreground md:mx-auto md:w-full md:justify-center lg:px-0">
      <Link
        href="/"
        className="absolute left-24 z-10 w-fit text-[1.5rem] md:relative md:left-0 md:h-fit md:w-[170px]"
      >
        Gustavo L.G.
      </Link>
      <button
        type="button"
        ref={toggler}
        className="z-40 w-10 text-[1.5rem] text-foreground md:hidden"
        onClick={() => (collapsed ? setCollapsed(false) : setCollapsed(true))}
      >
        <FontAwesomeIcon
          id="toggler-icon"
          ref={togglerIcon}
          icon={icon}
        ></FontAwesomeIcon>
      </button>
      <nav
        id="nav"
        ref={navbar}
        className="fixed left-[-100%] top-0 z-30 h-screen w-[80%] bg-foreground text-background md:relative md:left-0 md:flex md:h-fit md:w-full md:bg-[green] md:bg-background md:text-foreground"
      >
        <ul className="absolute top-[4.5rem] z-10 flex w-full flex-col gap-y-2 indent-8 md:relative md:top-0 md:h-full md:flex-row md:justify-end">
          <li>
            <Link href="/">Projetos</Link>
          </li>
          <li>
            <Link href="/">Projetos</Link>
          </li>
          <li>
            <Link href="/">Projetos</Link>
          </li>
          <li>
            <Link href="/">Sobre</Link>
          </li>
        </ul>
        {width < 768 ? <Footer></Footer> : null}
      </nav>
    </header>
  );
}
