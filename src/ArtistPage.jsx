// src/ArtistPage.jsx
import React, { useEffect, useRef } from 'react';
import './Artist.css';

const ArtistPage = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, observerOptions);

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="artist-page-wrapper">
      {/* 상단 배너: 순차 애니메이션 적용 구조 */}
      <div className="top-hero">
        <h1 className="hero-text-group">
          <span className="hero-line line-1">
            비장애인과 장애인이 함께 만드는
          </span>
          <br />
          <span className="hero-line line-2">지속가능한 일상</span>
        </h1>
      </div>

      <div className="container">
        <section className="artist-definition reveal-item" ref={addToRefs}>
          <h2 className="section-header">아티스트, 누구인가요?</h2>
          <p>
            아티스트는 동구밭에서{' '}
            <span className="highlight">발달장애인 사원을 부르는 명칭</span>
            입니다.
          </p>
          <p>
            이는 단순히 제품을 만드는 노동자를 넘어, 세상을 더욱 아름답게
            빚어내는 창작자라는 의미를 담고 있습니다.
          </p>
          <p>
            전 직원의 50% 이상이 아티스트로 구성된 동구밭은 장애와 비장애의
            경계를 허물고 ‘공존’이라는 가장 아름다운 사회적 풍경을 함께
            그려나갑니다.
          </p>
        </section>

        <section className="reveal-item" ref={addToRefs}>
          <h2 className="section-header">동구밭과 아티스트</h2>
          <div className="promise-grid">
            <div className="promise-item">
              <img src="/img/007.png" alt="고용" />
              <p>
                동구밭은 월 매출이 증가할 때마다
                <br />
                발달장애인 사원을 추가로 고용합니다.
              </p>
              <span className="small-info">
                (전 직원 중 50%가 발달장애 사원)
              </span>
            </div>
            <div className="promise-item">
              <img src="/img/008.png" alt="디자인" />
              <p>
                동구밭 샴푸와 설거지비누는
                <br />
                발달장애인 직원이 직접
                <br />
                정성스럽게 디자인한 비누입니다.
              </p>
            </div>
            <div className="promise-item">
              <img src="/img/009.png" alt="성장" />
              <p>
                발달장애인 퇴사자 0명,
                <br />
                발달장애인이 사회에 뿌리를 내리고
                <br />
                안정적으로 성장할 기회를 제공합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="reveal-item" ref={addToRefs}>
          <h2 className="section-header">아티스트 PICK!</h2>
          <img
            src="/img/아티스트픽.jpg"
            alt="에디터 메인"
            className="editor-main-img"
          />

          <div className="editor-container">
            {/* 권나은 사원 카드 */}
            <div className="editor-card">
              <div className="profile-img">
                <img src="/img/Ellipse 14.png" alt="권나은 사원" />
              </div>
              <div className="name">권나은 사원</div>
              <span className="tag">
                입사 <strong>5</strong>년차
              </span>
              <div className="message">"저희 제품에는 비밀이 있어요!"</div>
              <p className="detail">
                설거지 비누는 열매 솎기를 하며 <strong>버려진 귤,</strong>
                <br />
                리포레스트 인센스 홀더는 <strong>산풀 피해목,</strong>
                <br />
                퍼퓸바 세트는 <strong>떨어진 꽃잎</strong>을 활용한
                <br />
                업사이클링 제품들이에요!
              </p>
              <div className="product-box">
                {/* <span className="p-tag">
                  <span>나은</span>
                  <span>PICK</span>
                </span> */}
                <img src="/img/Group 4814.png" alt="상품1" />
                <span className="p-name">리포레스트 인센스 홀더</span>
              </div>
              <a href="https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000308" target="_blank" className="view-btn">
                구경하러 가기 &gt;
              </a>
            </div>

            {/* 서다인 사원 카드 */}
            <div className="editor-card">
              <div className="profile-img">
                <img src="/img/Ellipse 14 (1).png" alt="서다인 사원" />
              </div>
              <div className="name">서다인 사원</div>
              <span className="tag">
                입사 <strong>3</strong>년차
              </span>
              <div className="message">"일상에 기분 좋은 변화를!"</div>
              <p className="detail">
                <strong>우리의 밭에서 시작되는 아름다움</strong>
                <br />
                동구밭이 수확한 진심이
                <br />
                아름다운 당신의 일상에
                <br />
                기분좋은 변화가 되길 바라요!
              </p>
              <div className="product-box">
                {/* <span className="p-tag">
                  <span>다인</span>
                  <span>PICK</span>
                </span> */}
                <img src="/img/Group 4815.png" alt="상품2" />
                <span className="p-name">셀러브레이트 오브제 퍼퓸바</span>
              </div>
              <a href="https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000450" target="_blank" className="view-btn">
                구경하러 가기 &gt;
              </a>
            </div>

            {/* 이도겸 대리 카드 */}
            <div className="editor-card">
              <div className="profile-img">
                <img src="/img/Ellipse 14 (2).png" alt="이도겸 대리" />
              </div>
              <div className="name">이도겸 대리</div>
              <span className="tag">
                입사 <strong>10</strong>년차
              </span>
              <div className="message">"정직한 손, 단단한 진심!"</div>
              <p className="detail">
                샴푸바는 단순한 세정제가 아니에요.
                <br />
                전문가의 끝없는 실험과 배합,
                <br />
                그리고 아티스트의 손길을 통해 완성되는
                <br />‘<strong>동구밭의 조각품</strong>’ 인거죠!
              </p>
              <div className="product-box">
                {/* <span className="p-tag">
                  <span>도겸</span>
                  <span>PICK</span> */}
                {/* </span> */}
                <img src="/img/Group 4816.png" alt="상품3" />
                <span className="p-name">페이스 앤 바디바 레몬그라스</span>
              </div>
              <a href="https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000231" target="_blank" className="view-btn">
                구경하러 가기 &gt;
              </a>
            </div>
          </div>
        </section>

        <section className="steps-section">
          <h2 className="section-header reveal-item" ref={addToRefs}>
            동구밭의 손끝 예술, 결을 빚는 과정
          </h2>
          <div className="step-row reveal-item" ref={addToRefs}>
            <div className="step-img-box">
              <img src="/img/made1.png" alt="단계1" />
            </div>
            <div className="step-txt-box">
              <div className="no">
                01.
                <br />
                비누생산
              </div>
              <p>
                사각형 몰드나 원형 통에 부어 놓은 비누를
                <br />
                하루동안 저온숙성 시킨 후, 다음날 몰드에서 비누를 빼줍니다
              </p>
            </div>
          </div>
          <div className="step-row reverse reveal-item" ref={addToRefs}>
            <div className="step-img-box">
              <img src="/img/made2.png" alt="단계2" />
            </div>
            <div className="step-txt-box">
              <div className="no">
                02.
                <br />
                비누가공
              </div>
              <p>
                비누가 잘 생성된 것을 확인한 후, 정해진 크기에 맞춰 비누를
                잘라주고, 깔끔한 비누를 위해 대패질로 마무리 합니다.
              </p>
            </div>
          </div>
          <div className="step-row reveal-item" ref={addToRefs}>
            <div className="step-img-box">
              <img src="/img/made3.png" alt="단계3" />
            </div>
            <div className="step-txt-box">
              <div className="no">
                03.
                <br />
                기계조작
              </div>
              <p>
                비누를 타정기계에 올려놓고, 버튼을 눌러 모양을 찍어줍니다.
                그리고 각인기계를 이용해 포장지에 제조일자를 기록합니다.
              </p>
            </div>
          </div>
          <div className="step-row reverse reveal-item" ref={addToRefs}>
            <div className="step-img-box">
              <img src="/img/made4.png" alt="단계4" />
            </div>
            <div className="step-txt-box">
              <div className="no">
                04.
                <br />
                패키지 포장
              </div>
              <p>
                마지막으로 비누종류별 패키지를 접고 비누를 넣어 포장합니다.
                <br />
                더불어 동구밭은 자연에 무해한 종이완충재를 사용하며,
                <br />
                무접착 박스를 사용해 안전하고 100% 재활용이 가능합니다.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 하단 푸터 배너: 순차 애니메이션 적용 구조 */}
      <div className="footer-banner-wide reveal-item" ref={addToRefs}>
        <div className="footer-text-group">
          <p className="footer-line line-1">
            동구밭은 지속가능한 삶을 위한 제품을 직접 기획하고
            <br />
            독자적인 전문 제조 기술력으로 직접 생산합니다.
          </p>
          <div className="highlight-text footer-line line-2">
            2015년도부터 다양한 고체 비누 제품을 생산하며
            <br />
            2024년 기준, 연간 생산량 약 <strong>4,543,000개</strong>의 기록과
            더불어
            <br />
            보다 철저한 기술력과 품질 관리를 바탕으로 성장해 오고 있습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
