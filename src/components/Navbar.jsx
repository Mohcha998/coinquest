"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 right-0 w-full z-50
        shadow-md
        bg-[url('/images/head_mb2.png')]
        bg-white
        lg:bg-[url('/images/heading2.png')] bg-cover
        bg-[position:100%_100%]   <!-- 50% X (horizontal), 20% Y (vertical) -->
      "
    >

      {/* Wrapper column */}
      <div className="flex flex-col items-center px-6 md:px-12 py-3">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <a href="/">
            <Image
              src="/images/logo_cq.png"
              alt="COINQUEST Logo"
              width={200}
              height={60}
              className="h-auto object-contain lg:w-[200px] w-[150px]"
              priority
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex justify-center w-full">
          <ul className="flex flex-row gap-[70px] items-center">
            <li>
              <a
                href="#hero"
                className="text-[#a3a3a3] text-[16px] hover:text-yellow-600"
                style={{ fontFamily: "var(--font-moresugar)" }}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#tentang"
                className="text-[#a3a3a3] text-[16px] hover:text-yellow-600"
                style={{ fontFamily: "var(--font-moresugar)" }}
              >
                Tentang Coinquest
              </a>
            </li>
            <li>
              <a
                href="#testi"
                className="text-[#a3a3a3] text-[16px] hover:text-yellow-600"
                style={{ fontFamily: "var(--font-moresugar)" }}
              >
                Testimoni
              </a>
            </li>
            <li>
              <a
                href="#package"
                className="text-[#a3a3a3] text-[16px] hover:text-yellow-600"
                style={{ fontFamily: "var(--font-moresugar)" }}
              >
                Special Package
              </a>
            </li>
            <li>
              <a
                href="#sekola"
                className="text-[#a3a3a3] text-[16px] hover:text-yellow-600"
                style={{ fontFamily: "var(--font-moresugar)" }}
              >
                Event
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger (mobile only) */}
        <button
          className="absolute right-6 top-4 w-8 h-8 flex flex-col justify-center items-center md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`absolute block w-7 h-[3px] bg-black rounded transition-transform duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute block w-7 h-[3px] bg-black rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute block w-7 h-[3px] bg-black rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden border-t shadow-md bg-white w-full">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <a
                href="#hero"
                className="text-[#a3a3a3] text-[18px] hover:text-yellow-600"
                style={{ fontFamily: "var(--font-moresugar)" }}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#tentang"
                className="text-[#a3a3a3] text-[18px] hover:text-yellow-600"
                style={{ fontFamily: "var(--font-moresugar)" }}
              >
                Tentang Coinquest
              </a>
            </li>
            <li>
              <a
                href="#testi"
                className="text-[#a3a3a3] text-[18px] hover:text-yellow-600"
                style={{ fontFamily: "var(--font-moresugar)" }}
              >
                Testimoni
              </a>
            </li>
            <li>
              <a
                href="#package"
                className="text-[#a3a3a3] text-[18px] hover:text-yellow-600"
                style={{ fontFamily: "var(--font-moresugar)" }}
              >
                Special Package
              </a>
            </li>
            <li>
              <a
                href="#sekola"
                className="text-[#a3a3a3] text-[18px] hover:text-yellow-600"
                style={{ fontFamily: "var(--font-moresugar)" }}
              >
                Event
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
