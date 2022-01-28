import React from 'react';
import "./Footer.css";

import Twitter from "../Images/Twitter.svg";
import LinkedIn from "../Images/LinkedIn.svg";


function Footer(){
        return(
            <div>
                <footer>

                <div className='first-row'>
                        <a href="/">Privacy policy</a>
                        <ul>
                            <img src={LinkedIn} alt="LinkedIn icon"/>
                            <img src={Twitter} alt="Twitter icon"/>
                        </ul>
                </div>

                <div className='second-row'><p className='white'>© Mission Encodeable 2021</p></div>


                </footer>
            </div>
        )
}

export default Footer;