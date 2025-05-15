import './headerMobile.css';

function HeaderMobile () {
    return (
        <section className="headerMobile__container">
            <div className="headerMobile__content">
                <h1 className='headerMobile__title'>КАНИКУЛЫ В ГОРОДЕ <span className='span__headerMobile'>UCHI.RU</span></h1>
                <img src="/src/imgMobile/headerMobile/IMG_60182.png" alt=""/>

                <ul className="ul__headerMobile">
                    <li><span className="custom-bullet-Mobile"></span><span className="list-text-Mobile">ПРОГРАММИРОВАНИЕ</span>
                    </li>
                    <li><span className="custom-bullet-Mobile"></span><span
                        className="list-text-Mobile">ТВОРЧЕСКИЕ МАСТЕР-КЛАССЫ</span></li>
                    <li><span className="custom-bullet-Mobile"></span><span className="list-text-Mobile">ПРОГУЛКИ НА СВЕЖЕМ ВОЗДУХЕ и другое!</span>
                    </li>
                </ul>
                <button className="btn__header__mobile" type="submit">Забронировать</button>
            </div>
        </section>
    )
}

export default HeaderMobile;
