import withTwin from './withTwin.mjs';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'pbs.twimg.com'],
  },
  transpilePackages: ['geist'],
};

export default withTwin(nextConfig);
