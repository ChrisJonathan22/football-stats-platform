import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: "#f5f5f5", padding: "1rem", textAlign: "center" }}>
      <div>Footer</div>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Link to="/about">About</Link>
          </Grid>
          <Grid item>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </Grid>
          <Grid item>
            <Link to="/terms-of-service">Terms of Service</Link>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} FootStats. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
