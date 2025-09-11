"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SchoolSection() {
  const images = [
    { src: "/images/gts1.jpg", school: "SMP Harapan Kasih Cordova" },
    { src: "/images/gts2.jpg", school: "SMPN 4 Tangerang" },
    { src: "/images/gts3.jpg", school: "SD Islamic Village" },
    { src: "/images/gts4.jpg", school: "Tangan Pengharapan Academy" },
    { src: "/images/gts5.jpg", school: "SMK Triguna 1956" },
    { src: "/images/gts6.jpg", school: "SMP Hosana Rancabungur" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  // keyboard navigation
  useEffect(() => {
    function onKey(e) {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") {
        setSelectedIndex((i) => (i === null ? null : (i + 1) % images.length));
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, images.length]);

  return (
    <section className="relative w-full flex flex-col items-center py-10 sm:py-12">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/school.jpg"
          alt="Background School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Judul */}
      <h2 className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 
                     text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-14 px-4">
        <Image
          src="/images/logo_cq.png"
          alt="Coinquest Logo"
          width={200}
          height={60}
          className="h-[40px] sm:h-[55px] lg:h-[60px] w-auto"
        />
        <span className="text-black">Goes To School</span>
      </h2>

      {/* Mobile: Slider */}
      <div className="flex sm:hidden overflow-x-auto gap-5 px-4 w-full snap-x snap-mandatory">
        {images.map((item, i) => (
          <div key={i} className="flex flex-col items-center min-w-[300px] snap-center">
            <div
              className="relative w-full h-[200px] rounded-[24px] border-2 border-black overflow-hidden 
                         shadow-[5px_5px_0px_rgba(0,0,0,1)] cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            >
              <Image
                src={item.src}
                alt={`GTS ${i + 1}`}
                fill
                className="object-cover rounded-[24px]"
              />
            </div>
            <p className="mt-2 text-center text-black font-bold lg:text-2xl">{item.school}</p>
          </div>
        ))}
      </div>

      {/* Tablet & Desktop: Grid */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full px-4">
        {images.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className="relative w-full h-[200px] lg:h-[220px] 
                         rounded-[40px] lg:rounded-[50px] 
                         border-2 border-black overflow-hidden 
                         shadow-[5px_5px_0px_rgba(0,0,0,1)] 
                         lg:shadow-[7px_7px_0px_rgba(0,0,0,1)] cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            >
              <Image
                src={item.src}
                alt={`GTS ${i + 1}`}
                fill
                className="object-cover rounded-[40px] lg:rounded-[50px]"
              />
            </div>
            <p className="mt-3 text-center text-black font-bold text-lg">{item.school}</p>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-[90%] max-w-4xl h-[80%]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex].src}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>

          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setSelectedIndex(null)}
          >
            ✕
          </button>

          {/* Prev & Next */}
          <button
            className="absolute left-4 sm:left-10 text-white text-6xl font-bold"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className="absolute right-4 sm:right-10 text-white text-6xl font-bold"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
