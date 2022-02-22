/* eslint-disable */ 

import React from 'react';
import './notice.css';
// import Grid from '@mui/material/Grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slide1 from '../../images/slide1.jpg';
import Slide2 from '../../images/slide2.jpg';
import Slide3 from '../../images/slide3.jpg';
import Slide4 from '../../images/slide4.jpg';
import Slide5 from '../../images/slide5.jpg';

const Notice = () => {
  return (    
    <section className="notice">

      <div className="notice-line">
        <div className="bg-left"></div>
        <div className="bg-right"></div>
        <div className="inner">
          <div className="inner__left">
            <h2>Notice</h2>
            <div className="swiper-container">
              <div class="swiper-wrapper">                
                <div class="swiper-slide">
                  <a href="#">크리스마스 & 연말연시 매장 영업시간 변경 안내</a>
                </div>
                <div class="swiper-slide">
                  <a href="#">[당첨자발표] 영수증 이벤트</a>
                </div>
                <div class="swiper-slide">
                  <a href="#">Application 버전 업데이트</a>
                </div>
                <div class="swiper-slide">
                  <a href="#">전자 연수증 이벤트</a>
                </div>
              </div>              
            </div>
            <a href="#" className="notice-line__more">              
              <AddCircleIcon fontSize="large" style={{color:"white"}} className=".material-icons" />              
            </a>
          </div>
          <div className="inner__right">
            <h2>Christmas Promotion</h2>
            <div className="toggle-promotion">              
              <FileUploadIcon fontSize="large" className=".material-icons" />              
            </div>
          </div>
        </div>
      </div>

      <div className="promotion">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={Slide1} alt="2022 New Year 1" />
              <a href="#" className="btn">자세히 보기</a>
            </div>
            <div className="swiper-slide">
              <img src={Slide2} alt="2022 New Year 2" />
              <a href="#" className="btn">자세히 보기</a>
            </div>
            <div className="swiper-slide">
              <img src={Slide3} alt="2022 New Year 3" />
              <a href="#" className="btn">자세히 보기</a>
            </div>
            <div className="swiper-slide">
              <img src={Slide4} alt="2022 New Year 4" />
              <a href="#" className="btn">자세히 보기</a>
            </div>
            <div className="swiper-slide">
              <img src={Slide5} alt="2022 New Year 5" />
              <a href="#" className="btn">자세히 보기</a>
            </div>
          </div>          
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-prev">          
          <ArrowBackIcon fontSize="large" className=".material-icons" />          
        </div>
        <div class="swiper-next">          
          <ArrowForwardIcon fontSize="large" className=".material-icons" />          
        </div>
      </div>

    </section>    
  )
}

export default Notice
