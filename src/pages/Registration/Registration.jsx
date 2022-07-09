import React from 'react'
import { Link } from 'react-router-dom'
import './Registration.css'

export default function Registration() {
    return (
        <div className='registration-wrapper'>
            <div className="registration-container">
                <div className='registration-form'>
                    <div className="registration-form-title">
                        <p className="registration-form-title-p">Регистрация</p>
                    </div>
                    <div className='registration-form-content'>
                        <div className='registration-form-content-wrapper'>
                            <label id='text' className="registration-form-content-label">
                                Компания
                            </label>
                            <input type="text" name="email" id='email' className="registration-form-content-input" />
                        </div>
                        <div className='registration-form-content-wrapper'>
                            <label id='text' className="registration-form-content-label">
                                Имя
                            </label>
                            <input type="text" name="password" id='password' className="registration-form-content-input" />
                        </div>
                        <div className='registration-form-content-wrapper'>
                            <label id='text' className="registration-form-content-label">
                                Фамилия
                            </label>
                            <input type="text" name="password" id='password' className="registration-form-content-input" />
                        </div>
                        <div className='registration-form-content-wrapper'>
                            <label id='email' className="registration-form-content-label">
                                Эл.почта
                            </label>
                            <input type="email" name="email" id='email' className="registration-form-content-input" />
                        </div>
                        <div className='registration-form-content-wrapper'>
                            <label id='password' className="registration-form-content-label">
                                Пароль
                            </label>
                            <input type="password" name="password" id='password' className="registration-form-content-input" />
                        </div>
                        <Link to="/Login/Login">
                            <button className="registration-form-content-btn">Сохранить</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
