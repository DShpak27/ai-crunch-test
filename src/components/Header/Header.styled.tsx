import { styled } from '@mui/material/styles';
import { AppBar as AppBarMui, Toolbar, Button } from '@mui/material';
import { AppBarProps, ToolbarProps, ButtonProps } from '@mui/material';
import Link from 'next/link';
import { LinkProps } from 'next/dist/client/link';

export const AppBar = styled(AppBarMui)<AppBarProps>(({ theme }) => ({
  position: 'static',
  padding: theme.spacing(1.5),
  backgroundColor: theme.palette.common.white,
  boxShadow: 'none',
}));

export const Nav = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  backgroundColor: 'rgb(245, 245, 245)',
  borderRadius: theme.spacing(1),
  border: '1px solid rgba(195, 195, 195, 0.35)',
}));

export const HomeButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

export const HomeLink = styled(Link)<LinkProps>({
  color: 'inherit',
  textDecoration: 'none',
});
