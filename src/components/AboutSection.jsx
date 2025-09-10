"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-14 lg:py-20 relative">
      {/* Buku di belakang kotak, miring */}
      <div className="absolute left-6 sm:left-10 lg:left-16 top-8 sm:top-14 lg:top-10 z-0 transform rotate-[-10deg] lg:ml-[150px]">
        <Image
          src="/images/bookcq.jpg"
          alt="Book"
          width={260}
          height={380}
          className="object-contain lg:w-[420px] lg:h-[600px]"
        />
      </div>

      {/* Konten atas */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 px-6 lg:px-10">
        {/* Logo Coinquest ganti tombol */}
        <div className="flex flex-col items-center lg:items-end gap-6 lg:gap-8 w-full">
          <a href="#order" className="block">
            <Image
              src="/images/logo_cq.png"
              alt="Pesan Sekarang"
              width={500}
              height={80}
              className="object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Teks + Store Badge */}
          <div className="flex flex-col items-center lg:items-end gap-4 lg:gap-6">
            <p className="text-lg sm:text-xl lg:text-3xl font-medium text-black text-center lg:text-right">
              Creating <span className="text-red-500">Impact</span>, One Coin, One Mind, One Future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <Image
                src="/images/appstore.png"
                alt="App Store"
                width={160}
                height={55}
                className="lg:w-[200px] lg:h-[70px]"
              />
              <Image
                src="/images/googleplay.png"
                alt="Google Play"
                width={180}
                height={60}
                className="lg:w-[220px] lg:h-[70px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Kotak bawah */}
      <div className="relative z-10 mt-16 lg:mt-28 w-[92%] sm:w-[95%] lg:w-[85%] rounded-[24px] lg:rounded-[36px] border-2 border-black bg-white shadow-[6px_6px_0px_rgba(0,0,0,1)] lg:shadow-[12px_12px_0px_rgba(0,0,0,1)] px-6 sm:px-10 lg:px-16 py-10 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 text-center lg:text-left">
        {/* Kiri */}
        <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start">
          <p className="font-bold text-2xl lg:text-3xl text-black">Follow us</p>
          <div className="flex flex-row lg:flex-col gap-4 lg:gap-6">
            <Image src="/images/check.png" alt="check" width={32} height={32} className="lg:w-[42px] lg:h-[42px]" />
            <Image src="/images/check.png" alt="check" width={32} height={32} className="lg:w-[42px] lg:h-[42px]" />
          </div>
        </div>

        {/* Tengah */}
        <div className="flex flex-row lg:flex-col gap-4 lg:gap-6">
          <Image src="/images/check.png" alt="check" width={32} height={32} className="lg:w-[42px] lg:h-[42px]" />
          <Image src="/images/check.png" alt="check" width={32} height={32} className="lg:w-[42px] lg:h-[42px]" />
        </div>

        {/* Kanan */}
        <div className="text-center lg:text-right text-base sm:text-lg lg:text-2xl text-black">
          <p>coinquest.id</p>
          <p>081234567899</p>
        </div>
      </div>
    </section>
  );
}
