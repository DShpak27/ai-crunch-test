'use client';
import { Typography, Chip, Box, CardContent } from '@mui/material';
import {
  Card,
  CardMedia,
  DetailsButton,
  TopWrapper,
  BottomWrapper,
} from './ProductCard.styled';

import { Product } from '@/types/products';

type ProductCardProps = { product: Partial<Product> };

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <CardMedia component="img" image="/placeholder.svg" />
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
            {product.generation}
          </Typography>
          <DetailsButton variant="outlined" size="small">
            Show Details
          </DetailsButton>
        </BottomWrapper>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
