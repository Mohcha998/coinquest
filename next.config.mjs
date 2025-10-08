// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // 🚀 WAJIB supaya /_next/image tidak dipakai
    },
  };
  
  export default nextConfig;
  