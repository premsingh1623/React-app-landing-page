import React from 'react';
import'./Home.css';

function home() {
  return(
    <section id="home">
      <div className="container">
        <h1 className="primary">WE UNEARTH DESIGN</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur amet debitis dolorem corporis totam
            sint nisi eius illum animi libero, quidem minima culpa illo beatae consectetur obcaecati neque! Odit.</p>
        <div id="menuToggle">
          <a href="/"><button className="button"></button></a>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* <button className="btn">MOVE IN NOW</button> */}
      </div>
    </section>
  );
}

export default home;
