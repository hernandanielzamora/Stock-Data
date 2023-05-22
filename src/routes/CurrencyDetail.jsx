import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from '../redux/currency/detailSlice';

const CurrencyDetail = () => {
  const { currencyID } = useParams();
  const dispatch = useDispatch();
  const { currencyDetails } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(currencyID));
  }, [currencyID, dispatch]);

  // Check if currencyDetails is empty or still loading
  if (!currencyDetails || currencyDetails.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={currencyDetails.icon} alt="crypto icon" />
      <div>
        Name:
        {currencyDetails.name}
      </div>
      <div>
        Symbol:
        {currencyDetails.symbol}
      </div>
      <div>
        Market Cap:
        {currencyDetails.marketCap}
      </div>
      <div>
        Price changes - 1H -:
        {currencyDetails.priceChange1h}
      </div>
      <div>
        Website:
        {currencyDetails.websiteUrl}
      </div>
    </div>
  );
};

export default CurrencyDetail;
