import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Define o caminho base para suas APIs no frontend
        destination: "http://localhost:8080/eco_wise_war/api/:path*", // Redireciona para o backend
      },
    ];
  },
};

export default nextConfig;
