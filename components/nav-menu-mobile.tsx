"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { navigationItems } from "./header";

export default function NavMenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  // Handle menu open/close animations
  useGSAP(
    () => {
      const tl = gsap.timeline();

      if (isOpen) {
        // Open animation
        tl.set(".menu", { x: "100%", opacity: 0, scale: 0.95 });

        tl.to(".menu", {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        });

        tl.from(
          ".menu-item",
          {
            y: 24,
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.2",
        ); // start slightly before menu finishes animating
      } else if (isVisible) {
        // Close animation
        tl.to(".menu-item", {
          y: -10,
          opacity: 0,
          duration: 0.2,
          stagger: {
            amount: 0.25,
            from: "end",
          },
          ease: "power2.inOut",
        });

        tl.to(".menu", {
          scale: 0.96,
          opacity: 0,
          duration: 0.25,
          ease: "power2.inOut",
        });

        tl.to(".menu", {
          x: "100%",
          duration: 0.25,
          ease: "power3.in",
          onComplete: () => setIsVisible(false),
        });
      }
    },
    { scope: containerRef, dependencies: [isOpen] },
  );

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsVisible(true);
      setIsOpen(true);
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div ref={containerRef} className="text-gray-900">
      {/* Menu Button */}

      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className={`md:hidden relative flex flex-col justify-center items-center w-6 h-6 min-[359px]:h-8 min-[359px]:w-8 z-50 group ${!isOpen ? "hover:text-emerald-500" : "hover:text-[#c5fb45] hover:bg-gray-800"}`}
        onClick={toggleMenu}
      >
        <span
          className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out 
      ${isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"}`}
        />
        <span
          className={`block w-6 h-0.5 bg-current my-1 transition-all duration-300 ease-in-out 
      ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out 
      ${isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"}`}
        />
      </button>

      {/* Menu Overlay */}
      {isVisible && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-80"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div
            className={twMerge(
              "menu fixed top-0 right-0 w-full max-w-md h-full",
              "bg-[#c5fb45] py-8 px-2 z-40 shadow-2xl",
              "transform translate-x-full opacity-0", // Initial hidden state
              "max-[420px]:max-w-none", // Full screen on small devices
            )}
          >
            <div className="flex justify-end mb-10 py-3"></div>

            <nav aria-label="Main navigation" className="mb-10 ">
              <ul>
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="menu-item flex items-center gap-2 py-4 px-4 text-2xl font-bold rounded-lg transition-colors duration-200 hover:text-[#c5fb45] hover:bg-gray-800"
                      onClick={closeMenu}
                    >
                      <item.icon />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Footer */}

            <div className="fixed bottom-0 right-0 left-0 mt-6 py-4 border-t border-gray-700">
              <p className="text-gray-700 text-center text-sm">
                © {new Date().getFullYear()} سینوز. تمامی حقوق محفوظ است{" "}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
