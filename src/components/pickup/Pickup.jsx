/* eslint-disable */ 

import React from 'react';
import './pickup.css';
import PickupOne from '../../images/pickup_person.png';
import PickupOneTwo from '../../images/pickup_person_2.png';
import PickupTwo from '../../images/moving_person.png';
import Logo from '../../images/reserve_logo.png';
import Background from '../../images/reserve_bg.jpg';

const Pickup = () => {
  return (
    <>
      <section className="service-pickup1 scroll-spy">
        <div className="inner">

          <img src={PickupOne} alt="" className="pickup back-to-position to-right delay-0" />
          <img src={PickupOneTwo} alt="" className="floating" />

          <div className="text_group">
            <div className="title back-to-position to-left delay-1">
              Pick Up
            </div>
            <div className="description back-to-position to-left delay-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
              Nemo mollitia amet consequatur culpa quae.
            </div>
            <div className="more back-to-position to-left delay-3">
              <a href="#" className="btn">Detail</a>
            </div>
          </div>

        </div>
      </section>

      <section className="service-pickup2 scroll-spy" style={{backgroundImage: `url(${Background})`}}>
        <div className="inner">
          
          <img src={Logo} alt="" className="pickup2_logo back-to-position to-right delay-0" />

          <div className="text_group">
            <div className="title back-to-position to-right delay-1">
              Door to Door
            </div>
            <div className="description back-to-position to-right delay-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
              Nemo mollitia amet consequatur culpa quae.
            </div>
            <div className="more back-to-position to-right delay-2">
              <a href="#" className="btn btn--gold">Detail</a>
            </div>
          </div>

          <img src={PickupTwo} alt="" className="pickup2 back-to-position to-left delay-3" />

        </div>
      </section>
    </>
  )
}

export default Pickup
