import React from 'react';
import { PropTypes } from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Currency = ({
  name, priceUsd, changePercent24Hr, symbol,
}) => (
  <div className="currency-card">
    <div className="go-arrow">
      <FaArrowAltCircleRight />
    </div>
    <div className="logo-container">
      <p>
        <span className="card-text">Symbol:</span>
        {symbol}
      </p>
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
          <span className="card-text">Price Change (24hs):</span>
          {changePercent24Hr}
        </p>
      </div>
    </div>
  </div>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  priceUsd: PropTypes.string.isRequired,
  changePercent24Hr: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Currency;
