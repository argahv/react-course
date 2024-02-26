import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useAddToCardMutation, useGetCartsQuery } from "../services/cartApi";

const Cart = () => {
  const { data } = useGetCartsQuery();
  console.log("data", data);
  const [addToCart] = useAddToCardMutation();
  return (
    <Container maxWidth="sm">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {data?.carts?.map((cart, index) => (
          <React.Fragment key={cart.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={`User ${cart.userId}`}
                  src="/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary={`Cart ${cart.id}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Total Products: {cart.totalProducts}
                    </Typography>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Total Quantity: {cart.totalQuantity}
                    </Typography>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Total: {cart.total}
                    </Typography>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Discounted Total: {cart.discountedTotal}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            {cart.products.map((product) => (
              <ListItem alignItems="flex-start" key={product.id}>
                <ListItemAvatar>
                  <Avatar alt={product.title} src={product.thumbnail} />
                </ListItemAvatar>
                <ListItemText
                  primary={product.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Price: {product.price}
                      </Typography>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Quantity: {product.quantity}
                      </Typography>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Total: {product.total}
                      </Typography>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Discounted Price: {product.discountedPrice}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
            {index !== data.carts.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default Cart;
