"use client";

export default function ThreeinsSection() {
  return (
    <section className="w-full bg-gray-100 py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Kolom kiri: 3 kotak video zig-zag */}
        <div className="flex-1 flex flex-col gap-12 sm:gap-16 w-full">
          {/* Kotak 1 - kiri */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[280px] sm:w-[340px] md:w-[420px] lg:w-[500px] h-[160px] sm:h-[180px] lg:h-[200px] bg-white rounded-[2rem] shadow-[6px_6px_0px_#000]" />
          </div>
          {/* Kotak 2 - kanan */}
          <div className="flex justify-center lg:justify-start lg:ml-[300px]">
            <div className="relative w-[280px] sm:w-[340px] md:w-[420px] lg:w-[500px] h-[160px] sm:h-[180px] lg:h-[200px] bg-white rounded-[2rem] shadow-[6px_6px_0px_#000]" />
          </div>
          {/* Kotak 3 - kiri */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[280px] sm:w-[340px] md:w-[420px] lg:w-[500px] h-[160px] sm:h-[180px] lg:h-[200px] bg-white rounded-[2rem] shadow-[6px_6px_0px_#000]" />
          </div>
        </div>

        {/* Kolom kanan: Judul + Tombol */}
        <div className="flex-1 text-center lg:text-right mt-12 lg:mt-0">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-snug lg:leading-tight text-black mb-6 lg:mb-8">
            MEREKA <br />
            YANG SUDAH <br />
            TERINSPIRASI
          </h2>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold italic py-3 px-6 sm:px-8 rounded-full shadow-md text-base sm:text-lg lg:text-xl">
            PESAN SEKARANG
          </button>
        </div>
      </div>
    </section>
  );
}
