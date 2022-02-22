import React from 'react'
import './home.css';
import vTitle from '../../images/v_title1.png';
import vOne from '../../images/v1.png';
import vTwo from '../../images/v2.png';
import vThree from '../../images/v3.png';
import Background from '../../images/visual_bg.jpg';
import Notice from '../notice/Notice';
// import About from '../about/About';
import Pickup from '../pickup/Pickup';
import Move from '../move/Move';
import Location from '../location/Location';
import Contact from '../contact/Contact';

const Home = () => {
  return (
    <>
      <div className="home" style={{backgroundImage: `url(${Background})`}}>
        <div className="inner">

          <div className="title fade-in">          
            <img src={vTitle} alt="Boxing Perfectly" />
          </div>
          <div className="fade-in">
            <img src={vOne} alt="Packaging 1" className="box1 image" />
          </div>
          <div className="fade-in">
            <img src={vTwo} alt="Packaging 2" className="box2 image" />
          </div>
          <div className="fade-in">
            <img src={vThree} alt="Packaging 3" className="box3 image" />
          </div>      

        </div>
      </div>
      <Notice />
      {/* <About /> */}
      <Pickup />
      <Move />
      <Location />
      <Contact />
    </>
  )
}

export default Home
