import ProductsList from '@/components/ProductsList';
import { products } from '@/data/mock-data';
import { Container } from '@mui/material';

const ProductsPage = () => {
  //   const handlePageChange = (event, page) => {
  //     router.push(`/catalog?page=${page}`);
  //   };

  return <ProductsList products={products} />;
};

export default ProductsPage;
