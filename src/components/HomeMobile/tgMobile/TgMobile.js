import './tgMobile.css'
import imgtg1 from "../../../imgown/img/tg/image20.svg";
import imgtg2 from "../../../imgown/img/tg/Group145.png";


function TgMobile () {
    return(
        <section className="tg__container__mobile">
                <h2 className="logo__tg__mobile">Ваш контроль</h2>
                <p className="text__tg__mobile">Нам важно, чтобы <span className="span__tg__mobile">вы были спокойны за своего ребенка, </span>
                     поэтому: </p>
            <p className="text__tg__mobile">мы создали телеграмм-канал,
                который ведем в течение дня:</p>
            <img className="circlee__mobile" src={imgtg2} alt="tg"/>
            <button className="btn__tg__mobile">ПОДПИСАТЬСЯ</button>

                <p className="text__tg__mobile">Сюда снимаем кружочки
                    с нашими юными программистами </p>

                <p className="text__tg__mobile"> А также выкладываем фото и видео
                    с прогулок, с уроков, с обеда, с игр и т.д.
                </p>


        </section>
    )
}


export default TgMobile;
