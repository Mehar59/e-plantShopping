import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to store cart items
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      // Check if the item is already in the cart
      const existingItem = state.items.find(item => item.name === newItem.name);
      if (existingItem) {
        // If item exists, update the quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // Otherwise, add a new item
        state.items.push(newItem);
      }
    },
    removeItem(state, action) {
      const nameToRemove = action.payload;
      // Remove the item with the matching name
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },
    updateQuantity(state, action) {
      const { name, quantity } = action.payload;
      // Find the item and update its quantity
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

// Export the action creators
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer as default
export default cartSlice.reducer;
