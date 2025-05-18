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
                <button onClick={() => window.location.href ="https://wa.me/79062694845?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB%D0%B8%20%D0%B1%D1%8B%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%20%D0%B2%D0%B0%D1%88%D0%B8%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B%20%F0%9F%92%BB"}
                    className="btn__header__mobile" type="submit">Забронировать</button>
            </div>
        </section>
    )
}

export default HeaderMobile;
