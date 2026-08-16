import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  "./i18n/request.ts"
);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "tjnpnkwmbnoeclspzvqj.supabase.co",
        pathname:
          "/storage/v1/object/public/**",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },

    middlewareClientMaxBodySize: "100mb",
  },
};

export default withNextIntl(nextConfig);