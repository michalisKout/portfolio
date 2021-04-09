const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  async redirects() {
    return [
      {
        source: '/welcome',
        destination: '/',
        permanent: true,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
