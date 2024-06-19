import { styled } from '@mui/material/styles';
import {
  AppBar as AppBarMui,
  Toolbar,
  Button,
  Typography,
} from '@mui/material';
import {
  AppBarProps,
  ToolbarProps,
  ButtonProps,
  TypographyProps,
} from '@mui/material';
import Link from 'next/link';
import { LinkProps } from 'next/dist/client/link';

export const AppBar = styled(AppBarMui)<AppBarProps>(({ theme }) => ({
  position: 'static',
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  paddingLeft: 0,
  paddingRight: 0,
  backgroundColor: theme.palette.common.white,
  boxShadow: 'none',
}));

export const Nav = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  backgroundColor: 'rgb(245, 245, 245)',
  borderRadius: theme.spacing(1),
  border: '1px solid rgba(195, 195, 195, 0.35)',
}));

export const HomeButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

export const SiteName = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: 'rgba(0, 0, 0, 0.8)',
  fontWeight: 'bolder',
  fontSize: '26px',
}));

export const HomeLink = styled(Link)<LinkProps>({
  color: 'inherit',
  textDecoration: 'none',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});
