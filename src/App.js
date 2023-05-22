import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './routes/Home';
import CurrencyDetail from './routes/CurrencyDetail';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<CurrencyDetail />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
