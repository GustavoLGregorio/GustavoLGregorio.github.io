"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Title() {
  const [typeEffect] = useTypewriter({
    words: ["Full-stack: JavaScript", "Mobile: React Native"],
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 1500,
    loop: true,
  });

  return (
    <h2 className="max-h-max min-h-10 text-center text-[1.5rem]">
      <span className="hidden">Desenvolvedor Web, FullStack, Mobile</span>
      <span>{typeEffect}</span>
    </h2>
  );
}
