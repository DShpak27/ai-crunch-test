import ProductInfo from '@/components/ProductInfo';
import { Typography } from '@mui/material';
import { getProductById } from '@/services/api';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  return {
    title: `about ${product.name}`,
    description: product.article,
    keywords: [
      `${product.name} game console`,
      `${product.name} video games`,
      `${product.name} gaming`,
      `${product.name} about`,
      `${product.name} history`,
    ],
    openGraph: {
      title: `${product.name} Details`,
      description: product.article,
      images: [
        {
          url: '/og-img.jpg',
          width: 1000,
          height: 1000,
        },
      ],
    },
  };
}

export default async function ProductInfoPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);
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

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }
  return (
    <>
      <h1 className={styles['visually-hidden']}>
        Detailed description of the game console
      </h1>
      <ProductInfo product={product} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
