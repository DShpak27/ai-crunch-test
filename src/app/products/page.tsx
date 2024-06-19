import type { Metadata } from 'next';
import ProductsList from '@/components/ProductsList';
import { getProductsWithPagination } from '@/services/api';
import PaginationComponent from '@/components/PaginationComponent';
import styles from './page.module.css';

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

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const response = await getProductsWithPagination(searchParams.page ?? '1');
  const { currentPage, products, totalPages } = response;

  return (
    <>
      <h1 className={styles['visually-hidden']}>
        Main page. list of game consoles
      </h1>
      <ProductsList products={products} />
      <PaginationComponent totalPages={totalPages} currentPage={currentPage} />
    </>
  );
};

export default ProductsPage;
