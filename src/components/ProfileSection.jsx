"use client";
import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="relative w-full bg-[#A5D6E6] flex flex-col lg:flex-row items-stretch min-h-[600px] overflow-hidden">
      
      {/* === KIRI: Nama + Foto === */}
      <div className="flex-1 flex flex-col justify-center relative px-2">
        {/* ALVERNIA + LIU dalam 1 kolom */}
        <div className="flex flex-col leading-none">
          <h1
            className="text-[100px] sm:text-[120px] lg:text-[180px] font-extrabold text-white"
            style={{ fontFamily: "var(--font-impact)" }}
          >
            ALVERNIA
          </h1>
          
        </div>

        {/* LIU + Tagline + Foto */}
        <div className="flex flex-row items-start w-full">
          {/* === Kiri: LIU + Tagline === */}
          <div className="flex flex-col mr-6">
            <h1
              className="text-[100px] sm:text-[120px] lg:text-[180px] font-extrabold text-white leading-none"
              style={{ fontFamily: "var(--font-impact)" }}
            >
              LIU
            </h1>
            <div className="flex flex-col text-[#cbf0f4] font-extrabold uppercase leading-none">
              <span className="text-[32px] sm:text-[36px] lg:text-[60px] leading-none tracking-wider"
              style={{ fontFamily: "var(--font-impact)" }}
              >
                AUTHOR
              </span>
              <span className="text-[32px] sm:text-[36px] lg:text-[60px] leading-none"
              style={{ fontFamily: "var(--font-impact)" }}
              >
                SPEAKER
              </span>
              <span className="text-[32px] sm:text-[36px] lg:text-[60px] leading-none tracking-[4px] lg:tracking-[8px]"
              style={{ fontFamily: "var(--font-impact)" }}
              >
                LEADER
              </span>
            </div>
          </div>

          {/* === Kanan: Foto === */}
          <div className="flex-1 flex justify-center items-center">
            <div className="overflow-hidden rounded-[20px] lg:rounded-[25px] shadow-lg">
              <Image
                src="/images/vern2.jpeg"
                alt="Foto Alvernia Liu"
                width={650}
                height={400}
                className="object-cover w-[550] h-[180] lg:w-[650px] lg:h-[350px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* === KANAN: Deskripsi === */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-5 ">
        <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed text-justify font-medium">
          Sepanjang masa SMA-nya, Alvernia Liu menemukan kecintaan dan
          passion-nya pada public speaking. Dalam dua tahun terakhir, ia telah
          memikat ribuan audiens baik sebagai pembicara maupun MC,
          berpartisipasi dalam acara-acara bergengsi dan musikal komunitas.
          <br />
          <br />
          Vern telah tampil di berbagai acara bergengsi, seperti InspiraFest,
          Pidato di acara ASEAN, MC dalam Drama Musikal "Benih yang Bernilai,"
          "Kasih Menembus Batas,". Selain itu pada tahun 2024, Vern tampil di
          panggung TEDx membawakan tema "Small is the New Big,".
          <br />
          <br />
          Masa depan membutuhkan lebih banyak suara seperti Vern — suara yang
          menginspirasi perubahan dan meninggalkan jejak yang abadi di dunia.
        </p>
      </div>
    </section>
  );
}
