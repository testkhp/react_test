// src/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="main-header">
      {/* 1. 메인 헤더 로고 */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src="/img/logo_green.png" alt="동구밭 로고" />
          {/* <strong>동구밭</strong> */}
        </Link>
      </div>

      {/* 2. 모바일 햄버거 버튼 (active 시 X로 변신) */}
      <div
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* 3. 사이드바 네비게이션 */}
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        {/* [수정] 이미지와 동일하게 로고와 글자를 가로(row)로 배치 */}
        <div className="sidebar-header">
          <Link to="/" onClick={closeMenu} className="sidebar-logo-row">
            <img src="/image/동구밭로고2.png" alt="동구밭 로고" />
            <strong>동구밭</strong>
          </Link>
        </div>

        {/* 중단 메뉴 리스트 (아이보리 배경) */}
        <div className="menu-links">
          <Link
            to="/brand"
            className={
              location.pathname === '/brand' || location.pathname === '/'
                ? 'active'
                : ''
            }
            onClick={closeMenu}
          >
            BRAND
          </Link>
          <Link
            to="/artist"
            className={location.pathname === '/artist' ? 'active' : ''}
            onClick={closeMenu}
          >
            ARTIST
          </Link>
          <Link
            to="/zero-waste"
            className={location.pathname === '/zero-waste' ? 'active' : ''}
            onClick={closeMenu}
          >
            ZERO-WASTE
          </Link>
          <Link
            to="/products"
            className={location.pathname === '/products' ? 'active' : ''}
            onClick={closeMenu}
          >
            PRODUCTS
          </Link>
          <Link
            to="/report"
            className={location.pathname === '/report' ? 'active' : ''}
            onClick={closeMenu}
          >
            REPORT
          </Link>
        </div>

        {/* 하단 푸터 영역 */}
        <div className="sidebar-footer-wrapper">
          <Footer />
        </div>
      </nav>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
