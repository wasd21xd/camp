import './artMobile.css'
import imgart from '../../../imgown/img/art/image18.png'

function ArtMobile () {
    return(
        <section className='master__mobile__container'>
            <h2 className='logo__master__mobile'>Арт-мастерская</h2>
            <p className='text__master__mobile'>Даем волю творчеству!</p>
            <div className='flex__master__mobile'>
                <div className='left__master__mobile'>
                    <img className='img__mobile__master' src={imgart} alt=""/>
                </div>
                <div className="block__text__master__mobile">
                    <p className="name__block__mobile">Изучим, как:</p>
                    <ul className="ul__master__mobile">
                        <li className="item__li__mobile">нарисуем стенгазету</li>
                        <li className="item__li__mobile">создадим развертки персонажей из игр</li>
                        <li className="item__li__mobile">сделаем тематический лэп-бук</li>
                        <li className="item__li__mobile">слепим амулет из соленого теста</li>
                        <li className="item__li__mobile">проведем различные химические опыты</li>
                        <li className="item__li__mobile">и придумаем что-нибудь еще!</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}


export default ArtMobile;
