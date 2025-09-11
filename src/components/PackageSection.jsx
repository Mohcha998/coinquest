"use client";
import Image from "next/image";

export default function PackageSection() {
  return (
    <section className="w-full bg-[#42C7D9] pb-2 pt-[40px] lg:py-12 px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Kolom kiri: Gambar produk transparan */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/package.png"
            alt="Coinquest Package"
            width={600}
            height={600}
            priority
            className="object-contain"
          />
        </div>

        {/* Kolom kanan: Logo + Teks + Tombol */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 flex justify-center lg:justify-start">
            {/* <Image
              src="/images/logo_cq.png"
              alt="Coinquest Logo"
              width={250}
              height={80}
              className="object-contain"
            /> */}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Special Package <br /> 
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Dapatkan paket lengkap Coinquest berisi :
          </p>
          <ul className="text-lg text-white/90 mb-10 space-y-2 -mt-[25px] text-left">
            <li className="flex items-start gap-2">
                <span>✅</span>
                <span>Coinquest Hardcover Book</span>
            </li>
            <li className="flex items-start gap-2">
                <span>✅</span>
                <span>Playing Card</span>
            </li>
            <li className="flex items-start gap-2">
                <span>✅</span>
                <span>Ministicker</span>
            </li>
            <li className="flex items-start gap-2">
                <span>✅</span>
                <span>Box</span>
            </li>
            <li className="flex items-start gap-2">
                <span>✅</span>
                <span>Wristband</span>
            </li>
            <li className="flex items-start gap-2">
                <span>✅</span>
                <span>Totebag</span>
            </li>
            </ul>


          {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold italic px-8 py-4 rounded-full shadow-md border-2 border-black text-lg">
            PESAN SEKARANG
          </button> */}
        </div>
      </div>
    </section>
  );
}
