import React from 'react'
import "./LandingPage.css"
import image from "../assets/abcd.png"

export default function LandingPage() {

    return (
        <div className='landing'>
            <section className="main" id="header">
                    <nav className="navbar">
                        <div className="logo-div">
                            <h1 className='logo'>LR.</h1>
                        </div>
                        <ul className="navlinks">
                            <li><a href="#header">HOME</a></li>
                            <li><a href="#hero">ABOUT</a></li>
                            <li><a href="#services">CONTACT US</a></li> 
                            <button class="button-65" role="button">GET STARTED</button>                    
                        </ul>
                    </nav>
                    <div className="hero">
                    <div className="hero--img">
                            <img src={image} alt="why no werk" />
                        </div>  
                        <div className="hero--content">
                            <h1>LOCAL ROOTS.</h1>
                            <h1><span className="multiple-text"></span></h1>
                            <p className='catchphrase'>Discover the Flavor of Your Community with Local Roots: Your Online Destination for Fresh, Locally Sourced Produce and More!</p>
                            <button class="button-65" role="button">GET STARTED</button>
                        </div>   
                    </div>
                    <img className='circle' src="" alt="" />
                </section>
        </div>
    )
}
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>