"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Title() {
  const [typeEffect] = useTypewriter({
    words: ["Desenvolvedor Web", "FullStack", "Mobile"],
    typeSpeed: 100,
    deleteSpeed: 40,
    loop: true,
  });

  return (
    <div className="container flex place-content-center px-8">
      <h1 className="text-[3rem] text-center">
        <span>{typeEffect}</span>
        <Cursor cursorStyle="_"></Cursor>
      </h1>
    </div>
  );
}
