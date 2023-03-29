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
      const item = state.items.find((item) => item.id === payload.id);

      if (item) {
        state.totalItems += payload.quantity - item.quantity;
        state.total += payload.total - item.total;

        item.price = payload.price;
        item.quantity = payload.quantity;
        item.total = payload.total;
        item.size = payload.size;
      } else {
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
