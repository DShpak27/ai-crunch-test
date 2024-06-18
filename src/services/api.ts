import { Product } from '@/types/products';

const baseUrl = 'http://localhost:3000/api';

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

export const getProducts = async () => {
  const data: Product[] = await fetcher(
    async () => await fetch(`${baseUrl}/products`)
  );

  return data;
};

export const getProductById = async (id: string) => {
  const data = await fetcher(
    async () => await fetch(`${baseUrl}/products/${id}`, { cache: 'no-store' })
  );
  return data.product as Product;
};
