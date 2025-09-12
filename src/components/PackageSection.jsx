"use client";
import Image from "next/image";

export default function PackageSection() {
  return (
    <section id="package" className="w-full bg-[#42C7D9] pb-2 pt-[40px] lg:py-12 px-10 relative overflow-hidden">
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

          <h2 className="text-4xl -mt-[40px] sm:text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Special Package <br /> 
          </h2>
          {/* <p className=" text-white/90 mb-10 text-4xl">
            Dapatkan paket lengkap Coinquest berisi :
          </p> */}
          <ul className="text-lg mt-[20px] text-white/90 mb-10 space-y-2 -mt-[25px] text-left lg:mt-[20px]">
            <li className="flex items-start gap-2">
                <span className="text-2xl lg:text-4xl">✅</span>
                <span className="text-2xl lg:text-4xl">Coinquest Hardcover Book</span>
            </li>
            <li className="flex items-start gap-2">
                <span className="text-2xl lg:text-4xl">✅</span>
                <span className="text-2xl lg:text-4xl">Playing Card</span>
            </li>
            <li className="flex items-start gap-2">
                <span className="text-2xl lg:text-4xl">✅</span>
                <span className="text-2xl lg:text-4xl">Ministicker</span>
            </li>
            <li className="flex items-start gap-2">
                <span className="text-2xl lg:text-4xl">✅</span>
                <span className="text-2xl lg:text-4xl">Box</span>
            </li>
            <li className="flex items-start gap-2">
                <span className="text-2xl lg:text-4xl">✅</span>
                <span className="text-2xl lg:text-4xl">Wristband</span>
            </li>
            <li className="flex items-start gap-2">
                <span className="text-2xl lg:text-4xl">✅</span>
                <span className="text-2xl lg:text-4xl">Tote Bag</span>
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
