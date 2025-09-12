"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed top-5 
        w-[90%] max-w-[1300px] 
        flex items-center justify-between 
        px-4 sm:px-6 md:px-10 
        py-3 border-2 border-black rounded-xl 
        bg-white/85 backdrop-blur-md z-50
        left-0 right-0 mx-auto  
        md:left-1/2 md:-translate-x-1/2  
      "
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/">
          <Image
            src="/images/logo_cq.png"
            alt="COINQUEST Logo"
            width={160}
            height={50}
            className="h-auto w-28 sm:w-36 md:w-48 lg:w-56 object-contain ml-0 sm:ml-2 md:ml-0"
            priority
          />
        </a>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex">
        <ul className="flex flex-row gap-8 list-none m-0 p-0">
          <li>
            <a href="#hero" className="text-black text-[18px] hover:text-blue-600">
              Beranda
            </a>
          </li>
          <li>
            <a href="#tentang" className="text-black text-[18px] hover:text-blue-600">
            Tentang Coinquest
            </a>
          </li>
          <li>
            <a href="#testi" className="text-black text-[18px] hover:text-blue-600">
            Testimoni
            </a>
          </li>
          <li>
            <a href="#package" className="text-black text-[18px] hover:text-blue-600">
            Special Package
            </a>
          </li>
          <li>
            <a href="#sekola" className="text-black text-[18px] hover:text-blue-600">
            Event
            </a>
          </li>
        </ul>
      </nav>

      {/* Hamburger (mobile only) */}
      <button
        className="relative w-8 h-8 flex flex-col justify-center items-center md:hidden ml-auto z-50"
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

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="fixed top-[80px] left-0 w-full bg-white/95 border-t-2 border-black flex flex-col items-center py-3 rounded-b-lg md:hidden z-[9999] shadow-lg">
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            <li>
              <a href="#hero" className="text-black text-[18px] hover:text-blue-600">
              Beranda
              </a>
            </li>
            <li>
              <a href="#tentang" className="text-black text-[18px] hover:text-blue-600">
              Tentang Coinquest
              </a>
            </li>
            <li>
              <a href="#testi" className="text-black text-[18px] hover:text-blue-600">
              Testimoni
              </a>
            </li>
            <li>
              <a href="#package" className="text-black text-[18px] hover:text-blue-600">
              Special Package
              </a>
            </li>
            <li>
              <a href="#sekola" className="text-black text-[18px] hover:text-blue-600">
              Event
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
