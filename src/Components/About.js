import React from 'react';
import './About.css';
import image from './image/image2.webp';

function About() {
  return(
    <section id="about">

        <div class="about-heading">
            <div>
                <p>Hello Grocery , Welome to my Organic People</p>
            </div>
            <div>
                <i class="fa fa-bell-o"></i>
                <i class="fa fa-calendar-check-o"></i>
                <i class="fa fa-search"></i>
            </div>
        </div>

        <div>
            <h1>Know our Products More</h1>
        </div>

        <div class="about-detail">
            <div class="about-item1">
                <div>
                    <img src={image} width="150" height="150" alt="" />
                </div>
                <div>
                    <div>
                        <h6>lorem ipsum solem it</h6>
                        <p>123 projets</p>
                    </div>
                    <div class="about-cross">
                        <a href="/" >&times;</a>
                    </div>
                </div>
            </div>
            <div class="about-item2">
                <div class="item21">
                    <div>
                        <h6>lorem local desk</h6>
                        <p>123 projets</p>
                        <h6>lorem ipsum</h6>
                    </div>
                    <div>
                        <img src={image} width="50" height="50" alt="" />
                    </div>
                </div>
                <div class="item22">
                    <div>
                        <img src={image} width="50" height="50" alt="" />
                        <h6>lorem local</h6>
                        <p>projects</p>
                    </div>
                    <div>
                        <img src={image} width="50" height="50" alt="" />
                        <h6>lorem local</h6>
                        <p>projects</p>
                    </div>
                </div>
            </div>
            <div class="about-item3">
                <div class="item31">
                    <h5>What's going on</h5>
                    <p>Have a Organic Day</p>
                    <h6>32'</h6>
                </div>
                <div class="item32 about-cross">
                    <a href="/" >&times;</a>
                </div>
            </div>
        </div>

        <div>
            <h1>Latest Upcoming Products</h1>
        </div>

        <div class="about-detail">
            <div class="about-item4">
                <div class="item31">
                    <h5>What's going on</h5>
                    <p>Need Something</p>
                    <h6>32'</h6>
                </div>
                <div class="item42 item32 about-cross">
                    <a href="/" >&times;</a>
                </div>
            </div>
            <div class="about-item5">
                <h5>100%</h5>
                <p>Organic Products</p>
            </div>
            <div class="about-item6">
                <p>Sold Over</p>
                <h5>$ 5,000</h5>
                <p>Products</p>
            </div>
        </div>
    </section>
  );
}

export default About;
