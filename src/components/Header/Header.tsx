'use client';
import React from 'react';
import { Container } from '@mui/material';
import { AppBar, Nav, HomeLink } from './Header.styled';
import Image from 'next/image';
import { Route } from '@/constants';

console.log(process.env.NEXT_PUBLIC_SERVER_URL);

const Header: React.FC = () => {
  return (
    <Container component={'header'}>
      <AppBar component={'div'}>
        <Nav role="navigation" aria-label="Navigation menu" component={'nav'}>
          <HomeLink href={Route.HOME} aria-label="Home page">
            <Image src="/logo.png" alt="logo" width={90} height={56} />
          </HomeLink>
        </Nav>
      </AppBar>
    </Container>
  );
};

export default Header;
