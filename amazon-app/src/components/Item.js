import React from 'react';
import '../css/Item.css';
import { Star } from '@material-ui/icons';
import { useStateValue } from '../StateProvider';

const Item = ({ id, title, price, rating, image }) => {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    // add item to basket
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className="item">
      <div className="item-info">
        <p className="item-title">{title}</p>
        <p className="item-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="item-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <Star className="rating-star" />
              </p>
            ))}
        </div>
      </div>
      <div className="item-bottom-info">
        <img className="item-image" src={image} alt="" />
        <button className="item-button" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
