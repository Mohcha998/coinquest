"use client";
import React from "react";
import Image from "next/image";

export default function TokohSection() {
  const tokoh = [
    { nama: "Tokoh 1", gambar: "/images/t1.png" },
    { nama: "Tokoh 2", gambar: "/images/t2.png" },
    { nama: "Tokoh 3", gambar: "/images/t3.png" },
    { nama: "Tokoh 4", gambar: "/images/t4.png" },
    { nama: "Tokoh 5", gambar: "/images/t5.png" },
    { nama: "Tokoh 6", gambar: "/images/t6.png" },
    { nama: "Tokoh 7", gambar: "/images/t7.png" },
    { nama: "Tokoh 8", gambar: "/images/t8.png" },
    { nama: "Tokoh 9", gambar: "/images/t9.png" },
    { nama: "Tokoh 10", gambar: "/images/t10.png" },
  ];

  return (
    <section
      className="relative w-full h-full text-center py-15 text-black bg-cover bg-center"
      style={{ backgroundImage: "url('/images/teal2.png')" }}
    >
      {/* Blur atas */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-10"></div>

      {/* Blur bawah dengan warna #82D0DC */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#82D0DC]/90 to-transparent pointer-events-none z-10"></div>

      {/* Judul */}
      <h2 className="relative z-20 text-2xl sm:text-3xl md:text-4xl font-bold -mt-[30px] flex flex-col">
        CERITA & PENGALAMAN NYATA
      </h2>
      <h3 className="relative z-20 text-2xl sm:text-3xl md:text-4xl font-bold text-sky-500 mt-1">
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
          justify-center mt-10 max-w-5xl mx-auto
        "
      >
        {tokoh.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="
                w-[150px] h-[150px]
                sm:w-[150px] sm:h-[150px]
                md:w-[200px] md:h-[200px]
                flex items-center justify-center bg-white/0
              "
            >
              <Image
                src={item.gambar}
                alt={item.nama}
                width={170}
                height={170}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="-mt-4 text-sm sm:text-base md:text-lg lg:-mt-[20px] font-medium">
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
