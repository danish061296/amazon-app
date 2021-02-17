import React from 'react';
import { Star } from '@material-ui/icons';
import '../css/CheckoutItem.css';
import { useStateValue } from '../StateProvider';

const CheckoutItem = ({ id, title, price, rating, image }) => {
  const [{ cart }, dispatch] = useStateValue();

  // remove item from the cart
  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  return (
    <div className="checkout-item">
      <img className="checkout-item-image" src={image} alt="" />
      <div className="checkout-item-details">
        <p className="checkout-item-title">{title}</p>
        <p className="checkout-item-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkout-item-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <Star className="rating-star" />
              </p>
            ))}
        </div>
        <button onClick={removeFromCart} className="checkout-item-button">
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
