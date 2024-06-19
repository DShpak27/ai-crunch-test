import ProductInfo from '@/components/ProductInfo';
import { Typography } from '@mui/material';
import { getProductById } from '@/services/api';
import styles from './page.module.css';
import { generateProductJsonLd } from '@/app/utils/generateProductJsonLd ';

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
      title: `about ${product.name}`,
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
  const jsonLd = await generateProductJsonLd(product);

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
