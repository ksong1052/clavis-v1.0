import React from 'react'
import './about.css';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="bg-left"></div>
      <div className="bg-right"></div>
      <div className="inner" style={{backgroundImage: 'url("../../images/about1.png")'}}> 

        <div className="btn-group">
          <div className="btn btn-white sign-up">
            <Link to="/register">
              Register
            </Link>  
          </div>
          <div className="btn btn-white sign-in">
            <Link to="/login">
              Login
            </Link>
          </div>
          {/* <div className="btn quote">Get a quote</div> */}
        </div> 

      </div> 
    </div>
  )
}

export default About
