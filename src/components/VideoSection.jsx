"use client";
import { useState, useEffect } from "react";

export default function VideoBox() {
  const [play, setPlay] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div id="tentang" className="relative flex items-center justify-center min-h-screen px-6 bg-gray-100 overflow-hidden">
      {/* Gradient atas biar transisi ke Hero lebih halus */}
      <div className="absolute top-0 left-0 w-full h-24 
        bg-gradient-to-b from-gray-100 to-transparent z-10" />

      {/* Background untuk Mobile */}
      <img
        src="/images/phone_cq.png"
        alt="Phone background"
        className="absolute inset-0 w-full h-full object-cover block md:hidden z-0"
      />
      {/* Background untuk Tablet */}
      <img
        src="/images/phone_cq.png"
        alt="Tablet background"
        className="absolute inset-0 w-full h-full object-cover hidden md:block lg:hidden z-0"
      />
      {/* Background untuk Web */}
      <img
        src="/images/web_cq.png"
        alt="Web background"
        className="absolute inset-0 w-full h-full object-cover hidden lg:block z-0"
      />

      {/* Gradient bawah biar transisi halus ke ProfileSection */}
      <div className="absolute bottom-0 left-0 w-full h-32 
        bg-gradient-to-t from-[#00A0B1] to-transparent z-10" />

      {/* Wrapper utama (Video + Text) */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-[1200px] w-full">
        
        {/* Video Box (thumbnail saja, klik buka popup) */}
        <div
          className="relative w-full max-w-[800px] aspect-video bg-white border-4 border-black rounded-[3.5rem] 
          shadow-[18px_18px_12px_rgba(0,0,0,0.7)] overflow-hidden cursor-pointer"
          onClick={() => setPlay(true)}
        >
          <div className="relative w-full h-full">
            <img
              src="https://img.youtube.com/vi/_nIhYgmZP4Y/maxresdefault.jpg"
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
        </div>

        {/* Text di sebelah kanan (atau bawah di mobile) */}
        <div className="flex-1 text-center lg:text-left text-black lg:ml-[40px]">
        <div className="flex items-center gap-4">
          <h2
            className="text-2xl sm:text-3xl lg:text-3xl font-bold text-[#5DD5E4]"
            style={{ fontFamily: "var(--font-moresugar)" }}
          >
            TENTANG
          </h2>

          <span className="inline-block">
            <img
              src="/images/logo_cq.png"
              alt="COINQUEST Logo"
              className="h-16 sm:h-20 w-auto lg:w-[150px] lg:h-auto object-contain"
            />
          </span>
        </div>

          <p className="leading-relaxed text-[12px] md:text-[16px] lg:text-[16px] lg:mt-[20px]">
          COINQUEST Adalah sebuah buku dengan 52 formula sederhana untuk membantu remaja memahami pentingnya uang dan cara 
          mengelolanya dengan bijak. Mengapa 52? Karena dengan satu formula untuk setiap minggu dalam setahun, setiap remaja 
          bisa mengambil langkah kecil dan konsisten untuk mengelola uang dengan lebih baik.<br/><br/>

          Di usia 15 tahun, Vern (Penulis) sangat bersyukur memiliki kesempatan menulis buku ini dan mewawancarai role-model 
          hebat. Ia antusias melihat remaja di Indonesia dan di seluruh dunia untuk memulai perjalanan uang pribadi mereka 
          sendiri melalui Coinquest mereka sendiri.
          </p>
        </div>
      </div>

      {/* Popup Video */}
      {play && (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] px-4">
        {/* Tombol close di luar video */}
        <button
          className="absolute top-6 right-6 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl z-[10000]"
          onClick={() => setPlay(false)}
        >
          ✕
        </button>

        <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/_nIhYgmZP4Y?si=gNz2SsdhYz0mTLf7"
            title="Merry Riana Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )}

    </div>
  );
}
