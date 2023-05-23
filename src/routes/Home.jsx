import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uID } from 'uuid';
import { useNavigate } from 'react-router';
import { getCurrency } from '../redux/currency/currencySlice';
import Currency from '../components/currency/Currency';
import notFound from '../media/not-found.png';

const Home = () => {
  const fetchStatus = useRef(true);
  const { currencyArr } = useSelector((state) => state.currency);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currencyWanted, setCurrencyWanted] = useState('');

  useEffect(() => {
    if (fetchStatus.current) {
      fetchStatus.current = false;
      dispatch(getCurrency());
    }
  }, []);

  const checkClick = (item) => {
    if (item.id) {
      navigate(`details/${item.id}`);
    }
  };

  const filterArray = currencyArr ? currencyArr.filter((item) => {
    if (currencyWanted === '') {
      return item;
    }

    if (item.name.toLowerCase().includes(currencyWanted.toLowerCase())) {
      return item;
    }

    return null;
  }) : [];

  const result = () => {
    if (filterArray.length === 0) {
      return (
        <div className="not-found">
          <h3 className="not-foundTitle">CryptoCurrency not found.</h3>
          <img src={notFound} alt="Not Found" className="not-foundImg" />
        </div>
      );
    }
    return filterArray.map((item) => (
      <>
        <div
          key={uID()}
          aria-hidden="true"
          onClick={() => checkClick(item)}
          className="currency-div"
        >
          <Currency
            img={item.icon}
            name={item.name}
            price={item.price}
            priceChange={item.priceChange1w}
            symbol={item.symbol}
          />
        </div>
      </>
    ));
  };

  return (
    <>
      <h1 className="hero-title">CryptoCurrency Tracker (CCT)</h1>
      <div className="input-container">
        <input
          type="text"
          onChange={(e) => setCurrencyWanted(e.target.value)}
          placeholder="Search for a crypto..."
          value={currencyWanted}
        />
      </div>
      <h3 className="currency-title darker-bg">Top 30 Cryptos</h3>
      <div className="currency-container">{result()}</div>
    </>
  );
};

export default Home;
