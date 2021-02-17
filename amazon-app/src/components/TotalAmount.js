import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../css/TotalAmount.css';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';
import { getCartTotal } from '../reducer';

const TotalAmount = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="total-amount">
      <div className="total-amount-top">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className="subtotal">
                Subtotal ({cart.length} items):
                <strong className="total-price">{`${value}`}</strong>
              </p>
            </>
          )}
          value={getCartTotal(cart)}
          displayType={'text'}
          decimaleScale={2}
          thousandSeparator={true}
          prefix={'$'}
        />
        <button className="total-amount-checkout-button">
          Proceed to Checkout
        </button>
      </div>

      <div className="total-amount-bottom">
        <Link className="total-amount-sign-in" to="/">
          Sign In
        </Link>
        <span> to turn on 1-Click ordering.</span>
      </div>
    </div>
  );
};

export default TotalAmount;
