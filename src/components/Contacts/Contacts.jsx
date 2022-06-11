import React from 'react'
import fileIcon from '../../images/file-icon.png'
import './Contacts.css'

export default function Contacts(){
    return (
        <div className='contacts-bg'>
            <div className="contacts-bg-container">
                <button className="card">
                    <div className='card-inner-content'>
                        <div className='img-container'>
                            <img src={fileIcon} alt="fileIcon" width={46}/>
                        </div>
                        <h2>Contacts Contacts Contacts</h2>
                        <p>Contacts Contacts Contacts Contacts Contacts</p>
                        <div className='line'></div>
                    </div>
                </button>
                <button className="card">
                    <div className='card-inner-content'>
                        <div className='img-container'>
                            <img src={fileIcon} alt="fileIcon" width={46} />
                        </div>
                        <h2>Contacts Contacts Contacts</h2>
                        <p>Contacts Contacts Contacts Contacts Contacts</p>
                        <div className='line'></div>
                    </div>
                </button>
                <button className="card">
                    <div className='card-inner-content'>
                        <div className='img-container'>
                            <img src={fileIcon} alt="fileIcon" width={46} />
                        </div>
                        <h2>Contacts Contacts Contacts</h2>
                        <p>Contacts Contacts Contacts Contacts Contacts</p>
                        <div className='line'></div>
                    </div>
                </button>
            </div>
        </div>
    )
}