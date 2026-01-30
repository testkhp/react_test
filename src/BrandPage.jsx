// src/BrandPage.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // [수정] Link 컴포넌트 추가
import './Brand.css';

const BrandPage = () => {
  const scrollRefs = useRef([]);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, observerOptions);

    scrollRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  };

  return (
    <div className="brand-content">
      {/* [1] 메인 배너 */}
      <div className="hero-banner">
        <video autoPlay muted loop playsInline>
          <source src="/img/videoplayBack.mp4" type="video/mp4" />
          브라우저가 비디오를 지원하지 않습니다.
        </video>
        <div className="overlay-text">
          <h1>지구를 구하는 단단한 고집</h1>
        </div>
      </div>

      {/* [2] 철학 섹션 */}
      <section className="philosophy-section">
        <div className="section-title-area" ref={addToRefs}>
          <h2>동구밭의 브랜드 철학</h2>
          <div className="title-underline"></div>
        </div>
        {/* Row 01 */}
        <div className="content-row reverse" ref={addToRefs}>
          <div className="text-area">
            <div className="num">01.</div>
            <h3>
              단단한 고집
              <br />
              <small className="sub-title">(Solid Conviction)</small>
            </h3>
            <p>
              액체보다 불편할지 모릅니다.
              <br />
              하지만 우리는 타협하지 않습니다.
              <br />
              플라스틱 용기가 필요 없는 고체 형태만이
              <br />
              지구에 남기는 상처를 최소화하는 유일한 길입니다.
            </p>
          </div>
          <div className="image-area">
            <img src="/img/brand1.png" alt="단단한 고집" />
          </div>
        </div>

        {/* Row 02 (Reverse) */}
        <div className="content-row" ref={addToRefs}>
          <div className="text-area">
            <div className="num">02.</div>
            <h3>
              초록의 순환
              <br />
              <small className="sub-title">(The Green Circle)</small>
            </h3>
            <p>
              우리가 직접 가꾼 텃밭의 산물은 비누의 원료가 됩니다.
              <br />
              자연에서 온 것은 다시 자연으로 돌아가야 한다는 순환의 원칙,
              <br />
              동구밭 디자인의 시작입니다.
            </p>
          </div>
          <div className="image-area">
            <img src="/img/brand2.png" alt="초록의 순환" />
          </div>
        </div>

        {/* Row 03 */}
        <div className="content-row reverse" ref={addToRefs}>
          <div className="text-area">
            <div className="num">03.</div>
            <h3>
              편견을 지우는 비누
              <br />
              <small className="sub-title">(Erasing Prejudice)</small>
            </h3>
            <p>
              편견 대신 장인 정신으로 빚은 비누.
              <br />
              발달장애 사원들의 섬세한 손끝에서 완성된
              <br />
              압도적인 제품력, 그 자체로 동구밭의 얼굴입니다.
              <br />
              정직하고 탁월한 기술로 당신의 일상에 스며들겠습니다.
            </p>
          </div>
          <div className="image-area">
            <img src="/img/brand3.png" alt="편견을 지우는 비누" />
          </div>
        </div>
      </section>

      {/* [3] 하단 버튼 섹션 */}
      <section className="cta-section reveal-item" ref={addToRefs}>
        <h4>
          철학은 문장에 머물지 않고, <br />
          누군가의 <span className="point-text">손끝에서 비로소 완성</span>
          됩니다.
          <br />
          <br />
          편견을 지우고 장인 정신을 채우는 동구밭의 심장,
          <br />
          우리의 <span className="point-text">아티스트</span>들을 소개합니다.
        </h4>

        {/* [수정] <a> 태그를 <Link>로 변경하여 /artist 페이지로 연결 */}
        <Link to="/artist" className="cta-btn">
          동구밭의 아티스트 만나러 가기
        </Link>
      </section>
    </div>
  );
};

export default BrandPage;
