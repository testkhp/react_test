import React, { useState, useEffect } from 'react';

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (products && products.length > 0) {
      const timer = setInterval(() => {
        handleNext();
      }, 3500);
      return () => clearInterval(timer);
    }
  }, [currentIndex, products]);

  const handleNext = () => {
    if (products && products.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }
  };

  const handlePrev = () => {
    if (products && products.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    }
  };

  const getSlideStyle = (index) => {
    const diff = (index - currentIndex + products.length) % products.length;

    if (diff === 0) {
      return { transform: 'scale(1.1) translateX(0)', zIndex: 10, filter: 'brightness(1)', opacity: 1 };
    }
    else if (diff === 1) {
      return { transform: 'scale(0.85) translateX(280px)', zIndex: 5, filter: 'brightness(0.4)', opacity: 0.8 };
    }
    else if (diff === products.length - 1) {
      return { transform: 'scale(0.85) translateX(-280px)', zIndex: 5, filter: 'brightness(0.4)', opacity: 0.8 };
    }
    else {
      return { transform: 'scale(0.5) translateX(0)', zIndex: 1, opacity: 0, pointerEvents: 'none' };
    }
  };

  if (!products || products.length === 0) return null;

  return (
    <div className="custom-slider-container">
      <div className="slider-wrapper">
        <button className="nav-btn prev" onClick={handlePrev}>&#10094;</button>
        <button className="nav-btn next" onClick={handleNext}>&#10095;</button>

        <div className="slides-track">
          {products.map((item, idx) => (
            <div key={item.id} className="custom-slide" style={getSlideStyle(idx)}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="img-card-link">
                <div className="img-card">
                  <img src={item.img} alt={item.name} />
                  <div className="hover-overlay">
                    <p className="hover-title">{item.hoverTitle}</p>
                    <div className="hover-btn">자세히 보기 &gt;</div>
                  </div>
                </div>
              </a>
              <div className={`product-title ${idx === currentIndex ? 'show' : ''}`}>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-dots">
          {products.map((_, idx) => (
            <span key={idx} className={`dot ${idx === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(idx)} />
          ))}
        </div>
      </div>

      <style>{`
        .custom-slider-container { width: 100%; padding: 40px 0 80px; position: relative; overflow: visible; }
        .slider-wrapper { max-width: 1200px; margin: 0 auto; height: 550px; position: relative; display: flex; align-items: center; justify-content: center; }
        .slides-track { position: relative; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; overflow: visible; }
        .custom-slide { position: absolute; width: 380px; transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); display: flex; flex-direction: column; align-items: center; }
        .img-card-link { display: block; width: 100%; text-decoration: none; }
        .img-card { width: 100%; aspect-ratio: 1 / 1; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.15); position: relative; }
        .img-card img { width: 100%; height: 100%; object-fit: cover; }
        .hover-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255, 255, 255, 0.85); display: flex; flex-direction: column; justify-content: center; align-items: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none; }
        .img-card:hover .hover-overlay { opacity: 1; pointer-events: auto; }
        .hover-title { font-size: 22px; font-weight: 500; color: #333; margin-bottom: 25px; text-align: center; padding: 0 20px; }
        .hover-btn { padding: 10px 25px; font-size: 16px; color: #333; background: transparent; border: 1px solid #333; border-radius: 30px; cursor: pointer; transition: all 0.3s ease; }
        .hover-btn:hover { background: #333; color: #fff; }
        .product-title { margin-top: 30px; text-align: center; opacity: 0; transition: opacity 0.4s ease; }
        .product-title.show { opacity: 1; }
        .product-title h3 { font-size: 1.5rem; color: #333; font-weight: 500 !important; margin: 0; }
        .nav-btn { position: absolute; top: 50%; transform: translateY(-50%); background: none; border: none; font-size: 3.5rem; color: #2d5a27; cursor: pointer; z-index: 20; transition: color 0.3s ease; }
        .prev { left: 20px; } .next { right: 20px; }
        .slider-dots { position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px; }
        .dot { width: 10px; height: 10px; border-radius: 50%; background: #ddd; cursor: pointer; transition: all 0.3s ease; }
        .dot.active { background: #2d5a27; width: 25px; border-radius: 5px; }

        @media (max-width: 768px) {
          .img-card:hover .hover-overlay { display: none !important; opacity: 0 !important; }
          .nav-btn { color: #ffffff !important; text-shadow: 0 0 10px rgba(0,0,0,0.3); }
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;