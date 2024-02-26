// src/cartApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cart",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => "carts",
    }),

    addToCard: builder.mutation({
      query: (cart) => ({
        url: "carts",
        method: "POST",
        body: cart,
      }),
    }),
  }),
});

export const { getCarts } = cartApi.endpoints;

export const { useGetCartsQuery, useAddToCardMutation } = cartApi;
