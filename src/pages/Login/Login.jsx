import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
    return (
        <div className='login-wrapper'>
            <div className="login-container">
                <div className='login-form'>
                    <div className="login-form-title">
                        <p className="login-form-title-p">Вход</p>
                    </div>
                    <div className='login-form-content'>
                        <div className='login-form-content-wrapper'>
                            <label id='email' className="login-form-content-label">
                                Эл.почта
                            </label>
                            <input type="email" name="email" id='email' className="login-form-content-input" />
                        </div>
                        <div className='login-form-content-wrapper'>
                            <label id='password' className="login-form-content-label">
                                Пароль
                            </label>
                            <input type="password" name="password" id='password' className="login-form-content-input" />
                        </div>
                        <Link to="/WelcomePage/WelcomePage">
                            <button className="login-form-content-btn">Войти</button>
                        </Link>
                    </div>
                    <div className='login-form-bottom'>
                        <a href="#" className='login-form-bottom-a'>Забыли пароль?</a>
                        <Link to="/Registration/Registration">
                            <a href="#" className='login-form-bottom-a'>Зарегистрировать компанию</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
