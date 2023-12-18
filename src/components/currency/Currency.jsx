import React from 'react';
import { PropTypes } from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Currency = ({
  img, name, priceUsd, priceChange1h, symbol,
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
          {priceUsd}
        </p>
        <p>
          <span className="card-text">Price Change (1hs):</span>
          {priceChange1h}
        </p>
      </div>
    </div>
  </div>
);

Currency.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  priceUsd: PropTypes.number.isRequired,
  priceChange1h: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Currency;
