'use client';
import ProductCard from '../ProductCard';
import { Wrapper, GridItem } from './ProductsList.styled';
import { Product } from '@/types/products';
import { Grid } from '@mui/material';

type ProductsListProps = {
  products: Partial<Product>[];
};

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <Wrapper aria-label="game consoles list">
      <Grid container spacing={2}>
        {products.map(product => (
          <GridItem item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default ProductsList;
