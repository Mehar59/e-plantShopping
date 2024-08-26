import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalCost = (price, quantity) => {
    return price * quantity;
  };

  const handleIncrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price.toFixed(2)}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Subtotal: ${calculateTotalCost(item.price, item.quantity).toFixed(2)}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
