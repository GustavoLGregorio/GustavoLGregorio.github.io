"use client";
import React, { useState } from "react";

export default function Button() {
  const [num, setNum] = useState(0);

  return (
    <>
      <div>{num}</div>
      <button
        className="w-[2rem] bg-[white] text-[black]"
        onClick={() => setNum((n) => n + 1)}
      >
        +
      </button>
      <button
        className="w-[2rem] bg-[white] text-[black]"
        onClick={() => setNum((n) => n - 1)}
      >
        -
      </button>
    </>
  );
}
