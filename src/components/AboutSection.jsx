"use client";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaGlobe, FaWhatsapp } from "react-icons/fa";

export default function AboutSection() {
  // Nomor WA + Pesan default
  const whatsappNumber = "6285282668940";
  const whatsappMessage = encodeURIComponent(
    "Hallo saya dapat info dari website Coinquest, ingin bertanya tentang Coinquest"
  );

  return (
    <section
      className="w-full flex flex-col items-center py-5 sm:py-14 lg:py-20 relative bg-white 
                 bg-[url('/images/garis.png')] bg-cover bg-center"
    >
      {/* Buku di belakang kotak, miring */}
      <div className="absolute items-center mt-[180px] lg:mt-0 sm:left-10 lg:left-16 top-6 sm:top-14 lg:top-10 z-0 transform rotate-[-10deg] lg:ml-[150px]">
        <Image
          src="/images/bookcq.jpg"
          alt="Book"
          width={200}
          height={300}
          className="object-contain sm:w-[260px] sm:h-[380px] lg:w-[420px] lg:h-[600px]"
        />
      </div>

      {/* Konten atas */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-4 sm:px-6 lg:px-10">
        {/* Logo Coinquest */}
        <div className="flex flex-col -mt-[10px] items-center lg:items-end gap-4 sm:gap-6 lg:gap-8 w-full">
          <a href="#order" className="block">
            <Image
              src="/images/logo_cq.png"
              alt="Pesan Sekarang"
              width={400}
              height={70}
              className="object-contain hover:scale-105 transition-transform duration-300 sm:w-[450px] lg:w-[500px]"
            />
          </a>

          {/* Teks */}
          <div className="flex flex-col items-center lg:items-end gap-2 sm:gap-4 lg:gap-6">
            <p className="text-2xl sm:text-lg lg:text-4xl font-medium text-black text-center lg:text-right leading-snug">
              Creating <span className="text-red-500">Impact</span>, One Coin, <br />
              One Mind, One Future
            </p>
          </div>
        </div>
      </div>

      {/* Kotak bawah */}
      <div
        className="relative z-10 mt-[250px] sm:mt-16 lg:mt-28 w-[94%] sm:w-[95%] lg:w-[85%] 
        rounded-[16px] sm:rounded-[24px] lg:rounded-[36px] border-2 border-black 
        bg-gradient-to-r from-[#78CFDB] via-[#FFF3DA] to-[#E7F5B3]
        shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)] lg:shadow-[12px_12px_0px_rgba(0,0,0,1)] 
        px-4 sm:px-6 lg:px-16 py-8 sm:py-10 lg:py-14 
        flex flex-col lg:flex-row items-center justify-between 
        gap-8 sm:gap-10 lg:gap-0 text-center lg:text-left"
      >
        {/* Kiri: Social Media */}
        <div className="flex flex-col gap-6 sm:gap-8 items-center lg:items-start w-full lg:w-4/5">
          <p className="font-bold text-4xl sm:text-3xl lg:text-4xl text-black -mt-2 sm:-mt-4">
            Follow us
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 text-black text-base sm:text-xl lg:text-2xl font-semibold">
            <a
              href="https://instagram.com/coinquest.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 hover:text-pink-500 transition"
            >
              <FaInstagram className="text-2xl sm:text-3xl lg:text-4xl" />
              <span>@Coinquest.id</span>
            </a>
            <a
              href="https://tiktok.com/@coinquest.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 lg:ml-[80px] sm:gap-3 hover:text-black transition"
            >
              <FaTiktok className="text-2xl sm:text-3xl lg:text-4xl" />
              <span>@Coinquest.id</span>
            </a>
            <a
              href="https://coinquest.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 hover:text-blue-600 transition"
            >
              <FaGlobe className="text-2xl sm:text-3xl lg:text-4xl" />
              <span>Coinquest.id</span>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 lg:ml-[80px] sm:gap-3 hover:text-green-500 transition"
            >
              <FaWhatsapp className="text-2xl sm:text-3xl lg:text-4xl" />
              <span className="text-sm lg:text-2xl">0852 8266 8940</span>
            </a>
          </div>

          {/* Alamat - tampil hanya di desktop/tablet */}
          <span className="hidden lg:block font-bold text-lg text-black mt-2">
            Jl. Letjen S. Parman, Soho Capital 42nd Floor, RT.3/RW.5, Tj. Duren Utara,  
            Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470
          </span>
        </div>

        {/* Kanan: App logo + Download badges */}
        <div className="flex flex-col items-center lg:items-end gap-4 sm:gap-6 w-full lg:w-1/2">
          <div className="flex items-center gap-4">
            <p className="text-base sm:text-lg lg:text-[28px] font-semibold text-black">
              Available On
            </p>

            <Image
              src="/images/MR.png"
              alt="Merry Riana App"
              width={140}
              height={140}
              className="w-[200px] sm:w-[120px] lg:w-[150px] h-auto"
            />
          </div>

          {/* Logo Apps Merry Riana */}
          <Image
            src="/images/qr_app.jpeg"
            alt="Merry Riana App"
            width={140}
            height={140}
            className="w-[200px] sm:w-[120px] lg:mr-[25px] lg:w-[140px] lg:mr-[100px] h-auto"
          />

          {/* Download badges */}
          <div className="flex flex-row justify-center gap-3 sm:gap-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/Android.png"
                alt="Google Play"
                width={160}
                height={48}
                className="h-auto w-[120px] sm:w-[250px] lg:w-[150px]"
              />
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/IOS.png"
                alt="App Store"
                width={160}
                height={48}
                className="h-auto w-[120px] sm:w-[250px] lg:w-[150px]"
              />
            </a>
          </div>

          {/* Alamat - tampil hanya di mobile */}
          <span className="block lg:hidden font-bold text-sm sm:text-base text-black mt-4 text-center">
            Jl. Letjen S. Parman, Soho Capital 42nd Floor, RT.3/RW.5, Tj. Duren Utara,  
            Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470
          </span>
        </div>
      </div>
    </section>
  );
}
