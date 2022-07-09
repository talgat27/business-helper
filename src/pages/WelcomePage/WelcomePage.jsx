import React from 'react'
import './WelcomePage.css'
import WPbgPic from "../../images/bg-pic3.png";

export default function WelcomePage() {
    return (
        <div className='wp-content-wrapper'>
            <div className="wp-content-container">
                <div className="wp-content">
                    <p className="wp-content-p">
                        Привет,
                        <span className="wp-content-spans"> Alina Dzhakypova</span>!<br/>
                        Продуктивной работы!
                    </p>
                    <img src={WPbgPic} alt="2 people holding puzzle" className="wp-content-img"/>
                </div>
            </div>
        </div>
    )
}
