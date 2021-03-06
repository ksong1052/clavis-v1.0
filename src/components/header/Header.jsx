import React from 'react';
import './header.css';
import { Link } from "react-router-dom";
import Logo from '../../images/clavis_logo.png';
import Badge from '../../images/badge1.jpg';
// import Background from '../../images/visual_bg.jpg';
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
                  <h4>?????? ??????</h4>
                  <p>???????????? ????????? ????????? ????????????.</p>
                  <h4>????????? ?????? ??????</h4>
                  <p>?????? ?????? ???????????? ????????? ????????????.</p>
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
                  <h4 className="new">???????????? ?????????</h4>
                  <p>????????? ????????? ????????? ??? ???????????? ????????? ????????? ?????? ?????? ?????? ???????????????.</p>
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
                  <h4>?????? ??????</h4>
                  <p>?????? ????????? ????????? ???????????????.</p>
                  <h4 className="new">????????????</h4>
                  <p>???????????? 1,000????????? ?????????????????? ???????????????.</p>
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
