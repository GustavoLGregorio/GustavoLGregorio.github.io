"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import "@/styles/Header.css";

export default function Header() {
  const navbar = useRef();
  const [collapsed, setCollapsed] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const widthId = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    if (collapsed && width < 768) {
      navbar.current.style.top = "-500%";
      navbar.current.style.opacity = "0";
    } else {
      navbar.current.style.top = "0%";
      navbar.current.style.opacity = "1";
    }

    return () => {
      window.removeEventListener("resize", widthId);
    };
  }, [collapsed, width]);

  return (
    <header className="flex fixed text-[--background] z-20 top-0 w-full justify-between p-4 bg-[--foreground] backdrop-blur-sm">
      <Link href="/" className="z-20">
        Inicio
      </Link>
      <button
        type="button"
        className="z-20 md:hidden"
        onClick={() => (collapsed ? setCollapsed(false) : setCollapsed(true))}
      >
        Toggle
      </button>
      <nav className="absolute md:flex md:relative bg-[--foreground] z-10 left-0 top-0 w-full md:w-auto h-full">
        <ul
          id="nav"
          ref={navbar}
          className="absolute md:relative md:top[0%] w-full top-[-500%] mt-14 md:mt-0 z-10 flex flex-col md:flex-row text-center bg-[--foreground]"
        >
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
