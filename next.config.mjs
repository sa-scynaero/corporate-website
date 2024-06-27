/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is usually the slug of your repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/corporate-website",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
    domains: [
      'arthurgrand.com', 'i.pinimg.com', 'media.licdn.com',
      'static.vecteezy.com', 'img.freepik.com', 'st2.depositphotos.com',
      'watermark.lovepik.com', 'agcdn-1d97e.kxcdn.com', 't3.ftcdn.net',
      'encrypted-tbn0.gstatic.com', 't4.ftcdn.net', 'www.shutterstock.com',
      'st.depositphotos.com', 'st3.depositphotos.com', 'media.istockphoto.com',
      'admin.nationallearningcentre.co.uk', 'www.supplychainbrain.com',
      'as1.ftcdn.net', 'fiverr-res.cloudinary.com', 'www.applify.com.sg',
      'dresma.ai', 'vs-static.virtualspeech.com', 'media.foundit.in',
      'icmediacenter.org', 'images.unsplash.com'
    ],
  },

  /**
   * Set asset prefix for static assets.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/assetPrefix
   */
  assetPrefix: '/corporate-website/',
};

export default nextConfig;
