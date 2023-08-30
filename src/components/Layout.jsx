import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Container } from '@mui/system';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
        <Header />
        <Container>
            <Outlet />
        </Container>
        <Footer />
    </>

  )
}
