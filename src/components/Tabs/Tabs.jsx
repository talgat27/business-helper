import React from 'react'
import { Link } from 'react-router-dom'

export default function Tabs() {
    return (
        <div className="header">
            <div>
                <Link to="/AboutUs/AboutUs">
                    <button>O компании</button>
                </Link>
                <Link to="/Clients/Clients">
                    <button>Клиенты</button>
                </Link>
                <Link to="/Contacts/Contacts">
                    <button>O компании</button>
                </Link>
            </div>
        </div>
    )
}