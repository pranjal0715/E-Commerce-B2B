import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Category from './pages/Category';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/login';
import { useEffect } from 'react';
import Register from './pages/register';

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
            <Route path="/login" element={<Login />} />
            {/* <Route path="/register" element={<Register />} */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;