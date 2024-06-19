import { Product } from '@/types/product';
import { products } from '@/data/mock-data';

//функція по суті в наших умовах емулює роботу функції getProductsWithPagination з файлу src/services/api.ts (контра в свою чергу використовує GET контролер api/products/route.ts ) -а так як sitemap будується під час build функцію контролер не можливо використовувати бо вона звертається до request.url - а це не можливе під час статичної генерації і виникає помилка.

export const getAllProductsForSitemapGeneration = async (): Promise<
  Product[]
> => {
  return products;
};
