import './walks.css';
import img6 from '../../../imgown/img/walks/IMG_61322.png';
import img7 from '../../../imgown/img/walks/Group145.png';
import img8 from '../../../imgown/img/walks/telegram-cloud-photo-size-2-5204421428768800912-y3.png';

function Walks() {
    return (
        <section className="walks__container">
            <div className="left__walks">
                <h2 className="logo__walks">Прогулки</h2>
                <p className="text__walks">
                    Гуляем на детской площадке, в Опочиниском и Шкиперском садах
                </p>
                <div className="block__walks">под присмотром вожатых</div>
                <p className="text__walks">
                    Играем в игры на сплочение, занимаемся спортом и просто дышим свежим воздухом!
                </p>
                <img
                    className="img__walks"
                    src={img6}
                    alt="Прогулка на детской площадке"
                />
            </div>
            <div className="right__walks">
                <div>
                    <img
                        className="img__walks1"
                        src={img7}
                        alt="Прогулка на природе"
                        style={{ objectFit: 'cover' }} // исправлено на объект стилей
                    />
                    <img
                        className="img__walks3"
                        src={img8}
                        alt="Детали прогулки"
                    />
                </div>
            </div>
        </section>
    );
}

export default Walks;
