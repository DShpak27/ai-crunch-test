/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => {
    return [
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'false' },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://anyhr-io-test.vercel.app',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
