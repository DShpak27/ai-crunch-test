// External libraries
import { Container } from '@mui/material';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Game Consoles Catalog',
  description:
    'Discover the latest game consoles with detailed information and the ability to explore more details.',
  keywords: [
    'game consoles',
    'video games',
    'gaming',
    'consoles catalog',
    'list of consoles',
  ],
  openGraph: {
    title: 'Game Consoles Catalog',
    description:
      'Discover the latest game consoles with detailed information and the ability to explore more details.',
    images: [
      {
        url: '/og-img.jpg',
        width: 1000,
        height: 1000,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <html lang="en" suppressHydrationWarning={true}> */}
      <body className={inter.className}>
        <Header />
        <Container component="main">{children}</Container>
      </body>
    </html>
  );
}
