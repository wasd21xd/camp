import './headerMobile.css';
import img101 from '../../../imgown/imgMobile/headerMobile/IMG_60182.png'

function HeaderMobile () {
    return (
        <section className="headerMobile__container">
            <div className="headerMobile__content">
                <h1 className='headerMobile__title'>КАНИКУЛЫ В ГОРОДЕ C <span className='span__headerMobile'>UCHI.RU</span></h1>
                <img className='img__header__mobile' src={img101} alt=""/>

                <h2 className="title__header__mobile">ПОЛНЫЙ ДЕНЬ:</h2>
                <ul className="ul__header__mobile">
                    <li><span className="custom-bullet__mobile"></span><span className="list-text__mobile">ПРОГРАММИРОВАНИЕ</span>
                    </li>
                    <li><span className="custom-bullet__mobile"></span><span
                        className="list-text__mobile">ТВОРЧЕСКИЕ МАСТЕР-КЛАССЫ</span></li>
                    <li><span className="custom-bullet__mobile"></span><span className="list-text__mobile">ПРОГУЛКИ НА СВЕЖЕМ ВОЗДУХЕ и другое!</span>
                    </li>
                </ul>
                <button className="btn__header__mobile" type="submit">Забронировать</button>
            </div>
        </section>
    )
}

export default HeaderMobile;
