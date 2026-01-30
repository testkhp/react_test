// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TickerBanner from './TickerBanner';
import Header from './Header';
import BrandPage from './BrandPage';
import ArtistPage from './ArtistPage';
import ZeroWastePage from './ZeroWastePage';
import ProductsPage from './ProductsPage';
import ReportPage from './ReportPage'; // [추가] 5페이지 임포트
import Footer from './Footer';
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="App">
        <TickerBanner />
        <Header />
        
        <main style={{ paddingTop: '120px' }}>
          <Routes>
            <Route path="/" element={<BrandPage />} />
            <Route path="/brand" element={<BrandPage />} />
            <Route path="/artist" element={<ArtistPage />} />
            <Route path="/zero-waste" element={<ZeroWastePage />} />
            <Route path="/products" element={<ProductsPage />} />
            {/* [추가] /report 주소 설정 */}
            <Route path="/report" element={<ReportPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;