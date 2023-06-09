import React from 'react';
import { PropTypes } from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Currency = ({
  img, name, price, priceChange, symbol,
}) => (
  <div className="currency-card">
    <div className="go-arrow">
      <FaArrowAltCircleRight />
    </div>
    <div className="logo-container">
      <img src={img} alt="Currency Name" className="currency-logo" />
    </div>
    <div className="card-container flex">
      <div className="card-left flex card-column">
        <p>
          <span className="card-text">Name:</span>
          {name}
        </p>
        <p>
          <span className="card-text">Symbol:</span>
          {symbol}
        </p>
      </div>
      <div className="card-right flex card-column">
        <p>
          <span className="card-text">Price: $</span>
          {price.toFixed(2)}
        </p>
        <p>
          <span className="card-text">Price Change (1W):</span>
          {priceChange}
        </p>
      </div>
    </div>
  </div>
);

Currency.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceChange: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Currency;
