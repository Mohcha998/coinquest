"use client";
import { useState, useEffect } from "react";

export default function VidinsSection() {
  const [play, setPlay] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full bg-gray-100 py-34 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        
        {/* Bagian Atas: Judul + Video */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
          
          {/* Kolom kiri: Teks */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-black mb-6">
              MEREKA <br />
              YANG SUDAH <br />
              TERINSPIRASI
            </h2>
            {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold italic 
                      py-3 px-8 rounded-full shadow-md 
                      text-base sm:text-lg">
              PESAN SEKARANG
            </button> */}
          </div>

          {/* Kolom kanan: Video */}
          <div
            className="flex-[1.5] flex justify-center aspect-video bg-white border-4 border-black rounded-[2rem] 
              shadow-[12px_12px_8px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer"
            onClick={() => setPlay(true)}
          >
            <div className="relative w-full max-w-[900px] aspect-video bg-white rounded-[2rem] shadow-xl flex items-center justify-center">
              {!play ? (
                <div className="relative w-full h-full">
                  <img
                    src="https://img.youtube.com/vi/G82gN2S2i3M/maxresdefault.jpg"
                    alt="Merry Riana Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] sm:border-t-[12px] border-t-transparent 
                                      border-b-[8px] sm:border-b-[12px] border-b-transparent 
                                      border-l-[14px] sm:border-l-[20px] border-l-black ml-1 sm:ml-2">
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/G82gN2S2i3M?autoplay=1&rel=0"
                  title="Merry Riana Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>

        {/* Bagian Bawah: 3 Kotak Sejajar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-5">
          {/* Kotak 1 */}
          <div className="relative w-full h-[160px] sm:h-[180px] lg:h-[200px] bg-white rounded-[1.5rem] shadow-[6px_6px_0px_#000]" />
          {/* Kotak 2 */}
          <div className="relative w-full h-[160px] sm:h-[180px] lg:h-[200px] bg-white rounded-[1.5rem] shadow-[6px_6px_0px_#000]" />
          {/* Kotak 3 */}
          <div className="relative w-full h-[160px] sm:h-[180px] lg:h-[200px] bg-white rounded-[1.5rem] shadow-[6px_6px_0px_#000]" />
        </div>
      </div>
    </section>
  );
}
