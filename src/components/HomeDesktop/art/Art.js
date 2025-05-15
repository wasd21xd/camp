import './art.css'
import imgart from '../../../imgown/img/art/image18.png'



function Art() {
    return (
        <section className="art__container">
            <div className="left__art">
                <img className="img__art" src={imgart} alt=""/>
            </div>
            <div className="right__art">
                <h2 className="logo__master">Арт-мастерская</h2>
                <p className="text__master">Даем волю творчеству!</p>
                <div className="block__text__master">
                    <ul className="ul__master">
                        <li className="item__li">нарисуем стенгазету</li>
                        <li className="item__li">создадим развертки персонажей из игр</li>
                        <li className="item__li">сделаем тематический лэп-бук</li>
                        <li className="item__li">слепим амулет из соленого теста</li>
                        <li className="item__li">проведем различные химические опыты</li>
                        <li className="item__li">и придумаем что-нибудь еще!</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Art;
