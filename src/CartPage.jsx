import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem'; // Adjust the path if necessary

const CartPage = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total amount for all items in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Handle continue shopping action
  const handleContinueShopping = () => {
    onContinueShopping(); // Function to navigate back to the plant listing page
  };

  // Handle checkout (for future implementation)
  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <CartItem key={item.name} item={item} />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-summary">
        <p>Total Cost: ${calculateTotalAmount().toFixed(2)}</p>
        <button onClick={handleContinueShopping}>Continue Shopping</button>
        <button onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
