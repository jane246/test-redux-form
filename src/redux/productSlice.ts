import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id: number;
}

const data = 'http://localhost:5173/data.json';

export const fetchProduct = createAsyncThunk<Product[]>("products/fetchProduct", async () => {
  const response = await axios.get<Product[]>(data);
  return response.data;
});

export const createProduct = createAsyncThunk<Product, Product>("products/createProduct", async (newProduct) => {
  const response = await axios.post<Product>(data, newProduct);
  return response.data;
});

export const editProduct = createAsyncThunk<Product, { id: number; updatedProduct: Product }>(
  "products/editProduct",
  async ({ id, updatedProduct }) => {
    const response = await axios.put<Product>(`${data}/${id}`, updatedProduct);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk<Product, number>("products/deleteProduct", async (id) => {
  const response = await axios.delete<Product>(`${data}/${id}`);
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [] as Product[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.items = state.items.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((product) => product.id !== action.payload.id);
      });
  },
});

export default productSlice.reducer;
