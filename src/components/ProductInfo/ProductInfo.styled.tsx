import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  Typography as TypographyMui,
  TypographyProps,
} from '@mui/material';

export const Wrapper = styled('section')(({ theme }) => ({
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

export const Typography = styled(TypographyMui)<TypographyProps>({
  color: 'rgba(0, 0, 0, 0.95)',
  textAlign: 'justify',
});
export const SubInfo = styled(TypographyMui)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const BackLink = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  marginBottom: theme.spacing(1),
  fontSize: '16px',
  backgroundColor: 'inherit',
  borderTop: `1px solid rgba(136, 138, 142, 0.65)`,
  borderBottom: `1px solid rgba(136, 138, 142, 0.65)`,
  padding: 0,

  '&:hover': {
    backgroundColor: '#3048c138',
  },
}));
