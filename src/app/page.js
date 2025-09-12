import Hero from "@/components/Hero";
import Video from "@/components/VideoSection";
import Profile from "@/components/ProfileSection";
import Tokoh from "@/components/TokohSection";
import Formula from "@/components/FormulaSection";
import Vidins from "@/components/VidinsSection";
import Threeins from "@/components/ThreeinsSection";
import PackageS from "@/components/PackageSection";
import Instagram from "@/components/InstagramSection";
import School from "@/components/SchoolSection";
import About from "@/components/AboutSection";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <Profile />
      <Tokoh />
      <Formula />
      <Vidins />
      {/* <Threeins /> */}
      {/* <Instagram /> */}
      <PackageS />
      <School />
      <About />

      {/* ✅ Floating WhatsApp Button pakai icon */}
      <a
        href="https://wa.me/6281234567890?text=Hallo%20saya%20dapat%20info%20dari%20website%20Coinquest,%20ingin%20bertanya%20tentang%20Coinquest"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9999] bg-green-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform"
      >
        <FaWhatsapp size={32} />
      </a>
    </>
  );
}
