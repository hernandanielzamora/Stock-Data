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

  if (!currencyDetails || currencyDetails.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-card flex">
      <h2 className="spec-title">{currencyDetails.name}</h2>
      <img src={currencyDetails.icon} alt="crypto icon" className="details-icon" />
      <div className="spec-container">
        <div className="detail-spec darker-detail">
          <span className="card-text">Symbol:</span>
          {currencyDetails.symbol}
        </div>
        <div className="detail-spec">
          <span className="card-text">MarketCap: $</span>
          {(currencyDetails.marketCap).toFixed(2)}
        </div>
        <div className="detail-spec darker-detail">
          <span className="card-text">Price changes (1H) :</span>
          {currencyDetails.priceChange1h}
        </div>
        <div className="detail-spec">
          <a href={currencyDetails.websiteUrl}>{currencyDetails.websiteUrl}</a>
        </div>
      </div>
    </div>
  );
};

export default CurrencyDetail;
