import React, { useEffect, useRef } from 'react';
import './Products.css';
import ProductSlider from './ProductSlider';

const ProductsPage = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('reveal');
      });
    }, { threshold: 0.1 });
    revealRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const faceBodyProducts = [
    { id: 1, name: '동구밭 가꿈비누 상추', img: '/img/face&body_gakkum01.jpg', hoverTitle: '비타민이 풍부한 상추 추출물', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000027' },
    { id: 2, name: '동구밭 가꿈비누 오이가지', img: '/img/face&body_gakkum02.jpg', hoverTitle: '수분 가득 오이와 가지의 만남', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000031' },
    { id: 3, name: '동구밭 가꿈비누 바질', img: '/img/face&body_gakkum03.jpg', hoverTitle: '피부 진정에 도움을 주는 바질', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000028' },
    { id: 4, name: '동구밭 바디비누 노니', img: '/img/face&body_body01.jpg', hoverTitle: '영양 가득 노니 열매 추출물', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000002' },
    { id: 5, name: '동구밭 아기비누 알로에', img: '/img/face&body_body02.jpg', hoverTitle: '순하고 부드러운 알로에 케어', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000396' },
    { id: 6, name: '동구밭 오브제 퍼퓸바', img: '/img/face&body_body03.jpg', hoverTitle: '은은한 잔향의 고체 향수 비누', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000339' },
    { id: 7, name: '동구밭 세안비누 콜라겐', img: '/img/face&body_sean01.jpg', hoverTitle: '힘 있고 탄탄하게 촉촉한 클렌징 솝', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000022' },
    { id: 8, name: '동구밭 앰플 세안바 다시마', img: '/img/face&body_sean02.jpg', hoverTitle: '다시마 성분을 농축한 저자극 케어', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000234' },
    { id: 9, name: '동구밭 페이스바 레몬그라스', img: '/img/face&body_sean03.jpg', hoverTitle: '얼굴과 몸을 한 번에 저자극 클렌징', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000231' },
  ];

  const kitchenLivingProducts = [
    { id: 10, name: '동구밭 설거지 비누 녹차', img: '/img/kitchen_washing01.jpg', hoverTitle: '기름기 제거에 탁월한 녹차', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000230' },
    { id: 11, name: '동구밭 설거지 비누 풋귤', img: '/img/kitchen_washing02.jpg', hoverTitle: '상큼한 풋귤향의 세정 비누', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000171' },
    { id: 12, name: '동구밭 올바른 설거지 워싱바', img: '/img/kitchen_washing03.jpg', hoverTitle: '정직한 원료의 주방 필수템', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000137' },
    { id: 13, name: '동구밭 워싱바 카프리 선샤인', img: '/img/kitchen_fruit01.jpg', hoverTitle: '햇살을 머금은 세정력', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000430' },
    { id: 14, name: '동구밭 블루밍 자운고 워싱바', img: '/img/kitchen_fruit02.jpg', hoverTitle: '피부 보호까지 생각한 세제', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000398' },
    { id: 15, name: '동구밭 천연 수세미', img: '/img/kitchen_living01.jpg', hoverTitle: '자연 그대로의 환경 친화적 수세미', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000049' },
    { id: 16, name: '동구밭 대나무 칫솔', img: '/img/kitchen_living02.jpg', hoverTitle: '플라스틱 없는 지속가능한 양치', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000352' },
    { id: 17, name: '동구밭 세제 타블렛', img: '/img/kitchen_living03.jpg', hoverTitle: '간편하게 사용하는 고체 세제', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000183' },
  ];

  const giftSetProducts = [
    { id: 18, name: '동구밭 오브제 퍼퓸바 세트', img: '/img/gift_perfume01.jpg', hoverTitle: '품격 있는 향기 기프트 세트', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000450' },
    { id: 19, name: '동구밭 플라워 가든 퍼퓸바 세트', img: '/img/gift_perfume02.jpg', hoverTitle: '꽃향기 가득한 정원 선물', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000414' },
    { id: 20, name: '동구밭 우디 퍼퓸바 세트', img: '/img/gift_perfume03.jpg', hoverTitle: '차분하고 깊은 우디향 선물', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000356' },
    { id: 21, name: '동구밭 파머스바 세트', img: '/img/gift_present01.jpg', hoverTitle: '건강함을 담은 파머스 세트', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000407' },
    { id: 22, name: '동구밭 클로버 샤워바 세트', img: '/img/gift_present02.jpg', hoverTitle: '행운을 전하는 클로버 기프트', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000403' },
    { id: 23, name: '동구밭 핸드크림 미니 세트', img: '/img/gift_present03.jpg', hoverTitle: '오늘의 무드를 담은 올데이 핸드케어', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000442' },
    { id: 24, name: '동구밭 X 최고심', img: '/img/gift_collabo01.jpg', hoverTitle: '귀여움 가득한 콜라보레이션', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000429' },
    { id: 25, name: '동구밭 X 폴라앳홈', img: '/img/gift_collabo02.jpg', hoverTitle: '감각적인 라이프스타일 선물', link: 'https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000452' },
  ];

  return (
    <div className="products-page-wrapper">
      <div className="full-width-banner-container">
        <div className="full-width-banner">
          <h2 className="reveal-item" ref={addToRefs}>
            동구밭 제품은 원료부터 배합까지,<br/>동구밭의 장인정신으로 고집있게 만들었어요
          </h2>
        </div>
      </div>

      <div className="products-inner">
        <div className="category-nav-section reveal-item" ref={addToRefs}>
          <h3 className="category-nav-title">카테고리별 제품</h3>
          <div className="category-quick-nav">
            {[
              { type: 'text', text: 'ALL', name: '전제품', link: 'https://www.donggubat.co.kr/goods/goods_list.php?cateCd=001' },
              { img: 'category2(desktop).png', name: '콜라보', link: 'https://www.donggubat.co.kr/goods/goods_list.php?page=2&cateCd=001006' },
              { img: 'category3(desktop).png', name: '페이스·바디', link: 'https://www.donggubat.co.kr/goods/goods_list.php?cateCd=001001' },
              { img: 'category4(desktop).png', name: '헤어', link: 'https://www.donggubat.co.kr/goods/goods_list.php?cateCd=001002' },
              { img: 'category5(desktop).png', name: '주방·리빙', link: 'https://www.donggubat.co.kr/goods/goods_list.php?cateCd=001003' },
              { img: 'category6(desktop).png', name: '배쓰밤', link: 'https://www.donggubat.co.kr/goods/goods_list.php?cateCd=001009' },
              { img: 'category7(desktop).png', name: '선물세트', link: 'https://www.donggubat.co.kr/goods/goods_list.php?cateCd=001006' },
              { img: 'category8(desktop).png', name: '악세서리', link: 'https://www.donggubat.co.kr/goods/goods_list.php?cateCd=001007' },
            ].map((item, idx) => (
              <a 
                key={idx} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`cat-item ${item.type === 'text' ? 'all-item' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                <div className={`cat-circle ${item.type === 'text' ? 'all-circle' : ''}`}>
                  {item.type === 'text' ? <span className="all-text">{item.text}</span> : <img src={`/img/${item.img}`} alt={item.name} />}
                </div>
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        <section className="product-section best-section reveal-item" ref={addToRefs}>
          <div className="section-title-box">
            <h3>지금 가장 인기 있는 제품</h3>
            <p>플라스틱 없는 건강한 제로웨이스트 제품</p>
            <div className="best-title-line"></div>
          </div>
          <div className="best-grid">
            <ProductCard rank="1" img="/img/best1(desktop).png" name="[페이스·바디] 동구밭 가꿈비누 5종 기획세트" discount="20%" current="21,200원" original="26,500원" link="https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000181" />
            <ProductCard rank="2" img="/img/best2(desktop).png" name="[주방·리빙] 동구밭 설거지 워싱바 선물세트" discount="30%" current="22,400원" original="32,000원" link="https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000098" />
            <ProductCard rank="3" img="/img/best3(desktop).png" name="[선물세트] 동구밭 페이스 앤 바디바 세트" discount="20%" current="32,000원" original="40,000원" link="https://www.donggubat.co.kr/goods/goods_view.php?goodsNo=1000000407" />
          </div>
          <div className="best-bottom-line"></div>
        </section>

        <section className="product-section showcase-section reveal-item" ref={addToRefs}>
          <div className="section-title-box"><h3>페이스&바디</h3><p>비건 포뮬라로 저자극 안심케어</p></div>
          <ProductSlider products={faceBodyProducts} />
        </section>

        <section className="product-section showcase-section reveal-item" ref={addToRefs}>
          <div className="section-title-box"><h3>주방&리빙</h3><p>유아식기 설거지도 가능한 저자극 안심 세척</p></div>
          <ProductSlider products={kitchenLivingProducts} />
        </section>

        <section className="product-section showcase-section reveal-item" ref={addToRefs}>
          <div className="section-title-box"><h3>선물세트</h3><p>특별한 순간, 일상의 작은 변화를 선물해보세요</p></div>
          <ProductSlider products={giftSetProducts} />
        </section>
      </div>

      <div 
        className="full-width-story reveal-item" 
        ref={addToRefs} 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/img/footerbanner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="story-overlay-text">
          <div className="inner-text">
            <p>동구밭은 2015년 <b>텃밭 봉사활동</b>에서 시작해</p>
            <p>식물성 원료로 가꿈비누를 만들고</p>
            <p>지금까지 <b>가꿈지기들과 함께</b></p>
            <p><b>지속가능한 일상</b>을 이어가고 있습니다</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ img, name, discount, current, original, rank, link }) => {
  const nameParts = name.split('] ');
  const category = nameParts[0] ? nameParts[0] + ']' : '';
  const productName = nameParts[1] || '';

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="best-card">
        <div className="best-img"><img src={img} alt=""/>{rank && <span className="best-badge">BEST {rank}</span>}</div>
        <div className="best-info">
          <p className="name"><span className="cat-tag">{category}</span><br className="mobile-br" /><span className="prod-name">{productName}</span></p>
          <div className="price-box"><span className="discount">{discount}</span><span className="current-p">{current}</span><span className="original-p">{original}</span></div>
        </div>
      </div>
    </a>
  );
};

export default ProductsPage;