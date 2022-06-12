import React from 'react'
import './info.css'
export default function BlockInfo() {
    return (
        <div className='block'>
            <div className="block-one">
                <div className="green-first"></div>
                <div className="green-second">
                    <span className="title-text">
                        Защита от рисков потери документов
                    </span>
                    <p className='info-text'>
                        Это руководство дает обзор информационных рисков в контексте менеджмента документами. Он предоставляет моментальный снимок информации и записывает риски и предлагает стратегии снижения потенциальных рисков.
                    </p>
                </div>
            </div>
            <div className="block-two">
                <div className="blue-first"></div>
                <div className="blue-second">
                    <span className="title-text">
                        Экономит ваши деньги и время
                    </span>
                    <p className='info-text'>
                        Если Вы как собственник или директор хотите, чтобы Ваше предприятие было конкурентоспособным, или Вы как сотрудник хотите нарастить свою компетенцию и больше зарабатывать, то Вам нужно экономить свое время и деньги с помощью электронного  документооборота уже сейчас!
                    </p>
                </div>

            </div>
            <div className="block-three">
                <div className="grey-first"></div>
                <div className="grey-second">
                    <span className="title-text">
                        Инструкция для пользователей
                    </span>
                    <p className='info-text'>
                        Для эффективного использования папок (как личных, так и общих) нужно придерживаться следующих рекомендаций:
                    </p>
                </div>
            </div>
        </div>
    )
}
