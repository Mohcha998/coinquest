"use client";
import Image from "next/image";

export default function FormulaSection() {
  return (
    <section className="w-full bg-white pb-[10px] pt-[50px] px-6 lg:-mb-[100px] relative overflow-hidden">
      {/* Background Wrapper */}
      <div className="absolute inset-0">
        {/* Background untuk Phone */}
        <Image
          src="/images/phone_cq.png"
          alt="Phone background"
          fill
          priority
          className="object-cover block md:hidden"
        />

        {/* Background untuk Tablet */}
        <Image
          src="/images/phone_cq.png"
          alt="Tablet background"
          fill
          priority
          className="object-cover hidden md:block lg:hidden"
        />

        {/* Background untuk Web */}
        <Image
          src="/images/web_cq.png"
          alt="Web background"
          fill
          priority
          className="object-cover hidden lg:block"
        />
      </div>

      {/* Blur atas pakai #82D0DC */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#82D0DC]/90 to-transparent z-10 pointer-events-none"></div>

      {/* Blur bawah tetap putih */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/80 to-transparent z-10 pointer-events-none"></div>

      {/* Konten Utama */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:mt-[20px] z-20">
        {/* Gambar Buku */}
        <div className="flex-1 flex justify-center lg:mb-[100px]">
          <Image
            src="/images/buku2.png"
            alt="52 Money Formulas Book"
            width={500}
            height={400}
            className="w-[320px] sm:w-[400px] md:w-[450px] lg:w-[400px] h-auto object-contain"
          />
        </div>

        {/* Konten Teks */}
        <div className="flex-1 text-center lg:text-left">
          {/* Judul */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-sky-500"
                style={{ fontFamily: "var(--font-moresugar)" }}
            >
              52 Money Formulas
            </span>
            <br />
            <span className="text-black"
              style={{ fontFamily: "var(--font-moresugar)" }}
            >
                  For Teens
            </span>
          </h2>

          {/* List */}
          <ul className="mt-8 space-y-3 text-lg sm:text-xl lg:text-2xl font-semibold text-[#1A1A40]">
  <li className="flex items-center gap-3">
    <span className="text-green-500">✅</span> Winner’s Money Mindset
  </li>
  <li className="flex items-center gap-3">
    <span className="text-green-500">✅</span> Goal Setting
  </li>
  <li className="flex items-center gap-3">
    <span className="text-green-500">✅</span> How to Earn
  </li>
  <li className="flex items-center gap-3">
    <span className="text-green-500">✅</span> Spending Smart
  </li>
  <li className="flex items-center gap-3">
    <span className="text-green-500">✅</span> Investing Essentials
  </li>
  <li className="flex items-center gap-3">
    <span className="text-green-500">✅</span> Beyond Success
  </li>
</ul>


          {/* Tombol */}
          <div className="mt-10">
            {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold italic py-4 px-12 rounded-full shadow-lg text-xl sm:text-2xl">
              PESAN SEKARANG
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
