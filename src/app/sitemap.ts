import { MetadataRoute } from 'next';
import { getProductsWithPagination } from '@/services/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { products } = await getProductsWithPagination('all');
  const productEntries: MetadataRoute.Sitemap = products.map(product => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${product.id}`,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
    },
    ...productEntries,
  ];
}
