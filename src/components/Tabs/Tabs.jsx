import React from 'react'
import { Link } from 'react-router-dom'
import './Tabs.css'

export default function Tabs() {
    return (
        <div className="header-wrapper">
            <div className='header-container'>
                <Link to="/AboutUs/AboutUs">
                    <button className='btn'>O компании</button>
                </Link>
                <Link to="/Clients/Clients">
                    <button className='btn'>Клиенты</button>
                </Link>
                <Link to="/Contacts/Contacts">
                    <button className='btn'>Контакты</button>
                </Link>
            </div>
        </div>
    )
}