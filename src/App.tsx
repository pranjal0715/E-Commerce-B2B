import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Category from './pages/Category';
import About from './pages/About';
import Contact from './pages/Contact';
// import Login from './pages/Login'; // Capitalized for consistency
// import Register from './pages/Register'; // Capitalized for consistency
import CartPage from './pages/CartPage';
import MensCategoryPage from './CategoryMaster/Men';
import WomensCategoryPage from './CategoryMaster/Women';
import KidsCategoryPage from './CategoryMaster/Kids';
import NewArrivalsPage from './pages/NewArrival';
import BestSellersPage from './pages/BestSeller';
import CustomizeOutFit from './pages/CustomizeOutFit';


function App() {
  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> Fixed closing tag */}
            <Route path="/cart" element={<CartPage />} />
            <Route path = "/category/Men" element = {<MensCategoryPage />} />
            <Route path="/category/Women" element = {<WomensCategoryPage />} />
            <Route path="/category/Kids" element = {<KidsCategoryPage />} />
            <Route path="/category/new-arrivals" element={<NewArrivalsPage />} />
            <Route path="/category/best-sellers" element={<BestSellersPage />} />
            <Route path="/customize" element={<CustomizeOutFit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
