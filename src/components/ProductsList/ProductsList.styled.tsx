import { styled } from '@mui/material/styles';
import { Grid, GridProps } from '@mui/material';

export const Wrapper = styled('section')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(2),
  backgroundColor: 'rgb(245, 245, 245)',
  borderRadius: theme.spacing(1),
  border: '1px solid rgba(195, 195, 195, 0.35)',
}));

export const GridItem = styled(Grid)<GridProps>({
  minWidth: 275,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    zIndex: 1,
  },
});
