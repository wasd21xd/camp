import './header.css'
import deti from '../../../imgown/img/header/IMG_60181.png'

function Header () {
  return (
      <header className="header">
          <section className="header__container">
              <div className="left__card">
                  <img className="img__left" src={deti} alt="Header"/>
                  <button onClick={() => window.location.href ="https://wa.me/79062694845?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB%D0%B8%20%D0%B1%D1%8B%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%20%D0%B2%D0%B0%D1%88%D0%B8%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B%20%F0%9F%92%BB"}
                          className="btn__header"  type="submit">Забронировать</button>
                  <p className="text__header">прямо сейчас и получить скидку</p>
              </div>
              <div className="right__card">
              <h1 className="title__header">КАНИКУЛЫ В ГОРОДЕ С <span className="span__header">UCHI.RU</span></h1>
                  <h2 className="title__header1">ПОЛНЫЙ ДЕНЬ:</h2>
                  <ul className="ul__header">
                      <li><span className="custom-bullet"></span><span className="list-text">ПРОГРАММИРОВАНИЕ</span>
                      </li>
                      <li><span className="custom-bullet"></span><span
                          className="list-text">ТВОРЧЕСКИЕ МАСТЕР-КЛАССЫ</span></li>
                      <li><span className="custom-bullet"></span><span className="list-text">ПРОГУЛКИ НА СВЕЖЕМ ВОЗДУХЕ и другое!</span>
                      </li>
                  </ul>
              </div>
          </section>
      </header>
  );
}


export default Header;
