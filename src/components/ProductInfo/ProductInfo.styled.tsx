import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  borderRadius: theme.spacing(1),
  border: '1px solid rgba(195, 195, 195, 1)',
}));

export const Decor = styled('span')(({ theme }) => ({
  height: theme.spacing(0.5),
  width: theme.spacing(0.5),
  backgroundColor: theme.palette.text.secondary,
  borderRadius: '50%',
}));
