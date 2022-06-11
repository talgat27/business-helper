import React from 'react'
import './AboutUs.css'
import fileIcon from '../../images/file-icon.png'

function haha() {
    console.log(1);
}

export default function AboutUs() {
    return (
        <div className='about-bg'>
            <div className="about-bg-container">
                <button className="card">
                    <div className='card-inner-content' onClick={e => (e.preventDefault(), haha())}>
                        <div className='img-container'>
                            <img src={fileIcon} alt="fileIcon" width={46} />
                        </div>
                        <h2>Электронный  документооборот</h2>
                        <p>Переход на полностью безбумажный документооборот</p>
                        <div className='line'></div>
                    </div>
                </button>
                <button className="card">
                    <div className='card-inner-content'>
                        <div className='img-container'>
                            <img src={fileIcon} alt="fileIcon" width={46} />
                        </div>
                        <h2>Онлайн корректирование документа </h2>
                        <p>Возможность подписать и внести изменение в онлайн-режиме </p>
                        <div className='line'></div>
                    </div>
                </button>
                <button className="card">
                    <div className='card-inner-content'>
                        <div className='img-container'>
                            <img src={fileIcon} alt="fileIcon" width={46} />
                        </div>
                        <h2>Электронный  документооборот</h2>
                        <p>Переход на полностью безбумажный документооборот</p>
                        <div className='line'></div>
                    </div>
                </button>
            </div>
        </div>
    )
}
