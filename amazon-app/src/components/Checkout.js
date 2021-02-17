import React from 'react';

import { useStateValue } from '../StateProvider';
import '../css/Checkout.css';
import CheckoutItem from './CheckoutItem';
import TotalAmount from './TotalAmount';

const Checkout = () => {
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C8423492668_.jpg"
          alt=""
        />
        {cart?.length === 0 ? (
          <div className="checkout-noitems">
            <h2 className="checkout-empty-cart">
              {' '}
              Your shopping cart is empty.
            </h2>
            <p>
              You have no items in your cart. To buy one or more items, click on
              "Add to cart" below the item.
            </p>
            <p>Thank you!</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout-message">Your Shopping Cart.</h2>
            {cart.map((item, i) => {
              return (
                <CheckoutItem
                  key={i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="checkout-right">{cart.length > 0 && <TotalAmount />}</div>
    </div>
  );
};

export default Checkout;
