import currencyReducer, { getCurrency } from '../../redux/currency/currencySlice';
import detailsReducer, { getDetails } from '../../redux/currency/detailSlice';
import store from '../../redux/store';

describe('Redux Functionalities', () => {
  test('Configures the store correctly', () => {
    expect(store.getState()).toEqual({
      currency: currencyReducer(undefined, {}),
      details: detailsReducer(undefined, {}),
    });
  });

  test('Dispatches getCurrency action and updates currency state', async () => {
    const mockData = { coins: [] };
    /* Mocking the fetch function */
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));

    /* Get Currency dispatched to the store */
    await store.dispatch(getCurrency());

    /* Retrieves the current state from the redux store */
    const state = store.getState();

    /* Compares */
    expect(state.currency.isLoading).toBe(false);
    expect(state.currency.currencyArr).toEqual(mockData.coins);
  });

  test('Dispatches getDetails action and updates details state', async () => {
    const mockData = { coin: {} };
    /* Mocking the fetch function */
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));

    /* Get Details is dispatched to the store */
    await store.dispatch(getDetails('coinId'));

    /* Retrieves the current state from the redux store */
    const state = store.getState();

    /* Compares */
    expect(state.details.isLoading).toBe(false);
    expect(state.details.currencyDetails).toEqual(mockData.coin);
  });
});
