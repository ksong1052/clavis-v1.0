import React from 'react'
import { Link } from "react-router-dom";
import './event.css';

const Event = () => {
  return (
    <div className="event">
      <div className="inner">
        <h1 className="eventTitle">Special Event</h1>        
        <div className="eventContent">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Cumque ipsam repudiandae at nisi provident eos et laboriosam 
            exercitationem accusantium accusamus assumenda debitis minus, 
            placeat, quod deleniti dolore dolores labore. Doloribus?
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Cumque ipsam repudiandae at nisi provident eos et laboriosam 
            exercitationem accusantium accusamus assumenda debitis minus, 
            placeat, quod deleniti dolore dolores labore. Doloribus?
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Cumque ipsam repudiandae at nisi provident eos et laboriosam 
            exercitationem accusantium accusamus assumenda debitis minus, 
            placeat, quod deleniti dolore dolores labore. Doloribus?
          </p>           
        </div>  
        <Link to="/" className="link">
          <button className="btn">Go Event !</button>              
        </Link>        
      </div>
    </div>
  )
}

export default Event
