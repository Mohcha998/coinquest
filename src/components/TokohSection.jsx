"use client";
import React from "react";
import Image from "next/image";

export default function TokohSection() {
  const tokoh = [
    { nama: "Artis & Pengusaha", gambar: "/images/t1.png" },
    { nama: "Penyanyi", gambar: "/images/t2.png" },
    { nama: "Aktris & Sociopreneur", gambar: "/images/t3.png" },
    { nama: "Entrepreneur, Investor, Content Creator", gambar: "/images/t4.png" },
    { nama: "Vokalis Band ‘GIGI’", gambar: "/images/t5.png" },
    { nama: "CEO & Founder Indodax", gambar: "/images/t6.png" },
    { nama: "Sutradara", gambar: "/images/t7.png" },
    { nama: "Staf Khusus Presiden Ri ke-7", gambar: "/images/t8.png" },
    { nama: "Founder Foreign Policy Community Indonesia", gambar: "/images/t9.png" },
    { nama: "Pengusaha", gambar: "/images/t10.png" },
  ];

  return (
    <section
      className="relative w-full h-full text-center pb-[2px] pt-[50px] lg:py-14 text-black bg-cover bg-center"
      style={{ backgroundImage: "url('/images/teal2.png')" }}
    >
      {/* Blur atas */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-10"></div>

      {/* Blur bawah */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#82D0DC]/90 to-transparent pointer-events-none z-10"></div>

      {/* Judul */}
      <h2 className="relative z-20 text-2xl sm:text-3xl md:text-5xl font-bold -mt-[30px] flex flex-col">
        CERITA & PENGALAMAN NYATA
      </h2>
      <h3 className="relative z-20 text-2xl sm:text-3xl md:text-5xl font-bold text-sky-500 mt-1">
        DARI 10 TOKOH INSPIRATIF
      </h3>

      {/* Grid tokoh */}
      <div
        className="
          relative z-20
          grid 
          grid-cols-2 gap-6 px-4
          sm:grid-cols-3 sm:gap-8
          md:grid-cols-5 md:gap-[60px] md:px-0
          justify-center mt-10 max-w-6xl mx-auto
        "
      >
        {tokoh.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Foto tokoh */}
            <div
              className="
                w-[140px] h-[140px]
                sm:w-[160px] sm:h-[160px]
                md:w-[200px] md:h-[200px]
                flex items-center justify-center
              "
            >
              <Image
                src={item.gambar}
                alt={item.nama}
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Pekerjaan/jabatan */}
            <p className="-mt-[20px] lg:-mt-[30px] text-[13px] sm:text-sm md:text-base text-gray-800 italic font-medium leading-snug max-w-[180px]">
              {item.nama}
            </p>
          </div>
        ))}
      </div>

      {/* Tombol */}
      <div className="relative z-20 mt-10">
        {/* <button
          className="
            bg-yellow-400 hover:bg-yellow-500 
            text-black font-bold italic 
            py-2 px-4 sm:px-6 
            rounded-full shadow-md
            text-sm sm:text-base md:text-lg
          "
        >
          PESAN SEKARANG
        </button> */}
      </div>
    </section>
  );
}
