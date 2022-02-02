import React from 'react';
import'./Home.css';

function home() {
  return(
    <section id="home">
      <div class="container">
        <h1 class="primary">WE UNEARTH DESIGN</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur amet debitis dolorem corporis totam
            sint nisi eius illum animi libero, quidem minima culpa illo beatae consectetur obcaecati neque! Odit.</p>
        <div id="menuToggle">
          <a href="/"><button class="button"></button></a>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* <button class="btn">MOVE IN NOW</button> */}
      </div>
    </section>
  );
}

export default home;
