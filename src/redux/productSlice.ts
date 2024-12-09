import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data='http://localhost:5173/data.json';

export const fetchProduct = createAsyncThunk("carts/fetchProduct", async () => {
    const response = await axios.get(data);
    return response.data;
  });

const productSlice = createSlice({
    name:"products",
    initialState:{
        items: [],
    },
    reducers:{     
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
          state.items = action.payload;
        });
    }
})
export default productSlice.reducer