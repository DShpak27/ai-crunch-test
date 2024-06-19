import ProductInfo from '@/components/ProductInfo';
import { Typography } from '@mui/material';
import { getProductById } from '@/services/api';

export default async function ProductInfoPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }
  return (
    <>
      <h1 className="visually-hidden">
        Detailed description of the game console
      </h1>
      <ProductInfo product={product} />
    </>
  );
}
