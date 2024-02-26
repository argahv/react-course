// src/cartApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cart",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    //QUery: trigger an api when component mounts
    getCarts: builder.query({
      query: () => "carts",
    }),

    //Mutation: trigger an api when some event is trggered

    deleteFromCart: builder.mutation({
      query: (id) => ({
        url: `carts/${id}`,
        method: "DELETE",
      }),
    }),

    addToCart: builder.mutation({
      query: (cart) => ({
        url: "carts",
        method: "POST",
        body: cart,
      }),
    }),
  }),
});

export const { getCarts } = cartApi.endpoints;

export const {
  useGetCartsQuery,
  useAddToCardMutation,
  useDeleteFromCartMutation,
} = cartApi;
