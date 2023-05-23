import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './routes/Home';
import CurrencyDetail from './routes/CurrencyDetail';
import store from './redux/store';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:currencyID" element={<CurrencyDetail />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
