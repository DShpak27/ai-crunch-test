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
import { Route } from '@/constants';

type ProductCardProps = { product: Partial<Product> };

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={product.imgUrl}
        alt={`${product.name} gaming console`}
        title={`${product.name} gaming console`}
        loading="lazy"
      />
      <CardContent>
        <TopWrapper>
          <Box>
            <Typography variant="h6" color="text.primary" component="h2">
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
          <Link href={`${Route.PRODUCTS}/${product.id}`} passHref>
            <DetailsButton
              variant="outlined"
              size="small"
              aria-label={`Learn more about ${product.name}`}
            >
              Show Details
            </DetailsButton>
          </Link>
        </BottomWrapper>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
