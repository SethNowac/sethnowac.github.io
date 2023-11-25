import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nk5vxw1', 'template_kjjl6ti', form.current, 'Sgn4ZExHP3YJIQ--i')
      .then((result) => {
          console.log(result.text);
          document.getElementById("email-form").reset();
          document.getElementById("result-message").innerText = "Email sent successfully";
          document.getElementById("result-message").style.color = 'green';
      }, (error) => {
          console.log(error.text);
          document.getElementById("result-message").innerText = "Error sending email: " + error.text;
          document.getElementById("result-message").style.color = 'red';
      });
  };

  return (
    <div style={{
        justifyContent: "center",
        textAlign: "center"
    }}>
        <h1 style={{
                color: "#dddfea",
                fontSize: "70px",
                fontWeight: "bold",
                marginBottom: "60px",
                marginTop:"80px",
                textAlign: "center",
        }}>Contact</h1>
        <form id='email-form' ref={form} onSubmit={sendEmail}>
            <div id='styled-form'>
                <input className='styled-textbox' type="text" name="user_name" placeholder='Username' />
                <input className='styled-textbox' type="email" name="user_email" placeholder='Email' />
                <textarea className='styled-textbox' name="message" placeholder='Message' />
                <p id='result-message'></p>
                <input id='styled-button' type="submit" value="Send" />
            </div>
        </form>
    </div>
  );
};
