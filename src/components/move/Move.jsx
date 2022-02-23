/* eslint-disable */ 

import React from 'react'
import './move.css';
import Front from '../../images/front.png';
import Back from '../../images/back1.png';
import Abroad from '../../images/abroad.jpg';
import Truck from '../../images/truck1.jpg';

const Move = () => {
  return (
    <>
      <section className="favorite-move1 scroll-spy" style={{backgroundImage: `url(${Abroad})`}}>
        <div className="inner">

          <div className="text-group">
            <div className="title back-to-position to-right delay-0">
              Pick!<br /> what you want
            </div>
            <div className="description back-to-position to-right delay-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo mollitia amet consequatur culpa quae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo mollitia amet consequatur culpa quae.
            </div>
            <div className="more back-to-position to-right delay-2">
              <a href="#" className="btn btn--white">Detail</a>
            </div>
          </div>

        </div>
      </section>

      <section className="favorite-move2" style={{backgroundImage: `url(${Truck})`}}>
        <div className="inner">

          <div className="medal">
            <div className="front">
              <img src={Front} alt="" />
            </div>
            <div className="back">
              <img src={Back} alt="" />
              <a href="#" className="btn btn--gold">Location</a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Move
