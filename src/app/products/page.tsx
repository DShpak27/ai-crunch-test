import ProductsList from '@/components/ProductsList';
import { products } from '@/data/mock-data_1';
import { Container } from '@mui/material';

// export const getServerSideProps = async ({ query }) => {
//   const { page = 1, limit = 10 } = query;
//   const startIndex = (page - 1) * limit;
//   const endIndex = startIndex + parseInt(limit);

//   const paginatedProducts = products.slice(startIndex, endIndex);

//   return {
//     props: {
//       products: paginatedProducts,
//       currentPage: parseInt(page),
//       totalPages: Math.ceil(products.length / limit),
//     },
//   };
// };

const ProductsPage = () => {
  //   const handlePageChange = (event, page) => {
  //     router.push(`/catalog?page=${page}`);
  //   };

  return <ProductsList products={products} />;
};

export default ProductsPage;
