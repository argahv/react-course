// footer.js
import { Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h3>Terms and Conditions</h3>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
