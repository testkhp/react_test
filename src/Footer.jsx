// src/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="donggubat-footer">
      <div className="footer-inner">
        {/* 왼쪽 섹션: 회사 정보 */}
        <div className="footer-info-section">
          <div className="footer-brand">
            <img src="/img/logo_white.png" alt="로고" className="footer-logo-img" />
            {/* <span className="footer-brand-name">동구밭</span> */}
          </div>

          <nav className="footer-nav">
            <a href="#!">이용약관</a>
            <a href="#!">사업자정보확인</a>
            <a href="#!">개인정보 처리방침</a>
            <a href="#!">고객센터</a>
          </nav>

          <div className="company-details">
            <p>(주)동구밭 | 경기도 하남시 미사강변서로 25 (미사테스타타워 지식산업센터 지하 3층 FB329호)</p>
            <p>대표이사 : 노순호, 박상재 | 사업자등록번호 : 114-87-23152 | 통신판매업신고 제2022-경기하남-0453</p>
            <p>제품문의 : 080-023-5454 [평일 AM09:00 ~ 18:00 / 점심시간 : PM12:00 ~ 13:00 / 주말, 공휴일 휴무]</p>
          </div>

          <p className="footer-copyright">Copyright ⓒ 2025 Donggubat inc. all rights reserved.</p>
        </div>

        {/* 오른쪽 섹션: SNS 및 브랜드 문구 */}
        <div className="footer-sns-section">
          <div className="sns-icons">
            <a href="https://www.instagram.com/accounts/login/?next=%2Fdonggubat_story%2F&source=omni_redirect" className="sns-link" target="_blank">
            <FaInstagram />
            </a>
            <a href="https://pf.kakao.com/_KClbV" className="sns-link" target="_blank">
            <RiKakaoTalkFill />
            </a>
            <a href="https://www.youtube.com/channel/UCA7e3vNdS07Cxzy4dQliURA" className="sns-link" target="_blank">
            <FaYoutube />
            </a>
          </div>
          <div className="brand-slogan">
            <p>지구를 위한 진심을 채우는 동구밭,</p>
            <p>당신이 함께하는 지속 가능한 일상의 시작</p>
          </div>
          <a href="#!" className="brand-film-button">동구밭 ESG 브랜드 필름 & 아카이빙</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;