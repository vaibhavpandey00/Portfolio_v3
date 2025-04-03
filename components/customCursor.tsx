"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div className="hidden xl:block custom-cursor"></div>;
};

export default CustomCursor;
