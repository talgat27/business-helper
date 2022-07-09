import React from 'react'
import AboutUs from '../AboutUs/AboutUs';
import Clients from '../Clients/Clients';
import Contacts from '../Contacts/Contacts';
import './Tabs.css'

export default function Tabs({SetTab}) {


    return (
        <div className="tabs-wrapper">
            <div className='tabs-container'>
                <button className='btn' onClick={e => {e.preventDefault(SetTab(<AboutUs />));}}>O компании</button>
                <button className='btn' onClick={e => {e.preventDefault(SetTab(<Clients />));}}>Клиенты</button>
                <button className='btn' onClick={e => {e.preventDefault(SetTab(<Contacts />));}}>Контакты</button>
            </div>
        </div>
    )
}