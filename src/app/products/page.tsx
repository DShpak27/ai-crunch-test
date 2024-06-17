// pages/catalog.js
import React from 'react';
import { Grid, Box, Typography, Pagination } from '@mui/material';
import { useRouter } from 'next/router';

type Product = {
  id: number;
  name: string;
  price: number;
};

// Жестко закодированные данные продуктов
const products: Product[] = [
  { id: 1, name: 'Product 1', price: 9.99 },
  { id: 2, name: 'Product 2', price: 14.99 },
  { id: 3, name: 'Product 3', price: 19.99 },
  // ... и так далее
];

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Box sx={{ p: 2, border: '1px solid grey', borderRadius: 2 }}>
    <Typography variant="h6">{product.name}</Typography>
    <Typography variant="body1">Price: ${product.price}</Typography>
  </Box>
);

export const getServerSideProps = async ({ query }) => {
  const { page = 1, limit = 10 } = query;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);

  const paginatedProducts = products.slice(startIndex, endIndex);

  return {
    props: {
      products: paginatedProducts,
      currentPage: parseInt(page),
      totalPages: Math.ceil(products.length / limit),
    },
  };
};

const CatalogPage = ({ products, currentPage, totalPages }) => {
  const router = useRouter();

  const handlePageChange = (event, page) => {
    router.push(`/catalog?page=${page}`);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Product Catalog
        </Typography>
      </Grid>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center" mt={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CatalogPage;
