import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// 필수 CSS 임포트
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TeamMissionSlider = () => {
  const slideData = [
    { id: 1, name: '동구밭 X 최고심 콜라보', url: 'https://www.beyondpost.co.kr/view.php?ud=2025060410502157049aeda69934_30', img: '/img/card_news1.png' },
    { id: 2, name: '흔들리지 않는 미션', url: 'https://www.socialimpactnews.net/news/articleView.html?idxno=4792', img: '/img/card_news2.png' },
    { id: 3, name: '장애인 직업재활의 날', url: 'https://www.esgeconomy.com/news/articleView.html?idxno=13270', img: '/img/card_news3.png' },
    { id: 4, name: '편견을 닦는 동구밭', url: 'https://openads.co.kr/content/contentDetail?contsId=16268', img: '/img/card_news4.png' },
    { id: 5, name: '대만 코스트코 입점', url: 'https://www.gukjenews.com/news/articleView.html?idxn', img: '/img/card_news5.png' },
    { id: 6, name: 'DDP 디자인페어 참여', url: 'https://www.esgeconomy.com/news/articleView.html?idxno=13202', img: '/img/card_news6.png' },
  ];

  return (
    <div className="slider-wrapper" style={{ padding: '30px 0', backgroundColor: 'transparent', position: 'relative' }}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: false, 
        }}
        navigation={true} 
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ width: '100%', paddingBottom: '50px' }}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id} style={{ width: '400px' }}>
            <div className="slide-content" style={contentContainerStyle}>
              <img src={slide.img} alt={slide.name} style={imageStyle} />
              <div className="hover-overlay" style={overlayStyle}>
                <a 
                  href={slide.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={linkButtonStyle}
                >
                  {slide.name} 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        /* 1. 화살표 기본 디자인: 평소에는 진초록, 연한 투명도 */
        .swiper-button-next, .swiper-button-prev {
          color: #1a3321 !important; 
          opacity: 0.4;
          transform: scale(0.6); 
          transition: all 0.4s ease;
          top: 45% !important;
          z-index: 10;
        }
        
        /* 2. [청랑님 제안 반영] 슬라이더 영역에 마우스를 올리면 화살표를 하얀색으로 강조 */
        .slider-wrapper:hover .swiper-button-next,
        .slider-wrapper:hover .swiper-button-prev {
          color: #ffffff !important;
          opacity: 0.9;
          text-shadow: 0 0 10px rgba(0,0,0,0.3); /* 흰색 화살표가 더 잘 보이게 그림자 추가 */
        }

        /* 3. 화살표 개별 호버 효과: 더 선명해짐 */
        .swiper-button-next:hover, .swiper-button-prev:hover {
          transform: scale(0.8) !important;
          opacity: 1 !important;
        }

        /* 4. 슬라이드 호버 오버레이 효과 */
        .slide-content:hover .hover-overlay {
          opacity: 1 !important;
        }

        /* 5. 페이지네이션(동그라미) 디자인 유지 */
        .swiper-pagination-bullet-active {
          background: #1a3321 !important;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
        }
      `}</style>
    </div>
  );
};

// --- 스타일 설정 유지 ---
const contentContainerStyle = {
  position: 'relative',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
};

const imageStyle = {
  width: '100%',
  height: '250px',
  objectFit: 'cover',
  display: 'block',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(26, 51, 33, 0.8)', // 어두운 진초록 오버레이
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.4s ease',
};

const linkButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#fff',
  color: '#1a3321',
  textDecoration: 'none',
  borderRadius: '30px',
  fontWeight: 'bold',
  fontSize: '16px',
};

export default TeamMissionSlider;