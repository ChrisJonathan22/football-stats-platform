import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar'; // Your Navbar component
import Footer from './Footer'; // Your Footer component

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}