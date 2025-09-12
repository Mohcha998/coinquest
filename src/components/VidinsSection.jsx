"use client";
import { useState, useEffect } from "react";

export default function VidinsSection() {
  const [play, setPlay] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const testimonials = [
    {
      nama: "Merry Riana",
      profesi: "Entrepreneur, Investor, Content Creator",
      foto: "/images/mr.jpg",
      teks: "Buku ini tidak hanya menjelaskan teori dasar, tetapi juga diperkaya dengan inspirasi dari 10 tokoh sukses. Bacalah buku ini, perjuangkan mimpimu, dan berkontribusi untuk negara tercinta kita.",
    },
    {
      nama: "Armand Maulana",
      profesi: "Musisi",
      foto: "/images/armand.jpeg",
      teks: "Mengingat usia Vern, “Coinquest” pantas diapresiasi. Karya yang luar biasa, berani, dan menginspirasi di usia yang sangat muda. Jadi, salut untuk Vern atas bukunya!",
    },
    {
      nama: "Cinta Laura Kiehl",
      profesi: "Aktris & Sociopreneur",
      foto: "/images/cl.jpg",
      teks: "Pada usia yang sangat muda, Vern telah menemukan rahasia untuk menjalani kehidupan yang sukses. Buku ini wajib dibaca!",
    },
  ];

  return (
    <section id="testi" className="w-full bg-gray-100 py-12 px-6 lg:pb-[100px] lg:pt-[180px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        
        {/* Bagian Atas: Judul + Video */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
          {/* Kolom kiri: Teks */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-black mb-6">
              MEREKA <br />
              YANG SUDAH <br />
              <span className="text-sky-500">TERINSPIRASI</span>
            </h2>
          </div>

          {/* Kolom kanan: Video (thumbnail saja, klik buka popup) */}
          <div
            className="flex-[1.5] flex justify-center aspect-video bg-white border-4 border-black rounded-[2rem] 
              shadow-[12px_12px_8px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer"
            onClick={() => setPlay(true)}
          >
            <div className="relative w-full max-w-[900px] aspect-video bg-white rounded-[2rem] shadow-xl flex items-center justify-center">
              <div className="relative w-full h-full">
                <img
                  src="https://img.youtube.com/vi/pR-EjdeBdWE/maxresdefault.jpg"
                  alt="Merry Riana Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                    <div className="w-0 h-0 border-t-[8px] sm:border-t-[12px] border-t-transparent 
                                    border-b-[8px] sm:border-b-[12px] border-b-transparent 
                                    border-l-[14px] sm:border-l-[20px] border-l-black ml-1 sm:ml-2">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Bawah */}
        {/* Mobile: Slider */}
        <div className="relative flex sm:hidden w-full px-4 pb-2">
          {/* Tombol panah kiri */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center z-10"
            onClick={() => {
              document.getElementById("testimonial-scroll").scrollBy({ left: -300, behavior: "smooth" });
            }}
          >
            ‹
          </button>

          {/* Scroll container */}
          <div
            id="testimonial-scroll"
            className="flex overflow-x-auto gap-6 w-full px-10 pb-2 scroll-smooth"
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="relative min-w-[300px] max-w-[280px] bg-white rounded-[1.5rem] 
                          shadow-[6px_6px_0px_#000] flex-shrink-0 p-5 flex flex-col items-center text-center"
              >
                {/* Foto */}
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="w-18 h-18 rounded-full object-cover border-2 border-black mb-3"
                />

                {/* Nama & profesi */}
                <h4 className="font-bold text-black text-lg">{item.nama}</h4>
                <p className="text-sm text-gray-600 italic mb-3">{item.profesi}</p>

                {/* Teks testimoni */}
                <p className="text-sm leading-relaxed text-gray-800">{item.teks}</p>
              </div>
            ))}
          </div>

          {/* Tombol panah kanan */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center z-10"
            onClick={() => {
              document.getElementById("testimonial-scroll").scrollBy({ left: 300, behavior: "smooth" });
            }}
          >
            ›
          </button>
        </div>


        {/* Tablet & Desktop: Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-2">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="relative w-full bg-white rounded-[1.5rem] 
                        shadow-[6px_6px_0px_#000] p-6 flex flex-col items-center text-center"
            >
              {/* Foto */}
              <img
                src={item.foto}
                alt={item.nama}
                className="w-22 h-22 rounded-full object-cover border-2 border-black mb-4"
              />

              {/* Nama & profesi */}
              <h4 className="font-bold text-black text-lg">{item.nama}</h4>
              <p className="text-sm text-gray-600 italic mb-3">{item.profesi}</p>

              {/* Teks testimoni */}
              <p className="text-sm leading-relaxed text-gray-800">
                {item.teks}
              </p>
            </div>
          ))}
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
              src="https://www.youtube.com/embed/pR-EjdeBdWE?si=G8do0GW2WZk_BjZt"
              title="Merry Riana Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
