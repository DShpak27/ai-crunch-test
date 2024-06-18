import { styled } from '@mui/material/styles';
import {
  Card as StyledCard,
  CardMedia as StyledCardMedia,
  Button,
  Box,
} from '@mui/material';

import {
  CardProps,
  CardMediaProps,
  ButtonProps,
  BoxProps,
} from '@mui/material';

export const Card = styled(StyledCard)<CardProps>(({ theme }) => ({
  maxWidth: 345,
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[1],
  border: '1px solid rgba(0, 0, 0, 0.15)',
  backgroundColor: theme.palette.background.paper,
  overflow: 'hidden',
  userSelect: 'none',
}));

export const CardMedia = styled(StyledCardMedia)<CardMediaProps>({
  height: '160px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
  objectFit: 'contain',
});

export const TopWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(1.3),
}));

export const BottomWrapper = styled(Box)<BoxProps>({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const DetailsButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderColor: theme.palette.primary.dark,
  color: theme.palette.primary.dark,
  fontSize: '14px',
  textTransform: 'none',

  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.background.paper,
  },
}));
