export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative w-full h-screen 
        bg-[url('/images/background2.jpeg')] bg-cover bg-center 
        flex items-center overflow-hidden
        pt-32 sm:pt-36 md:pt-0
      "
    >
      {/* Overlay biar teks lebih kontras */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Container */}
      <div className="
        relative z-10 
        max-w-7xl mx-auto 
        grid grid-cols-1 md:grid-cols-2 
        items-center 
        w-full h-full 
        px-4 sm:px-6 lg:px-8
      ">
        
        {/* === KIRI (TEKS + LOGO + BUTTON desktop) === */}
        <div className="
          text-white space-y-6 
          flex flex-col justify-center items-center text-center
        ">
          <h2
  className="
    text-xl sm:text-2xl md:text-3xl 
    lg:ml-[40px] lg:text-[36px] lg:mb-[150px] 
    font-bold leading-snug max-w-lg tracking-wider
  "
>
  <span style={{ fontFamily: "var(--font-moresugar)" }}>“</span>
  BUILDING A{" "}
  <span
    className="text-[#f29fcb]"
    style={{ fontFamily: "var(--font-moresugar)" }}
  >
    GENERATION
  </span>{" "}
  THAT IS NOT ONLY<br />
  SMART WITH{" "}
  <span
    className="text-[#55e09a]"
    style={{ fontFamily: "var(--font-moresugar)" }}
  >
    MONEY
  </span>{" "}
  , BUT WISE WITH{" "}
  <span
    className="text-[#f9d44d] relative inline-block"
    style={{ fontFamily: "var(--font-moresugar)" }}
  >
    PURPOSE
    {/* Tanda tangan */}
    <img
      src="/images/ttd3.png"
      alt="Tanda Tangan"
      className="absolute left-[70px] top-[2px] lg:left-[150px] lg:top-[20px] lg:w-[1000px] lg:h-auto bottom-[-35px] w-[120px] h-auto"
    />
  </span>
  .<span style={{ fontFamily: "var(--font-moresugar)" }}>“</span>
</h2>


          {/* === Logo + Tombol (hanya desktop) === */}
          <div className="
            hidden md:flex flex-col sm:flex-row 
            items-center justify-center gap-8 
            pt-6 lg:-mb-[120px]
          ">
            <span className="inline-block">
              <img
                src="/images/logo_cq.png"
                alt="COINQUEST Logo"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </span>

            <button
              className="
                w-[200px] sm:w-[230px] md:w-[250px] 
                py-3 rounded-full
                shadow-md border border-gray-400
                font-bold text-lg sm:text-xl md:text-2xl
                relative
              "
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                color: "#FFF201",
                fontFamily: "var(--font-moresugar)",
                textShadow: `
                  1px 1px 0 #000,
                  -1px -1px 0 #000,
                  1px -1px 0 #000,
                  -1px 1px 0 #000
                `,
              }}
            >
              BUY NOW
            </button>
          </div>
        </div>

        {/* === KANAN (GAMBAR ORANG) === */}
        <div className="flex flex-col justify-end items-center h-full relative">
          <img
            src="/images/vernbk2.png"
            alt="Book"
            className="
              w-[300000px] sm:w-[320px] md:w-[400px] lg:w-[420px] 
              object-contain relative z-10
            "
          />

          {/* === Logo + Tombol (hanya mobile, muncul di atas gambar) === */}
          <div className="
            block md:hidden 
            absolute bottom-6 sm:bottom-10 
            z-20 flex flex-col items-center gap-3
          ">
            <span className="inline-block">
              <img
                src="/images/logo_cq.png"
                alt="COINQUEST Logo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </span>

            <button
              className="
                w-[180px] sm:w-[200px] md:w-[220px] 
                py-2 sm:py-3 rounded-full
                shadow-md border border-gray-400
                font-bold text-base sm:text-lg md:text-xl
                relative
              "
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                color: "#FFF201",
                fontFamily: "var(--font-moresugar)",
                textShadow: `
                  1px 1px 0 #000,
                  -1px -1px 0 #000,
                  1px -1px 0 #000,
                  -1px 1px 0 #000
                `,
              }}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
