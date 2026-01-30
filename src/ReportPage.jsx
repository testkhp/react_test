import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Report.css';
import TeamMissionSlider from './MySlider';

// [1] 숫자 카운팅 훅 (작은 숫자도 정상 표시되도록 수정)
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // end가 0일 경우 바로 0 반환, 그 외엔 계산
      const currentCount = end === 0 ? 0 : Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return [count.toLocaleString(), domRef];
};

// [2] CSS 보존을 위한 숫자 출력 컴포넌트
const StatNum = ({ end, unit, prefix = '' }) => {
  const [value, ref] = useCountUp(end);
  return (
    <div className="num" ref={ref}>
      {prefix}
      {value}
      <span>{unit}</span>
    </div>
  );
};

// [3] 상세 페이지 내 숫자용 (훅 에러 방지)
const DetailNum = ({ end }) => {
  const [value, ref] = useCountUp(end);
  return <b ref={ref}>{value}</b>;
};

const ReportPage = () => {
  const [isReportVisible, setIsReportVisible] = useState(false);
  const navigate = useNavigate();

  const showReport = () => {
    setIsReportVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hideReport = () => {
    setIsReportVisible(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="report-container">
      {/* --- 섹션 1, 2: 메인 화면 --- */}
      {!isReportVisible && (
        <>
          <div className="section-header">
            <div className="title-area">
              <h2>
                숫자로 보는
                <br />
                동구밭 이야기
              </h2>
              <button onClick={showReport} className="btn-main">
                성과 자세히 보기 &gt;
              </button>
            </div>

            <div className="stats-grid">
              <div className="stat-box card-1">
                <StatNum end={520887} unit="kg" />
                <div className="label">동구밭이 줄이고 있는 플라스틱 양</div>
                <div className="desc">
                  동구밭은 플라스틱 쓰레기가 없는 브랜드예요.
                  <br />
                  동구밭 비누 한개를 사용할때마다 16.2g그램의 플라스틱이 사라져
                  건강한 변화를 만들어가요
                </div>
              </div>

              <div className="stat-box card-2">
                <StatNum end={610728457} unit="원" />
                <div className="label">동구밭의 기부금 총액</div>
                <div className="desc">
                  동구밭은 모두 함께 행복한 사회를 만들기 위해 노력해요
                </div>
              </div>

              <div className="stat-box card-3">
                <StatNum end={94176} unit="hr" />
                <div className="label">
                  동구밭이
                  <br />
                  장애사원과 함께한 시간
                </div>
              </div>

              <div className="stat-box card-4">
                {/* 1회 문제 해결: prefix 사용 */}
                <StatNum end={1} unit="회" prefix="매달 " />
                <div className="label">
                  환경 정화를 위해
                  <br />매 달 플로깅을 실천해요
                </div>
              </div>

              <div className="stat-box card-5">
                <StatNum end={1000} unit="시간" />
                <div className="label">
                  열을 가하지 않고
                  <br />
                  1,000시간 동안
                  <br />
                  천천히 숙성시켜요
                </div>
              </div>

              <div className="stat-box card-6">
                <StatNum end={100} unit="%" />
                <div className="label">
                  동물실험 일절 배제,
                  <br />
                  가치를 100% 보존해요
                </div>
              </div>

              <div className="stat-box card-7">
                <StatNum end={0} unit="%" />
                <div className="label">
                  정제수 대신 유효 성분을 고농축하여 담아냈어요
                </div>
              </div>
            </div>
          </div>

          <div className="story-section">
            <div className="title-area">
              <h2>
                카드로 보는
                <br />
                동구밭의
                <br />
                브랜드 스토리
              </h2>
              {/* <button className="btn-main" onClick={() => navigate('/brand')}>
                동구밭 소개 보기 &gt;
              </button> */}
            </div>
            <div className="card-wrapper">
              <div
                className="story-card bg-v"
                onClick={() => navigate('/brand')}
              >
                <h3>동구밭의 가치</h3>
                <p>
                  환경과 지구를 위해서라면, 절대 타협하지 않는 동구밭 만의
                  고집이에요
                </p>
                <div className="btn-go">바로가기 +</div>
              </div>
              <div
                className="story-card bg-a"
                onClick={() => navigate('/artist')}
              >
                <h3>동구밭의아티스트</h3>
                <p>동구밭의 심장, 우리의 아티스트를 소개해 드릴게요.</p>
                <div className="btn-go">바로가기 +</div>
              </div>
              <div className="story-card bg-r" onClick={showReport}>
                <h3>동구밭 리포트</h3>
                <p>
                  당신의 믿음에 확신을 더하는, 숫자로 보는 동구밭 이야기예요.
                </p>
                <div className="btn-go">바로가기 +</div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* --- 섹션 3: 리포트 상세 (정상 작동하도록 컴포넌트화) --- */}
      {isReportVisible && (
        <div className="report-detail-section">
          <div className="report-title">
            <h2>숫자로 보는 동구밭 이야기</h2>
            <p>
              지속가능한 미래와 지구를 위해 기여해 온 동구밭의 누적 기록입니다.
            </p>
          </div>
          <div className="report-grid">
            <div className="report-box gold">
              <div className="subject">동구밭의 총 기부 금액</div>
              <div className="value">
                <DetailNum end={610728457} /> <span>원</span>
              </div>
            </div>
            <div className="report-box brown">
              <div className="subject">동구밭의 기부 제품 수</div>
              <div className="value">
                <DetailNum end={126527} /> <span>개</span>
              </div>
            </div>
            <div className="report-box light-gold">
              <div className="subject k">동구밭의 플라스틱 프리</div>
              <div className="data-row">
                <span>우리나라에서 연간 사용되는 플라스틱</span>
                <b><DetailNum end={60000000}/> kg</b>
              </div>
              <div className="data-row">
                <span>동구밭 비누 하나로 줄이는 플라스틱</span>
                <b><DetailNum end={16.2}/> g</b>
              </div>
              <div className="data-row" style={{ border: 'none' }}>
                <span>동구밭이 제품으로 줄인 총 플라스틱</span>
                <b style={{ color: '#1a3321' }}>
                  <DetailNum end={520887} /> kg
                </b>
              </div>
            </div>
            <div className="image-placeholder">
              <img src="/img/report2-1.png" alt="비누" />
            </div>
            <div className="image-placeholder">
              <img src="/img/report2-2.png" alt="아티스트" />
            </div>
            <div className="report-box mint">
              <div className="subject k">동구밭의 아티스트 (장애사원)</div>
              <div className="data-row">
                <span>최근 5년 이내 동구밭 퇴사 아티스트 수</span>
                <b><DetailNum end={0}/> 명</b>
              </div>
              <div className="data-row">
                <span>전 직원 대비 정규직 아티스트의 비중</span>
                <b><DetailNum end={50}/> % 이상</b>
              </div>
              <div className="data-row" style={{ border: 'none' }}>
                <span>동구밭 아티스트와 함께 한 시간</span>
                <b><DetailNum end={94176} /> hr</b>
              </div>
            </div>
            <div className="report-box water-save">
              <div className="subject k">동구밭의 물 절약과 자원 순환</div>


              <div className="data-row">
                <span>비누바 1개 사용으로 절약하는 플라스틱(500ml) 병</span>
                <b><DetailNum end={3} /> 개</b>
              </div>
              <div className="data-row">
                <span>비건 인증을 받은 동구밭의 제품 수</span>
                <b><DetailNum end={30} /> 종</b>
              </div>
              <div className="data-row" style={{ border: 'none' }}>
                <span>정제수 미사용! 비누바 1개 당 절약되는 수자원</span>
                <b><DetailNum end={500}/> ml</b>
              </div>


            </div>
            <div className="image-placeholder">
              <img src="/img/report2-3.png" alt="동구밭 제품" />
            </div>
          </div>
          <div className="report-footer">
            <div className="update-date">업데이트 일시 : 2026. 01. 기준</div>
            <button onClick={hideReport} className="btn-back">
              이전으로 돌아가기
            </button>
          </div>
        </div>
      )}

      {/* --- 섹션 4: 뉴스 --- */}
      {!isReportVisible && (
        <div className="news-section">
          <h2 style={{ marginBottom: '30px', fontSize: '26px' }}>
            키워드로 보는 동구밭 뉴스
          </h2>
          <TeamMissionSlider />
        </div>
      )}
    </div>
  );
};

export default ReportPage;
