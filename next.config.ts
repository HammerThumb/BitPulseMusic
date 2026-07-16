import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/notes",
        destination: "/notes/index.html",
      },
    ];
  },
  async headers() {
    const noIndexHeaders = [
      {
        key: "X-Robots-Tag",
        value: "noindex, nofollow, noarchive",
      },
    ];

    return [
      {
        source: "/notes",
        headers: noIndexHeaders,
      },
      {
        source: "/notes/:path*",
        headers: noIndexHeaders,
      },
    ];
  },
};

export default nextConfig;
