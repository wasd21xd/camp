import './header.css'
import deti from '../../../imgown/img/header/IMG_60181.png'

function Header () {
  return (
      <header className="header">
          <section className="header__container">
              <div className="left__card">
                  <img className="img__left" src={deti} alt="Header"/>
                  <button className="btn__header" type="submit">Забронировать</button>
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
