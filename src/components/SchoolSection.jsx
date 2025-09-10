"use client";
import Image from "next/image";

export default function SchoolSection() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 sm:py-12">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/school.jpg" // ganti sesuai path file kamu
          alt="Background School"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay opsional (biar teks lebih jelas) */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Judul */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-14 text-center px-4">
        <span className="text-sky-500">COINQUEST</span>{" "}
        <span className="text-black">Goes To School</span>
      </h2>

      {/* Grid responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full px-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-full h-[160px] sm:h-[200px] lg:h-[220px] rounded-[20px] sm:rounded-[40px] lg:rounded-[50px] border-2 border-black bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_rgba(0,0,0,1)] lg:shadow-[7px_7px_0px_rgba(0,0,0,1)]"
          ></div>
        ))}
      </div>
    </section>
  );
}
