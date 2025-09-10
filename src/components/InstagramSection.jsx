"use client";
import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    // Tambahkan script Elfsight hanya sekali
    if (!document.querySelector("#elfsight-script")) {
      const script = document.createElement("script");
      script.id = "elfsight-script";
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Judul */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900">
          Ikuti Kami di Instagram
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
          Lihat inspirasi terbaru, cerita, dan update langsung dari Instagram
          kami.
        </p>

        {/* Container Elfsight */}
        <div className="bg-white rounded-3xl shadow-lg p-4 sm:p-6 md:p-8">
          <div
            className="elfsight-app-990e6528-9fec-4af6-b2e2-c8b679db3f98"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}
