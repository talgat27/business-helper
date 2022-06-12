import React from "react";
import './Footer.css'
import { Button } from "antd";
import Maps from "../../components/images/maps.png"
import Email from "../../components/images/email.svg"
import Location from "../../components/images/location.svg"
import Phone from "../../components/images/phone.svg"
import Telegram from "../../components/images/telega.svg"
import WhatsApp from "../../components/images/whatsapp.svg"
import Instagram from "../../components/images/instagram.svg"

export default function Footer() {
  return (
      <footer>
           <div className="footer">
            <div className="brown_block">
                <div className="cart-block">
                    <div className="fill-block">
                        <h2 className="feedback">Обратная связь</h2>
                        <input placeholder="ФИО" className="" />
                        <input placeholder="E-mail" type="text" />
                        <input placeholder="+996 (___)  __ __ __" type="email" name="" id="" />
                        {/* <input placeholder="E-mail" type="text" name="" id="" /> */}
                    </div>
                    <div className="submit-block">
                        <span>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c Политикой конфиденциальности</span>
                        <button className="send">Отправить</button>
                    </div>
                </div>
            </div>
             <div className="maps_block">
                 <img className="maps" src={Maps} alt="" />
            </div>

          </div>
          <div className="green_block">
              <div className="left_content">
                <p><img src={Email} alt="" /> Businesshelper@gmail.com</p>
                <p><img src={Location} alt="" />Адрес: Исанова 105/3</p>
                <p><img src={Phone} alt="" />+996 (999) 99 99 99</p>
              </div>
              <div className="center_text">
                  <p>Название: ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "_______________ ______ ______" ИНН: 000000000000000 Юридический адрес компании: г. Бишкек, ул.Токтогула  д. 60, корп./ст. 1, кв./оф. 87Н</p>
              </div>
              <div className="right_content">
                <img src={Telegram} alt="" />
                <img src={WhatsApp} alt="" />
                <img src={Instagram} alt="" />
              </div>
          </div>
      </footer>
  );
}


