export default function Hero() {
    return (
      <section className="relative w-full h-screen md:h-[59vh] lg:h-screen bg-[url('/images/background.jpeg')] bg-cover bg-center flex items-center overflow-hidden">
        {/* Overlay putih */}
        <div className="absolute inset-0 bg-white/75" />
  
        {/* Gradient fade ke bawah (transisi ke VideoBox) */}
        <div className="absolute bottom-0 left-0 w-full h-32 
          bg-gradient-to-b from-transparent to-gray-100 z-20" />
  
        {/* Container */}
        <div className="relative z-30 max-w-7xl mx-auto 
            flex flex-col md:grid md:grid-cols-2 
            justify-between items-center w-full h-full px-6 pt-24">
  
          {/* === TEKS === */}
          <div className="max-w-xl text-black text-center md:text-left mt-10 lg:mt-10 sm:mt-16 md:mt-0 md:mb-[20px] lg:mb-0">
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-snug relative"
              style={{ textShadow: "4px 4px 10px rgba(0,0,0,0.6)" }}
            >
              <span
                className="relative z-10 text-[#FFF201]"
                style={{
                  textShadow: `
                    7px 5px 0 #000,
                    1px 1px 0 #000,
                    -1px -1px 0 #000,
                    1px -1px 0 #000,
                    1px 1px 0 #000,
                    1px 1px 0 #000
                  `
                }}
              >
                IT’S NOT JUST A BOOK,&nbsp;
              </span>
              <span
                className="relative z-10 text-[#00aeff]"
                style={{
                  textShadow: `
                    7px 5px 0 #000,
                    1px 1px 0 #000,
                    -1px -1px 0 #FFD700,
                    1px -1px 0 #FFD700,
                    1px 1px 0 #FFD700,
                    1px 1px 0 #FFD700
                  `
                }}
              >
                BUT
              </span>
              <br />
              <span
                className="relative z-10 text-[#00aeff]"
                style={{
                  textShadow: `
                    7px 5px 0 #000,
                    1px 1px 0 #000,
                    -1px -1px 0 #FFD700,
                    1px -1px 0 #FFD700,
                    1px 1px 0 #FFD700,
                    1px 1px 0 #FFD700
                  `
                }}
              >
                A MOVEMENT
              </span>
            </h1>
            {/* <button className="hidden md:inline-block mt-8 px-8 py-3 rounded-full border border-black bg-[#FFF201] hover:bg-[#FFF201] text-black font-bold text-xl cursor-pointer transition whitespace-nowrap">
              PESAN SEKARANG
            </button> */}
          </div>
  
          {/* === GAMBAR === */}
          <div className="relative flex-1 flex justify-center items-end w-full mt-8 md:mt-0">
            <img
              src="/images/pegang_buku.png"
              alt="Book"
              className="w-[43vh] md:w-full max-w-[43vh] sm:max-w-[26rem] h-[61vh] md:h-[50vh] lg:h-[80vh]
              md:-translate-x-2 md:scale-110 sm:max-w-[18rem] sm:scale-95 relative z-10"
              style={{
                maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
              }}
            />
          </div>
        </div>
  
        {/* === Tombol Mobile (dipindahkan keluar supaya tidak kena mask) === */}
        <div className="md:hidden absolute bottom-6 sm:bottom-20 left-1/2 -translate-x-1/2 z-40">
          {/* <button className="px-8 py-3 rounded-full border border-black bg-[#FFF201] hover:bg-[#FFF201] text-black font-bold text-base sm:text-lg cursor-pointer transition whitespace-nowrap">
            PESAN SEKARANG
          </button> */}
        </div>
      </section>
    );
  }
  