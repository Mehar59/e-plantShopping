import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configure the store
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    // Optional: Add Redux DevTools Extension support if available
    devTools: process.env.NODE_ENV !== 'production', // Automatically enable DevTools in development mode
});

export default store;
