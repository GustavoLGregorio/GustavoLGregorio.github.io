"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import "@/styles/Header.css";

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
      if (collapsed && width < 768) {
        navbar.current.style.left = "-100%";
        setIcon(faBarsStaggered);
        toggler.current.style.position = "relative";
        toggler.current.style.color = "var(--foreground)";
        navbar.current.style.opacity = "0";
      } else {
        navbar.current.style.left = "0%";
        setIcon(faXmark);
        toggler.current.style.position = "fixed";
        toggler.current.style.color = "var(--background)";
        navbar.current.style.opacity = "1";
      }

      return () => {
        window.removeEventListener("resize", widthId);
      };
    }
  }, [collapsed, width]);

  return (
    <header className="flex absolute z-20 top-0 w-full h-[5rem] justify-start md:justify-between px-8 py-6 bg-background text-foreground">
      <button
        type="button"
        ref={toggler}
        className="z-40 md:hidden text-[1.5rem] text-foreground w-10"
        onClick={() => (collapsed ? setCollapsed(false) : setCollapsed(true))}
      >
        <FontAwesomeIcon
          id="toggler-icon"
          ref={togglerIcon}
          icon={icon}
        ></FontAwesomeIcon>
      </button>
      <Link
        href="/"
        className="absolute md:relative left-24 md:left-0 z-10 text-[1.5rem]"
      >
        Gustavo L.G.
      </Link>
      <nav
        id="nav"
        ref={navbar}
        className="fixed md:flex md:relative z-30 left-[-100%] top-0 md:w-auto w-[80%] bg-foreground h-screen"
      >
        <ul className="absolute md:relative w-full text-background top-[4.5rem] indent-8 z-10 flex gap-y-2 flex-col md:flex-row">
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
      </nav>
    </header>
  );
}
