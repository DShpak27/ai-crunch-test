/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     formats: ['image/avif', 'image/webp'],
//   },
//   headers: async () => {
//     return [
//       {
//         source: '/api/(.*)',
//         headers: [
//           { key: 'Access-Control-Allow-Credentials', value: 'false' },
//           {
//             key: 'Access-Control-Allow-Origin',
//             value: 'httр://localhost:3000',
//           },
//           {
//             key: 'Access-Control-Allow-Methods',
//             value: 'GET,DELETE,PATCH,POST,PUT',
//           },
//           {
//             key: 'Access-Control-Allow-Headers',
//             value:
//               'Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date',
//           },
//         ],
//       },
//     ];
//   },
// };

// export default nextConfig;
