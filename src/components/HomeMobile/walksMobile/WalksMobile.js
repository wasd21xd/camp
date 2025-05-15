import './walksMobile.css'

import img6 from '../../../imgown/img/walks/IMG_61322.png';
import img7 from '../../../imgown/img/walks/Group145.png';
import img8 from '../../../imgown/img/walks/telegram-cloud-photo-size-2-5204421428768800912-y3.png';

function WalksMobile () {
    return (
        <section className='walks__mobile__container'>
            <h2 className='logo__walks__mobile'>Прогулки</h2>
            <p className="text__walks__mobile">
                Гуляем на детской площадке, в Опочиниском и Шкиперском садах
            </p>
            <div className="block__walks__mobile">под присмотром вожатых</div>
            <p className="text__walks__mobile">
                Играем в игры на сплочение, занимаемся спортом и просто дышим свежим воздухом!
            </p>
            <div className="right__walks__mobile">
                <div>
                    <img
                        className="img__walks1__mobile"
                        src={img7}
                        alt="Прогулка на природе"
                        style={{ objectFit: 'cover' }} // исправлено на объект стилей
                    />

                </div>
                <img className='map__walks__mobile' src={img6} alt=""/>
            </div>
        </section>
    )
}


export default WalksMobile;
