module.exports = {
    async redirects() {
      return [
        {
          source: '/:path/',
          destination: '/:path',
          permanent: false,
        },
      ]
    },
  }