
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/products';
import Checkout from './pages/checkout';
import { CartProvider } from './cartContext';


function App() {
  return (
    <div className="App">
      <CartProvider>

        {/* kapsayıcı ve içindekiler children oluyor */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>



        </BrowserRouter>

      </CartProvider>
    </div>
  );
}

export default App;
