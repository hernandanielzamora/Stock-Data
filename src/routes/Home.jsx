import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uID } from 'uuid';
import { useNavigate } from 'react-router';
import { getCurrency } from '../redux/currency/currencySlice';
import Currency from '../components/currency/Currency';

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
        <div>
          Error, Currency Not Found
        </div>
      );
    }
    return filterArray.map((item) => (
      <>
        <div
          key={uID()}
          aria-hidden="true"
          onClick={() => checkClick(item)}
        >
          <Currency
            img={item.icon}
            name={item.name}
            price={item.price}
            priceChange={item.priceChange1w}
          />
        </div>
      </>
    ));
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setCurrencyWanted(e.target.value)}
          placeholder="Search a crypto..."
          className="search-input"
          value={currencyWanted}
        />
      </div>
      <div className="coins-container flex limit">{result()}</div>
    </>
  );
};

export default Home;
