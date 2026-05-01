import type { NextConfig } from "next";
import { allPosts } from "./src/lib/posts";

const nextConfig: NextConfig = {
  async redirects() {
    const postRedirects = allPosts.map((post) => ({
      source: `/blog/${post.slug}`,
      destination: `/${post.slug}`,
      permanent: true,
    }));

    return [
      ...postRedirects,
    ];
  },
};

export default nextConfig;
