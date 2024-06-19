'use client';
import Link from 'next/link';
import { Typography, Chip, Box, CardContent } from '@mui/material';
import { Product } from '@/types/products';
import {
  DetailsButton,
  TopWrapper,
  BottomWrapper,
  Card,
  CardMedia,
} from './ProductCard.styled';

type ProductCardProps = { product: Partial<Product> };

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={product.imgUrl}
        alt={`${product.name} gaming console`}
        loading="lazy"
      />
      <CardContent>
        <TopWrapper>
          <Box>
            <Typography variant="h6" color="text.primary">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.manufacturer}
            </Typography>
          </Box>
          <Chip label={product.releaseYear} color="primary" size="small" />
        </TopWrapper>
        <BottomWrapper>
          <Typography variant="body2" color="text.secondary">
            {product.generation} generation
          </Typography>
          <Link href={`/products/${product.id}`} passHref>
            <DetailsButton variant="outlined" size="small">
              Show Details
            </DetailsButton>
          </Link>
        </BottomWrapper>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
