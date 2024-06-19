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
  maxHeight: 268,
  maxWidth: 345,
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[1],
  border: '1px solid rgba(0, 0, 0, 0.15)',
  backgroundColor: theme.palette.background.paper,
  overflow: 'hidden',
  userSelect: 'none',
}));

type CardMediaT = CardMediaProps & {
  alt: string;
  loading: string;
};

export const CardMedia = styled(StyledCardMedia)<CardMediaT>({
  maxHeight: 150,
  height: 150,
  borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
  objectFit: 'contain',
});

export const TopWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(0.5),
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
