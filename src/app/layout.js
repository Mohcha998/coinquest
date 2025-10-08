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

// ✅ Metadata lengkap + logo Coinquest sudah disesuaikan
export const metadata = {
  title: "Coinquest",
  description:
    "Building a Generation That Is Not Only Smart With Money But Wise With Purpose",

  // ✅ Gunakan berbagai ukuran ikon agar semua browser & device support
  icons: {
    icon: [
      { url: "/images/logo_head.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logo_head.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/images/logo_head.png",
    apple: "/images/logo_head.png",
  },

  openGraph: {
    title: "Coinquest",
    description:
      "Building a Generation That Is Not Only Smart With Money But Wise With Purpose",
    url: "https://coinquest.id",
    type: "website",

    // ✅ Gunakan OG image dengan ukuran ideal 1200x630 untuk tampil maksimal
    images: [
      {
        url: "https://coinquest.id/images/logo_cq.png",
        width: 1200,
        height: 630,
        alt: "Coinquest",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Coinquest",
    description:
      "Building a Generation That Is Not Only Smart With Money But Wise With Purpose",
    images: ["https://coinquest.id/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${moresugar.variable} ${impact.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
