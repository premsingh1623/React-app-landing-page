import React, { useState } from 'react';
import './Navbar.css';
import logo from './image/con-re.png'

function Navbar() {
    
    // const toggleButton = document.getElementsByClassName('toggleButton');
    // const navbarLinks = document.getElementsByClassName('navbar-links');

    // toggleButton.addEventListener('click', () => {
    //     navbarLinks.classList.toggle('active')
    // })
    const [Class, setClass] = useState("navbar-links")
     
    const toggleButton = () =>{
        if (Class === "navbar-links"){
            setClass("active")
            console.log("1");
        } else if(Class === "active"){
            setClass("navbar-links")
            console.log("2");
        }
    }

    return (
        <nav className="">
            <div className="navbar-title">
                <a href="/"><img src={logo}></img></a>
            </div>
            <a className= "toggleButton" onClick={toggleButton}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className={Class}>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Info</a></li>
                    <li><a>Documentation</a></li>
                    <li><a>Help</a></li>
                </ul>
            </div>
            <div className="button">
                <button>Contact Us</button>
            </div>
        </nav>

    );
}

export default Navbar;
