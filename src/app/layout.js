import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

const moresugar = localFont({
  src: "../../public/fonts/MoreSugar-Regular.otf",
  variable: "--font-moresugar",
});

const impact = localFont({
  src: "../../public/fonts/impact.ttf",
  variable: "--font-impact",
});

// const dinpro = localFont({
//   src: "../../public/fonts/DINPro-Bold.ttf",
//   variable: "--font-dinpro",
// });

export const metadata = {
  title: "Landing Page",
  description: "Landing page buku",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${moresugar.variable} ${impact.variable} font-sans`}>
        {/* Navbar selalu di atas, fixed */}
        <Navbar />
        {/* Konten langsung render */}
        <main>{children}</main>
      </body>
    </html>
  );
}
