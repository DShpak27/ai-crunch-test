'use client';
import { ChangeEvent } from 'react';
import { Pagination } from '@mui/material';
import { useRouter } from 'next/navigation';

type PaginationComponentProps = {
  totalPages: number;
  currentPage: number;
};

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalPages,
  currentPage,
}) => {
  const router = useRouter();
  const handlePageChange = (_: ChangeEvent<unknown>, page: number) => {
    router.push(`/products?page=${page}`);
  };
  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      sx={{ my: 2, display: 'flex', justifyContent: 'center' }}
    />
  );
};

export default PaginationComponent;
