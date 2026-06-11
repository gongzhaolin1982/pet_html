"use client";

import { useEffect, useState, useCallback } from "react";

const navLinks = [
  { href: "#services", label: "服务" },
  { href: "#about", label: "关于" },
  { href: "#gallery", label: "作品" },
  { href: "#pricing", label: "价格" },
  { href: "#testimonials", label: "评价" },
];

function scrollToSection(href: string) {
  if (href === "#") return;
  const target = document.querySelector(href);
  if (target) {
    const navbar = document.getElementById("navbar");
    const offset = navbar?.offsetHeight ?? 70;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent, href: string) => {
      e.preventDefault();
      closeMenu();
      scrollToSection(href);
    },
    [closeMenu]
  );

  // Close menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [closeMenu]);

  return (
    <>
      <nav id="navbar" className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <a href="#hero" className="nav-logo" onClick={(e) => handleNavClick(e, "#hero")}>
            <span className="paw">🐾</span> 爪爪小栈
          </a>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ padding: "10px 24px", fontSize: "13px" }}
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                立即预约
              </a>
            </li>
          </ul>
          <button className="nav-toggle" onClick={openMenu} aria-label="打开菜单">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="mobile-close" onClick={closeMenu} aria-label="关闭菜单">
          ✕
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="mobile-link"
          style={{ color: "var(--amber)" }}
          onClick={(e) => handleNavClick(e, "#contact")}
        >
          立即预约
        </a>
      </div>
    </>
  );
}
