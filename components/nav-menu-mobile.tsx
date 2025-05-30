"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { navigationItems } from "./header";
import { Grip, Menu, X } from "lucide-react";

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
        tl.to(".menu", {
          x: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power3.out",
        });

        tl.from(".menu-item", {
          y: 20,
          opacity: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "back.out(1.7)",
        });
      } else if (isVisible) {
        // Close animation with timeline
        tl.to(".menu-item", {
          y: -20,
          opacity: 0,
          duration: 0.1,
          stagger: 0.1,
          ease: "back.in(1.7)",
        });

        tl.to(".menu", {
          scale: 0.9,
          opacity: 0,
          duration: 0.2,
          ease: "power3.in",
        });

        tl.to(".menu", {
          x: "100%",
          duration: 0.2,
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
    <div ref={containerRef} className="relative z-50">
      {/* Menu Button */}
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="p-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black hover:text-amber-700 transition-colors text-xl font-bold"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <X className="w-6 h-6 min-[359px]:w-8 min-[359px]:h-8" />
        ) : (
          <Menu className="w-6 h-6 min-[359px]:w-8 min-[359px]:h-8" />
        )}
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
              "bg-[#c5fb45] p-6 z-50 shadow-2xl",
              "transform translate-x-full opacity-0", // Initial hidden state
              "max-[420px]:max-w-none", // Full screen on small devices
            )}
          >
            <div className="flex justify-end mb-10">
              <button
                onClick={closeMenu}
                className="text-black px-6 py-3 rounded-lg text-2xl font-bold hover:bg-[#a8e032] transition-colors flex items-center"
              >
                ✕ <span className="mr-2">بستن</span>
              </button>
            </div>

            <nav aria-label="Main navigation" className="mb-10 ">
              <ul className="space-y-8">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="menu-item block py-4 px-6 text-2xl font-bold rounded-lg transition-colors duration-200 hover:text-[#c5fb45] hover:bg-gray-800"
                      onClick={closeMenu}
                    >
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
