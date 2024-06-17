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

export const TopWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

export const BottomWrapper = styled(Box)<BoxProps>({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Card = styled(StyledCard)<CardProps>(({ theme }) => ({
  maxWidth: 345,
  borderRadius: 2,
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.background.paper,
  overflow: 'hidden',
}));

export const CardMedia = styled(StyledCardMedia)<CardMediaProps>({
  height: '140px',
});

export const DetailsButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderColor: theme.palette.text.primary,
  color: theme.palette.text.primary,
  '&:hover': {
    borderColor: theme.palette.text.primary,
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.paper,
  },
}));
