// src/App.js
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Products from "./pages/products";
import ThemeProvider from "./providers/theme";
import { store } from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
