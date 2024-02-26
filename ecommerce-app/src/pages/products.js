import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../services/productsApi";

const Product = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.title}
        height="140"
        image={product.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Brand: {product.brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discount: {product.discountPercentage}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {product.stock}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();

  const products = useSelector((state) => state);
  console.log("products", products);
  return (
    <>
      <Grid container spacing={2}>
        {data?.products?.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Products;
