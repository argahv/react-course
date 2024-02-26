import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 2 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Our E-commerce Store
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" align="center" gutterBottom>
            Shop our latest products
          </Typography>
          <Button variant="contained" color="primary" fullWidth>
            Shop Now
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" align="center" gutterBottom>
            Sign up for updates
          </Typography>
          <Button variant="contained" color="secondary" fullWidth>
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
