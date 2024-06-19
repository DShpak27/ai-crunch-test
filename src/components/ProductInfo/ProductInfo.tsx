'use client';
import { Box, Grid, CardMedia, useMediaQuery, useTheme } from '@mui/material';
import {
  Wrapper,
  Decor,
  BackLink,
  Typography,
  SubInfo,
} from './ProductInfo.styled';
import { Product } from '@/types/product';
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
        <Wrapper aria-label="game console details">
          <BackLink
            size="small"
            role="link"
            aria-label="go back"
            title="go back"
            onClick={() => router.back()}
          >
            <KeyboardBackspaceIcon color="primary" />
          </BackLink>
          <Grid
            container
            alignItems="start"
            spacing={isMobile ? 3 : 6}
            direction={isMobile ? 'column-reverse' : 'row'}
          >
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image={product.imgUrl}
                alt={product.name}
                title={product.name}
                sx={{
                  aspectRatio: '1/1',
                  objectFit: 'contain',
                  borderRadius: 2,
                  maxHeight: isMobile ? 'auto' : '355px',
                  border: '1px solid rgba(195, 195, 195, 0.5)',
                  width: '100%',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h4" component="h2" gutterBottom>
                  {product.name}
                </Typography>
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <SubInfo>{product.manufacturer}</SubInfo>
                  <Decor />
                  <SubInfo>{product.releaseYear}</SubInfo>
                  <Decor />
                  <SubInfo>{product.generation} Generation</SubInfo>
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
