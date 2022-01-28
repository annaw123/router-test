import React from 'react'
import "./Navbar.css"
import white_logo_orange_arrows from '../Images/White logo orange arrows.svg';
import wavy_bottom from "../Images/Wavy bottom.svg";


function Navbar(){
    return(
        <div>
            <div className="navbar">
                <img src={white_logo_orange_arrows} alt="Mission Encodeable logo" className="logo"></img>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </nav>
                
            </div>
            <div className="wavy_container">
                <img src={wavy_bottom} alt="wavy_underline"className='wavy_bottom'></img>
            </div>
            
        </div>
    )
}

export default Navbar