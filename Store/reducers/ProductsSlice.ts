import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IProduct {
  id: string;
  title: string;
  price: number;
  images: Array<string>;
}

interface ProductsState {
  products:IProduct[]
}

const initialState: ProductsState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>){
      state.products = [...state.products, action.payload]
    },
  }
})

export default productsSlice.reducer;