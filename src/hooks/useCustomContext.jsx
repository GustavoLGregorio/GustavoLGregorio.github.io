"use client";

import React, { useContext } from "react";

export default function useCustomContext(CustomContext) {
  const context = useContext(CustomContext);
  if (!context) {
    throw new Error("Item dentro do Context está forá de escopo");
  }
  return context;
}
