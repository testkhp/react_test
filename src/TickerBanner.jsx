import React, { useEffect, useState, useRef } from 'react';
import './TickerBanner.css';

const TickerBanner = () => {
  const messages = [
    '발달장애인과 함께 만드는 지속가능한 일상, 동구밭',
    '플라스틱 프리, 고체 비누로 바꾸는 건강한 습관',
    '지구와 사람을 생각하는 무표백의 진심을 담았습니다',
    '장애인과 비장애인이 동료가 되어 함께 꿈꾸는 일터',
    '씻어내는 것만으로도 충분한 사회적 가치를 경험하세요',
  ];

  // 마지막에 첫 번째 메시지를 복제하여 자연스러운 루프 구성
  const extendedMessages = [...messages, messages[0]];

  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true); // 이동 시작 시 애니메이션 활성화
      setIndex((prev) => prev + 1);
    }, 3000); // 3초 대기

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // 복제된 마지막 슬라이드에 도달했을 때
    if (index === extendedMessages.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false); // 애니메이션을 끄고
        setIndex(0); // 순식간에 진짜 첫 번째 위치로 이동
      }, 600); // transition 시간인 0.6초와 일치시켜야 자연스럽습니다.
    }
    return () => clearTimeout(timeoutRef.current);
  }, [index, extendedMessages.length]);

  return (
    <div className="top-event-banner">
      <div
        className="ticker-wrapper"
        style={{
          transform: `translateY(-${index * 40}px)`,
          transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none',
        }}
      >
        {extendedMessages.map((msg, i) => (
          <div key={i} className="ticker-item">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerBanner;
