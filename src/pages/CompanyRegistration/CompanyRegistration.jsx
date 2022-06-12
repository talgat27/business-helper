import React from 'react'
import './companyreg.css'
import logo from '../../images/logo.png'
import background from '../../images/background.png'
export default function CompanyRegistration() {
    return (
        <div className='blockregistration'>
            <div className="header">
                <img className='logo' src={logo} alt="" />
            </div>
            <div className="main-block">
                <img src={background} alt="" />
                <div className="registration-block">
                    <div className="text-block">
                        <span className='main-text'>Регистрация</span>
                    </div>
                    <div className="form-block">
                        <div className="label-block">
                            <label id='company'>
                                Компания
                            </label>
                            <label id='name'>
                                Имя
                            </label>
                            <label id='surname'>
                                Фамилия
                            </label>
                            <label id='email'>
                                Эл.почта
                            </label>
                            <label id='password'>
                                Пароль
                            </label>
                        </div>
                        <div className="input-block">
                            <input type="text" id='company' />
                            <input type="text" id='name' />
                            <input type="text" id='surname' />
                            <input type="email" name="email" id='email' />
                            <input type="password" name="password" id='password' />
                        </div>
                    </div>
                    <div className="button-block">
                        <button>Сохранить</button>
                    </div>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}
