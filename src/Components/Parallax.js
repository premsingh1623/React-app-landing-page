import React from 'react';
import './Parallax.css';

function Parallax() {
  return(
    <div className="Para">
        
        <section id="about1" >
          <div id="about2">
            <div className="me">
              <div className="myself">
                  <h2>We are <strong>Origanous</strong></h2>
                  <p>I help you build brand for your business at an affordable price. Thousands of clients
                    have procured exceptional results while working with our dedicated team. when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book.</p>
                  <p>Delivering work within time and budget which meets client’s requirements is our moto.
                    Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
                  </p>
              </div>
              <div className="detail">
                  <p><b>Brand:</b> Origanous</p>
                  <span className="span"></span>
                  <p><b>Email:</b> <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=chat@origanous.com"><strong>chat@premnarayan.com</strong></a></p>
                  <span className="span"></span>
                  <p><b>Since:</b> 1990</p>
                  <span className="span"></span>
                  <p><b>From:</b> jharki, vietnam</p>
              </div>
          </div>
          <div className="client">
              <div id="box2">
                  <h4>10+</h4>
                  <p>Years Expertise</p>
              </div>
              <span></span>
              <div className="box2">
                  <h4>250+</h4>
                  <p>Happy Clients</p>
              </div>
              <span></span>
              <div className="box2">
                  <h4>650+</h4>
                  <p>Delivery Done</p>
              </div>
              <span></span>
              <div className="box2">
                  <h4>38</h4>
                  <p>Certified Products</p>
              </div>
          </div>
        </div>
      </section>
        
    </div>
  );
}

export default Parallax;
