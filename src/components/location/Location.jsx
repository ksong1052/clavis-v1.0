/* eslint-disable */ 

import React from 'react';
import './location.css';
import Texture from '../../images/find_store_texture2.png';
import PictureOne from '../../images/box16.jpg';
import PictureTwo from '../../images/car6.jpg';
import Background from '../../images/find_store_bg.jpg';

const Location = () => {
  return (    
    <section className="location scroll-spy" style={{backgroundImage: `url(${Background})`}}>
      <div className="inner">

        <img src={Texture} alt="" className="texture1" />
        <img src={PictureOne} alt="" className="picture picture1 back-to-position to-right delay-0" />
        <img src={PictureTwo} alt="" className="picture picture2 back-to-position to-right delay-1" />                

        <div className="text-group">
          <div className="title back-to-position to-left delay-2">
            Pick the best moving services
          </div>
          <div className="description back-to-position to-left delay-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nemo mollitia amet consequatur culpa quae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nemo mollitia amet consequatur culpa quae.
          </div>
          <div className="more back-to-position to-left delay-3">
            <a href="#" className="btn">Location</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Location
