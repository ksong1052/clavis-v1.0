import React from 'react';
import './header.css';
import { Link } from "react-router-dom";
import Logo from '../../images/clavis_logo.png';
import Badge from '../../images/badge1.jpg';
import Background from '../../images/visual_bg.jpg';
import Button from '@mui/material/Button';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import FaceIcon from '@mui/icons-material/Face';

const Header = () => {
  return (
    <div className="header">
      <div className="inner">

        {/* Header - Logo */}
        <a href="/">            
          <img src={Logo} alt="CLAVIS" className="logo" />
        </a>

        {/* Header - Sub Menu */}
        <div className="sub-menu">
          <ul className="menu">
            <li>
              <Link to="/login" className="link">
                <Button 
                  size="medium" 
                  style={{color:"black"}}
                  startIcon={<FaceIcon />}  
                >Login</Button>              
              </Link>                
            </li>
            <li>
              <Link to="/register" className="link">
                <Button 
                  size="medium" 
                  style={{color:"black"}}
                  startIcon={<HowToRegIcon />}  
                >Register</Button>              
              </Link>                
            </li>
            <li>
              <Link to="/quote" className="link">
                <Button 
                  variant="contained" 
                  size="small" 
                  startIcon={<RequestQuoteIcon />}
                  className="btn btn--reverse"                  
                >
                  Get a quote
                </Button>
              </Link>
            </li>
          </ul>            
          {/* <div className="search">
            <input type="text" />
            <div className="material-icons">search</div>
          </div>            */}
        </div>    

        {/* Header - Main Menu */}
        <ul className="main-menu">
          <li className="item">
            <div className="item__name">ABOUT US</div>
            <div className="item__contents">
              <div className="contents__menu">
                <ul className="inner">
                  <li>
                    <h4>CLAVIS</h4>
                    <ul>
                      <li>Greeting</li>
                      <li>History</li>
                      <li>Location</li>
                    </ul>
                  </li>
                  <li>
                    <h4>SNS</h4>
                    <ul>
                      <li>Facebook</li>
                      <li>Instagram</li>
                      <li>Tweets</li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* <div className="contents__texture">
                <div className="inner">
                  <h4>지점 찾기</h4>
                  <p>찾으시는 지점을 추천해 드립니다.</p>
                  <h4>최상의 이사 방법</h4>
                  <p>여러 가지 해결책을 제공해 드립니다.</p>
                </div>
              </div> */}
            </div>
          </li>
          <li className="item">
            <div className="item__name">MOVING SERVICES</div>
            <div className="item__contents">
              <div className="contents__menu">
                <ul className="inner">
                  <li>
                    <h4>TO KOREA</h4>
                    <ul>
                      <li>Greeting</li>
                      <li>History</li>
                      <li>Location</li>
                    </ul>
                  </li>
                  <li>
                    <h4>LOCAL</h4>
                    <ul>
                      <li>West</li>
                      <li>Middle</li>
                      <li>East</li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* <div className="contents__texture">
                <div className="inner">
                  <h4 className="new">스타벅스 티바나</h4>
                  <p>다양한 찻잎과 향신료 등 개성있는 재료로 새로운 맛과 향의 티를 선보입니다.</p>
                </div>
              </div> */}
            </div>
          </li>
          <li className="item">
            <div className="item__name">STORAGE SERVICE</div>
            <div className="item__contents">
              <div className="contents__menu">
                <ul className="inner">
                  <li>
                    <h4>BIG</h4>
                    <ul>
                      <li>More than 500ft.</li>
                      <li>Between 300 and 500ft.</li>
                      <li>Less than 300ft.</li>
                    </ul>
                  </li>
                  <li>
                    <h4>SMALL</h4>
                    <ul>
                      <li>More than 200ft.</li>
                      <li>Between 100 and 200ft.</li>
                      <li>Less than 100ft.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* <div className="contents__texture">
                <div className="inner">
                  <h4>매장 찾기</h4>
                  <p>보다 빠르게 매장을 찾아보세요.</p>
                  <h4 className="new">청담스타</h4>
                  <p>스타벅스 1,000호점인 청담스타점을 만나보세요.</p>
                </div>
              </div> */}
            </div>
          </li>
          <li className="item">
            <div className="item__name">CAR SHIPPING</div>            
          </li>
          <li className="item">
            <div className="item__name">FAQ</div>            
          </li>
          <li className="item">
            <div className="item__name">CONTACT US</div>            
          </li>
        </ul>      

      </div>

      <div className="badges">
        <div className="badge">
          <Link to="/event" className="link">
            <img src={Badge} alt="Badge" />              
          </Link>            
        </div>
      </div>
    </div>
  )
}

export default Header
