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
import About from "@/components/AboutSection"

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
    </>
  );
}
