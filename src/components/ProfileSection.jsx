"use client";
import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-stretch w-full min-h-[500px] bg-[#00A0B1] overflow-hidden ">
      {/* Kolom kiri - Foto */}
      <div className="relative flex-1 flex items-center justify-center lg:justify-end bg-[#00A0B1] mt-[30px] mb-[30px] lg:mt-[50px] lg:mb-[50px]">
        <div className="overflow-hidden rounded-[30px] lg:rounded-[40px] shadow-lg -mr-0 lg:-mr-[3px]">
          <Image
            src="/images/profile.jpeg"
            alt="Foto Penulis"
            width={400}
            height={300}
            className="
              object-cover rounded-[30px] lg:rounded-tl-[40px] lg:rounded-bl-[40px] 
              max-h-[400px] lg:max-h-[600px] 
              w-[280px] sm:w-[350px] md:w-[400px] lg:w-[550px]
            "
          />
        </div>
      </div>

      {/* Kolom kanan - Background bergelombang + teks */}
      <div className="relative flex-1 bg-[#66C7D5] flex flex-col justify-center px-4 sm:px-6 lg:px mt-[40px] mb-[30px] lg:mt-[70px] lg:mb-[50px]">
        {/* Wave atas */}
        <div className="absolute top-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-[50px] lg:h-[70px] text-[#00A0B1]"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,74.7C840,64,960,64,1080,69.3C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* Konten teks */}
        <div className="relative z-10 max-w-full sm:max-w-xl lg:max-w-2xl mt-[10px] ml-0 sm:ml-[20px] lg:ml-[40px]">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#FFD700] -mt-[22px] mb-4 sm:mb-6 leading-snug text-left lg:text-left">
            TENTANG <br className="hidden lg:block" /> PENULIS
          </h2>
          <p className="text-white leading-relaxed text-justify font-medium text-sm sm:text-base lg:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Wave bawah */}
        <div className="absolute bottom-0 left-0 right-0 rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-[50px] lg:h-[70px] text-[#00A0B1]"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,74.7C840,64,960,64,1080,69.3C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
