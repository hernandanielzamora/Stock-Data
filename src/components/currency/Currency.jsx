import React from 'react';
import { PropTypes } from 'prop-types';

const Currency = ({
  img, name, price, priceChange,
}) => (
  <div>
    <img src={img} alt="Currency Name" />
    Name:
    {name}
    Price:
    {price}
    Price Change:
    {priceChange}
  </div>
);

Currency.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceChange: PropTypes.number.isRequired,
};

export default Currency;
