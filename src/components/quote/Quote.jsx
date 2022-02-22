import React from 'react'
import './quote.css';
import QuoteImage from "../../images/quote.svg";
import Background from '../../images/v_bg2.jpg';
import TextField from '@mui/material/TextField';

const Quote = () => {
  return (
    <div className="quote">
      <div className="inner" style={{backgroundImage: `url(${Background})`}}>

        <h1 className="quoteTitle">Get a Quote</h1>
        <div className="left">
          <img src={QuoteImage} alt="" className="icon" />            
        </div>
        <div className="center">
          <div className="line" />            
        </div>
        <div className="right">
          <div className="quoteForm">
            <TextField id="standard-basic" label="Size" variant="standard" className="input" />
            <TextField id="standard-basic" label="Email" variant="standard" className="input" />
            <TextField id="standard-basic" label="Floor" variant="standard" className="input" />
            <button className="btn">Send</button>
          </div>
        </div>

        {/* <div className="quoteForm">
          <TextField id="standard-basic" label="Size" variant="standard" className="input" />
          <TextField id="standard-basic" label="Email" variant="standard" className="input" />
          <TextField id="standard-basic" label="Floor" variant="standard" className="input" />
          <button className="btn">Send</button>
        </div>   */}

      </div>
    </div>
  )
}

export default Quote