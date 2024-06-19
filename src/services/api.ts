import { Product } from '@/types/products';

type PaginatedProductsData = {
  products: Product[];
  totalPages: number;
  currentPage: number;
};

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const fetcher = async (fn: Function) => {
  try {
    const result = await fn();
    if (!result.ok) throw new Error('Bad request.');
    const data = await result.json();
    return data;
  } catch (error) {
    return {
      status: 'failed',
      message: (error as Error).message,
    };
  }
};

export const getProductsWithPagination = async (page: string) => {
  const data = await fetcher(
    async () =>
      await fetch(`${baseUrl}/products?page=${page}`, { cache: 'no-store' })
  );

  return data as PaginatedProductsData;
};

export const getProductById = async (id: string) => {
  const data = await fetcher(
    async () =>
      await fetch(`${baseUrl}/products/${id}`, { next: { revalidate: 3600 } })
  );
  return data.product as Product;
};
