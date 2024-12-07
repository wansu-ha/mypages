import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages에서 호스팅할 경로 설정
  basePath: '/mypages',
  assetPrefix: '/mypages/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
};

export default nextConfig;
