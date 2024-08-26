import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // Function to calculate the total cost for a single item
  const calculateTotalCost = (price, quantity) => {
    // Remove dollar sign and convert to number
    const numericPrice = parseFloat(price.replace('$', ''));
    return numericPrice * quantity;
  };

  // Increment quantity by 1
  const handleIncrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrement quantity by 1
  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Remove item from cart
  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Subtotal: ${calculateTotalCost(item.price, item.quantity).toFixed(2)}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
