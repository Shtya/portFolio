import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import avatar from '../img/profile.jpg'


const Home = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a241ibo', 'template_o6vlofm', form.e, 'NuQnsm_o-JAeio3Uv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='HOME '>

    <section className="home" id="home">
      <div className="cont">
        <div className="shap">
          <span className="line"></span>
          <span className="left"></span>
          <span className="right"></span>
          <img src={avatar} alt="" />
        </div>
        {/* <h2 data-strok="Ahmed ShTYa">Ahmed ShTYa</h2> */}
        <ul>
          <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100008364883535"><i className="fa-brands fa-facebook"></i></a></li>
          <li><a target="_blank" href="https://mail.google.com/mail/u/0/#inbox"><i className="fa-solid fa-envelope"></i></a></li>
          <li><a target="_blank" href="https://wa.me/01551495772"><i className="fa-brands fa-whatsapp"></i></a></li>
          <li><a target="_blank" href="https://github.com/Shtya"><i className="fa-brands fa-github"></i></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/ahmed-abdelrhman-78bb18230/"><i className="fa-brands fa-linkedin"></i></a></li>
        </ul>
        <a className='Download' href="AhmedShtya.pdf" download>Download CV</a>
        </div>
      </section>
      


    </div>
  )
}

export default Home

