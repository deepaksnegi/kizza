import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: string;
  name: string;
  image: string;
  size: number;
  price: number;
  quantity: number;
  total: number;
}

interface InitialState {
  items: Item[];
  total: number;
  totalItems: number;
}

const initialState: InitialState = {
  items: [],
  total: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      const { payload } = action;
      const isItemAlreadyInCart = state.items.some(
        (item) => item.id === payload.id
      );

      if (!isItemAlreadyInCart) {
        state.items.push(payload);
        state.totalItems += payload.quantity;
        state.total += payload.total;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const itemToRemove = state.items.find((item) => item.id === id);

      if (itemToRemove) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalItems -= itemToRemove.quantity;
        state.total -= itemToRemove.total;
      }
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart } = cartSlice.actions;
