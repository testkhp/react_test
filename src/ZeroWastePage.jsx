// src/ZeroWastePage.jsx
import React, { useEffect, useRef } from 'react';
import './ZeroWaste.css';

const ZeroWastePage = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('reveal');
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="zerowaste-page-wrapper">
      <section className="zw-hero-banner">
        <div className="zw-hero-overlay">
          <h1 className="reveal-item" ref={addToRefs}>
            지구를 사랑하는 동구밭의<br />환경 및 제품 효율성 대비 데이터
          </h1>
        </div>
      </section>

      <main className="zw-container">
        {/* 이미지 2 & 3 반영: ECO-FRIENDLY */}
        <section className="zw-section">
          <h2 className="zw-section-header reveal-item" ref={addToRefs}>
            ECO-FRIENDLY :: 자연 분해 기간
          </h2>
          <div className="zw-badge-banner reveal-item" ref={addToRefs}>
            <p>" 지구가 기억하는 시간은 달라야 합니다. "</p>
          </div>
          <div className="zw-stat-row">
            <div className="zw-flex-item reveal-item" ref={addToRefs}>
              <div className="zw-image-container">
                <img
                  src="/img/zero_waste1.png"
                  alt="500년"
                  className="zw-stat-img"
                />
              </div>
              <p className="zw-stat-title text-point">분해 500년 소요</p>
              <p className="zw-stat-desc">
                조선시대 사람이 플라스틱을 썼다면
                <br />그 플라스틱은 지금도 우리 곁에 있습니다.
              </p>
            </div>
            <div className="zw-flex-item reveal-item" ref={addToRefs}>
              <div className="zw-image-container">
                <img
                  src="/img/zero_waste2.png"
                  alt="6개월"
                  className="zw-stat-img"
                />
              </div>
              <p className="zw-stat-title text-green">분해 6개월 소요</p>
              <p className="zw-stat-desc">
                반 년만에 흙으로 돌아가도록 설계하는
                <br />
                동구밭 제품의 자연순환 입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 이미지 3 반영: SOCIAL IMPACT */}
        <section className="zw-section">
          <h2 className="zw-section-header reveal-item" ref={addToRefs}>
            SOCIAL IMPACT :: 장애인 고용 비중
          </h2>
          <div className="zw-badge-banner reveal-item" ref={addToRefs}>
            <p>" 우리가 함께한 시간 "</p>
          </div>
          <div className="zw-stat-row">
            <div className="zw-flex-item reveal-item" ref={addToRefs}>
              <div className="zw-image-container">
                <img src="/img/zero_waste3.png" alt="3.1%" className="zw-stat-img" />
              </div>
              <p className="zw-stat-title text-point">
                장애인 채용 권고 비율 3.1%
              </p>
              <p className="zw-stat-desc">
                하지만 실상 지켜지지 않는 기업이 많고,
                <br />
                장애인 채용이 저조한 기업은 명단 공개됨
              </p>
            </div>
            <div className="zw-flex-item reveal-item" ref={addToRefs}>
              <div className="zw-image-container">
                <img src="/img/zero_waste4.png" alt="50%" className="zw-stat-img" />
              </div>
              <p className="zw-stat-title text-green">
                동구밭 아티스트 비율 50%
              </p>
              <p className="zw-stat-desc">
                사원 2명 중 1명은 장애인,
                <br />
                더불어 설립 이래로 장애사원 퇴사자 0명
              </p>
            </div>
          </div>
        </section>

        {/* 이미지 8 반영: EFFICIENCY */}
        <section className="zw-section">
          <h2 className="zw-section-header reveal-item" ref={addToRefs}>
            EFFICIENCY :: 제품 사용 효율
          </h2>
          <div className="zw-badge-banner reveal-item" ref={addToRefs}>
            <p>" 지구를 위한 선택은 곧, 나를 위한 선택 "</p>
          </div>
          <div className="zw-stat-row">
            <div className="zw-flex-item reveal-item" ref={addToRefs}>
              <div className="zw-image-container">
                <img
                  src="/img/zero_waste5.png"
                  alt="액체 세정제"
                  className="zw-stat-img"
                />
              </div>
              <p className="zw-stat-title text-point">액체 세정제 3병</p>
              <p className="zw-stat-desc">
                정제수 함량 90%에 더해
                <br />
                물을 운반하는 탄소의 배출까지 환경에 부담
              </p>
            </div>
            <div className="zw-flex-item reveal-item" ref={addToRefs}>
              <div className="zw-image-container">
                <img
                  src="/img/zero_waste6.png"
                  alt="동구밭 비누바"
                  className="zw-stat-img"
                />
              </div>
              <p className="zw-stat-title text-green">동구밭 비누바 1개</p>
              <p className="zw-stat-desc">
                유효성분 100% 농축,
                <br />물 타지 않은 단 한알의 강력함
              </p>
            </div>
          </div>
        </section>

        {/* 이미지 4 & 5 반영: 하단 요약 카드 (데이터 수정) */}
        <div className="zw-summary-card reveal-item" ref={addToRefs}>
          <p className="zw-summary-label">MONTHLY PRODUCTION</p>
          <p className="zw-summary-count">250,000 +</p>
          <p className="zw-summary-text">
            동구밭은 여러분과 함께 매달 25만 개의 플라스틱을 줄이고 있습니다.
            <br />
            (연간 137.9톤 탄소 배출 절감 중)
          </p>
        </div>
      </main>
    </div>
  );
};

export default ZeroWastePage;
