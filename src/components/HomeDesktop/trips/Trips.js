import "./trips.css"
import img9 from '../../../imgown/img/trips/image18.png'
import img10 from '../../../imgown/img/trips/2.png'
import img11 from '../../../imgown/img/trips/3.png'
import img12 from '../../../imgown/img/trips/4.png'


function Trips() {
    return (
        <section className="trips">
            <div className="__container">
                <div className="trips__container">
                    <div className="trips__left">
                        <div className="trips__main-img">
                            <img src={img9} alt="основное фото выезда"/>
                        </div>
                        <div className="trips__grid">
                            <img src={img10} alt="квест"/>
                            <img src={img11} alt="батут"/>
                            <img src={img12} alt="VR"/>
                        </div>
                    </div>
                    <div className="trips__right">
                        <h2 className="trips__title">Выезды</h2>
                        <p className="trips__text">Раз в неделю организовываем “выезд”</p>
                        <div className="trips__highlight">
                            Батутный парк / Научный музей / театр / кино / различные мастер классы
                        </div>
                        <p className="trips__text">Передвигаться будем пешком или на общественном транспорте</p>
                        <p className="trips__text">За проезд платить не нужно, все включено в стоимость.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Trips;
