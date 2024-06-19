import * as jsonld from 'jsonld';
import { Product } from '@/types/product';

type ProductForJsonLd = Partial<Product>;

export const generateProductJsonLd = async (product: ProductForJsonLd) => {
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    description: product.article,
    brand: {
      '@type': 'Brand',
      name: product.manufacturer,
    },
  };

  const context = {
    '@context': 'https://schema.org',
  };

  const compactedJsonLd = await jsonld.compact(jsonLd, context);
  return compactedJsonLd;
};
