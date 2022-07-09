import React from "react";
import './Footer.css'
import EmailIcon from "../../images/email-icon.svg"
import LocationIcon from "../../images/location-icon.svg"
import PhoneIcon from "../../images/phone-icon.svg"
import TelegramIcon from "../../images/telegram-icon.svg"
import WhatsAppIcon from "../../images/whatsapp-icon.svg"
import InstagramIcon from "../../images/instagram-icon.svg"

export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="footer-contact-card-wrapper">
                        <div className="footer-contact-card-container">
                            <div className="footer-contact-card-top">
                                <h2 className="ft-cnt-card-top-title">Обратная связь</h2>
                                <input placeholder="ФИО" type="email" className="ft-cnt-card-top-input" />
                                <input placeholder="E-mail" type="email" className="ft-cnt-card-top-input" />
                                <input placeholder="+996 (___)  __ __ __" type="tel" className="ft-cnt-card-top-input" />
                            </div>
                            <div className="footer-contact-card-bottom">
                                <p className="ft-cnt-card-bottom-p">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c Политикой конфиденциальности</p>
                                <button className="ft-cnt-card-bottom-btn">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-top-right">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.47254479363204!2d74.59213349844698!3d42.87736716868029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8201bd00001%3A0xa9ccb5221e5451c5!2z0JrRg9GA0YHRiyDQv9GA0L7Qs9GA0LDQvNC80LjRgNC-0LLQsNC90LjRjyAiQ29kaWZ5IExhYiI!5e0!3m2!1sru!2skg!4v1655723425070!5m2!1sru!2skg" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade" loading="lazy" className="footer-map" />
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <div className="footer-bottom-left">
                        <div className="ft-btm-wrapper1">
                            <img src={EmailIcon} alt="Email Icon" className="footer-bottom-left-img" />
                            <p className="footer-bottom-left-p">Businesshelper@gmail.com</p>
                        </div>
                        <div className="ft-btm-wrapper2">
                            <img src={LocationIcon} alt="Location Icon" className="footer-bottom-left-img" />
                            <p className="footer-bottom-left-p">Адрес: Исанова 105/3</p>
                        </div>
                        <div className="ft-btm-wrapper3">
                            <img src={PhoneIcon} alt="Phone Icon" className="footer-bottom-left-img" />
                            <p className="footer-bottom-left-p">+996 (999) 99 99 99</p>
                        </div>
                    </div>
                    <div className="footer-bottom-center">
                        <p className="footer-bottom-center-p">Название: ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "_______________ ______ ______" ИНН: 000000000000000 Юридический адрес компании: г. Бишкек, ул.Токтогула  д. 60, корп./ст. 1, кв./оф. 87Н</p>
                    </div>
                    <div className="footer-bottom-right">
                        <a href="#"><img src={TelegramIcon} alt="Telegram Icon" /></a>
                        <a href="#"><img src={WhatsAppIcon} alt="WhatsApp Icon" /></a>
                        <a href="#"><img src={InstagramIcon} alt="Instagram Icon" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


