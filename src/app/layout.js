import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Landing Page",
  description: "Landing page buku",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar selalu di atas, fixed */}
        <Navbar />
        {/* Konten langsung render */}
        <main>{children}</main>
      </body>
    </html>
  );
}
