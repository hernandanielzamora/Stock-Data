import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import CurrencyDetail from '../../routes/CurrencyDetail';

describe('CurrencyDetail Component', () => {
  test('renders correctly when currency details are available', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <CurrencyDetail />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
