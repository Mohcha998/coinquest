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
      foto: "/images/merry.jpg",
      teks: "Buku ini tidak hanya menjelaskan teori dasar, tetapi juga diperkaya dengan inspirasi dari 10 tokoh sukses. Bacalah buku ini, perjuangkan mimpimu, dan berkontribusi untuk negara tercinta kita.",
    },
    {
      nama: "Armand Maulana",
      profesi: "Musisi",
      foto: "/images/armand.jpg",
      teks: "Mengingat usia Vern, “Coinquest” pantas diapresiasi. Karya yang luar biasa, berani, dan menginspirasi di usia yang sangat muda. Jadi, salut untuk Vern atas bukunya!",
    },
    {
      nama: "Cinta Laura Kiehl",
      profesi: "Aktris & Sociopreneur",
      foto: "/images/cinta.jpg",
      teks: "Pada usia yang sangat muda, Vern telah menemukan rahasia untuk menjalani kehidupan yang sukses. Buku ini wajib dibaca!",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-12 px-6 lg:pb-[100px] lg:pt-[180px]">
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

        {/* Bagian Bawah */}
        {/* Mobile: Slider */}
        <div className="flex sm:hidden overflow-x-auto gap-6 w-full px-4 pb-2">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="relative min-w-[300px] max-w-[280px] h-auto bg-white rounded-[1.5rem] 
                        shadow-[6px_6px_0px_#000] flex-shrink-0 p-4 flex flex-col justify-start"
            >
              {/* Foto kanan atas */}
              <img
                src={item.foto}
                alt={item.nama}
                className="absolute top-3 right-3 w-12 h-12 rounded-full object-cover border-2 border-black"
              />

              {/* Nama & profesi */}
              <p className="text-center font-bold text-black">
                {item.nama} <br />
                <span className="text-sm font-normal">({item.profesi})</span>
              </p>

              {/* Teks testimoni */}
              <p className="text-sm text-center mt-3 leading-snug text-black whitespace-normal break-words">
                {item.teks}
              </p>
            </div>
          ))}
        </div>



      {/* Tablet & Desktop: Grid */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-2">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="relative w-full h-auto bg-white rounded-[1.5rem] 
                      shadow-[6px_6px_0px_#000] p-6 flex flex-col justify-start"
          >
            {/* Foto kanan atas */}
            <img
              src={item.foto}
              alt={item.nama}
              className="absolute top-4 right-4 w-14 h-14 rounded-full object-cover border-2 border-black"
            />

            {/* Nama & profesi */}
            <p className="text-center font-bold text-black">
              {item.nama} <br />
              <span className="text-sm font-normal">({item.profesi})</span>
            </p>

            {/* Teks testimoni */}
            <p className="text-sm text-center mt-2 text-black leading-snug">
              {item.teks}
            </p>
          </div>
        ))}
      </div>


      </div>
    </section>
  );
}
