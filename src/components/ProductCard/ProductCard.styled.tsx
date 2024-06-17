import { styled } from '@mui/material/styles';
import {
  Card as StyledCard,
  CardContent as StyledCardContent,
  CardMedia as StyledCardMedia,
  CardActions as StyledCardActions,
  Typography,
  Button,
} from '@mui/material';

export const Card = styled(StyledCard)(({ theme }) => ({
  maxWidth: 350,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  height: 320,
  backgroundColor: theme.palette.background.paper,
}));

export const CardMedia = styled(StyledCardMedia)({
  height: '40%',
});

export const CardContent = styled(StyledCardContent)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '50%',
}));

export const CardTitle = styled(Typography)({
  height: '60px',
  marginBottom: '5px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: '1rem',
});

export const CardDescription = styled(Typography)(({ theme }) => ({
  variant: 'body2',
  color: theme.palette.text.secondary,
  height: '40px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
}));

export const CardActions = styled(StyledCardActions)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
}));

export const DetailsButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
