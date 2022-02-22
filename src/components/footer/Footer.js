/* eslint-disable */ 

import React from 'react';
import './footer.css';
import Logo from '../../images/clavis_seo.png';

const Footer = () => {
  return (    
    <footer className="footer">
      <div className="inner">

        <ul className="menu">
          <li><a href="#" className="green">Terms 1</a></li>
          <li><a href="#">Terms 2</a></li>
          <li><a href="#">Terms 3</a></li>    
        </ul>

        {/* <div className="btn-group">
          <a href="#" class="btn btn--white">Location</a>
          <a href="#" class="btn btn--white">Contact Us</a>
          <a href="#" class="btn btn--white">Site Map</a>
        </div> */}

        <div className="info">
          <span>Company Number 201-81-21515</span>
          <span>Clavis coporate</span>
          <span>TEL : 1) 123-456-7890 / FAX : 1) 123-456-7890</span>
          <span>CEO : Daniel Song</span>
        </div>
  
        <p className="copyright">
          &copy; <span className="this-year"></span> Daniel Song. All Rights Reserved.
        </p>
        <img src={Logo} alt="" className="logo" />
  
      </div>
    </footer>    
  )
}

export default Footer
