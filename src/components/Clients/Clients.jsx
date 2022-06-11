import React from 'react'
import fileIcon from '../../images/file-icon.png'
import './Clients.css'

export default function Clients(){
    return (
        <div className='clients-bg'>
            <div className="clients-bg-container">
                <button className="card">
                    <div className='card-inner-content'>
                        <div className='img-container'>
                            <img src={fileIcon} alt="fileIcon" width={46}/>
                        </div>
                        <h2>Clients Clients Clients</h2>
                        <p>Clients Clients Clients Clients Clients</p>
                        <div className='line'></div>
                    </div>
                </button>
                <button className="card">
                    <div className='card-inner-content'>
                        <div className='img-container'>
                            <img src={fileIcon} alt="fileIcon" width={46} />
                        </div>
                        <h2>Clients Clients Clients</h2>
                        <p>Clients Clients Clients Clients Clients </p>
                        <div className='line'></div>
                    </div>
                </button>
                <button className="card">
                    <div className='card-inner-content'>
                        <div className='img-container'>
                            <img src={fileIcon} alt="fileIcon" width={46} />
                        </div>
                        <h2>Clients Clients Clients</h2>
                        <p>Clients Clients Clients Clients Clients</p>
                        <div className='line'></div>
                    </div>
                </button>
            </div>
        </div>
    )
}
