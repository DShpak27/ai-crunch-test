import ProductsList from '@/components/ProductsList';
import { getProductsWithPagination } from '@/services/api';
import PaginationComponent from '@/components/PaginationComponent';

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const response = await getProductsWithPagination(searchParams.page ?? '1');
  const { currentPage, products, totalPages } = response;

  return (
    <>
      <ProductsList products={products} />
      <PaginationComponent totalPages={totalPages} currentPage={currentPage} />
    </>
  );
};

export default ProductsPage;
