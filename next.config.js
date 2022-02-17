module.exports = {
  reactStrictMode: true,
  env: {
    curstomKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: '/hello',
        permanet: true,
      },
    ];
  },
};
