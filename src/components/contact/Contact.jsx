import React, { useRef, useState } from 'react';
import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import Background from '../../images/v_bg2.jpg';
import emailjs from 'emailjs-com';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import TextField from '@mui/material/TextField';

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    /* https://www.emailjs.com/docs/examples/reactjs/ */
    // Emailjs 설정
    emailjs
    .sendForm(
      'service_c80stwe', 
      'template_h7o28yl', 
      formRef.current, 
      'user_McIhcCjvmqmFdqjWhg6nf'
      )
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      }
    );    
  };  

  return (
    <div className="c" style={{backgroundImage: `url(${Background})`}}>
      <div className="inner">
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">
              What's your stroy?<br /> 
            </h1>
            <p className="c-desc">Let's discuss your moving.<br /> Always available for the best moving service. </p>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" /> +1 123-456-7890
              </div>
              <div className="c-info-item">
                <img src={Email} alt="" className="c-icon" /> ksong1052@gmail.com
              </div>
              <div className="c-info-item">
                <img src={Address} alt="" className="c-icon" /> 123 ABC Street, Calary AB
              </div>
            </div>
          </div>
          <div className="c-right">
            <form ref={formRef} onSubmit={handleSubmit} className="form">
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject"/>
              <input type="text" placeholder="Email" name="user_email"/>
              <textarea rows="5" placeholder="Message" name="message" />
              {/* <TextField id="user_name" label="Username" variant="standard" className="input" name="user_name" />
              <TextField id="user_subject" label="Subject" variant="standard" className="input" name="user_subject" />
              <TextField id="user_email" label="Email" variant="standard" className="input" name="user_email" />
              <TextareaAutosize
                id="message"
                name="message"
                aria-label="minimum height"
                minRows={3}
                placeholder="Message"
                style={{ width: 200 }}
                className="textarea"
              /> */}
              <button className="btn">Submit</button>
              {done && "Thank you ..."}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
