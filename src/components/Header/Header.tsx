'use client';
import React from 'react';
import { Container } from '@mui/material';
import { AppBar, Nav, HomeButton, HomeLink } from './Header.styled';

const Header: React.FC = () => {
  return (
    <Container component={'header'}>
      <AppBar component={'div'}>
        <Nav component={'nav'}>
          <HomeLink href="/products">
            <HomeButton variant="contained">Home</HomeButton>
          </HomeLink>
        </Nav>
      </AppBar>
    </Container>
  );
};

export default Header;
