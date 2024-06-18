'use client';
import {
  Box,
  Grid,
  Typography,
  CardMedia,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Wrapper, Decor, BackLink } from './ProductInfo.styled';
import { Product } from '@/types/products';
import { useRouter } from 'next/navigation';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

type ProductCardProps = { product: Partial<Product> };

const ProductInfo: React.FC<ProductCardProps> = ({ product }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

  return (
    <>
      {product && (
        <Wrapper>
          <BackLink size="small" onClick={() => router.back()} title="go back">
            <KeyboardBackspaceIcon color="primary" />
          </BackLink>
          <Grid
            container
            spacing={isMobile ? 3 : 6}
            alignItems="start"
            direction={isMobile ? 'column-reverse' : 'row'}
          >
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image={product.imgUrl}
                alt={product.name}
                sx={{
                  aspectRatio: '1/1',
                  objectFit: 'contain',
                  borderRadius: 2,
                  maxHeight: isMobile ? 'auto' : '320px',
                  border: '1px solid rgba(195, 195, 195, 0.5)',
                  width: '100%',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h4" component="h1" gutterBottom>
                  {product.name}
                </Typography>
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <Typography color="text.secondary">
                    {product.manufacturer}
                  </Typography>
                  <Decor />
                  <Typography color="text.secondary">
                    {product.releaseYear}
                  </Typography>
                  <Decor />
                  <Typography color="text.secondary">
                    {product.generation} Generation
                  </Typography>
                </Box>
                <Typography component="article" variant="body1" gutterBottom>
                  {product.article}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Wrapper>
      )}
    </>
  );
};

export default ProductInfo;
// 'use client';
// import {
//   Box,
//   Grid,
//   Typography,
//   CardMedia,
//   useMediaQuery,
//   useTheme,
// } from '@mui/material';
// import { Wrapper, Decor } from './ProductInfo.styled';
// import { Product } from '@/types/products';

// type ProductCardProps = { product: Partial<Product> };

// const ProductInfo: React.FC<ProductCardProps> = ({ product }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   return (
//     <>
//       {product && (
//         <Wrapper>
//           <Grid
//             container
//             spacing={isMobile ? 3 : 6}
//             alignItems="start"
//             direction={isMobile ? 'column-reverse' : 'row'}
//           >
//             <Grid item xs={12} md={6}>
//               <CardMedia
//                 component="img"
//                 image={product.imgUrl}
//                 alt={product.name}
//                 sx={{
//                   aspectRatio: '1/1',
//                   objectFit: 'contain',
//                   borderRadius: 2,
//                   maxHeight: isMobile ? 'auto' : '320px',
//                   border: '1px solid rgba(195, 195, 195, 0.5)',
//                   width: '100%',
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box>
//                 <Typography variant="h4" component="h1" gutterBottom>
//                   {product.name}
//                 </Typography>
//                 <Box display="flex" alignItems="center" gap={1} mb={2}>
//                   <Typography color="text.secondary">
//                     {product.manufacturer}
//                   </Typography>
//                   <Decor />
//                   <Typography color="text.secondary">
//                     {product.releaseYear}
//                   </Typography>
//                   <Decor />
//                   <Typography color="text.secondary">
//                     {product.generation} Generation
//                   </Typography>
//                 </Box>
//                 <Typography component="article" variant="body1" gutterBottom>
//                   {product.article}
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Wrapper>
//       )}
//     </>
//   );
// };

// export default ProductInfo;
