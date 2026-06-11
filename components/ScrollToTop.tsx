"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    const btn = document.getElementById("scrollTop");
    if (!btn) return;

    const onScroll = () => {
      btn.classList.toggle("visible", window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="scroll-top" id="scrollTop" onClick={handleClick}>
      ↑
    </button>
  );
}
